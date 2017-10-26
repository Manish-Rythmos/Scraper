
        

**Symptoms** 

*   Assignment of textures to Material via code does not update the material. It is necessary to open the Material in the Inspector tab.

**Cause**   
If you use scripting to change a Material that would cause it to use a different variant of the Standard Shader.

For example assigning a Normal Map to a Material that did not have one, or setting the Emissive level to a value greater than zero, when it was previously zero.

**Resolution**   
You must enable the Standard Shader variant by using the EnableKeyword function. A different variant would be required if you start using a shader feature that was not initially in use by the material. 

The specific Keywords required to enable the Standard Shader features are as follows:  
_NORMALMAP (Normal Mapping)  
_ALPHATEST_ON (“Cut out” Transparency Rendering Mode)  
_ALPHABLEND_ON (“Fade” Transparency Rendering Mode)  
_ALPHAPREMULTIPLY_ON (“Transparent” Transparency Rendering Mode)  
_EMISSION (Emission Colour or Emission Mapping)  
_PARALLAXMAP (Height Mapping)  
_DETAIL_MULX2 (Secondary “Detail” Maps (Albedo & Normal Map)  
_METALLICGLOSSMAP (Metallic/Smoothness Mapping in Metallic Workflow)  
_SPECCGLOSSMAP (Specular/Smoothness Mapping in Specular Workflow)

**More Information** 

Please see our [Manual](http://docs.unity3d.com/Manual/MaterialsAccessingViaScript.html) for more information.

This articles applies to Unity versions 5.0+

      