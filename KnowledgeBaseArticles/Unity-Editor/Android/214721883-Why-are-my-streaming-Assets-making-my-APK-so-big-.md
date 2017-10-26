
        

**Symptoms** 

*   My files in the  **StreamingAssets**  folder are not being compressed in the APK.
 **Cause** 

The APK is a normal zip file. Files within this file can use a range of compression methods, with the most common being **deflate** and **store** . 

*   **Deflate**  is the normal zlib/lz77 compression algorithm.
*   **Store**  is uncompressed raw data, stored as is.
The Unity-generated APK will contain files of both kinds, with the StreamingAssets data ​always​ using store compression.

![](/hc/en-us/article_attachments/208052363/apkCompression.png)

Unity will read the (usually compressed) data from inside the APK file. However, Streaming Assets are left "as is", and are copied directly into the file structure.

Also note that this is the file itself and not the Unity-formatted file used elsewhere. This can be seen by adding a large PSD image file to the StreamingAssets folder, which can then be found inside the APK by extracting its contents and looking at the file inside the extracted Assets folder.

**Resolution** 

If compression is required for the StreamingAssets, this compression must be in the file itself, for example:

*   Use a file format that is compressed (for example PNGs and JPGs) - do not use large file formats (such as PSDs) unnecessarily as these will be copied uncompressed.
*   Use compressed AssetBundles.
*   Reduce the sizes of the Asset files themselves using compression tools such as [PNG Crush](http://pngcrush.com/)*.* 

 **More Information** 

For more information, consult the Android developer guide to [reducing APK size](https://developer.android.com/topic/performance/reduce-apk-size.html).


      