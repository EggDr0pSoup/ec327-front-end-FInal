<template>
  <div>
    <div v-if="userStore.isLogin" align="left" class="ml-30px">
      <el-alert :title="`Hello, ${userStore.user.email}`" type="success" />
      <SchedulePage />
    </div>
    <div v-else>Please sign in first!</div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user.store";
import SchedulePage from "./SchedulePage.vue";
const userStore = useUserStore();
</script>
