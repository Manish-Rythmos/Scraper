var toMarkdown = require('to-markdown');
var markdownData = toMarkdown('<p><strong>select custom_params.level_name as Level, count(*) as Count,</strong>  <strong> &#xA0; &#xA0; &#xA0;&#xA0;</strong>  <strong>round(avg(tonumber(custom_params.score))) as AvgScore</strong>  <strong>from UnityIAP</strong>  <strong>where name = &apos;level_complete&apos;</strong>  <strong> and custom_params.score is not missing</strong>  <strong>group by custom_params.level_name</strong>  <strong>order by Count desc</strong> </p>< p > And the screenshot:</p >');

console.log(markdownData);