import { Material, AssetType, setAssetTypeClass } from '@feng3d/core';
import { oav } from '@feng3d/objectview';
import { ObjectAsset } from '../ObjectAsset';

/**
 * 材质资源
 */
export class MaterialAsset extends ObjectAsset
{
    static extenson = '.json';

    /**
     * 材质
     */
    @oav({ component: 'OAVObjectView' })
    declare data: Material;

    assetType = AssetType.material;

    initAsset()
    {
        this.data = this.data || new Material();
    }
}

setAssetTypeClass('material', MaterialAsset);

declare global
{
    interface MixinsAssetTypeClassMap
    {
        'material': new () => MaterialAsset;
    }
}
