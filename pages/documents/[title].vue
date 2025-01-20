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
            <el-breadcrumb-item>{{ currentConfig?.displayTitle ? currentConfig.displayTitle : currentPath
              }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div
            class="source-code-btn-layout"
            v-if="currentConfig !== undefined && currentConfig.githubLink"
          >
            <a
              :href="currentConfig.githubLink"
              target="_blank"
            >
              <el-button
                class="source-code-btn"
                type="info"
                round
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
                在GITHUB中查看</el-button></a>
          </div>
        </section>
        <section>

          <div class="content">
            <ContentDoc :path="`/documents/${currentPath?.toLowerCase()}`">
              <template v-slot:not-found>
                <el-empty description="找不到内容">

                </el-empty>
              </template>
            </ContentDoc>
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

const currentPath = ref<string | undefined>("");
const currentConfig = ref<IDocumentConfig>();
const router = useRouter();
const documentGroups = ref([] as IDocumentGroupConfig[]);


onMounted(() => {
  var filterKey: string | undefined = undefined;
  if (router.currentRoute.value.params["title"]) {
    currentPath.value = router.currentRoute.value.params["title"]?.toString();
  } else {
    currentPath.value = "";
  }

  currentConfig.value = Enumerable.from(config.result).selectMany(c => c.docs).firstOrDefault(
    (c) => c.title == currentPath.value
  );

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
