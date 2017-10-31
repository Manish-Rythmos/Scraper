        Symptoms:
- I have two RenderTextures with format RenderTexture.Depth, Graphics.Blit is not copying the depth values from one to the other.

Cause:

Graphics.Blit draws a quad with Z-Write off, so the depth will not be copied from one RenderTexture to another.

Resolution:

Create a "DepthBlit" Shader to sample and output the Depth Texture as depth values:



| **// Fragment function outputs depth from \_MyDepthTex to depth buffer** 
**half4 CopyDepthBufferFragmentShader(v2f i, out float outDepth : SV\_Depth) : SV\_Target** 
**{** 
**float depth = SAMPLE\_DEPTH\_TEXTURE(\_MyDepthTex, i.uv);** 
**outDepth = depth;** 
**`return&#xA0;0;}`**  |



The complete Shader is also in this article as an attachment. Note: the GPU needs to support GL\_FragDepth extension in order to output the depth, most GPUs do, but some older mobiles might not.



Then in C# create a Material and do the Blit using it:



| **// Create a Material that uses the DepthCopy Shader** 
**Material m\_DepthCopyMat = new Material(m\_DepthCopyShader);** 
 
**// Set the \_MyDepthTex Shader Texture to our source depth texture to be copied** 
**m\_DepthCopyMat.SetTexture("\_MyDepthTex", m\_SrcDepthTexture);** 
 
**// Do a Blit using the DepthCopy Material/Shader** 
**Graphics.Blit(m\_SrcDepthTexture, m\_DstDepthTexture, m\_DepthCopyMat);**   |

**More Information:**

If you do not want to copy the Depth Texture but instead want to have a valid depth buffer that can be shared between the Render Targets then you can use:



| **Graphics.SetRenderTarget(rendertexture.colorBuffer, depthRT.depthBuffer);**  |



before rendering a fullscreen quad for your blit.



Manual page on how to use depth textures in Unity: [https://docs.unity3d.com/Manual/SL-DepthTextures.html](https://docs.unity3d.com/Manual/SL-DepthTextures.html)



Information verified accurate for Unity 5.4.3p4.

