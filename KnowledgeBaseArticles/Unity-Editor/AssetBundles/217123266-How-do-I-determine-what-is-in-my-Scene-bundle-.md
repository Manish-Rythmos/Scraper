
        

**Symptoms** 

*   You have a built Scene bundle but you are not sure what was included in the bundle. 
*   You have a built Scene bundle that is larger than expected and need to understand why it’s the size that it is.

**Cause** Scenes in Unity are treated as a collection of serialized objects before they are put into a bundle. This means that, when the Scene is added to a bundle, it is included as a serialized Scene object and is listed as **<SceneName>.unity** in the Asset bundle manifest. This makes it difficult to find individual objects included in that serialized Scene object.

**Resolution** **Note: ** The below applies to installations of Unity 5.4 or later.

You need to use two different tools found in the Unity installation to unpack a Scene bundle and find out exactly what is inside.

You can find these tools in the following default install locations on each platform:

**Windows:**   
*C:\Program Files\Unity\Editor\Data\Tools* 

**Mac OSX:**   
*/Applications/Unity/Unity.app/Contents/Tools* 

First use **WebExtract** , which extracts the Scene bundle into an uncompressed data folder. Next use **binary2text** , which converts the Scene bundle into a human-readable format.

These are command line tools, and will need to be run from your command prompt or terminal window. First of all, run a change directory command to the directories above.

**Example:**   
**1.** Run the following:  
*cd /Applications/Unity/Unity.app/Contents/Tools* 

**2.** Run webextract:  
*WebExtract <FilePathToSceneBundle>* 

This will extract the data to a folder called whatever your Scene bundle name is with _data appended (for example **YourSceneBundleName_data** ).

**3.** Run binary2text:  
*binary2text YourSceneBundleName_data/BuildPlayer-SceneBundleName"* 

This will produce a text file containing all of the serialized object information for objects included in the Scene bundle. Each object in the text file will look something like this:

![](/hc/en-us/article_attachments/210997783/lightprobe.png)

The ID number in this object is the index of the object in the Scene bundle.

The class ID is the number used to reference the type of class the object is - see [Class ID reference documentation](https://docs.unity3d.com/Manual/ClassIDReference.html) for more information.

The binary2text tool also provides the text for the class ID (which in the above example is **LightProbes** ). You can find each variable in the object listed with its value and type, for example:

*   **m_Name**  is the variable name
*   **“”**  is the value 
*   **(string)**  is the type

You can break down every variable in this way with array types listed with indents.

Using this text file, you should be able to determine exactly what is in your Scene bundle.

**More Information**   
If you need to see the Assets included in a non-Scene bundle, you can open the manifest file (.manifest), which is generated in the same root folder as the Asset bundle. Inside the manifest file you will find a list of Assets under the **Assets: ** scope.

The screenshot below shows what a manifest file looks like. Note that you can see “ **Assets/MyImageName.png** ” under the **Assets:** scope - this is the filepath to the Asset included in this bundle. Each Asset included in the bundle will be listed here. 

![](/hc/en-us/article_attachments/115000619186/Manifest_FIle.png)

You can also load the bundle and each object from the bundle to see exactly what’s inside it.

See the [AssetBundle API](https://docs.unity3d.com/ScriptReference/AssetBundle.html) and [AssetDataBase API](https://docs.unity3d.com/ScriptReference/AssetDatabase.html) for more utility functions.


      