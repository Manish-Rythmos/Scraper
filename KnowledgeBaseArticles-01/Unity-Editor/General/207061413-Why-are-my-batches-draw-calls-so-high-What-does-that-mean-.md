

**Symptoms**


- I am drawing a lot of objects and the game is running slow
- I am seeing a high CPU overhead



**Cause**



Every object that is visible in a scene is sent by Unity to the GPU to be drawn, using the select graphics API for the current platform. This can be expensive if you have a lot of objects in your scenes, as in that case the requests made to the GPU will be very high. These are usually called draw calls. 

In modern hardware, draw calls are actually very cheap. What makes the draw calls a problem however, are the changes that the renderer (render states) has to go through when drawing objects. These changes are related to the configuration that the GPU needs to use to render a given object, for instance, the material, textures and shaders used by each object that we want to render from the scene. When these settings don't change between draw calls, the draw call takes little time to execute, compared to when the settings do change.  If there are a lot of objects that do not share the same material, texture, shader etc. then Renderer has to change its state to draw the next object, and the draw calls become expensive and take more time to execute.



**Resolution**



It is important to know what are draw calls and what are batches.  A draw call is a call to the graphics API to draw objects (e.g draw a triangle), while a batch is a group of draw calls to be drawn together. Batching objects to be drawn together, minimizes the state changes needed to draw each object inside the batch. This is turn leads to improved performance by reducing the CPU cost of rendering the objects.



Unity groups in batches the objects to be drawn in two ways: Dynamic Batching and Static Batching. Only objects that share properties like textures or materials can be batched together.



Static batching is the recommended batching technique for objects that do not move and it render batched objects very fast. It has a trade off regarding memory, as the meshes need to be combined into a single larger mesh, which is made of the union of all the smaller individual meshes in the scene that are marked as static and meet the criteria to be batched together.  To do static batching, you need your objects to be static, thus mark them as static in the inspector. 

Dynamic batching on the other hand, tries to optimize the way non-static objects are rendered, by this transforming their vertices on the CPU, grouping many similar vertices together, and drawing them all in one go. It's limited to small meshes, as batching larger meshes dynamically is more expensive than not batching them.

To learn more about how to batch objects or what are draw calls please see the official documentation [here](http://docs.unity3d.com/Manual/DrawCallBatching.html).



**More Information**



For more information see the links below:


- [http://forum.unity3d.com/threads/what-are-draw-calls.27416/](http://forum.unity3d.com/threads/what-are-draw-calls.27416/)
- [http://answers.unity3d.com/questions/961906/problem-with-draw-calls.html](http://answers.unity3d.com/questions/961906/problem-with-draw-calls.html)
- [http://answers.unity3d.com/questions/295503/draw-calls.html](http://answers.unity3d.com/questions/295503/draw-calls.html)
- [http://forum.unity3d.com/threads/draw-calls-vs-batches-optimization-unity-5.318704/](http://forum.unity3d.com/threads/draw-calls-vs-batches-optimization-unity-5.318704/)



This article applies to Unity versions 5.x





