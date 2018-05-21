import {WeexModule} from "../../../../index";

/**
 * weex picker
 * https://weex.apache.org/cn/references/modules/picker.html
 */
export interface WeexPickerModule extends WeexModule {

    readonly pickDate: (options: WeexPickerDateOptions, callback: Function) => void;

    readonly pickTime: (options: WeexPickerTimerOptions, callback: Function) => void;

    readonly pick: (options: WeexPickerOptions, callback: Function) => void;
}



export interface WeexPickerDateOptions extends WeexPickerTimerOptions {

    /**
     * 可选，date 的最大值
     */
    max?: string;

    /**
     * 可选，date 的最小值
     */
    min?: string
}

export interface WeexPickerTimerOptions {

    /**
     * 必填，date picker 选中的值，date 的字符串格式为yyyy-MM-dd
     */
    value: string;
}


export interface WeexPickerOptions {
    /**
     * 默认选中的选项
     */
    index: number;

    /**
     * ：picker 数据源
     */
    items: Array<string>;
}
