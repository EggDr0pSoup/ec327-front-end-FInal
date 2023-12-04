<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="0">
      <!--<img class="h-full" src="element-plus-logo-small.svg" alt="Logo" /> -->
      Course Scheduler
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
    <el-menu-item index="2"> Still in development </el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
import { toggleDark } from "~/composables";
import { useUserStore } from "@/stores/user.store";
import { onMounted, ref, watch } from "vue";
import { apiType } from "~/api/converts";
import { getMyAvailableCoursesApi } from "~/api/course.api";
import { ElNotification } from "element-plus";
const userStore = useUserStore();
userStore.getCurrentUserInfo();
const myAvailableCourses = ref<apiType["CourseRead"][]>();
const interval = ref<number>();
const sentNotifications = ref<number[]>([]);

async function getMyAvailableCourses() {
  try {
    myAvailableCourses.value = (await getMyAvailableCoursesApi()).data;
  } catch (error) {
    console.error(error);
  }
}

function sendNotification() {
  if (myAvailableCourses.value) {
    for (const course of myAvailableCourses.value) {
      if (sentNotifications.value.includes(course.id)) continue;
      sentNotifications.value.push(course.id);
      ElNotification({
        title: "Course Available",
        message: `${course.name} is available now!`,
        type: "success",
      });
    }
  }
}

async function getAndSendNotification() {
  await getMyAvailableCourses();
  sendNotification();
}

onMounted(() => {
  ElNotification({
    title: "Welcome",
    message: "Welcome to Course Scheduler",
    type: "success",
  });
  console.log("Welcome to Course Scheduler");
});

watch(
  () => userStore.isLogin,
  async () => {
    // TODO: delete false in production
    if (userStore.isLogin && false) {
      interval.value = window.setInterval(getAndSendNotification, 1000);
    } else if (interval.value) {
      window.clearInterval(interval.value);
    }
  },
  { immediate: true }
);
</script>
