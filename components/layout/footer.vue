<template>
  <footer>

    <div class="footer-contact">
      <div>

        <p class="footer-contact-title">

          {{ Localization.language === 'zh-cn' ? `V-Control: 一个基于.NET MAUI 的开箱即用的业务组件库` : `V-Control: An out-of-the-box
          .NET
          MAUI component library` }}
        </p>

      </div>
      <div>
        <a href="https://github.com/jevonsflash/V-Control">
          <el-button
            class="footer-contact-btn"
            type="primary"
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
            <span> </span>
            <span>31</span>
          </el-button></a>

      </div>
    </div>

    <div class="footer">
      <p> <img
          height="14"
          src="/footer/china.svg"
          alt="China"
        /> China, Guangzhou</p>
      <p>© 2025 V-Control Powered by Vue.js & Nuxt3</p>
      <p>粤ICP备19056721号</p>
    </div>
    <el-icon></el-icon>
  </footer>
</template>

<script
  setup
  lang="ts"
>
import { useLocalizationStore } from "../../store";
const Localization = useLocalizationStore();


</script>

<style>
.footer-contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 160px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f8f8f8;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23eae6f2' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.footer-contact-title {
  margin: 0;
  font-size: 1.7rem;
  font-weight: bold;
}

.footer-contact-btn {
  float: right;
  box-shadow: var(--el-box-shadow-dark);
}

.footer {
  text-align: center;
  margin: 50px auto;
}

.footer>p {
  font-size: 0.85rem;
}

@media screen and (max-width: 767px) {
  .footer-contact-title {
    margin-left: 0;
    margin-top: 35px;
  }

  .footer-contact-btn {
    margin-bottom: 35px;
    margin-right: 0;
  }

  .footer-contact {
    flex-direction: column;
  }
}

@media screen and (min-width: 768px) {
  .footer-contact-title {
    margin-left: 100px;
    margin-top: 0;
  }

  .footer-contact-btn {
    margin-bottom: 0;
    margin-right: 100px;
  }

  .footer-contact {
    flex-direction: row;
  }
}
</style>
