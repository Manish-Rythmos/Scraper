
        

**Symptoms** 

*   My GameObject(s) do not show any shadows when I am using either baked shadows or Real-Time shadows in my scene.

**Cause & Solutions** 

***RealTime shadows:** * 

**![](/hc/en-us/article_attachments/202946636/Lighting.png)** 

*   ***Baking setting:**  * This option specifies what light will effect. There are 3 options - RealTime, Baked, Mixed. For real-time shows to appear, make sure either RealTime or Mixed are selected.
*   ***Shadow Type:**  * The options under this tab are: Hard shadows, Soft shadows or no shadows. For Real-Time shadows, we need to make sure Hard or Soft shadows are selected.
*   ***Culling Mask:** *  These masks allow you to specify which layers the light will affect. For example, if we have a character set to a custom layer called "Character" and want him to be affected by the light, the culling mask needs to include the "Character" layer.

![](/hc/en-us/article_attachments/202946416/QualitySettings.png)

*   Another good place to check this the Quality settings window which can be found by going to the top menu and selecting  *Edit -> Project settings -> Quality.*  This will open the window above in the inspector. From here we can check the read highlighted areas:

*   ***Shadows: ** * You can specify the shadows that are allowed to render in the project in this field. Make sure either Hard shadows only or Hard and Soft shadows in selected.
*   ***Shadow Distance:*  ** This is the maximum distance from the camera at which shadows will be visible. Objects that are set to cast Real-Time shadows beyond this distance will not be rendered.

![](/hc/en-us/article_attachments/202947286/ObjectBakeSettings.png) 

*   Next check the object that is not showing the Real-Time shadows you are after. Select the object containing the Render mesh or Skinned mesh component.

*   ***Static:** *  This toggles whether the object is static in the scene or dynamic. Leave this unticked for real-time lighting.
*   ***Cast shadows and Receive shadows:*  ** These specify whether the mesh renderer will cast and receive shadows. Note that Baked shadows will not be received by Real-Time lit objects. See [Mixed mode lighting - Baked objects casting shadows on realtime objects](/hc/en-us/articles/207820473) for additional information.

***Baked shadows:** * 

![](/hc/en-us/article_attachments/202956846/Baked_Light.jpg) 

*   ***Baking:** *  Similar to the Real-Time settings on a light, the baking option field in the light component needs to be set to either Baked or Mixed for baked shadows to appear.

![](/hc/en-us/article_attachments/202956856/Baked_MeshRender.jpg)

*   ***Static:** *  To specify that this mesh needs to be included in the lightmap baking, the static field needs to be check.
*   ***Cast shadows and Receive shadows:*  ** Cast shadows needs to be set to On if the object should cast shadows during baking of the lightmaps. Receive shadows should be selected if the object needs to receive either baked or Real-Time shadows.

![](/hc/en-us/article_attachments/202957316/LightWindow_Scene.png)

*   ***Baked GI:** *  To enable baking of lightmaps, make sure that Baked GI is enabled from the Lighting window in the Scene tab.

**![](/hc/en-us/article_attachments/203107353/LightWindow_Object.png)** 

*   ***Lightmap Static:**  * In the Lighting window under the Object tab, there is a lightmap static toggle. This is set to true when a GameObject is set to true in the inspector. You can set this lightmap static toggle separately to the Static toggle in the inspector to create particular situations where you want to batch render game object but not have them lightmapped. In the case of requiring the object to baked and use lightmapped shadows, we need to ticket the lightmap static toggle. 

**More Information** 

Quality settings [REF](http://docs.unity3d.com/Manual/class-QualitySettings.html)

Light component [REF](http://docs.unity3d.com/Manual/class-Light.html)

Mesh renderer [REF](http://docs.unity3d.com/Manual/class-MeshRenderer.html)

Light performance [REF](http://docs.unity3d.com/Manual/LightPerformance.html)

This article applies to Unity versions 5.x

      