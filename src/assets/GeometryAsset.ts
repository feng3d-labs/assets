import { AssetType, CubeGeometry, Geometry, setAssetTypeClass } from '@feng3d/core';
import { oav } from '@feng3d/objectview';
import { ObjectAsset } from '../ObjectAsset';

/**
 * 几何体资源
 */
export class GeometryAsset extends ObjectAsset
{
    static extenson = '.json';

    /**
     * 几何体
     */
    @oav({ component: 'OAVObjectView' })
    declare data: Geometry;

    assetType = AssetType.geometry;

    initAsset()
    {
        this.data = this.data || new CubeGeometry();
        this.data.assetId = this.data.assetId || this.assetId;
    }
}

setAssetTypeClass('geometry', GeometryAsset);

declare global
{
    interface MixinsAssetTypeClassMap
    {
        'geometry': new () => GeometryAsset;
    }
}
