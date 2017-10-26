
        

**Symptoms** 

*   I want to read and write data from a text file that can be in a specific directory or among my other Assets.

**Resolution** 

If you don’t want to read the file from a directory, you can assign the Asset directly from the Editor using an exposed property of type TextAsset (as you can see in Figure 1) and get the text of the file the using the TextAsset.text property.

![](/hc/en-us/article_attachments/115000827843/Screenshot.png)

*Figure 1. Text file assigned to a TextAsset* 

Another way to read and write data from a text file that’s in a specific directory is to use the **StreamWriter** and **StreamReader** classes from the **System.IO** namespace to access characters from a byte stream and then load the file as a **TextAsset** in Unity.

The following example Editor script prints the data from a file (if it exists) or writes text to a file in the specified path.

using UnityEngine;
    using UnityEditor;
    using System.IO;
    
public class HandleTextFile
    {
        [MenuItem("Tools/Write file")]
        static void WriteString()
        {
            string path = "Assets/Resources/test.txt";
    
        //Write some text to the test.txt file
            StreamWriter writer = new StreamWriter(path, true);
            writer.WriteLine("Test");
            writer.Close();
    
        //Re-import the file to update the reference in the editor
            AssetDatabase.ImportAsset(path); 
            TextAsset asset = Resources.Load("test");
    
        //Print the text from the file
            Debug.Log(asset.text);
        }
    
    [MenuItem("Tools/Read file")]
        static void ReadString()
        {
            string path = "Assets/Resources/test.txt";
    
        //Read the text from directly from the test.txt file
            StreamReader reader = new StreamReader(path); 
            Debug.Log(reader.ReadToEnd());
            reader.Close();
        }
    
}

**More Information** 

For more information, consult the following documentation:

*   [Unity TextAsset script reference documentation](https://docs.unity3d.com/ScriptReference/TextAsset.html)
*   [Microsoft StreamWriter class documentation](https://msdn.microsoft.com/en-us/library/system.io.streamwriter(v=vs.110).aspx)
*   [Microsoft StreamReader class documentation](https://msdn.microsoft.com/en-us/library/system.io.streamreader(v=vs.110).aspx)
      