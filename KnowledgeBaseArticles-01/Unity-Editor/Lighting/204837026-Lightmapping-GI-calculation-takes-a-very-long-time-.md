

**Symptoms**


- When Lighting > Scene > Auto is checked and objects are marked as static, Unity begins the GI pre-calculation process your machine may take a long time to complete this stage.



**Cause**



Unity processes GI pre-calculation for a great deal of time if the lighting settings do not match the scope of the scene. For example, a detailed 3km mesh set to static will require settings adjusted much lower than default.



**Resolution**



There are a number of solutions to help:


- First uncheck ' ***Auto*** ' in the  ***Lighting***  >  ***Scene***  panel when the scene is first re-opened.



***Lower overall resolution:***


- In the lighting panel dial down  ***R******ealtime******resolution***  to significantly lower. This can be set below one (and much less), depending on the scope of the scene. Numbers such as 0.1 or 0.02 have been used often to get the scene up and running and then resolution can be improved once an acceptable calculation / iteration time can be achieved.



***Manage per object settings:***


- Set per object  ***Lightmap Parameters***  from the  ***Object*** tab in the  ***Lighting***  panel with either existing presets or custom ( ***Create New)***  to apply values relative to the scope of your scene (e.g. lower for distant terrain).



***Manage the UV charting for your objects:***


- Set the Scene view to UV Charts from the drop-down options ( ***Shaded***  -> ***UV Charts*** ) under  ***Global Illumination*** .



![](/hc/en-us/article_attachments/203766886/Screen_Shot_2016-05-11_at_12.21.53.png)


- Adjust the  ***Auto UV max Distance***  and  ***Auto UV Max****Angle***  to get uniform blocks of UVs rather than tightly packed mass of density. If, for example, tower-blocks with relief should be bevelled to improve charting efficiency ideally, but model editing is not possible, UV Charting distance can be upped to group the UV charting blocks more efficiently.



***Remove objects from the Static calculations:***


- If you have a scene with a vast number of objects, it can be beneficial to manage your objects static / dynamic status in regard of lightmapping. If you have many small objects away from the camera, you can set the  ***Lightmap Static***  check box in the  ***Object***  tab of the  ***Lighting***  window. This will exclude from the Lighting pre-calculation, but still allow them to be included in the static batch.



**More Information**


- [http://docs.unity3d.com/Manual/GlobalIllumination.html](http://docs.unity3d.com/Manual/GlobalIllumination.html)
- h[ttp://docs.unity3d.com/Manual/GIVis.html](http://docs.unity3d.com/Manual/GIVis.html)
- [http://docs.unity3d.com/Manual/LightmapParameters.html](http://docs.unity3d.com/Manual/LightmapParameters.html)

