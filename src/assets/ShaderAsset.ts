import { AssetType, setAssetTypeClass } from '@feng3d/core';
import { ScriptAsset } from './ScriptAsset';

declare global
{
    export interface MixinsAssetTypeClassMap
    {
        'shader': new () => ShaderAsset;
    }
}

/**
 * 着色器 资源
 */
export class ShaderAsset extends ScriptAsset
{
    static extenson = '.ts';

    assetType = AssetType.shader;
}

setAssetTypeClass('shader', ShaderAsset);
