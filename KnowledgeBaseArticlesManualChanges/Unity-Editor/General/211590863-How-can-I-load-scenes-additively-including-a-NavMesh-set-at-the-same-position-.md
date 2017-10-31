**Symptoms**

- I have multiple levels that I would like to cache to reduce loading screen time. Each level has its own NavMesh. The geometry for the levels is anchored in the same location in x,y,z space.

**Cause** 
Loading scenes additively using  **`SceneManager.LoadSceneAsync(scene, LoadSceneMode.Additive)&#xA0;`** seems to also load the  *NavMesh*  from each one of them, resulting in overlapped  *NavMesh*  geometry.  

**Resolution**  
At the current moment, there is no way to disable the mesh once the scene has been loaded. The data linked to the mesh is actually loaded as part of the scene data and not linked to any specific  *prefab*  or  *GameObject*  within the scene.

The best option is to continue to have two scenes and use the multi-scene-editing functionality. Here you can offset the  *GameObject*  prior to building the  *NavMeshData* . This way, when you load the object, it is already offset and then you use the offlinks to connect the two together when doing the transition.

**More Information**

[http://docs.unity3d.com/Manual/MultiSceneEditing.html](http://docs.unity3d.com/Manual/MultiSceneEditing.html)

       