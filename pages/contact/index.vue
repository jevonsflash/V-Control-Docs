<template>
  <div class="container">

    <Head>
      <Title>关于我</Title>
    </Head>
    <section>
      <div class="work-experience-layout">
        <p class="work-experience-title">工作经历</p>

      </div>
    </section>
    <section>
      <div id="work-experience-timeline-affix-container">
        <el-affix
          :offset="affixOffset"
          position="bottom"
          ref="elTimelineAffix"
          target="#work-experience-timeline-affix-container"
          class="work-experience-timeline"
        >
          <el-anchor
            direction="horizontal"
            :offset="100"
          >
            <el-anchor-link
              v-for="(timeline, index) in timelines"
              :key="index"
              :href="`#${timeline.herf}`"
            >
              <span class="work-experience-timeline-title">
                {{ timeline.title }}</span>
            </el-anchor-link>
          </el-anchor>
        </el-affix>
        <div class="content">
          <ContentDoc
            :path="`/contact/base-webdev`"
            option
          >
            <template v-slot:not-found>
              <el-empty description="找不到内容">

              </el-empty>
            </template>
          </ContentDoc>
        </div>

      </div>
    </section>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useWindowSize } from "@vueuse/core";
const affixOffset = ref(0);
const elTimelineAffix = ref();
const timelines = [
  {
    title: "2024",
    year: "2024",
    herf: "_2024",
  },
  {
    title: "2023",
    year: "2023",
    herf: "_2023",
  },
  {
    title: "2022",
    year: "2022",
    herf: "_2022",
  },
  {
    title: "2021",
    year: "2021",
    herf: "_2021",
  },
  {
    title: "2020",
    year: "2020",
    herf: "_2020",
  },
  {
    title: "2019",
    year: "2019",
    herf: "_2019",
  },
  {
    title: "2018",
    year: "2018",
    herf: "_2018",
  },
  {
    title: "2017",
    year: "2017",
    herf: "_2017",
  },
  {
    title: "2016",
    year: "2016",
    herf: "_2016",
  },
  {
    title: "2015",
    year: "2015",
    herf: "_2015",
  },
];

onMounted(() => {
  updateViewportHeight();
  window.addEventListener("resize", updateViewportHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateViewportHeight);
});

function updateViewportHeight() {
  const { width, height } = useWindowSize();
  affixOffset.value = height.value - 60 - 44;
  elTimelineAffix.value.updateRoot();
}
</script>
<style scoped>
.hero-card {
  border-radius: 10px;
  margin-top: 20px;
  background-color: #ffffff;
}

.hero-contact {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 160px;
}

.work-experience-layout {
  text-align: center;
}

.work-experience-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.work-experience-timeline .el-anchor {
  background-color: rgba(245, 245, 247, 0.72);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  margin: 0 auto;
  border-radius: var(--el-border-radius-round);
}

.work-experience-timeline-title {
  font-size: 0.8rem;
  font-weight: bold;
}

@media screen and (max-width: 767px) {
  .work-experience-timeline {
    display: none;
  }
}
</style>
<style>
.work-experience-timeline .el-anchor__list {
  justify-content: center;
}
</style>
