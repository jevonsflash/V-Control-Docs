<template>
  <div class="container">

    <Head>
      <Title>Docs</Title>
    </Head>


    <el-container>
      <el-aside width="250px">
        <div class="content">



          <template
            v-for="documentGroup in documentGroups"
            :key="documentGroup.title"
          >


            <p>{{ documentGroup.displayTitle ? documentGroup.displayTitle : documentGroup.title }}</p>

            <ul>
              <template
                v-for="document in documentGroup.docs"
                :key="document.title"
              >
                <li
                  :span="24"
                  v-if="document.isHide === false"
                  class="link"
                >


                  <a
                    :href="`/documents/${document.title}`"
                    class="document-title"
                  >{{ document.displayTitle ? document.displayTitle : document.title }}</a>
                  <el-tag
                    effect="dark"
                    size="small"
                    class="document-tags"
                    v-for="(tag, index) in document.tags"
                    :key="index"
                    :type="'primary'"
                  >
                    {{ tag }}
                  </el-tag>

                </li>

              </template>
            </ul>



          </template>



        </div>
      </el-aside>
      <el-main>

        <section>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>Docs</el-breadcrumb-item>
          </el-breadcrumb>
        </section>
        <section>

          <div class="content">
            <label>请在左侧点击一个条目浏览文档</label>
          </div>


        </section>

      </el-main>
    </el-container>
  </div>
</template>

<script
  lang='ts'
  setup
>
import { ref, onMounted } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import Enumerable from "linq";
import { config, IDocumentConfig, IDocumentGroupConfig } from "./detail-config";
import { useAsyncData } from "nuxt/app";


const router = useRouter();
const documentGroups = ref([] as IDocumentGroupConfig[]);


onMounted(() => {
  var filterKey: string | undefined = undefined;


  documentGroups.value =
    filterKey !== undefined
      ? Enumerable.from(config.result)
        .where((c) => Enumerable.from(c.tags).contains(filterKey as string))
        .toArray()
      : config.result;

});



function navigateBack() {
  router.back();
}
</script>

<style scoped>
.hero-card {
  height: 280px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #ffffff;
}

.content ul {
  list-style-type: none;
}


.back-layout {
  text-align: center;
  margin-bottom: 20px;
}

.source-code-btn-layout {
  text-align: right;
}

.back-btn,
.source-code-btn {
  margin: 20px auto;
  box-shadow: var(--el-box-shadow-dark);
}

.link {
  display: block;
  padding: 10px 16px;
  line-height: 1.5;
  font-size: .9rem;
  border-radius: 8px;
}
</style>
