
        

**Symptoms** 

*   I have been using lightmaps on my Render Mesh objects that are combined into a prefab. I then load the prefab with the light mapped meshes into another scene, but my lightmaps are missing when I build my project.
*   I have been using the [PrefabLightmapData](http://forum.unity3d.com/threads/problems-with-instantiating-baked-prefabs.324514/page-5) workaround included on the Forum link.

**Cause** 

*   By default, shader variants to handle lightmapping modes, not used by any of the scenes, are not included in the game data. This is done to help cut down on shader data size.

**Resolution** 

In the **Graphics setting** panel under ***Edit -> Project Settings -> Graphics* ** there is a **Light modes ** drop down box. By default, the drop down is set to **Automatic** . This will strip the lightmap variants of the shader if none in the scenes are found. You can set these to be overridden by setting the drop down to **Manual** . This will give you the options seen in the screen capture below. You can leave them all ticketed if you are unsure which lighting type you will be using. Specifying the lightmap types will help optimise the shader variants however.

![](/hc/en-us/article_attachments/203250323/Screen_Shot_2016-03-11_at_12.00.23.png) 

**More Information** 

[http://forum.unity3d.com/threads/problems-with-instantiating-baked-prefabs.324514/](http://forum.unity3d.com/threads/problems-with-instantiating-baked-prefabs.324514/)

[http://docs.unity3d.com/Manual/OptimizingShaderLoadTime.html](http://docs.unity3d.com/Manual/OptimizingShaderLoadTime.html)

[http://docs.unity3d.com/Manual/class-GraphicsSettings.html](http://docs.unity3d.com/Manual/class-GraphicsSettings.html)

This article applies to Unity version 5.3

      