import { useLocalizationStore } from '../store'
import { getLang } from '../utils/common';




export default defineNuxtPlugin(({ $pinia }) => {
    return {
        provide: {
            store: [useLocalizationStore($pinia)]
        }
    }
})
