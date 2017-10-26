
        

**Symptoms**  

*   AssetBundles with sprites have a greater size than the expected.
*   Atlas is stored twice in AssetBundles

**Cause** 

*Issue*  #1

Before Unity 5.2.2p4, there was a bug using Sprite Atlas and AssetBundles. Let us consider that you want to create two asset bundles:

*   Three sprites are tagged into an atlas and packed in an AssetBundle. ("art.unity3d")
*   A sprite using the same atlas and packed in a different AssetBundle. ("prefab.unity3d")

When you create the AssetBundles, the "art.prefab" will contain the corresponding sprite vertices, a pointer to the atlas and the atlas texture. The second prefab will also store (duplicate) the atlas texture.

*Issue #2:* 

Another issue is when the user marks one of the sprites to be in another AssetBundle. The other AssetBundle will also contain the atlas image.

**Resolution** 

*Issue  *#* 1:* 

*   Update to Unity 5.2.2p4, or the latest Unity version.

*Issue  *#* 2:* 

*   Sprites packed into the same Atlas needs to be packed in the same AssetBundle.

The below image shows two sprites using the same AssetBundle and Packing tag. 

![](/hc/en-us/article_attachments/202318706/spriteDemo2.png) 

The example below checks if the sprites tagged in the same atlas are packed in different bundles:

public class SpriteChecker   
{  
    // This will create a Menu named "Support", with a sub-menu   
    // named "SpriteChecker", in the Editor menu bar.
        [MenuItem("Support/SpriteChecker")]
        static void CheckSpritesTagsAndBundles ()   
    {  
        // Get all the GUIDs (identifiers in project) of the Sprites in the Project
            string[] guids = AssetDatabase.FindAssets ("t:sprite");  

        // Dictionary to store the tags and bundle names
            Dictionary<string,string> dict = new Dictionary<string, string>();
            foreach( string guid in guids)   
        {
                string path = AssetDatabase.GUIDToAssetPath(guid);
                TextureImporter ti = TextureImporter.GetAtPath( path) as TextureImporter;  

            // If the tag is not in the dictionary, add it
                if (!dict.ContainsKey (ti.spritePackingTag ))
                    dict.Add(ti.spritePackingTag, ti.assetBundleName);
                else  
                // If the tag is associated with another bundle name, show an error
                    if (dict[ti.spritePackingTag] != ti.assetBundleName)
                        Debug.LogWarning("Sprite : " + ti.assetPath + " should be packed in "+  dict[ti.spritePackingTag] );
            }  
    }
    }

**More Information** 

[http://docs.unity3d.com/Manual/Sprites.html](http://docs.unity3d.com/Manual/Sprites.html)

[http://docs.unity3d.com/Manual/AssetBundlesIntro.html](http://docs.unity3d.com/Manual/AssetBundlesIntro.html)

      