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
interface ConfigResult {
    result: IDocumentGroupConfig[];
}
export const config: ConfigResult = {
    result:
        [
            {
                title: "basic",
                displayTitle: "基础",
                tags: [],
                isHide: false,
                docs: [
                    {
                        title: "starter",
                        displayTitle: "开始",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {
                        title: "colors",
                        displayTitle: "颜色系统",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {
                        title: "global-styles",
                        displayTitle: "全局样式",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {
                        title: "icons",
                        displayTitle: "图标",
                        tags: [],
                        isHide: false,
                        description: "",
                    }
                ],
            },
            {
                title: "controls",
                displayTitle: "控件库",
                tags: [],
                isHide: false,
                docs: [
                    {
                        title: "v-button",
                        displayTitle: "VButton",
                        tags: [],
                        isHide: false,
                        description: "",
                    },

                    {

                        title: "v-checkable-collection",
                        displayTitle: "VCheckableCollection",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-checkbox",
                        displayTitle: "VCheckBox",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-datepicker",
                        displayTitle: "VDatePicker",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-entry",
                        displayTitle: "VEntry",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-expander",
                        displayTitle: "VExpander",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-menu-cell",
                        displayTitle: "VMenuCell",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-number-entry",
                        displayTitle: "VNumberEntry",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-placeholder-view",
                        displayTitle: "VPlaceholderView",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-radiobutton-group",
                        displayTitle: "VRadioButtonGroup",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-searchbar",
                        displayTitle: "VSearchbar",
                        tags: [],
                        isHide: false,
                        description: "",
                    },
                    {

                        title: "v-validating-entry",
                        displayTitle: "VValidatingEntry",
                        tags: [],
                        isHide: false,
                        description: "",
                    }


                ],
            },


        ]
}