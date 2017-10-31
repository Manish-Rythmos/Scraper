**Symptoms**
- When I export a package using  *Assets -> Export package* , it exports everything.

**Cause**  When exporting packages that include scripts, it includes all scripts that are in the project. This happens because there is no way to track dependencies between scripts. If you include dependencies and one of the dependencies is a script, then you need all scripts.  **Resolution**

You can use the function [AssetDatabase.ExportPackage](http://docs.unity3d.com/ScriptReference/AssetDatabase.ExportPackage.html) and multiple [ExportPackageOptions](http://docs.unity3d.com/ScriptReference/ExportPackageOptions.html). Please be aware that this workaround could cause some errors with missing scripts.  *Assets -> Export package*  is the suggested and secure option.

**More Information**  [http://docs.unity3d.com/ScriptReference/AssetDatabase.ExportPackage.html](http://docs.unity3d.com/ScriptReference/AssetDatabase.ExportPackage.html)[http://docs.unity3d.com/ScriptReference/ExportPackageOptions.html](http://docs.unity3d.com/ScriptReference/ExportPackageOptions.html)       