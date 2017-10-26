
        

**Symptoms** 

*   You found that some Asset bundles are larger than expected.
*   You need to know what is packed into the Asset bundle.

**Cause** 

If you have an Asset marked as **none** in the Inspector bundle name but other Assets have a dependency on it, it will be included in the bundle.

This will cause repeated Assets in AssetBundles.

**Resolution** 

The simple way to inspect an Asset bundle is to create a public Asset bundle variable. Load the Asset bundle and double-click the Asset bundle object in the Inspector to open the Inspector with the content of the Asset bundle.

You now have a list of the elements that include the Asset bundle and a list of their dependencies.

**Example:** 

public AssetBundle assetBundle;

![](/hc/en-us/article_attachments/115000972706/Screenshot_1.png)

![](/hc/en-us/article_attachments/115000972726/Screenshot_2.png)

*Double-click on the cube bar in the Inspector window to view the bundle's properties.* 

Another alternative is to use an Editor script to load the Asset bundle as a SerializedObject and iterate for all the elements of the object.

[MenuItem("SUPPORT/Bundles/Print Contents")]
        static void PrintContents()
        {
            if( Selection.activeObject == null )
                return;
    
        AssetBundle bundle = AssetBundle.LoadFromFile( Application.dataPath + AssetDatabase.GetAssetPath( Selection.activeObject ).Remove(0,6) );
    
        if( bundle != null )
            {
                SerializedObject so = new SerializedObject( bundle );
                System.Text.StringBuilder str = new System.Text.StringBuilder();
    
            str.Append( "Preload table:\n" );
                foreach( SerializedProperty d in so.FindProperty( "m_PreloadTable" ) )
                {
                    if( d.objectReferenceValue != null )
                        str.Append( "\t<color=green>" + d.objectReferenceValue.name + " " + d.objectReferenceValue.GetType().ToString() + "\n" );
                }
    
            str.Append( "Container:\n" );
                foreach( SerializedProperty d in so.FindProperty( "m_Container" ) )
                    str.Append( "\t" + d.displayName + "\n" );
    
            Debug.Log( str.ToString() );
                bundle.Unload( false );
            }

Additionally, you can check the Editor log after you build the Asset bundles.

**More Information** 

For more information, consult the following:

*   [New AssetBundle graph tool prototype article](https://blogs.unity3d.com/2016/10/25/new-assetbundle-graph-tool-prototype/)
*   [A guide to AssetBundles and Resources](https://unity3d.com/learn/tutorials/topics/best-practices/guide-assetbundles-and-resources)
*   [AssetBundles documentation](https://docs.unity3d.com/Manual/AssetBundlesIntro.html)
*   [Log files documentation](https://docs.unity3d.com/Manual/LogFiles.html)
*   [AssetBundles fundamentals](https://unity3d.com/learn/tutorials/topics/best-practices/assetbundle-fundamentals?playlist=30089)
*   [Editor script reference documentation](https://docs.unity3d.com/ScriptReference/Editor.html)
      