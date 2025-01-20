import { useUserModuleStore } from '~/store'

export default defineNuxtPlugin(({ $pinia }) => {
    return {
        provide: {
            store: useUserModuleStore($pinia)
        }
    }
})
