

**Symptoms**


- Shaders do not look correct when loaded from AssetBundles.
- Shader Features do not work with AssetBundles



**Cause**


- A shader that uses “shader features” and is included in an AssetBundle does not work on versions earlier than 5.4.4p4, 5.5.1p4, and 5.6.0b8.



**Resolution**



In versions prior to 5.4.4p4, 5.5.1p4, and 5.6.0b8 the only way to use shader features with AssetBundles was to include all the materials that use a specific shader in the same AssetBundle.



From 5.4.4p4, 5.5.1p4, and 5.6.0b8 and onwards to use the Shader Features with Asset Bundles follow the steps below.



Use a [ShaderVariantCollection](https://docs.unity3d.com/ScriptReference/ShaderVariantCollection.html) to pack the shader feature with the collection:



 1. Create a [ShaderVariantCollection](https://docs.unity3d.com/ScriptReference/ShaderVariantCollection.html)
 2. Add the Shader to the collection
 3. Add variant tags to the collection
 4. Assign both collection and shader to the same Bundle.




Watch the video demonstration of this [here](https://oc.unity3d.com/index.php/s/7ZYNzLGM00HnGVO).



**More Information**



https://docs.unity3d.com/Manual/BuildingAssetBundles.html



[https://docs.unity3d.com/Manual/SL-MultipleProgramVariants.html](https://docs.unity3d.com/Manual/SL-MultipleProgramVariants.html)



https://docs.unity3d.com/ScriptReference/ShaderVariantCollection.html

