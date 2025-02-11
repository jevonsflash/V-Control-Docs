<template>
  <header>
    <el-config-provider :locale="locale">
      <div class="container">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :router="true"
          :ellipsis="false"
          menu-trigger="click"
          @select="handleSelect"
        >
          <el-menu-item route="/">
            <span style="font-size: 28px;">V-Control</span>
          </el-menu-item>
          <el-menu-item
            index="1"
            route="/"
          >{{ Localization.language === 'zh-cn' ? `首页` : `Home` }}</el-menu-item>
          <el-menu-item
            index="2"
            route="/documents/starter"
          >{{ Localization.language === 'zh-cn' ? `文档` : `Docs` }}</el-menu-item>

          <el-dropdown @command="handleCommand">
            <span class="menu-button">

              <el-icon>
                <svg
                  data-v-f414ea64=""
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                >
                  <path
                    fill="currentColor"
                    d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
                  ></path>
                </svg>
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="en">English</el-dropdown-item>
                <el-dropdown-item command="zh-cn">中文</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <a
            class="menu-button"
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

        </el-menu>
      </div>
    </el-config-provider>
  </header>
</template>

<script
  lang="ts"
  setup
>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getIsNull, successMessage } from "../../utils/common";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useLocalizationStore } from "../../store";
import { setLang } from '../../utils/common';

const activeIndex = ref("1");
const route = useRoute();
const router = useRouter();
const isEllipsis = ref(false);
const Localization = useLocalizationStore();

// 监听窗口大小变化并更新 isEllipsis 的值
function handleResize() {
  isEllipsis.value = window.innerWidth < 768;
}
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};


const locale = computed(() => (Localization.language === 'zh-cn' ? zhCn : en))


function handleCommand(lang: string) {
  Localization.SET_LANG(lang);
  setLang(lang);
}


function setActiveIndexBasedOnRoute(path: string) {
  if (path === "/") {
    activeIndex.value = "1";
  } else if (path.includes("/documents")) {
    activeIndex.value = "2";
  }
}
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
onMounted(() => {
  setActiveIndexBasedOnRoute(route.path);
  router.beforeEach((to) => {
    setActiveIndexBasedOnRoute(to.path);
  });
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

.menu-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  line-height: var(--el-menu-item-height);
  font-size: 21px;
  margin: 0 10px;
}
</style>
