
        

**Symptoms** 

*   I have some UI shaders and noticed there is `ZTest [unity_GUIZTestMode]` inside them.
*   How do I set the ZTest compare function from outside of the shader?
*   I encountered the following line in one of the shaders we are using: `ZTest [unity_GUIZTestMode]`

**Cause** 

`ZTest [unity_GUIZTestMode]` is used in some built-in UI shaders and is set depending on the Canvas type just before a Canvas is rendered.

**Resolution** 

``If you are creating custom shaders/materials for UI components you will need to add ``ZTest [unity_GUIZTestMode]` in your shader` so the ZTest is automatically set correctly for each Canvas (LEqual, unless the Canvas is set to Screen Space Overlay, which sets it to Always). This should not be set manually as undefined behavior could occur. If this is not for a UI component or if you just want to be able to control the ZTest compare function from outside of a shader then you could create a property instead:

``

<table>
<tbody>
<tr>
<td>

        **// In shader
        ZTest [_myCustomCompare]
        
// In C# script
        m_Material.SetInt("_myCustomCompare", (int)UnityEngine.Rendering.CompareFunction.LessEqual)** ;

</td>
</tr>
</tbody>
</table>

[**An example of this can be found attached to the article here.** ](/hc/article_attachments/115007586743/unity_GUIZTestMode.zip)

**More Information** 

Information verified accurate for Unity 5.5.0f3 - 5.6.0f3.

      