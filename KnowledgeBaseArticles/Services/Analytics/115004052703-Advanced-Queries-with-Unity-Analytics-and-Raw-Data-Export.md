

Unity Analytics offers Raw Data Export (RDE) to Pro subscribers which gives developers full access to their raw event data. We often receive questions from developers about how to query and analyze this data to provide further insight into game play statistics, such as level progression. Although the Unity Analytics Dashboard provides a great aggregated view into this data, developers often want to dig deeper. I will present a solution here that will allow you to easily export this data into a local NoSQL database for further processing and provide the ability to perform custom queries that include syntax such as Group By.



In this article, I am going to assume that you are familiar with RDE, and have obtained a JSON export of your events from the Unity Analytics Dashboard or through the RDE REST API. There is more information here:



[https://docs.unity3d.com/Manual/UnityAnalyticsRawDataExport.html](https://docs.unity3d.com/Manual/UnityAnalyticsRawDataExport.html)



If you haven’t done that yet, go read up on it, and perform this step before continuing. I’ll wait…



Ah, you’re back! Great, you now have a local file, perhaps from your Custom Events export that also includes all the Standard Events that you have implemented. Let’s name it RDE.json. You can find more about our Standard Events here:



[https://blogs.unity3d.com/2017/05/12/introducing-standard-events/](https://blogs.unity3d.com/2017/05/12/introducing-standard-events/)



By the way, I’m using Windows in this example. Also, although Unity cannot specifically recommend or support a specific 3<sup>rd</sup> party product, I’m going to be using Couchbase, a great NoSQL database solution. You could also use MongoDB, MySQL, SQL Server or really any other database product. Most of them provide a way to import text data. Couchbase allows you to directly import JSON files of exactly the format that is produced by the Unity Raw Data Export. No scripting or programming is required!



Here is an image of what a single row of my RDE.json looks like for the Standard Event “level\_complete”:



![LineItem.png](/hc/article_attachments/115013243726/LineItem.png)



Now is the time for you to install Couchbase if you haven’t done so already. You can download it from here:



[https://www.couchbase.com/downloads#couchbase-server](https://www.couchbase.com/downloads#couchbase-server)



There is a Community (Free) version that works great for this exercise, just be sure to abide by their license requirements. Installation takes about 5-10 minutes. The default settings work OK and creates a bucket called Default. A Couchbase “bucket” is roughly equivalent to a Table in standard relational database terms. You can choose to use the Default bucket or skip this step, and create your own bucket later. I generally choose to Skip the Default bucket creation and then create my own bucket after the installation. In this exercise, I created a bucket named UnityIAP, but you can name it anything that you would like.  This is what my installation looks like after running installation which launches the Couchbase console in a browser:







![CouchbaseBucket.png](/hc/article_attachments/115013243766/CouchbaseBucket.png)



After setup, copy your RDE.json file to C:\Program Files\Couchbase\Server\bin (if you used the defaults during setup). We are going to run  **cbimport** , an import utility that ships with Couchbase. The syntax for this example is as follows, substitute your own password that you created during setup and any other parameters as necessary:



**cbimport json  -c couchbase://127.0.0.1 -u Administrator -p password -b UnityIAP -d file://rde.json -f lines -g key::%ts%**



Here is a screenshot of this command in action:



![CouchbaseImport.png](/hc/article_attachments/115013243946/CouchbaseImport.png)



Once the import is complete, we next need to create a Primary Index. On the Query tab in the Couchbase web interface, enter and execute the following, creating an index name of your choosing:



**Create primary index UIdx on UnityIAP**



Here is the screenshot:



![CouchbaseCreateIndex.png](/hc/article_attachments/115013243806/CouchbaseCreateIndex.png)



Once this is complete, you are ready to run your first query. Isn’t this exciting? Drum roll please.



Still on the Query tab, execute the following query. We want to find how many people completed each level, and the average score per level. We are querying on one of the Standard Events named “level\_complete”. You may need to change the syntax slightly to match the name(s) of your parameters, in this case they are “level\_name” and “score” but hopefully you get the idea. Notice how the nested JSON format in each imported record allows for the object.dot notation in the query, very cool indeed:



**select custom\_params.level\_name as Level, count(\*) as Count,**       **round(avg(tonumber(custom\_params.score))) as AvgScore****from UnityIAP****where name = 'level\_complete'****and custom\_params.score is not missing****group by custom\_params.level\_name****order by Count desc**



And the screenshot:



![CouchbaseRDEQuery.png](/hc/article_attachments/115013244646/CouchbaseRDEQuery.png)







And that is all there is to it! No programming or scripting needed, just a bit of SQL and command line syntax.



So in summary, this is what we have accomplished. As a Unity Pro subscriber, you were able to export a file containing all your Custom and Standard Events, and imported them into Couchbase for further analysis. We then performed our first query that averages the final score for each level in this dataset. The query analysis possibilities are endless!



If you have further questions, you can post on the Unity forum here:



[https://forum.unity3d.com/forums/unity-analytics.81/](https://forum.unity3d.com/forums/unity-analytics.81/)



And the Couchbase forum is located here:



[https://forums.couchbase.com](https://forums.couchbase.com)





