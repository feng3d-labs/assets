import { AssetType, Node3D } from '@feng3d/core';
import { Entity } from '@feng3d/ecs';
import { oav } from '@feng3d/objectview';
import { serialization } from '@feng3d/serialization';
import { ObjectAsset } from '../ObjectAsset';

export interface Node3DAsset
{
    getAssetData(callback?: (result: Node3D) => void): Node3D;
}

/**
 * 游戏对象资源
 */
export class Node3DAsset extends ObjectAsset
{
    /**
     * 材质
     */
    @oav({ component: 'OAVObjectView' })
    declare data: Node3D;

    assetType = AssetType.node3d;

    static extenson = '.json';

    initAsset()
    {
        this.data = this.data || new Entity().addComponent(Node3D);
        this.data.assetId = this.data.assetId || this.assetId;
    }

    protected _getAssetData()
    {
        const node = serialization.clone(this.data);
        delete node.assetId;
        node.prefabId = this.assetId;

        return node;
    }
}
