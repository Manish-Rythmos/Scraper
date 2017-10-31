

**Symptoms**


- I am calling StaticBatchingUtility.Combine on some meshes, but do not see them getting batched as expected.
- I am statically batching meshes in the Editor, but do not see them getting batched as expected.



**Cause**



One or more of the following cases may be the reason your meshes are not batching as expected:


1. If one of the meshes you are attempting to combine does not share the same material as the other(s).
2. If any of the  *GameObjects*  are not  **[marked Static](https://docs.unity3d.com/Manual/StaticObjects.html)**  in the Inspector window.
3. If there is no mesh instance on one of the  *GameObjects*  getting combined.
4. If the mesh renderer is  *null*  or disabled on any mesh in the batch.
5. If the object is already been combined with another mesh batch.
6. If any of the materials shader is using DisableBatching tag.
7. If the vertex count of the mesh is zero.
8. If the maximum number of vertices in the combine batch exceeds 64000. Unity will only do batches of 64k vertices or less, for example if you have 128001(64000x2 + 1) verts it will create 3 batches.



**Resolution**



Try to determine which of the above situations applies to your project and correct it. If none seem to apply please continue to these troubleshooting steps:


1. Make sure you are evaluating your static batching in play mode, static batching works by combining the meshes at build time or runtime with StaticBatchingUtility.Combine.
2. There is always the chance you are experiencing a bug in Unity and we have had bugs that have broken batching unnecessarily in the past. If all else fails please backup your project and try it in a newer version of Unity.
3. In some rare cases meshes with different baked lightmaps will not batch, this generally will not occur as lightmaps will be packed in such a way to avoid this. In some cases when using many different meshes, with separate Levels Of Detail they may have different lightmaps, which may not batch across different LODs.
4. If you are still experiencing issues with static batching, try opening the [Unity Frame Debugger](https://docs.unity3d.com/Manual/FrameDebugger.html) (in Play mode), and taking a look at the individual draw calls and which meshes they are on. Take a look at the different materials and render passes the draw calls occur on and try to determine what is different. For instance when looking at two meshes you expect to be batched, does one occur in a different render pass? Does one have a lightmap on it and the other does not?



**More Information**



For more information see the links below:


- [https://docs.unity3d.com/Manual/DrawCallBatching.htm](https://docs.unity3d.com/Manual/DrawCallBatching.html)
- [http://answers.unity3d.com/questions/961906/problem-with-draw-calls.html](http://answers.unity3d.com/questions/961906/problem-with-draw-calls.html)
- [http://forum.unity3d.com/threads/draw-calls-vs-batches-optimization-unity-5.318704/](http://forum.unity3d.com/threads/draw-calls-vs-batches-optimization-unity-5.318704/)
- [https://support.unity3d.com/hc/en-us/articles/207535646-Some-of-my-static-batching-is-being-split-into-separate-batches](https://support.unity3d.com/hc/en-us/articles/207535646-Some-of-my-static-batching-is-being-split-into-separate-batches)



This article applies to Unity versions 5.x.

