<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :router="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      v-for="(route, index) in menuRoutes"
      :key="index"
      :route="route"
      :index="(index + 1).toString()"
    >
      <div :class="route.icon"></div>
      <span>{{ route.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { routes, HIDDEN_ROUTES } from "~/router";
import { useUserStore } from "~/stores/user.store";

const userStore = useUserStore();
const hiddenRoutes = computed(() => [
  ...HIDDEN_ROUTES,
  userStore.isLogin ? "/login" : "/logout",
]);
const menuRoutes = computed(() =>
  routes.filter((route) => !hiddenRoutes.value.includes(route.path))
);

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
