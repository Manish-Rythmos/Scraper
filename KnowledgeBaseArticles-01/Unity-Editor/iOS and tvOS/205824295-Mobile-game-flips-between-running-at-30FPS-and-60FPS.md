**Symptoms**  You may notice one or more of the following symptoms:
- Your game is running at or above 60FPS, but has "hitches" or "hiccup" frames that drop down to 30 frames-per-second (FPS).
- When profiling a poor performing frame, you notice that WaitForPresent and/or Overhead is needlessly eating up time in your frame.
- If you are calculating your own FPS and you notice it dropping wildly on some frames or averaging out at 45FPS.

**Cause** 
 The short answer is that on iOS and Android you can only render at 60FPS or 30FPS (and lower), because on mobile devices a mandatory vertical synchronization when rendering is applied. The long answer is that the maximum screen update frequency on iOS/Android devices is 60Hz (60FPS). A device will never render more than 60 frames per second. Unlike other platforms there is no way from your application to unlock the frame rate so that your applications displays as fast as the device can render.

Android and iOS devices use [vertical synchronization](http://en.wikipedia.org/wiki/Vertical_synchronization#Vertical_synchronization) to update the screen contents at a fixed interval. This means that screen's contents will not be changed half-way through a frame and any rendering updates will only occur between two screen refreshes. This prevents the [screen tearing effect](http://en.wikipedia.org/wiki/Screen_tearing).



Vertical synchronization has another effect: if your game cannot prepare a frame buffer for display before the display needs to show another frame then the device renders the old frame buffer again, which essentially skips a frame. Unity then has to prepare the frame buffer within the next frame duration. If this cycle continues the result is a frame rate of 30 fps, as the frame buffer is updated only for every other screen refresh cycle.



This means the only frame rates possible on an mobile device are frame rates resulting from integer numbers divided by the screen refresh rate (60 Hz).

**Resolution** You have two main options to resolve the problem:1. Optimize your game so that it always runs at or faster then 60 frames per second all the time.2. Limit your application to 30FPS all the time, which can be done by setting [Application.targetFrameRate](http://docs.unity3d.com/ScriptReference/Application-targetFrameRate.html) to a value of 30.  **More Information**   **Properties** Tags: vsync, fpsLast Reviewed: 19/10/2015Written by: Paul PurcellApplies to: iOS devices and Android devices



