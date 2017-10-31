

**Symptoms**


- The app content does not appear as I want on Retina display devices when I use the WebGL build.
- The Canvas content appears pixelated in WebGL.
- The Canvas content looks weird (stretched or squashed).



**Cause**



The browser will increase the size of the Canvas automatically, but its content will keep its size, showing some anti-aliasing errors.



**Resolution**



A Canvas element in HTML has two different sizes properties and we should use them to adapt our content to High Resolution Screens (Retina included).


1. The Canvas size is the size the Canvas element will be displayed on your screen (on the page), and we can change this value using CSS attributes width & height:



***<canvas id="CanvasTest" style="width: 400px; height: 300px;" ...></canvas>***


1. The Canvas Contents size is how many pixels are in the Canvas, and we can modify this value  changing the Canvas attributes width and height (in pixels).  This size is called  **drawingBuffer** .



***<canvas id="CanvasTest" width="100" height="150" ...></canvas>***



If you do not use the CSS properties to set the Canvas Size, the Canvas size will take the  **drawingBuffer**  size, so in the second example, the Canvas Content size is set to 100x150 (px), and the Canvas size will be set to 100x150 (px) as well.



***Setting the Canvas size and fixing the Canvas Content size***



We can use these properties to set our content as needed, for example, we can change the Canvas size to fill all browser size using this:



*<style>*



*body*



*{*



*margin: 0;*



*border: 0;*



*padding: 0;*



*background-color: white; // It depends of your project.*



*}*



*canvas*



*{*



*width: 100%;*



*height: 100%;*



*position: absolute;*



*}*



*</style>*



We can set the app to full-screen using this code in a callback triggered by some Input event in C# code



***void OnClickEvent ()***



***{***



***Screen.fullScreen = true;***



***}***



Please check these links to get more details of this:


- https://docs.unity3d.com/Manual/webgl-cursorfullscreen.html
- https://docs.unity3d.com/ScriptReference/Screen-fullScreen.html



To make the Canvas Content size match with the Canvas size, we use the properties clientWidth and clientHeight and assign the width & height Canvas properties like this:



***canvas.width = canvas.clientWidth;***



***canvas.height = canvas.clientHeight;***



We can use this snippet in a resize callback in JS.



***Handling the DPI property on Retina displays.***



Finally, we have some cases where our app should run on Retina display devices such as the Macbook Pro with Retina display or mobile devices with Retina display.  On these cases, we have to manage the High Pixel Densities (DPI).  Unity does not have an internal option or setting to set this property, but we can fix it using JS.



The browser will increase the size of the Canvas automatically, but its content will keep its size giving us some anti-aliasing errors. To fix that, we can use the property devicePixelRatio (window.devicePixelRatio) to know how many real pixels that fill 1 CSS pixel and change our resize callback function to something like:



***canvas.width = canvas.clientWidth &ast; window.devicePixelRatio;***



***canvas.height = canvas.clientHeight &ast; window.devicePixelRatio;***



With these two lines, the content will match with our high-resolution device (even Retina) and your content will look as intended.



**More Information**



https://docs.unity3d.com/Manual/webgl-cursorfullscreen.html
https://docs.unity3d.com/ScriptReference/Screen-fullScreen.html

