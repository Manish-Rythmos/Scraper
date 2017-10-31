

**Symptoms**


- My build in Cloud Build is much darker than a local build.
- 3D assets are dark when using Cloud Build to build the game.



**Cause**



Unity Cloud Build does not currently support building light maps. There are a couple of possible causes which might explain what is going wrong:


- You are using  **Precomputed Realtime GI**  for your scene and the  **Auto Build**  for lightmaps is enabled.
- Your build results are not checked into your repository.



**Resolution**



Make sure that you have turned off  **Auto Build**  in your scenes (it is a per-scene setting), and manually build (and commit) your light maps. Depending on what your scene includes, you will need to commit the following files:


- LightingData.asset
- LightmapSnapshot.asset
- Lightmap-xxx.exr
- Lightprobe-xxx.exr



The files are stored in a subfolder named after the scene in the same folder as your scene. For more information about lightmaps please read [here](http://docs.unity3d.com/430/Documentation/Manual/Lightmapping.html).



**More Information**



For more information about lighting please read [here](https://unity3d.com/learn/tutorials/modules/beginner/graphics/lighting-and-rendering). 
Discuss the issue in the Forums [here](http://forum.unity3d.com/threads/cloud-build-scene-is-much-darker-than-unity-build.359490/).

