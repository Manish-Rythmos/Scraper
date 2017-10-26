
        

**Symptoms** 

*   I have a project in an earlier version of Unity (before Unity 5), that was lightmapped outside of Unity. I want to upgrade it for Unity 5. 
*   I want to use external lightmaps for Unity 5.
*   If any of the lightmap's properties are changed via scripting and the scene is closed and re-opened again, the changes done before are not shown. 

**Cause** 

In order for the external lightmaps to be shown in the scene, there have to be several parameter values assigned from the API by script first.   
In Unity 4, these values were serialized automatically when you saved the scene; the properties of the lightmap were stored with the scene file. Yet, an automated process like hitting the bake button resulted in lots of changes that were highly likely to cause merge conflicts in the scene files.   
In Unity 5, the properties that are needed to use external lightmaps are only serialized when there is a build. This helps to avoid the merge conflicts. Therefore, if you change one of the parameters and load the scene, the changes will not show.

**Resolution** 

To use external lightmaps, you need to have:

*   your external lightmap in a folder
*   a script that can create a [LightmapSettings.lightmaps](http://docs.unity3d.com/ScriptReference/LightmapSettings-lightmaps.html) array in which you can store your external lightmaps (You could do this by creating a public data array type to be shown in the Editor and just drag your lightmap to the slot created).

Then you need to reference the object's renderer and assign the external lightmap by accessing the lightMap's array index ([Renderer.lightmapIndex](http://docs.unity3d.com/ScriptReference/Renderer-lightmapIndex.html)). Next, you should point at a specific area within it by using the scale & offset ([Renderer.lightmapScaleOffset](http://docs.unity3d.com/ScriptReference/Renderer-lightmapScaleOffset.html)).   
Finally, you will need to serialize all the properties' information in a file and read it to reset this information by using an Editor script every time the scene is opened. You could also do this through a script.

**More Information** 

For more information see the links below: 

[http://docs.unity3d.com/Manual/LightmapSnapshot.html](http://docs.unity3d.com/Manual/LightmapSnapshot.html)

[http://forum.unity3d.com/threads/lightmapping-nightmare.317008/#post-2060995](http://forum.unity3d.com/threads/lightmapping-nightmare.317008/#post-2060995)

[http://forum.unity3d.com/threads/standard-shader-how-to-add-lightmap-from-3dsmax-on-uv2.278166/#post-1923095](http://forum.unity3d.com/threads/standard-shader-how-to-add-lightmap-from-3dsmax-on-uv2.278166/#post-1923095)

[http://forum.unity3d.com/threads/problems-with-instantiating-baked-prefabs.324514/#post-2177524](http://forum.unity3d.com/threads/problems-with-instantiating-baked-prefabs.324514/#post-2177524)

This article applies to Unity versions 5.x

      