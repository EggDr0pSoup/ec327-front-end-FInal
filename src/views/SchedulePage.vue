<template>
  <div v-loading="pageLoading" class="h-full">
    <el-alert
      title="Welcome to Course Scheduler. Please search the course first. Select the course you want to add to your pre-enrolled courses. Then you can see the weekly preview of your pre-enrolled courses. When the course is available, you will receive a notification and email."
      type="info"
    />
    <el-divider content-position="left"></el-divider>
    <h1>Search The Course</h1>
    <el-divider content-position="right"></el-divider>

    <div class="flex flex-col">
      <table class="min-w-full">
        <thead>
          <tr class="text-center align-bottom">
            <th>Course name</th>
            <th>Course number</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center align-bottom">
            <td>
              <el-input v-model="name" placeholder="Type here" />
            </td>
            <td>
              <el-input v-model="code" placeholder="Type here" />
            </td>
            <td>
              <el-input v-model="instructor" placeholder="Type here" />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-end mt-4">
        <el-button @click="searchCourses" round>Search</el-button>
      </div>
    </div>

    <div v-if="courseData" class="table-container">
      <el-table
        :data="courseData.items"
        style="width: 100%"
        :row-key="(row) => row.id"
      >
        <el-table-column prop="code" label="Class"></el-table-column>
        <el-table-column prop="section" label="Section"></el-table-column>
        <el-table-column prop="instructor" label="Instructor"></el-table-column>
        <el-table-column prop="location" label="Location"></el-table-column>
        <el-table-column prop="available" label="Open Seat"></el-table-column>
        <el-table-column prop="credits" label="Credits"></el-table-column>
        <el-table-column prop="schedule" label="Time"></el-table-column>
        <el-table-column
          v-if="userStore.isLogin"
          prop="notification"
          label="Vacancy Alert"
        >
          <template #default="{ row }">
            <el-tooltip
              v-if="!myCourses.some((course) => course.id === row.id)"
              class="box-item"
              effect="dark"
              content="Add to my pre-enrolled courses"
              placement="top-start"
            >
              <el-button
                type="info"
                :icon="Check"
                @click="enrollCourse(row.id)"
                circle
              />
            </el-tooltip>
            <el-tooltip
              v-else
              class="box-item"
              effect="dark"
              content="Remove from my pre-enrolled courses"
              placement="top-start"
            >
              <el-button
                type="warning"
                :icon="Close"
                @click="dropCourse(row.id)"
                circle
              />
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-if="courseData && courseData.total"
        v-model:current-page="page"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="courseData.total"
        @current-change="searchCourses"
      />
    </div>

    <el-divider content-position="left"></el-divider>
    <el-alert
      title="The date of the calendar is not accurate, just for the weekly course preview"
      type="info"
    />
    <el-divider content-position="right"></el-divider>
    <div>
      <FullCalendar class="demo-app-calendar" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b>{{ arg.timeText }}</b>
          <div>{{ arg.event.title }}</div>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { Check, Close } from "@element-plus/icons-vue";
import {
  searchCoursesApi,
  getMyCoursesApi,
  enrollCourseApi,
  dropCourseApi,
} from "~/api/course.api";
import { apiType } from "~/api/converts";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/vue3";
import { createEventsFromCourses } from "~/utils/event";
import { useUserStore } from "@/stores/user.store";

const userStore = useUserStore();
const pageLoading = ref(false);
const page = ref(1);
const pageSize = ref(5);
const instructor = ref("");
const code = ref("");
const name = ref("");

const courseData = ref<apiType["Page_CourseRead_"]>();
const myCourses = ref<apiType["CourseRead"][]>([]);
const scheduledCourses = computed(() => {
  return myCourses.value.filter(
    (course) => course.schedule && course.schedule.includes(":")
  );
});

const calendarEvents = computed(() =>
  createEventsFromCourses(scheduledCourses.value)
);

const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "timeGridWeek",
  },
  initialView: "timeGridWeek",
  events: calendarEvents.value,
  slotMinTime: "08:00:00",
  slotMaxTime: "21:10:00",
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
});

const getMyCourses = async () => {
  try {
    pageLoading.value = true;
    myCourses.value = (await getMyCoursesApi()).data;
    calendarOptions.value.events = calendarEvents.value;
    const title = document.querySelector(".fc-toolbar-title");
    if (title) {
      setTimeout(() => {
        title.textContent = "My Pre-enrolled Courses Preview";
      }, 200);
    }
  } catch (error) {
    console.error(error);
  } finally {
    pageLoading.value = false;
  }
};

const searchCourses = async () => {
  try {
    pageLoading.value = true;
    courseData.value = (
      await searchCoursesApi(
        name.value,
        code.value,
        instructor.value,
        page.value,
        pageSize.value
      )
    ).data;
  } catch (error) {
    console.error(error);
  } finally {
    pageLoading.value = false;
  }
};

const enrollCourse = async (id: number) => {
  try {
    pageLoading.value = true;
    await enrollCourseApi(id);
    await getMyCourses();
  } catch (error) {
    console.error(error);
  } finally {
    pageLoading.value = false;
  }
};

const dropCourse = async (id: number) => {
  try {
    pageLoading.value = true;
    await dropCourseApi(id);
    await getMyCourses();
  } catch (error) {
    console.error(error);
  } finally {
    pageLoading.value = false;
  }
};

onMounted(() => {
  searchCourses();
  getMyCourses();
});
</script>

<style scoped>
table td {
  vertical-align: middle;
}
</style>
