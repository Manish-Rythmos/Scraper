**Symptoms**
- I have a sprite in the centre of my screen
- The sprite is in world space, but sometimes it is obscured.

**Cause**  Occasionally, the sprite will collide with objects that it gets too close to and will be obscured.  **Resolution**  There are different options for rendering a sprite in front of everything else in your scene.
- Firstly, you can use two cameras: one for UI and another one for the "normal" scene.
- Furthermore, you could use a shader that has a ZTest of 'always' ([SL-CullAndDepth](http://docs.unity3d.com/Manual/SL-CullAndDepth.html)). Download the [unity shader source](http://unity3d.com/get-unity/update) and add that ZTest statement to the sprite shader.
- Another option is to put your UI on a canvas that is set to [screen space - camera](http://docs.unity3d.com/Manual/UICanvas.html) and then set the sorting layer to UI.
- Finally, you can overwrite the [render queue](http://docs.unity3d.com/ScriptReference/Material-renderQueue.html) on your material. The value for [Overlay is 4000](http://docs.unity3d.com/Manual/SL-SubShaderTags.html)

  **More Information**  [SL-SubShaderTags](http://docs.unity3d.com/Manual/SL-SubShaderTags.html)[Material-renderQueue](http://docs.unity3d.com/ScriptReference/Material-renderQueue.html)[Canvas](http://docs.unity3d.com/ScriptReference/Canvas.html)[UICanvas](http://docs.unity3d.com/Manual/UICanvas.html)