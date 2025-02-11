<template>
  <div class="container">

    <Head>
      <Title>Home</Title>
    </Head>
    <section>
      <el-row>
        <el-col
          :span="12"
          class="hero"
        >
          <template v-if="Localization.language === 'zh-cn'">
            <p class="hero-text">使用<span class="luminous">VControl</span>快速构建你的App应用</p>


          </template>
          <template v-else>
            <p class="hero-text">Build Faster with <span class="luminous">VControl</span> – A Feature-Rich Component
              Library for Your Apps!</p>
          </template>

          <p>
            <el-button
              size="large"
              type="primary"
              round
              @click="goUrl"
            >


              <span>{{ Localization.language === 'zh-cn' ? `快速开始` : `Start` }} </span>

            </el-button>
            <el-button
              size="large"
              type="default"
              round
              @click="goGithub"
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
              <span> </span>
              <span>31</span>
            </el-button>

          </p>


        </el-col>
        <el-col :span="12">
          <article class="wrapper wrapper--vertical">
            <div class="marquee marquee--vertical">
              <div class="marquee__group">
                <template v-for="number in imageNumbers">
                  <img
                    :src="`/assets/image-${number}.png`"
                    :alt="`image-${number}`"
                  />
                </template>
              </div>

              <div
                aria-hidden="true"
                class="marquee__group"
              >
                <template v-for="number in imageNumbers">
                  <img
                    :src="`/assets/image-${number}.png`"
                    :alt="`image-${number}`"
                  />
                </template>
              </div>
            </div>
            <div class="marquee marquee--reverse marquee--vertical">
              <div class="marquee__group">
                <template v-for="number in imageNumbers">
                  <img
                    :src="`/assets/image-${number}.png`"
                    :alt="`image-${number}`"
                  />
                </template>
              </div>

              <div
                aria-hidden="true"
                class="marquee__group"
              >
                <template v-for="number in imageNumbers">
                  <img
                    :src="`/assets/image-${number}.png`"
                    :alt="`image-${number}`"
                  />
                </template>
              </div>
            </div>

          </article>
        </el-col>
      </el-row>
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
import { useLocalizationStore } from "../store";

const router = useRouter();
const searchText = ref("");
const Localization = useLocalizationStore();
const imageNumbers = ref<Array<Number>>(Array.from({ length: 14 }, (_, i) => i + 1))
function goUrl() {
  router.push({ path: `/documents/starter` });
}

function goGithub() {
  window.open("https://github.com/jevonsflash/V-Control");
}

</script>
<style scoped>
.hero {
  margin-top: 10%;
}

.hero-text {
  font-size: 2.75rem;
  font-weight: bolder;
}

.hero-text .luminous {
  background: linear-gradient(128.87deg, var(--el-color-primary) 14.05%, #d600aa 89.3%);
  animation: glow-title 2s ease-in-out infinite alternate;
  letter-spacing: 5px;
  padding: 15px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}




.marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  mask-image: linear-gradient(var(--mask-direction, to right),
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0));
}

.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  animation: scroll-x var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .marquee__group {
    animation-play-state: paused;
  }
}

.marquee--vertical {
  --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
  flex-direction: column;
}

.marquee--vertical .marquee__group {
  animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
  animation-direction: reverse;
  animation-delay: -13s;
}

@keyframes scroll-x {
  from {
    transform: translateX(var(--scroll-start));
  }

  to {
    transform: translateX(var(--scroll-end));
  }
}

@keyframes scroll-y {
  from {
    transform: translateY(var(--scroll-start));
  }

  to {
    transform: translateY(var(--scroll-end));
  }
}


@keyframes glow-title {
  from {
    text-shadow: 0 0 10px var(--el-color-primary), 0 0 20px var(--el-color-primary);
  }

  to {
    text-shadow: 0 0 20px var(--el-color-primary);
  }
}


/* Element styles */
.marquee img {
  display: grid;
  place-items: center;
  width: var(--size);
  padding: calc(var(--size) / 40);
}

.marquee--vertical img {
  width: calc(var(--size) / 1.5);
  padding: calc(var(--size) / 24);
}

/* Parent wrapper */
.wrapper {
  --size: clamp(10rem, 1rem + 40vmin, 30rem);
  --gap: calc(var(--size) / 14);
  --duration: 60s;
  --scroll-start: 0;
  --scroll-end: calc(-100% - var(--gap));
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  margin: auto;
  max-width: 100vw;
}

.wrapper--vertical {
  flex-direction: row;
  height: 100vh;
}
</style>