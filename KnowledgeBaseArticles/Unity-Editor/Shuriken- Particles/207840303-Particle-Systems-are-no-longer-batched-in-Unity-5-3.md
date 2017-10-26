
         **Symptoms** 

*   The particle systems in Unity 5.3 are not being batched correctly.

 **Cause** 

*   Since Unity 5.3.0, particle systems are no longer batched into single draw calls.
*   In Unity 5.3.4p2 and Unity 5.4.0B12, particle batching has been reintroduced.

 **Resolution** 

Unity 5.3.0 Notes:

This version of Unity introduced a new multi-threaded particle  *backend*  which does not allow for batching, but should provide better performance and it is used for calculating each of the particle's properties, positions/sizes, etc.

A lot more of Unity's code has been multi-threaded for 5.3, which means we can expect significant performance improvements on multi-core platforms, allowing us to have more particles for the same performance cost compared to previous versions.

We have seen examples of some systems being up to 5 times faster compared to previous versions of Unity, though the results will depend on the type of the effects that are being implemented.

Unity 5.3.4p2 Notes:

Dynamic batching for particles was reintroduced again in 5.3.4p2 and 5.4.0B12 with the exclusion of Mesh particles. Particle systems need to follow the same rules as mesh renderers to be batched and use the same material.

 **More Information** 

[http://forum.unity3d.com/threads/unity-5-3-1f1-particle-system-errors-invalid-aabb-result-isfinite-d.374926/page-5#post-2483824](http://forum.unity3d.com/threads/unity-5-3-1f1-particle-system-errors-invalid-aabb-result-isfinite-d.374926/page-5#post-2483824)

[https://unity3d.com/unity/whats-new/unity-5.3](https://unity3d.com/unity/whats-new/unity-5.3)

[http://forum.unity3d.com/threads/unity-5-3-static-batching-not-batch-draw-calls.372625/](http://forum.unity3d.com/threads/unity-5-3-static-batching-not-batch-draw-calls.372625/)

      