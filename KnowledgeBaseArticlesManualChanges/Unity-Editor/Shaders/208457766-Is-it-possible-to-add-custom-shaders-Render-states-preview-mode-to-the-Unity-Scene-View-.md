**Symptoms**  

- I would like to know if it is possible to add custom shaders / Render states preview mode to the Unity Scene View

**Cause** 
You may want to use a custom shader on "Scene View" for debugging.   

**Resolution** 
Currently, you cannot add a new option into the Render Mode drop-down menu on Scene View. You can however use a  ***MenuItem***  to add your custom shaders and the function  ***SetSceneViewShaderReplace***  to load them on Scene View.   With this snippet, you can load your custom shader on Scene View: 
```
[MenuItem("Tools/Custom Render Mode on SceneView")]
static void SceneViewCustomSceneMode() 
{
         SceneView.currentDrawingSceneView.SetSceneViewShaderReplace(Shader, null);
}
```
 Now, to reset the render mode, you can use: 
```
[MenuItem("Tools/Clear SceneView")]
static void SceneViewClearSceneView() 
{
         SceneView.currentDrawingSceneView.SetSceneViewShaderReplace(null, null);
}
```
**More Information** 
This article applies to Unity versions 4.1+More information about  ***SetSceneViewShaderReplace***
- forums: [http://forum.unity3d.com/threads/shader-replacement-problems.192520/](http://forum.unity3d.com/threads/shader-replacement-problems.192520/)
- Unity Answers: [http://answers.unity3d.com/questions/454091/how-to-reset-shader-replacement-in-scene-view.html](http://answers.unity3d.com/questions/454091/how-to-reset-shader-replacement-in-scene-view.html)

