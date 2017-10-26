
        

**Symptoms** 

*   I want to get pixels from a Texture
*   I do not want to set the texture as "readable"

**Causes** 

In order to use [Texture2D.GetPixels](http://docs.unity3d.com/ScriptReference/Texture2D.GetPixels.html) you need to select "Read/Write Enabled" on [Texture Import Settings](http://docs.unity3d.com/Manual/class-TextureImporter.html) to enable access to the texture data from scripts. Sometimes you need to get pixels from a texture without having to set the texture as readable, similar to how the Unity Editor does it to get preview images from Textures.

**Resolutions** 

You can use a RenderTexture to do that, take a look at the following code:

 ***"texture" is the texture you want to read which is not marked as readable in importsettings:** * 

// Create a temporary RenderTexture of the same size as the texture  
RenderTexture tmp = RenderTexture.GetTemporary(   
                    texture.width,
                        texture.height,
                        0,
                        RenderTextureFormat.Default,
                        RenderTextureReadWrite.Linear);  

    // Blit the pixels on texture to the RenderTexture  
Graphics.Blit(texture, tmp);

// Backup the currently set RenderTexture  
RenderTexture previous = RenderTexture.active;

// Set the current RenderTexture to the temporary one we created
    RenderTexture.active = tmp;

// Create a new readable Texture2D to copy the pixels to it
    Texture2D myTexture2D = new Texture2D(texture.width, texture.height);

// Copy the pixels from the RenderTexture to the new Texture  
myTexture2D.ReadPixels(new Rect(0, 0, tmp.width, tmp.height), 0, 0);
    myTexture2D.Apply();

// Reset the active RenderTexture  
RenderTexture.active = previous;

// Release the temporary RenderTexture
    RenderTexture.ReleaseTemporary(tmp);  

// "myTexture2D" now has the same pixels from "texture" and it's readable.  

 **You can now get/set pixels from "myTexture2D".** 

**More Information** 

[http://docs.unity3d.com/ScriptReference/RenderTexture.GetTemporary.html](http://docs.unity3d.com/ScriptReference/RenderTexture.GetTemporary.html)
[http://docs.unity3d.com/ScriptReference/Graphics.Blit.html](http://docs.unity3d.com/ScriptReference/Graphics.Blit.html)
[http://docs.unity3d.com/ScriptReference/Texture2D.ReadPixels.html](http://docs.unity3d.com/ScriptReference/Texture2D.ReadPixels.html)

      