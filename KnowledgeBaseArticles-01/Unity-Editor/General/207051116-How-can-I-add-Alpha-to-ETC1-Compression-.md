

**Symptoms**


- I want to use ETC1 compression, but want to keep the Alpha channel and do not know how to.
- Unity's Alpha + ETC1 compression is not working with UI elements.



**Cause**


- ETC1 compression only supports the RGB channel, therefore it will not support an attribute of Transparency for each pixel of the texture.
- A bug that causes the UI shader to have no Alpha + ETC1 support.



**Resolution**



Unity can use ETC1 for textures with Alpha if, prior to that, they are placed on some atlas by specifying them with a packing tag. Also, make sure you have marked the  *Override for Android*  checkbox as well as the  *Compress using ETC1*  checkbox. Unity will split the resulting atlas into two textures, each without Alpha and then combine them in the final parts of the RenderPipeline.



The UI shaders in Unity 5.3.0 and earlier DID NOT support ETC1 + Alpha. NONETHELESS, there is a fix to this problem that is going to be released with Unity 5.5.


- https://issuetracker.unity3d.com/issues/ui-etc1-plus-alpha-not-working-on-ui-images-when-the-used-sprite-is-with-packing-tag-set



**Additionally, there is going to be a BACKPORTED FIX available in 5.3.7p2.**



However, It is possible though to modify the shaders to use the Alpha texture, available via [Sprite.associatedAlphaSplitTexture](http://docs.unity3d.com/530/Documentation/ScriptReference/Sprite-associatedAlphaSplitTexture.html). An example of a workaround known of this issue could be the following. UI-Default.shader cloned in a local shader. Modify it to sample the alphaTexture and merge alpha into the final color.  (See images below)



![](/hc/en-us/article_attachments/202346026/Alpha.png)



And modify the shader code to match the following:



![](/hc/en-us/article_attachments/202346036/Alpha2.png)


- Code needs to push the AlphaTexture obtained from the sprite  (See image below to see an example of this)



![](/hc/en-us/article_attachments/202346066/SecondBestEd.png)







**More Information**



For more information see the links below:



[http://forum.unity3d.com/threads/etc1-alpha-feature.350184/#post-2288772](http://forum.unity3d.com/threads/etc1-alpha-feature.350184/#post-2288772)



[http://docs.unity3d.com/Manual/class-TextureImporterAndroid.html](http://docs.unity3d.com/Manual/class-TextureImporterAndroid.html)



This article applies to Unity versions 5.x





