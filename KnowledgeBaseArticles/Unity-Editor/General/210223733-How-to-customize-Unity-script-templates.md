
        
 **Symptoms** 

*   When I create a new script, the Unity Editor generates its content. For C# scripts it uses the file name as the class name.

 **Cause** 

Scripts templates are stored in %EDITOR_PATH%\Data\Resources\ScriptTemplates.

 **Resolution** 

When you are creating a new script, the Unity Editor generates its content. For C# scripts it uses the file name as the class name. Please see the example below:

using UnityEngine;
    using System.Collections;
    
public class MyCustomScript : MonoBehaviour {
    
    // Use this for initialization
        void Start () {

        }

        // Update is called once per frame
        void Update () {

        }
    }

If you want to change the initial script, you can modify the script templates stored here:

*   Windows:  *C:\Program Files\Unity\Editor\Data\Resources\ScriptTemplates* 
*   Mac:  */Applications/Unity/Editor/Data/Resources/ScriptTemplates* 
*   *Mac (since 5.2.1f1): /Applications/Unity/Unity.app/Contents/Resources/ScriptTemplates* 

In this directory you will find several template files:

81-C# Script-NewBehaviourScript.cs.txt
    82-Javascript-NewBehaviourScript.js.txt
    83-Shader__Standard Surface Shader-NewSurfaceShader.shader.txt
    84-Shader__Unlit Shader-NewUnlitShader.shader.txt
    ...

If you would like to have a different C# script template just edit the  *81-C# Script-NewBehaviourScript.cs.txt * file and leave the rest as it is.

The mentioned file content looks like this (by default):

using UnityEngine;
    using System.Collections;

    public class #SCRIPTNAME# : MonoBehaviour {

        // Use this for initialization
        void Start () {

        }

        // Update is called once per frame
        void Update () {

        }
    }

You can change anything you want within the script, but remember to leave  *#SCRIPTNAME#* where it is. Without it, your template class name will not change and a new script file will be generated with an incorrect class name.

Here is an example how the modified C# template may look: 

/*
     * Modified template by Unity Support.
     */

    using UnityEngine;

    public class #SCRIPTNAME# : MonoBehaviour
    {
        #region Public Fields
        #endregion

        #region Unity Methods
        void Start()
        {
        }

        void Update()
        {
        }
        #endregion

        #region Private Methods
        #endregion
    }

After modifying the template files, please relaunch your Unity Editor to apply these changes.

Be sure to back up your original template files and the modified ones. Original files will be needed if your template is not recognized correctly – you will have to start again if that happens. Make a copy of your modified template somewhere outside the Unity directory. When you upgrade your Unity version, the template files will be overwritten and you will need to copy and replace these again with your custom templates.


 **More Information** 

[http://blog.theknightsofunity.com/customize-unity-script-templates/](http://blog.theknightsofunity.com/customize-unity-script-templates/)


      