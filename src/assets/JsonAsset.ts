import { AssetType, setAssetTypeClass } from "@feng3d/core";
import { TextAsset } from "./TextAsset";

/**
 * JSON 资源
 */
export class JsonAsset extends TextAsset
{
    static extenson = ".json";

    assetType = AssetType.json;

    declare textContent: string;

    initAsset()
    {
        this.textContent = this.textContent || "{}";
    }
}

setAssetTypeClass("json", JsonAsset);


declare global
{
    interface MixinsAssetTypeClassMap
    {
        "json": new () => JsonAsset;
    }
}