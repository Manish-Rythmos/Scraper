

Unity Analytics offers Raw Data Export (RDE) to Pro subscribers which gives developers full access to their raw event data. We often receive questions from developers about how to query and analyze this data to provide further insight into game play statistics, such as level progression. Although the Unity Analytics Dashboard provides a great aggregated view into this data, developers often want to dig deeper. I will present a solution here that will allow you to easily export this data into an Excel file for further processing and provide the ability to perform custom queries that provide the equivalent of Group By queries through the use of Excel pivot tables.



In this article, I am going to assume that you are familiar with RDE, and have obtained a JSON export of your events from the Unity Analytics Dashboard or through the RDE REST API. There is more information here:



[https://docs.unity3d.com/Manual/UnityAnalyticsRawDataExport.html](https://docs.unity3d.com/Manual/UnityAnalyticsRawDataExport.html)



We are going to use RDE.json that is described in this article:



[https://support.unity3d.com/hc/en-us/articles/115004052703](https://support.unity3d.com/hc/en-us/articles/115004052703)



Once you have RDE.json, you can run it through a JSON to CSV conversion tool like the following:



[https://json-csv.com/](https://json-csv.com/)



There are many tools like this one, I just happened to test this one, and it works well. As a Custom or Standard Event can have a variable number of parameters, this tool exports each parameter into a fully-qualified new column in the CSV file. Pretty slick. I exported my RDE.json as level\_complete.csv.



To import the resulting csv file into Excel, perform the following steps. In a blank Excel sheet, choose the Data tab, and select From Text. Go through the import wizard, choosing comma as the column delimiter.  Save the file as an Excel worksheet (.xlsx).



We are now going to place an Excel pivot table on the sheet. I’m not going into depth discussing how to create a pivot table, there are many learning resources available. Here is a good one:



[https://blog.hubspot.com/marketing/how-to-create-pivot-table-tutorial-ht](https://blog.hubspot.com/marketing/how-to-create-pivot-table-tutorial-ht)



I’m attaching a small pivot table example to this article, using a few rows of sample data. To place a pivot table in your sheet, select the Insert tab in Excel, and choose PivotTable. Here is what the example spreadsheet looks like:







![](/hc/article_attachments/115015173166/mceclip1.png)







Once you perform these same steps on level\_complete.xlsx, you’ll have the pivot table as pictured here which calculates the average score of each level completed.







![](/hc/article_attachments/115015173466/mceclip3.png)







In summary, this is what we have accomplished. As a Unity Pro subscriber, you were able to export a file containing all your Custom and Standard Events, and imported them into Excel for further analysis. We then performed our first query using an Excel pivot table that averages the final score for each level in this dataset. Feel free to modify to suit your needs and your custom events and parameters.



If you have further questions or comments, you can post on the Unity forum here:



[https://forum.unity3d.com/forums/unity-analytics.81/](https://forum.unity3d.com/forums/unity-analytics.81/)





