
        

**Symptoms** 

*   I am changing the fog settings of my built game scene at runtime using the RenderSettings.fog API to include fog in my scene but it's not showing.

**Cause** 

By default, shader variants used to handle Fog modes that are not used by any of the scenes are not included in the game data. This is done to help cut down on shader data size.

**Resolution** 

In the **Graphics settings** panel under ***Edit -> Project Settings -> Graphics* ** there is a **Fog modes ** drop down box. By default, the drop down is set to **Automatic** . This will strip the Fogging variants of the shader if it is not found on any of the scenes. You can set these to be overridden by setting the drop down property to **Manual** . This will enable additional options (which can be seen in the screen capture below). You can leave them all selected if you are unsure which lighting type you will be using, but specifying the lightmap types will help optimize the shader variants.

 ![](/hc/en-us/article_attachments/203253383/Screen_Shot_2016-03-11_at_14.18.28.png)

**More Information** 

[http://docs.unity3d.com/Manual/OptimizingShaderLoadTime.html](http://docs.unity3d.com/Manual/OptimizingShaderLoadTime.html)

[http://docs.unity3d.com/Manual/class-GraphicsSettings.html](http://docs.unity3d.com/Manual/class-GraphicsSettings.html)

This article applies to Unity version 5.3

      