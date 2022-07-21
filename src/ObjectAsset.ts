import { FileAsset, AssetData } from '@feng3d/core';
import { objectEmitter } from '@feng3d/event';
import { oav } from '@feng3d/objectview';
import { serialization } from '@feng3d/serialization';
import { watch } from '@feng3d/watcher';

/**
 * 对象资源
 */
export abstract class ObjectAsset extends FileAsset
{
    /**
     * 资源对象
     */
    @oav({ component: 'OAVObjectView' })
    @watch('_dataChanged')
    declare data: any;

    saveFile(callback?: (err: Error) => void)
    {
        this.data.assetId = this.assetId;
        const d = serialization.serialize(this.data);
        this.rs.fs.writeObject(this.assetPath, d, (err) =>
        {
            callback && callback(err);
        });
    }

    /**
     * 读取文件
     *
     * @param callback 完成回调
     */
    readFile(callback?: (err: Error) => void)
    {
        this.rs.fs.readObject(this.assetPath, (err, object) =>
        {
            this.rs.deserializeWithAssets(object, (data: AssetData) =>
            {
                this.data = data;
                this.data.assetId = this.assetId;
                callback && callback(err);
            });
        });
    }

    private _dataChanged(property, oldValue, newValue)
    {
        if (oldValue)
        {
            objectEmitter.off(oldValue, 'propertyValueChanged', this._onDataChanged, this);
        }
        if (newValue)
        {
            objectEmitter.on(newValue, 'propertyValueChanged', this._onDataChanged, this);
        }
    }

    private _onDataChanged()
    {
        this.write();
    }
}
