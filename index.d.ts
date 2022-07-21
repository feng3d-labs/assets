declare namespace feng3d {
    /**
     * 二进制 资源
     */
    class ArrayBufferAsset extends FileAsset {
        /**
         * 文件数据
         */
        arraybuffer: ArrayBuffer;
        /**
         * 保存文件
         *
         * @param callback 完成回调
         */
        saveFile(callback?: (err: Error) => void): void;
        /**
         * 读取文件
         *
         * @param callback 完成回调
         */
        readFile(callback?: (err: Error) => void): void;
    }
}
declare namespace feng3d {
    /**
     * 文本 资源
     */
    class TextAsset extends FileAsset {
        static extenson: string;
        assetType: AssetType;
        textContent: string;
        initAsset(): void;
        saveFile(callback?: (err: Error) => void): void;
        /**
         * 读取文件
         *
         * @param callback 完成回调
         */
        readFile(callback?: (err: Error) => void): void;
    }
    interface AssetTypeClassMap {
        'txt': new () => TextAsset;
    }
}
declare namespace feng3d {
    /**
     * 对象资源
     */
    abstract class ObjectAsset extends FileAsset {
        /**
         * 资源对象
         */
        data: any;
        saveFile(callback?: (err: Error) => void): void;
        /**
         * 读取文件
         *
         * @param callback 完成回调
         */
        readFile(callback?: (err: Error) => void): void;
        private _dataChanged;
        private _onDataChanged;
    }
}
declare namespace feng3d {
    /**
     * 脚本资源
     */
    class ScriptAsset extends TextAsset {
        static extenson: string;
        assetType: AssetType;
        textContent: string;
        /**
         * 脚本父类名称
         */
        get parentScriptName(): string;
        private _parentScriptName;
        /**
         * 脚本类定义
         */
        get scriptName(): string;
        private _scriptName;
        private _invalid;
        initAsset(): void;
        private _invalidate;
        private _update;
    }
    interface AssetTypeClassMap {
        'script': new () => ScriptAsset;
    }
}
declare namespace feng3d {
    /**
     * 着色器 资源
     */
    class ShaderAsset extends ScriptAsset {
        static extenson: string;
        assetType: AssetType;
    }
    interface AssetTypeClassMap {
        'shader': new () => ShaderAsset;
    }
}
declare namespace feng3d {
    /**
     * JS资源
     */
    class JSAsset extends TextAsset {
        static extenson: string;
        assetType: AssetType;
        textContent: string;
        initAsset(): void;
    }
    interface AssetTypeClassMap {
        'js': new () => JSAsset;
    }
}
declare namespace feng3d {
    /**
     * JSON 资源
     */
    class JsonAsset extends TextAsset {
        static extenson: string;
        assetType: AssetType;
        textContent: string;
        initAsset(): void;
    }
    interface AssetTypeClassMap {
        'json': new () => JsonAsset;
    }
}
declare namespace feng3d {
    /**
     * 音效资源
     */
    class AudioAsset extends ArrayBufferAsset {
        readonly assetType = AssetType.audio;
    }
}
declare namespace feng3d {
    /**
     * 纹理文件
     */
    class TextureAsset extends FileAsset {
        static extenson: '.jpg' | '.png' | '.jpeg' | '.gif';
        /**
         * 材质
         */
        data: Texture2D;
        /**
         * 图片
         */
        get image(): HTMLImageElement;
        set image(v: HTMLImageElement);
        meta: TextureAssetMeta;
        assetType: AssetType;
        initAsset(): void;
        saveFile(callback?: (err: Error) => void): void;
        /**
         * 读取文件
         *
         * @param callback 完成回调
         */
        readFile(callback?: (err: Error) => void): void;
        /**
         * 读取元标签
         *
         * @param callback 完成回调
         */
        protected readMeta(callback?: (err?: Error) => void): void;
        /**
         * 写元标签
         *
         * @param callback 完成回调
         */
        protected writeMeta(callback?: (err: Error) => void): void;
    }
    interface TextureAssetMeta extends AssetMeta {
        texture: gPartial<Texture2D>;
    }
}
declare namespace feng3d {
    /**
     * 立方体纹理资源
     */
    class TextureCubeAsset extends ObjectAsset {
        static extenson: string;
        /**
         * 材质
         */
        data: TextureCube;
        assetType: AssetType;
        initAsset(): void;
    }
    interface AssetTypeClassMap {
        'texturecube': new () => TextureCubeAsset;
    }
}
declare namespace feng3d {
    /**
     * 几何体资源
     */
    class GeometryAsset extends ObjectAsset {
        static extenson: string;
        /**
         * 几何体
         */
        data: Geometry;
        assetType: AssetType;
        initAsset(): void;
    }
    interface AssetTypeClassMap {
        'geometry': new () => GeometryAsset;
    }
}
declare namespace feng3d {
    /**
     * 材质资源
     */
    class MaterialAsset extends ObjectAsset {
        static extenson: string;
        /**
         * 材质
         */
        data: Material;
        assetType: AssetType;
        initAsset(): void;
    }
    interface AssetTypeClassMap {
        'material': new () => MaterialAsset;
    }
}
declare namespace feng3d {
    interface GameObjectAsset {
        getAssetData(callback?: (result: GameObject) => void): GameObject;
    }
    /**
     * 游戏对象资源
     */
    class GameObjectAsset extends ObjectAsset {
        /**
         * 材质
         */
        data: GameObject;
        assetType: AssetType;
        static extenson: string;
        initAsset(): void;
        protected _getAssetData(): GameObject;
    }
}
//# sourceMappingURL=index.d.ts.map