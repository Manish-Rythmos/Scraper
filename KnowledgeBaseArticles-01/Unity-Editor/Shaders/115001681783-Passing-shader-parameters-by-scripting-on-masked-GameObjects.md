

**Symptoms**


- The shader behaves as expected in most cases, but when used with a  **masked UI component** , the values from  **SetColorArray/SetColor/Set&ast;**  are not being passed through to the shader.


- The shader seems to be ignoring my custom parameters sent by scripting when  **Masked** .



**Cause**



Masks use a method called  **GetModifiedMaterial**  to calculate which pixels are masked using the Stencil buffer. It ignores all custom parameters sent by your scripts as it applies the custom shader by scripting using defaults.  When you set the parameters using the setter functions (as  **SetColorArray** ) they will be set momentarily. Before rendering pixels on the screen however, the Mask component will call the method  **GetModifiedMaterial**  on each masked object and will use the default settings in your material. It will ignore your custom settings.



**Resolution**



To solve this problem, you have to extend the Image class ( **UI.Image** or  **UI.RawImage** ) and override the method  **GetModifiedMaterial** .  By doing this you can apply the mask first, to view which pixels are visible, and then send the custom values to the shader.  For example, to create a menu button with highlight effect (which has our custom shader) masked by a frame, follow these steps


1. Create a frame (Canvas) and put your buttons inside.
2. Create a shader which accepts custom parameters as the Highlight color



Shader "Test/CustomShader"



{



Properties



{



\_Color ("Color", Color) = (1,1,1,1)



\_MainTex ("Albedo (RGB)", 2D) = "white" {}



}







SubShader



{



Tags { "RenderType"="Opaque" }



LOD 150







CGPROGRAM



#pragma surface surf Lambert







sampler2D \_MainTex;



fixed4 \_Color;







struct Input



{



float2 uv\_MainTex;



};







void surf (Input IN, inout SurfaceOutput o)



{



half4 tmpTexColor = tex2D (\_MainTex, IN.uv\_MainTex);







// Albedo comes from a texture tinted by color



half4 color = tmpTexColor &ast; \_Color;



o.Albedo = color.rgb;







o.Alpha = color.a;



}



ENDCG



}



FallBack "Mobile/Diffuse"



}


1. Create a new Material called “CustomMaterial” which uses the Shader created above.
2. Attach the Material to the Button component.  **bMaterial** will load our shader later in our script.
3. Attach a Mask component to the frame container.
4. Create a script ( **CustomRawImage.cs)**  with the following code:



using UnityEngine;



using System.Collections;



using UnityEngine.UI;



public class CustomRawImage : RawImage



{



public override Material GetModifiedMaterial(Material bMaterial)



{



*// Apply the mask.*



Material tmp = base.GetModifiedMaterial (bMaterial);







*// Pass your custom shader parameters.*



tmp.SetColor("\_CustomColor",[ Color.red](https://docs.unity3d.com/ScriptReference/Color-red.html));







*// return the material with Mask + Customs applied.*



return tmp;



}



}


1. Replace the  **Image/RawImage**  component on all your buttons with this  **CustomRawimage**  script component.



The property **bMaterial**  is the material attached to each button. As it is your highlight shader effect, you can replace It by another different material if needed.



**More Information**


- [https://docs.unity3d.com/Manual/MaterialsAccessingViaScript.html](https://docs.unity3d.com/Manual/MaterialsAccessingViaScript.html)
- [https://docs.unity3d.com/ScriptReference/Material.html](https://docs.unity3d.com/ScriptReference/Material.html)

