

**Symptoms**


- In the Memory Profiler, I can see two references to a Mesh but there's only one instance of it in the Scene.



![](/hc/en-us/article_attachments/115000842566/Screenshot_1.png)



**Cause**



This happens when models are imported with the  **Read/Write Enabled**  flag.



![](/hc/en-us/article_attachments/115000842606/Screenshot_2.png)



Making a Mesh readable will keep an additional copy of it in system memory (the original reference and the copy for scripting access). 

There are other reasons for Unity to keep the additional copy in the system memory regardless of whether the flag is enabled or not (but it will always keeps a reference in video memory):


- If the Mesh used as a  **Skinned Mesh** .
- If the Mesh is a candidate for dynamic batching.
- A particle system uses the Mesh as an emitter.



In certain cases when the Mesh is used with a Mesh Collider, this option also needs to be enabled. These cases include:


- Negative scaling (for example (-1, 1, 1))
- Shear transform (for example when a rotated Mesh has a scaled parent transform).



**Resolution**



Unless you need to access the vertex data for the Mesh or any of your Meshes meet one of the conditions above, setting this flag to false will save you some memory (you can check if a Mesh is readable via scripting by using  **Mesh.isReadable** ).

If you only want to update a Mesh once or don’t want to modify it any more you can call  **Mesh.UploadMeshData(true)** , which makes the Mesh data unreadable from the script and frees up the system memory copy of the data.

Keep in mind that Meshes that are not marked as readable will throw an error when accessing any data arrays from a script at runtime. 

**More Information**



For more information, consult the following documentation:


- [ModelImporter.isReadable script reference documentation](https://docs.unity3d.com/ScriptReference/ModelImporter-isReadable.html)
- [Mesh.isReadable script reference documentation](https://docs.unity3d.com/ScriptReference/Mesh-isReadable.html)
- [Mesh.UploadMeshData script reference documentation](https://docs.unity3d.com/ScriptReference/Mesh.UploadMeshData.html)

