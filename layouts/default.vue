<template>

  <div>
    <el-container class="affix-container">

      <el-affix target=".affix-container">
        <el-header>
          <LayoutHeader />
        </el-header>
      </el-affix>

      <el-main>
        <slot />

      </el-main>
      <el-footer>
        <LayoutFooter />
      </el-footer>
    </el-container>
    <el-backtop
      :right="100"
      :bottom="100"
    />
  </div>
</template>
<script
  setup
  lang="ts"
>
import { useHead } from "@vueuse/head";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | V-Control` : "V-Control";
  },
});
</script>
<style>
.el-menu {
  background-color: transparent;
}

.el-header {
  background-color: rgba(245, 245, 247, 0.72);
  /* 半透明背景 */
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
</style>