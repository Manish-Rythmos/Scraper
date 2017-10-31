**Symptoms**

- I would like to enter Play Mode with F5 key.

**Cause**  
There is no one-key keyboard shortcut to enter Play Mode and you can not intercept built-in Unity keyboard shortcuts.  

**Resolution** 
You can define your own keyboard shortcuts to do what you want. In the sample Editor script below, you can see how to detect the F5 key and enter Play Mode. 
```
using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;

public class EditorShortCutKeys : ScriptableObject {
    [MenuItem("Edit/Run _F5")] // shortcut key F5 to Play (and exit playmode also)
    static void PlayGame() {
        if (!Application.isPlaying) {
            EditorSceneManager.SaveScene(SceneManager.GetActiveScene(), "", false);
        }
        EditorApplication.ExecuteMenuItem("Edit/Play");
    }
}

```

  **More Information**
  [http://answers.unity3d.com/questions/1204247/intercept-ctrl-s-keyboard-shortcut-in-editor-for-c.html#answer-1204307](http://answers.unity3d.com/questions/1204247/intercept-ctrl-s-keyboard-shortcut-in-editor-for-c.html#answer-1204307)
[https://unity3d.com/learn/tutorials/topics/interface-essentials/unity-editor-extensions-menu-items](https://unity3d.com/learn/tutorials/topics/interface-essentials/unity-editor-extensions-menu-items)       