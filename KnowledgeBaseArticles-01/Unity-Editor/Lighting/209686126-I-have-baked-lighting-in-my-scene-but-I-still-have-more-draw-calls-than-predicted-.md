

**Symptoms**


- My scene uses only one material and all my mesh renderers have been set to be static (statically batched) with pre-baked lighting to help my draw call count. When I run my scene, it reports more draw calls than I was expecting.



**Cause**



One factor that can effect draw call batches being split on simple scenes using baked lighting, like the one below, is the separation of lightmaps being applied to the geometry in the scene. For this scene, the expected outcome (not taking into account the separate lightmaps) would be 2 draw calls (Batches). One for all the geometry in the scene and one for the skybox. Instead, we are seeing a total of 5 draw calls (Batches).



![](/hc/en-us/article_attachments/204906223/Scene512.png)



In this scene, the increased draw calls are being caused by the lightmaps being spread across 2 lightmap textures. We can see this in the readout of the bottom left corner of the image above. To get to this screen in Unity, open then Lighting panel and click the lightmaps tab. This will show you the lightmaps being used, along with some information about the lightmaps the bottom of the window (in this scene, there are 2 512x512 lightmaps being used).



The split is being caused by a combination of the Baked Resolution being high and the Atlas Size being set to 512. The Atlas Size restricts how big the lightmap can become in a single UV cluster.



![](/hc/en-us/article_attachments/204703026/Scene512_Settings.jpg)



**Resolution**



Changing the Atlas Size to a much larger size will help ensure that all the UV clusters can fit onto a single lightmap atlas. Some consideration needs to be taken that setting the size to 1024, 2048 or 4096 could lead to a lot of unused texture space.



![](/hc/en-us/article_attachments/204713746/Scene1024.png)



In these situations, it is worth playing with the Atlas Size and the Baked Resolution until something that maximises a single lightmap is found.



![](/hc/en-us/article_attachments/204713766/Scene1024_Settings.png)



It is also worth noting that if your scene has renderers that will cause a separate draw call (different material), these objects could be spread onto a different map as there will not be an additional cost to having them on their own lightmap texture. You can group objects together by assigning a custom Lightmap Parameter. Inside the Lightmap Parameter asset is the System Tag field. This follows:



" *A group of objects whose lightmap textures are combined in the same lightmap atlas is known as a “system”. Unity will automatically define additional systems and their accompanying atlases if all the lightmaps can’t be fitted into a single atlas. However, it is sometimes useful to define separate systems yourself, to create dynamically loaded levels, say. By changing the System Tag number, you will force a new system and lightmap to be created. The exact numeric sequence values of the tag are not significant.* "



![](/hc/en-us/article_attachments/204922203/newLightmapParameters.png)



A good way to see what batching is occurring on objects in the scene is with the Frame Debugger. This will allow you to see what objects are included in each draw call and how to optimise them.



**More Information**



https://docs.unity3d.com/Manual/GlobalIllumination.html



https://docs.unity3d.com/Manual/LightmapParameters.html









