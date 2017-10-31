

**Symptoms**


- The API to get the baking type directly is not available.



**Cause**



The scripting API does not have a direct method to get the baking type of the lights configured in the scene.



**Resolution**



You can use the SerializedObject/SerializedProperty system and access the m\_Lightmapping property.



Example:


```
 
Light objLight;
SerializedObject serialObj = new SerializedObject(objLight);
SerializedProperty lightmapProp = serialObj.FindProperty("m_Lightmapping");
switch (lightmapProp.intValue) {
   case 1:
     Debug.Log ("Light set to Mixed.");
   break;
   case 2:
     Debug.Log ("Light set to Baked.");
   break;
   case 4:
     Debug.Log ("Light set to Realtime.");
   break;
}

```






**More Information**



This article applies to Unity versions 5.0+

