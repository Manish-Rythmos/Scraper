

**Symptoms**


- Objects may appear in unexpected depths
- Order in Layer is ignored i.e. in Sprite Renderer



**Causes**



This might have occurred for a couple of reasons:


- By using an Editor or Runtime script that intentionally overrides the [Material.renderQueue](http://docs.unity3d.com/ScriptReference/Material-renderQueue.html) of the material. This material could then be duplicated or reused in another project expecting that the RenderQueue is inherited by the Shader's RenderQueue. For example:

```
gameObject.GetComponent<Renderer>().sharedMaterial.renderQueue = 2000;
```
- By using an older version of Unity (prior to 5.1.3, see More Information below), which did not reset the Material RenderQueue when a new Shader was assigned to the material.



**Resolution**



Reset Material RenderQueue to the Shader RenderQueue.

The following Editor script goes through all the Materials in the project and sets the Material RenderQueue to the Shader RenderQueue:


```
using UnityEditor;
using UnityEngine;

public class ResetMaterialsRenderQueue
{[MenuItem ("Assets/Reset Materials RenderQueue")]static void DoResetMaterialsRenderQueue(){
        Material[] materials = (Material[])Resources.FindObjectsOfTypeAll(typeof(Material));
    int materialsLength = materials.Length;
    for (int i = 0; i < materialsLength; ++i)    {        if (materials[i].shader != null)        {            materials[i].renderQueue = materials[i].shader.renderQueue;        }    }  }
}

```


**More Information** 
[Release notes for 5.1.3](https://unity3d.com/unity/whats-new/unity-5.1.3) - Graphics: Switching shaders in the material inspector should reset the material's RenderQueue to default.
This article applies to Unity versions 5.2+



**Further Instructions**


- Download the file below
- Unzip into Assets/Editor folder
- In Unity Editor, go to Assets and select Reset Materials RenderQueue

