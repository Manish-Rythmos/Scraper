
        

**Symptoms** 

*   When more than one instance of Unity references the same project folder, all the other instances of Unity (apart from the initial one) will show an Error! message saying "Multiple Unity instances cannot open the same project." 

![Error.png](/hc/article_attachments/115010317666/Error.png)

*   There are instances where having multiple instances of Unity running the same project is useful. One of these is when testing multiplayer games, where running a version of the project as the host and one as the client allows in-Editor debugging for both host and client.

**Cause** 

This is caused by Unity trying to protect the project from going out of sync. For example, multiple changes to the same object causes conflicts within the project's references.

**Resolution** 

***THIS IS NOT SUPPORTED, USE AT YOUR OWN RISK** * 

If you are happy to prevent this from happening, you can create a workaround by creating a symbolic link between the project's Assets and project settings folders of the project.

![folders.png](/hc/article_attachments/115010321686/folders.png)

This allows you to keep all instances of the Editor in sync when making edits to the initial instance of Unity, but it is recommended that edits in the other instances are not made.

<table>
<tbody>
<tr>
<td>
- cd <duplicated_project_folder>
- mklink /D Assets <original_project_folder>\Assets
</td>
</tr>
</tbody>
</table>

In the example project I had, I created a symbolic link to the Assets folder in my new project using this link in Command Prompt

<table>
<tbody>
<tr>
<td>

mklink /D "x:\Personal Projects\Tanking_Dub02\Assets" "x:\Personal Projects\Tanking\Assets"

A translation of this would be:

mklink /D <location of the symbolic link in your duplicate project> <Orginal file>

</td>
</tr>
</tbody>
</table>

**More Information** 

[https://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/](https://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/)

      