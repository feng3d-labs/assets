import { AssetMeta, AssetType, FileAsset, Texture2D } from '@feng3d/core';
import { oav } from '@feng3d/objectview';
import { gPartial } from '@feng3d/polyfill';
import { serialization } from '@feng3d/serialization';

/**
 * 纹理文件
 */
export class TextureAsset extends FileAsset
{
    static extenson: '.jpg' | '.png' | '.jpeg' | '.gif' = '.png';

    /**
     * 材质
     */
    @oav({ component: 'OAVObjectView' })
    declare data: Texture2D;

    /**
     * 图片
     */
    get image() { return this.data['_pixels'] as any; }
    set image(v: HTMLImageElement)
    {
        this.data['_pixels'] = v;
        this.saveFile();
    }

    declare meta: TextureAssetMeta;

    assetType = AssetType.texture;

    initAsset()
    {
        this.data = this.data || new Texture2D();
    }

    saveFile(callback?: (err: Error) => void)
    {
        this.rs.fs.writeImage(this.assetPath, this.image, (err) =>
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
        this.rs.fs.readImage(this.assetPath, (err, img: HTMLImageElement) =>
        {
            this.data['_pixels'] = img;
            callback && callback(err);
        });
    }

    /**
     * 读取元标签
     *
     * @param callback 完成回调
     */
    protected readMeta(callback?: (err?: Error) => void)
    {
        super.readMeta((err) =>
        {
            this.rs.deserializeWithAssets(this.meta.texture, (result) =>
            {
                this.data = result;
                callback && callback(err);
            });
        });
    }

    /**
     * 写元标签
     *
     * @param callback 完成回调
     */
    protected writeMeta(callback?: (err: Error) => void)
    {
        this.meta.texture = serialization.serialize(this.data);
        super.writeMeta(callback);
    }
}

export interface TextureAssetMeta extends AssetMeta
{
    texture: gPartial<Texture2D>;
}
