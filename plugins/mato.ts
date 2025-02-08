import { useLocalizationStore } from '../store'
import { getLang } from '../utils/common';



export default defineNuxtPlugin({
    name: 'my-plugin',
    enforce: 'post', // 或 'post'
    async setup(nuxtApp) {
        // 这相当于一个普通的功能性插件
    },
    hooks: {

        // 这里可以直接注册Nuxt应用运行时钩子
        'app:created'() {

            const Localization = useLocalizationStore();
            var lang = getLang();
            Localization.SET_LANG(lang ?? '');
        }


    }

})
