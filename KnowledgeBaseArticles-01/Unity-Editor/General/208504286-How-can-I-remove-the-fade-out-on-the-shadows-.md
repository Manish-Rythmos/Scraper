

**Symptoms**


- Unity does not offer a public API to remove the fade out on the shadows.



**Cause**



The public API does not offer any method for removing the fade out on the shadows, however with C# and our built-in shaders it is possible to overwrite the shadows fade out.



**Resolution**



Try adding following script onto your camera:


```
void OnPreRender ()
{
    originalScreenSpaceShadowShader = GraphicsSettings.GetCustomShader(UnityEngine.Rendering.BuiltinShaderType.ScreenSpaceShadows);
    GraphicsSettings.SetCustomShader(UnityEngine.Rendering.BuiltinShaderType.ScreenSpaceShadows, myScreenSpaceShadowShader);
}

void OnPostRender()
{     GraphicsSettings.SetCustomShader(UnityEngine.Rendering.BuiltinShaderType.ScreenSpaceShadows, originalScreenSpaceShadowShader);
}

```


Regarding the screenspace shadow shader itself ( *Internal-ScreenSpaceShadows.shader* ), comment this line:


```
shadow += GET_SHADOW_FADE(wpos, vpos.z);

```


Please note that there are a few more actions to take after the above. For example: in deferred, the directional light attenuates by itself at shadow distance. In forward, at shadow distance, everything turns black. You need to have this functionality in mind before doing these changes.



Another option could be to increase the camera distance, and the fade out will appear in a far away distance from the view.



**More Information**



Additional information can be found [here](http://forum.unity3d.com/threads/shadow-fadeoff-approaching-far-clip-plane.356893/#post-2459135).



This article applies to Unity version 5.4

