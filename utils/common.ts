
import { ElMessageBox, ElMessage } from 'element-plus'
import { useUserModuleStore } from '../store';
import Cookies from 'js-cookie'

export function isLogin() {
    const UserModule = useUserModuleStore();
    return !getIsNull(UserModule.token);
}

export function successMessage(value = "执行成功") {
    ElMessage.info({
        message: value,
        type: 'success'
    });
}
export function errorMessage(value = '执行错误') {

    ElMessage.info({
        message: value
    });
}

export async function confirmDialog(message: any, options?: any, appContext?: any) {
    await ElMessageBox.confirm(message, options, appContext);
}

export function getIsNull(value: any) {
    var str = value
    str = String(str)
    if (str == 'undefined' || str == 'null' || !str || !/[^\s]/.test(str)) {
        return true;
    } else {
        return false;
    }
}

export function InputConfrim(options: any) {
    ElMessageBox.prompt(options.tips, options.title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: options.value || '',
        inputPattern: options.inputPattern || '',
        inputErrorMessage: options.inputErrorMessage || ''
    })
        .then((value) => {
            options.callback((value as any).value);
        })
        .catch(() => { });
}


const langKey = 'lang'

export const getLang = () => {
    return Cookies.get(langKey);
}
export const setLang = (lang: string) => {
    Cookies.set(langKey, lang);
}