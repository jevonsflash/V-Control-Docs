export interface IDocumentConfig {
    title: string;
    displayTitle?: string;
    tags: string[];
    description?: string;
    isHide: boolean; // 是否隐藏,
    githubLink?: string;
    icon?: string; // 可选字段
    bannerImages?: string[];
}


export interface IDocumentGroupConfig {
    title: string;
    displayTitle?: string;
    tags: string[];
    isHide: boolean; // 是否隐藏,
    icon?: string; // 可选字段
    docs: IDocumentConfig[];

}
// 定义结果数组的接口
export interface ConfigResult {
    result: IDocumentGroupConfig[];
}
