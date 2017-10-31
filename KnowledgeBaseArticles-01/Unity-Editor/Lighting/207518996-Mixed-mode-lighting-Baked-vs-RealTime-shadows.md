**Symptoms**  
- My RealTime shadows in a baked scene look mismatched to the baked meshes, especially when RealTime shadows are on top of shadows baked into the scene.



**Cause**


- The  **light shadow strength**  is set to high.



**Resolution**


- This effect needs to be done by eye so that you can match the shadow intensity to those baked into the scene.
- Additionally to this, Shadow masks have been added to 5.4.0b3 to help stop doubling up of baked shadows multiplying over the top of RealTime shadows.

**More Information** For more information, please see our Docs on Shadows [here](http://docs.unity3d.com/Manual/ShadowOverview.html) and [here](http://docs.unity3d.com/ScriptReference/Light-shadowStrength.html).This article applies to Unity version 5.3.1f1




