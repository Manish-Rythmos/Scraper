
        

**Symptoms** 

*   My scene contains a group of static Mesh Renderers and a dynamic/ non-static Mesh Renderer. For some reason, the static Meshes are being split into separate draw calls.

**Cause**  

Unity does a rough front-to-back sort for opaque objects, to increase GPU efficiency. This change can result in more batches (more CPU work).

**Resolution** 

If you know your application is more CPU-bound, then turning this behaviour off might be useful, e.g. "Camera.main.opaqueSortMode = UnityEngine.Rendering.OpaqueSortMode.NoDistanceSort;"

Please note that this sorting is done by the CPU, and only if it will benefit the GPU, for example this is off by default when on PowerVR/Apple GPUs because the geometry already gets sorted front-to-back by the GPU.  

**More Information** 

[Camera.opaqueSortMode](https://docs.unity3d.com/ScriptReference/Camera-opaqueSortMode.html)

This article applies to Unity version 5.x

      