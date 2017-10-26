
        

**Symptoms** 

*   I modify a property via the scripting API. 
*   The scene is not made dirty.

**Cause** 

Scripting APIs do not use the undo mechanism nor mark the scene dirty by default. One can, however, enforce these behaviours.

**Resolution** 

There are two different options for solving this:

***Option 1:** * 

If you have access to the object itself you can use the **[Undo.RecordObject](https://docs.unity3d.com/ScriptReference/Undo.html)** method before setting the property from the script.

<table>
<tbody>
<tr>
<td>**Undo.RecordObject (myGameObject.transform, "Zero Transform Position");** 

**myGameObject.transform.position = Vector3.zero;** 

</td>
</tr>
</tbody>
</table>

An example showing using how the scene is marked dirty with Undo.RecordObject is attached to [**this article.** ](/hc/article_attachments/115007423746/dirtyScene%20Article.zip)

**![UndoRecordObject.png](/hc/article_attachments/115007423926/UndoRecordObject.png)** 

***Option 2:** * 

One can also mark the scene as dirty manually using:

<table>
<tbody>
<tr>
<td>

**EditorSceneManager.MarkSceneDirty** 

</td>
</tr>
</tbody>
</table>

after setting a property from script.

<table>
<tbody>
<tr>
<td>

**LightmapEditorSettings.bakeResolution = 14;** 

**EditorSceneManager.MarkSceneDirty(EditorSceneManager.GetActiveScene());** 

</td>
</tr>
</tbody>
</table>

**More information** 

**[Undo](https://docs.unity3d.com/ScriptReference/Undo.html)** 

**[EditorSceneManager](https://docs.unity3d.com/ScriptReference/SceneManagement.EditorSceneManager.html)** 

      