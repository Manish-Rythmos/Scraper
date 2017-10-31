

**Symptoms**


- I have multiple cameras, but require them to render and update in a certain order.



**Cause**



When you create a new camera in Unity it will create that camera with a depth of zero. Take a look at this screenshot to see where the depth shows up in the default component inspector; it is highlighted in yellow.



**![](/hc/article_attachments/209485706/Camera.png)**



The depth is considered the rendering order, the lower the depth value the earlier it will be in the rendering stack.



**Resolution**



If you have more than one camera then all you need to do is set the depth value of each camera in ascending order for which they will draw. For example:



Camera A - Depth Value of 0  //This will render first.



Camera B - Depth Value of 1  //This will render second.



Camera C - Depth Value of 2  //This will render last.



When using [OnRenderImage](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnRenderImage.html) for an image effect, the image effect will always be applied directly after the camera that it is attached to. So given the same scenario as above, if all three cameras have a single image effect attached to them the render order would look like this:



Camera A - Depth Value of 0  //This will render first.



ImageEffect1



Camera B - Depth Value of 1  //This will render second.



ImageEffect2



Camera C - Depth Value of 2  //This will render last.



ImageEffect3



**More Information**


- The depth value can be edited via script using the [Camera.depth](https://docs.unity3d.com/ScriptReference/Camera-depth.html) property.
- If you have two cameras with exactly the same depth they will render in the order in which they were added to the scene, it is not recommended to leave cameras on the same depth and you should always explicitly order them.
- This article applies to Unity versions between 4.x and 5.x
- For more information see the links below:

    https://docs.unity3d.com/Manual/class-Camera.html https://docs.unity3d.com/Manual/MultipleCameras.html

