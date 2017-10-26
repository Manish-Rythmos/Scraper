
        

**Symptoms** 

*   You experience low FPS when using the Unity UI system.
*   You see repeated logs of Canvas.BuildBatch in the Profiler.
*   You need to optimize the UI.

**Cause** 

You have objects in the UI that change the Transform (position, rotation, scale) every frame, which causes a rebuild of the entire UI batch.

**Resolution** 

Separate dynamic objects from static objects.

If you have a large UI hierarchy with one or more objects that move every frame, you should consider separating the dynamic objects to their own dynamic canvas.

When you have objects that change the RectTransform every frame, this causes the canvas to perform a rebuild of the batch. The canvas rebuild process causes CPU spikes.

![](/hc/en-us/article_attachments/115000940506/Screenshot_1.png)

**How to check if you are rebuilding the UI** 

If you are using Xcode Instruments, look for **UI::Canvas::UpdateBatches** and **Canvas::RenderOverlays** on the call stack when you use the Time Profiler tool.

If you are using Unity Profiler, look for **Canvas.BuildBatch** and **Canvas.RenderOverlays** .

**Non-optimized** 

![](/hc/en-us/article_attachments/115000919343/Screenshot_2.png)

**Optimized** 

![](/hc/en-us/article_attachments/115000919363/Screenshot_3.png)

*The images above show the canvas performance with a dynamic object in the same canvas and after being isolated in a new canvas.* 

If you find that Canvas.BuildBatch is called every frame, you have a UI object that moves every frame.

**Example project:** 

Take a look at [this example project](http://files.unity3d.com/alejandro/CanvasDemo.zip) for more information. You can build for StandAlone and compare the Profiler results using the UI buttons.

Remember that when you split the canvas it will generate a batch for each new canvas, which will increase the draw calls. You need to balance the design between minimizing the cost of canvas rebuild and generating more batches. This means you need to profile this change to check if it improves your performance.

**Note:** Changing the value of a Text object will not perform a canvas rebuild.

**More Information** 

For more information, please consult the following:

*   [Fundamentals of Unity UI tutorial ](https://unity3d.com/learn/tutorials/topics/best-practices/fundamentals-unity-ui?playlist=30089)
*   [Fill-rate, Canvases and input tutorial ](https://unity3d.com/learn/tutorials/topics/best-practices/fill-rate-canvases-and-input)
      