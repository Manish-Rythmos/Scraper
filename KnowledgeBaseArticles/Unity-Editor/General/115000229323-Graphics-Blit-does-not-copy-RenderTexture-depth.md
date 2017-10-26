
        Symptoms:

*   I have two RenderTextures with format RenderTexture.Depth, Graphics.Blit is not copying the depth values from one to the other.
Cause:

Graphics.Blit draws a quad with Z-Write off, so the depth will not be copied from one RenderTexture to another.

Resolution:

Create a "DepthBlit" Shader to sample and output the Depth Texture as depth values:

<table>
<tbody>
<tr>
<td>**// Fragment function outputs depth from _MyDepthTex to depth buffer**   
**half4 CopyDepthBufferFragmentShader(v2f i, out float outDepth : SV_Depth) : SV_Target**   
**{**   
**float depth = SAMPLE_DEPTH_TEXTURE(_MyDepthTex, i.uv);**   
**outDepth = depth;**   
**``** </td>
</tr>
</tbody>
</table>

The complete Shader is also in this article as an attachment. Note: the GPU needs to support GL_FragDepth extension in order to output the depth, most GPUs do, but some older mobiles might not.

Then in C# create a Material and do the Blit using it:

<table>
<tbody>
<tr>
<td>**// Create a Material that uses the DepthCopy Shader**   
**Material m_DepthCopyMat = new Material(m_DepthCopyShader);**   

**// Set the _MyDepthTex Shader Texture to our source depth texture to be copied**   
**m_DepthCopyMat.SetTexture("_MyDepthTex", m_SrcDepthTexture);**   

**// Do a Blit using the DepthCopy Material/Shader**   
**Graphics.Blit(m_SrcDepthTexture, m_DstDepthTexture, m_DepthCopyMat);**  </td>
</tr>
</tbody>
</table>
 **More Information:** 

If you do not want to copy the Depth Texture but instead want to have a valid depth buffer that can be shared between the Render Targets then you can use:

<table>
<tbody>
<tr>
<td>**Graphics.SetRenderTarget(rendertexture.colorBuffer, depthRT.depthBuffer);** </td>
</tr>
</tbody>
</table>

before rendering a fullscreen quad for your blit.

Manual page on how to use depth textures in Unity: [https://docs.unity3d.com/Manual/SL-DepthTextures.html](https://docs.unity3d.com/Manual/SL-DepthTextures.html)

Information verified accurate for Unity 5.4.3p4.

      