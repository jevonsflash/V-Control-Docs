<template>
  <header>
    <div class="container">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :router="true"
        :ellipsis="false"
        menu-trigger="click"
        @select="handleSelect"
      >
        <el-menu-item
          index="0"
          route="/"
        >
          <span style="font-size: 28px;">V-Control</span>
        </el-menu-item>
        <el-menu-item
          index="1"
          route="/"
        >首页</el-menu-item>
        <el-menu-item
          index="2"
          route="/documents/starter"
        >Docs</el-menu-item>
        <el-menu-item>
          <a
            href="https://github.com/jevonsflash/V-Control"
            target="_blank"
          >

            <el-icon>
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                width="32"
                data-view-component="true"
                class="octicon octicon-mark-github v-align-middle color-fg-default"
              >
                <path
                  d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"
                >
                </path>
              </svg>
            </el-icon>

          </a>
        </el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script
  lang="ts"
  setup
>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserModuleStore } from "../../store";
import { getIsNull, successMessage } from "../../utils/common";

const activeIndex = ref("1");
const route = useRoute();
const router = useRouter();
const isEllipsis = ref(false);
const UserModule = useUserModuleStore();

// 监听窗口大小变化并更新 isEllipsis 的值
function handleResize() {
  isEllipsis.value = window.innerWidth < 768;
}
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

function setActiveIndexBasedOnRoute() {
  if (route.path.includes("/documents")) {
    activeIndex.value = "2";
  } else if (route.path.includes("/skills-and-tools")) {
    activeIndex.value = "3";
  } else if (route.path.includes("/contact")) {
    activeIndex.value = "5";
  }
}
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
onMounted(() => {
  setActiveIndexBasedOnRoute();
  window.addEventListener("resize", handleResize);
  handleResize();
});

function goLogin() {
  router.push(`/login`)
}
</script>
<style>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
}

.el-menu-item a {
  color: initial;
  width: 100%;
}

.user-state {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: var(--el-menu-text-color);
  cursor: pointer;
}

.user-state-popup {
  margin: 0 25px;
}

.user-avatar {
  margin: 10px
}
</style>
