

**Symptoms**


- My Emissive material/shader does not appear in my Lightmap.
- My Emissive material/shader sometimes appears and sometimes does not.



**Cause**



Unity needs the flag  **Emission GI**  set to  **Baked**  always, to include the Emissive materials into lightmaps, and a custom shader may not have this flag.



**Resolution**



To get the Emissive material into the lightmap, please follow these steps:


1. Make sure lightmap UVs are included in the mesh. Use the option  **“Mode > Import Settings > Generate Lightmap UV”**  in the mesh importer to create the second UV channel utilized by the Lightmapping.
2. Checking the option  **Important GI**  from the  **“Lighting Window > Object > Important GI”** . Sometimes Enlighten will cull small objects away because they are small relative to the indirect resolution. To avoid this behavior use this option on each object that you want to include into the lightmap (even Emissive Objects).
3. Set the  **“Emission > Global Illumination”** to **Baked** . It makes the Emissive light from this material to be baked into the static lightmaps for the scene. You can find this option seeing the material into the Inspector panel.



If you custom shaders, you cannot make the third point from the shader code and you cannot get Emissive light into the Lightmaps because of that.  In this case, we have to use a script to solves this problem:



*usingUnityEngine;*



*usingUnityEditor;*



*public class LightMapMenu : MonoBehaviour*



*{*



*// The menu item.*



*[MenuItem("MyCustomBake/Bake")]*



*static void Bake ()*



*{*



*// Find all objects with the tag &lt;Emissive\_to\_baked&gt;*



*// We have to set the tag “Emissive\_to\_baked” on each GO to be baked.*



*GameObject[] \_emissiveObjs = GameObject.FindGameObjectsWithTag("Emissive\_to\_baked");*



*// Then, by each object, set the globalIllumiationFlags to BakedEmissive.*



*foreach(GameObjecttmpObj in\_emissiveObjs)*



*{*



*MaterialtmpMaterial = tmpObj.GetComponent<Renderer> ().sharedMaterial;*



*tmpMaterial.globalIlluminationFlags = MaterialGlobalIlluminationFlags.BakedEmissive;*



*}*



*// Bake the lightmap.*



*Lightmapping.Bake ();*



*}*



*}*



This script will set the  **Global Illumination**  option to  **Baked**  in each object tagged as  **Emissive\_to\_Lightmap** . It will then execute the Bake function to create the Lightmap.  Now, everything should work as expected and the Emissive Light should appear in the Lightmap even with custom shaders.



**More Information**



For scripting:


- [https://docs.unity3d.com/ScriptReference/Lightmapping.Bake.html](https://docs.unity3d.com/ScriptReference/Lightmapping.Bake.html)
- [https://docs.unity3d.com/ScriptReference/Material-globalIlluminationFlags.html](https://docs.unity3d.com/ScriptReference/Material-globalIlluminationFlags.html)
- [https://docs.unity3d.com/ScriptReference/MaterialGlobalIlluminationFlags.html](https://docs.unity3d.com/ScriptReference/MaterialGlobalIlluminationFlags.html)



For Tags System:


- [https://docs.unity3d.com/Manual/Tags.html](https://docs.unity3d.com/Manual/Tags.html)



For Emissive Standard Shader Settings:


- [https://docs.unity3d.com/Manual/StandardShaderMaterialParameterEmission.html](https://docs.unity3d.com/Manual/StandardShaderMaterialParameterEmission.html)



For Generate Lightmap UV:


- [https://docs.unity3d.com/Manual/FBXImporter-Model.html](https://docs.unity3d.com/Manual/FBXImporter-Model.html)



For Important GI:


- [https://docs.unity3d.com/Manual/GlobalIllumination.html](https://docs.unity3d.com/Manual/GlobalIllumination.html)



For Lighting and rendering (Search by “Emissive Materials”):


- [https://unity3d.com/learn/tutorials/topics/graphics/unity-5-lighting-and-rendering](https://unity3d.com/learn/tutorials/topics/graphics/unity-5-lighting-and-rendering)

