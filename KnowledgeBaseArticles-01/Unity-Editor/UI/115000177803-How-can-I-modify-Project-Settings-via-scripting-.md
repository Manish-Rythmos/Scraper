

**Symptoms**


- I want to access some properties from the Project Settings via scripting but there’s no API available for those properties.



**Cause**



There are some Project Settings properties that haven’t been implemented in the API yet or don’t need to be exposed to the average user as they could cause many different kinds of issues if they are not used properly.
 
**Resolution**



Most settings are managed via  **SerializedObjects**  (for example  **QualitySettings.asset** ), so if you know what properties you want to modify it's just a matter of finding the property and changing its value.



For example, if you want to change the built-in deferred Shader to a custom Shader (as seen in the image below), you’ll need to change the  **m\_Mode**  and  **m\_Shader**  sub-properties from the  **m\_Deferred**  property:



![](/hc/en-us/article_attachments/115000719603/Screenshot.png)



*Deferred custom shader*


```
using UnityEditor;

public class ModifyGraphicsSettings 
{
    [MenuItem("Custom/Set Custom Deferred Shader")]
    private static void ModifySettings()
    {
        const string GraphicsSettingsAssetPath = "ProjectSettings/GraphicsSettings.asset";
        SerializedObject graphicsManager = new SerializedObject(UnityEditor.AssetDatabase.LoadAllAssetsAtPath(GraphicsSettingsAssetPath)[0]);   
        SerializedProperty m_Mode = graphicsManager.FindProperty ("m_Deferred" + ".m_Mode");
        SerializedProperty m_Shader = graphicsManager.FindProperty("m_Deferred" + ".m_Shader");

        //None = 0,           Builtin = 1,            Custom = 2
 	m_Mode.intValue = 2;

        m_Shader.objectReferenceValue = Shader.Find("Custom/CustomShader");

        graphicsManager.ApplyModifiedProperties();
    }
}

```


The names of these properties can be found in the GraphicsSettings.asset file (as long as you have the Asset serialization mode set to [Force Text](https://docs.unity3d.com/Manual/class-EditorManager.html)).


```
GraphicsSettings:
  m_ObjectHideFlags: 0
  serializedVersion: 7
  m_Deferred:
    m_Mode: 1
    m_Shader: {fileID: 69, guid: 0000000000000000f000000000000000, type: 0}
  m_DeferredReflections:
    m_Mode: 1
    m_Shader: {fileID: 74, guid: 0000000000000000f000000000000000, type: 0}
  m_ScreenSpaceShadows:
    m_Mode: 1
    m_Shader: {fileID: 64, guid: 0000000000000000f000000000000000, type: 0}
  m_LegacyDeferred:
    m_Mode: 1
    m_Shader: {fileID: 63, guid: 0000000000000000f000000000000000, type: 0}
  m_DepthNormals:
    m_Mode: 1
    m_Shader: {fileID: 62, guid: 0000000000000000f000000000000000, type: 0}
  m_MotionVectors:
    m_Mode: 1
    m_Shader: {fileID: 75, guid: 0000000000000000f000000000000000, type: 0}
  m_LightHalo:
    m_Mode: 1
    m_Shader: {fileID: 105, guid: 0000000000000000f000000000000000, type: 0}
  m_LensFlare:
    m_Mode: 1
    m_Shader: {fileID: 102, guid: 0000000000000000f000000000000000, type: 0}
  m_AlwaysIncludedShaders:
  - {fileID: 7, guid: 0000000000000000f000000000000000, type: 0}
  - {fileID: 15104, guid: 0000000000000000f000000000000000, type: 0}
  - {fileID: 15105, guid: 0000000000000000f000000000000000, type: 0}
  - {fileID: 15106, guid: 0000000000000000f000000000000000, type: 0}
  - {fileID: 10753, guid: 0000000000000000f000000000000000, type: 0}
  - {fileID: 10770, guid: 0000000000000000f000000000000000, type: 0}
  - {fileID: 10782, guid: 0000000000000000f000000000000000, type: 0}
  m_PreloadedShaders: []
  m_SpritesDefaultMaterial: {fileID: 10754, guid: 0000000000000000f000000000000000,
    type: 0}

```


**More Information**



For further information, take a look at the following documentation:


- [SerializedObject script reference documentation](https://docs.unity3d.com/ScriptReference/SerializedObject.html)
- [Editor settings documentation](https://docs.unity3d.com/Manual/class-EditorManager.html)

