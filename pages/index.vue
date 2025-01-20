<template>
  <div class="container">

    <Head>
      <Title>首页</Title>
    </Head>
    <section>

    </section>
    <section>

    </section>
  </div>
</template>
<script
  setup
  lang="ts"
>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'

const router = useRouter();
const searchText = ref("");

function goSearch() {
  if (searchText.value === "") {
    ElMessage({
      message: '请键入内容后搜索',
      type: 'error',
      plain: true,
    });
    return;
  }



  router.push({ path: `/search`, query: { q: searchText.value } });
}


</script>
<style scoped>
.search-btn {
  margin-top: 20px;
  box-shadow: var(--el-box-shadow-dark);
}




.hero-text {
  font-size: 2.75rem;
}
</style>