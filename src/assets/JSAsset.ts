import { AssetType, setAssetTypeClass } from '@feng3d/core';
import { TextAsset } from './TextAsset';

declare global
{
    interface MixinsAssetTypeClassMap
    {
        'js': new () => JSAsset;
    }
}

/**
 * JS资源
 */
export class JSAsset extends TextAsset
{
    static extenson = '.js';

    assetType = AssetType.js;

    declare textContent: string;

    initAsset()
    {
        this.textContent = this.textContent || '';
    }
}
setAssetTypeClass('js', JSAsset);
