<template>
  <div class="container">

    <Head>
      <Title>首页</Title>
    </Head>
    <section>
      <el-row>
        <el-col :span="12">
          <!-- <span class="hero-text">使用<span style="color: var(--el-color-primary);">VControl</span>快速构建你的App应用</span>
          <span>VControl - 一个基于.NET MAUI 的开箱即用的业务组件库</span> -->
        </el-col>
        <el-col :span="12">
          <article class="wrapper wrapper--vertical">
            <div class="marquee marquee--vertical">
              <div class="marquee__group">
                <img src="/assets/image-1.png">
                <img src="/assets/image-2.png">
                <img src="/assets/image-3.png">
                <img src="/assets/image-4.png">
              </div>

              <div
                aria-hidden="true"
                class="marquee__group"
              >
                <img src="/assets/image-1.png">
                <img src="/assets/image-1.png">
                <img src="/assets/image-2.png">
                <img src="/assets/image-3.png">
                <img src="/assets/image-4.png">
              </div>
            </div>
            <div class="marquee marquee--reverse marquee--vertical">
              <div class="marquee__group">
                <img src="/assets/image-1.png">
                <img src="/assets/image-2.png">
                <img src="/assets/image-3.png">
                <img src="/assets/image-4.png">

              </div>

              <div
                aria-hidden="true"
                class="marquee__group"
              >
                <img src="/assets/image-1.png">
                <img src="/assets/image-2.png">
                <img src="/assets/image-3.png">
                <img src="/assets/image-4.png">

              </div>
            </div>

          </article>
        </el-col>
      </el-row>
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
.hero-text {
  font-size: 2.75rem;
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
  animation-delay: -3s;
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



/* Element styles */
.marquee img {
  display: grid;
  place-items: center;
  width: var(--size);
  aspect-ratio: 16/9;
  padding: calc(var(--size) / 10);
  border-radius: 0.5rem;
}

.marquee--vertical img {
  aspect-ratio: 1;
  width: calc(var(--size) / 1.5);
  padding: calc(var(--size) / 6);
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