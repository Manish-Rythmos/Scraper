
        

 **Symptoms** 

*   I want to use a transparent WebGL canvas background.
*   I want to render WebGL content on top of other html elements, and show the other html elements through transparent parts of the WebGL content.

**Cause** 

The WebGL canvas is opaque by default, as the alpha information is not written into the framebuffer. That means that when the WebGL canvas is rendered, it will overwrite anything that is underneath it on the webpage.

**Resolution** 


The solution is to override the implementation of glClear to skip the step where Unity clears the alpha buffer, and instead leaving the values already on it, which allow you to have transparency in WebGL.

To do that, you need to do the following:  

1.  Create a ".jslib" file in your assets folder. This is an empty text file, with the ".jslib" extension. An example name could be "TransparentBackground.jslib".  

2.  Copy and paste the following code into the file you just created:  

var LibraryGLClear = {  
    glClear: function(mask)  
    {  
        if (mask == 0x00004000)  
        {  
            var v = GLctx.getParameter(GLctx.COLOR_WRITEMASK);  
            if (!v[0] && !v[1] && !v[2] && v[3])  
                // We are trying to clear alpha only -- skip.  
                return;  
        }  
        GLctx.clear(mask);  
    }  
};  
mergeInto(LibraryManager.library, LibraryGLClear); 


3. When you build your project the code will be used to replace the built-in LibraryGLClear method.

With this you will have a transparent canvas, allowing you to see through the canvas to the parts behind it in the website.  

The next step is to make sure your Shaders write the alpha information to the framebuffer. For this, you need to verify that "ColorMask RGBA" is being used. If you are using Surface shaders, it is possible that Unity will only use RGB. In that case, you need to:  

1.  Select the Surface shader asset in the Project view.
2.  Click on the "Show generated code" button. Unity will open the generated code for the surface shader.
3.  Copy or save that generated shader code into a new Shader file in the project.
4.  Change all instances of ColorMask RGB to ColorMask RGB **A**  **.** 

Another issue that may occur is that triangles written to the alpha channel can overlap and when doing that the alpha values of the objects in the background, which could be an opaque value, would be replaced by the new alpha values. This can make the objects transparent when they were originally opaque. To better illustrate this you can think of rendering a tree with many alpha blended leaves. Some leaves are rendered in front of other leaves. As the last leaves to be drawn would write their alpha information on the framebuffer to be transparent, the previously written transparency values of the other leaves in the background would be replaced. Therefore the background leaves would have opaque parts displayed as transparent.

To prevent this problem of the opaque pixels becoming transparent, you can set the Alpha out value in the Shader to be the maximum between the source and destination fragment using blending operations, like this:  

Blend SrcAlpha OneMinusSrcAlpha, One One  
BlendOp Add, Max  

**More Information** 

[http://docs.unity3d.com/Manual/SL-Pass.html](http://docs.unity3d.com/Manual/SL-Pass.html)

[http://docs.unity3d.com/Manual/SL-Blend.html](http://docs.unity3d.com/Manual/SL-Blend.html)

[http://forum.unity3d.com/threads/webgl-transparent-background.284699/](http://forum.unity3d.com/threads/webgl-transparent-background.284699/)


      