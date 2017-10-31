

**Symptoms**


- There are many empty slots in my new material using the Standard Shader
- Materials appear not to be benefiting from the visual fidelity possible with Physically Based Shader rendering (PBS) e.g. materials look flat, lacking in contrast or reflectivity properties.



**Cause**



It may be that the textures you have used do not have physically based colour values to match and key in with the PBS system applied by the standard shader.



**Resolution**



Please try to generate or derive your textures from colour values that match real world values. These can be either hand painted in a paint package, pasted from photographs and worked into to remove light information, adjusting values, or rendered out from a high res model in your 3D package. You can look up these values from the following [charts](http://docs.unity3d.com/Manual/StandardShaderMaterialCharts.html).



You can also try using further textures with values from the charts to apply surface parameters such as:



 - Normal Maps
 - Specular or Metallic
 - Smoothness




**More Information**



This article applies to Unity versions 5.0+



More information about the Standard Shader and PBS systems can be found in [this blogpost](http://blogs.unity3d.com/2015/02/18/working-with-physically-based-shading-a-practical-approach/).

