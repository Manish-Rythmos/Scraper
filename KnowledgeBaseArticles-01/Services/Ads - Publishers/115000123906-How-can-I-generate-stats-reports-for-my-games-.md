

**Symptoms**


- I have Unity Ads implemented in my game and would like to obtain a report showing my earned revenue.
- I have integrated Unity Ads in several projects and would like to know the total earnings for a given time period.
- I want to know the stats and earnings of my game so I can submit an invoice.



**Cause**



You have a game and would like to generate a stats report for it.



You have multiple games and would like to receive an automated report.



You are interested in obtaining revenue for your game or games in preparation for submitting an invoice.



**Resolution**



There are different ways to obtain reports:



**CSV Report Per Project**



To generate a report, you can select a project, go to the  **Statistics**  page and generate a .csv file at the bottom. Here you can select the date range, split the data by platform, country, and/or placement, and also see daily, weekly, or total stats (see screenshot below).



![](/hc/en-us/article_attachments/115000278363/Screen_Shot_2016-12-22_at_16.32.45.png)



**Automated Reporting**



You can also have reports sent to you automatically. From the main dashboard, select  **Reports**  and add a new Report with the  **+ Add new report**  button (see the screenshot below).



![](/hc/en-us/article_attachments/115000278606/Screen_Shot_2016-12-22_at_16.33.32.png)



From there, you can select many of the same settings as the .csv file and set up how frequently you would like to receive automated reports.



**Monetization Stats API for All Projects (recommended with many projects)**



You can use the Monetization Stats API to generate a report - see the Request Format section of our documentation on [Monetization Stats API](http://unityads.unity3d.com/help/monetization/stats-api) for more information on this.



You can enter a command like the below in the command line or terminal to generate a report whenever you need:



*curl -L "http://gameads-admin.applifier.com/stats/monetization-api?apikey=689a4104cbcad5db3b00d5fda13c4544a9cb28922c1158863bfef80fc6b4e4b4&splitBy=none&fields=revenue&start=2016-10-01&end=2016-10-30&scale=month" > ~/unityadsstats.csv*



In the above example, this command uses your [API key](/hc/en-us/articles/115000564946) and sets the date range to October 1st 2016 and October 30th 2016. It also leaves off the  *&sourceIds=7162*  part of the example, which will then pull all your games. It also sets the splitBy field to "none" so you can see a grand total. Lastly, it will write to a .csv file called  **unityadsstats**  in your home directory (you can name it whatever you like). If you do not write to a file, it will display the stats in your window.



**More Information**



While the Unity Ads dashboard does create charts to view your data at a glance, you can generate a .csv (comma separated values file), open it in your preferred spreadsheet software and manipulate the data however you like.

