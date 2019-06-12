declare class qg {
    /** 同步获取系统信息 */
    static getSystemInfoSync(): qg.ISysInfo;
    /** 键盘事件 */
    static showKeyboard(info: any): void;
    static onKeyboardConfirm(callback: Function): void;
    static onKeyboardComplete(callback: Function): void;
    static onKeyboardInput(callback: Function): void;
    static offKeyboardComplete(): void;
    static offKeyboardConfirm(): void;
    static offKeyboardInput(): void;
    static hideKeyboard(obj: any): void;
    /** 罗盘事件 */
    /** 生命周期 */
    static onShow(callback: Function): void;
    static onHide(callback: Function): void;
    /** 文件系统 */
    static getFileSystemManager(): qg.IFileSystem;
    /** 设置渲染帧率 */
    static setPreferredFramesPerSecond(fps: number): void;
    /** 罗盘 */
    static onCompassChange(callback: Function): void;
    static startCompass(): void;
    static stopCompass(): void;
    /** 创建音频*/
    static createInnerAudioContext(): qg.InnerAudioContext;
}

declare namespace qg {
    interface ISysInfo {
        language: string;
        system: string;
    }
    interface IFileSystem {
        readFile(obj: IFileObj)
    }
    interface IFileObj {
        filePath: string;//文件路径
        encoding?: string;//默认为 binary
        success: Function;
        fail: Function;
    }
    interface InnerAudioContext {
        play();
        pause();
        onCanplay(callback: Function);
        offCanplay(callback: Function);
        onError(callback: Function);
        offError(callback: Function);
        onEnded(callback: Function);
        offEnded(callback: Function);
        seek(position: number);//跳转的时间，单位 s
        duration: number;//当前音频的长度 单位 s
        src: string;//音频资源的地址
        volume: number;//音量。范围 0~1，默认是 1
        /**
         * 当前音频的播放位置,read only
         */
        currentTime: number;
        autoplay:boolean;//是否自动播放，默认是 false
    }
}
