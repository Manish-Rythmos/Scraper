

**Symptoms**


- A native Android library project located in the project folder does not show the PluginImporter window, instead it shows a default inspector window.



**Cause**


- Android Library Projects can only be recognized as such, if they are stored in the following folder: Assets/Plugins/Android/



**Resolution**



If your plugin is an Android Library Project, it needs to be placed in Assets/Plugins/Android/.



Alternatively, you can pack your library project into the binary format, as an .aar library. Aar libraries do not have this limitation and can be placed anywhere inside the Assets folder.



**More Information**



For more information regarding plugins, plugins for android, how to write and read them check the documentation listed below:



[http://docs.unity3d.com/Manual/UpgradeGuide5-Plugins.html
](http://docs.unity3d.com/Manual/UpgradeGuide5-Plugins.html)[http://docs.unity3d.com/Manual/PluginInspector.html
](http://docs.unity3d.com/Manual/PluginInspector.html)[http://docs.unity3d.com/Manual/NativePlugins.html
](http://docs.unity3d.com/Manual/NativePlugins.html)[http://docs.unity3d.com/Manual/PluginsForAndroid.html
](http://docs.unity3d.com/Manual/NativePlugins.html)[http://tools.android.com/tech-docs/new-build-system/aar-format](http://tools.android.com/tech-docs/new-build-system/aar-format)





