var request = require('request');
var cheerio = require('cheerio');
var Promise = require('bluebird');
var fs = require('fs');

var base_url = 'https://support.unity3d.com';

function getAllArticlesUnderCategory(url) {
    request({
        uri: base_url + url
    }, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(body);
            var category_title = $('.section-title').text();
            var p;
            $('.section-tree .see-all-articles').each(function (i, ele) {
                if (!p) {
                    p = getAllArticlesUnderSubcategory($(ele).attr('href'));
                } else {
                    p.then(getAllArticlesUnderSubcategory($(ele).attr('href')));
                }
            });
        }
    });
}

function getAllArticlesUnderSubcategory(url) {
    return new Promise(function (resolve, reject) {
        request({
            uri: base_url + url
        }, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                var $ = cheerio.load(body);
                var subcategory_title = $('.section-area h1').text().split('\n')[0];
                console.log(subcategory_title);
                $('.article-list li a').each(function (i, ele) {
                    parseArticle($(ele).attr('href'));                    
                });
                resolve(subcategory_title);
            }
            reject();
        });
    });
}

function parseArticle(url) {
    request({
        uri: base_url + url
    }, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(body);

            var title = $('.article-header h1').text().trim();

            var labels = [];
            $('.article-labels .article-label').each(function (i, ele) {
                labels.push($(ele).text());
            });

            var sections = [];
            var content = [];
            var section_title;
            $('.article-body').children().each(function (i, e) {
                if ($(e).find('.wysiwyg-underline').length > 0) {
                    if (content.length) {                       
                        sections.push({
                            title: section_title,
                            content: content
                        });
                    }
                    section_title = $(e).text();
                    
                    //console.log(section_title);
                    if (section_title == 'undefined' || section_title == null) {
                        //console.log('There is something missing with titles');
                    }

                    content = [];
                }
                else if ($(e).find('strong').length > 0) {
                    debugger;
                    console.log(url);

                    console.log($(e).text());
                    //console.log($(e).html());

                    //if (content.length) {
                    //    sections.push({
                    //        title: section_title,
                    //        content: content
                    //    });
                    //}
                    //section_title = $(e).text();
                    //content = [];
                }
                else {
                    content.push($(e).html());
                }
            });
            sections.push({
                title: section_title,
                content: content
            });

            //var filepath = title.replace(/ /g, '') + ".json";
            //filepath = filepath.replace(/\?/g, '');
            //filepath = "KnowledgeBaseArticles/" + filepath;
            //var wholeFileContentJson = title + labels + sections;

            //fs.writeFile(filepath, url, function (err) {
            //    if (err)
            //    {
            //        throw err;
            //    }
            //});   


            url = url.replace('/hc/en-us/articles/', '');
            //console.log(url);

            var filePath = url + ".json";
            filePath = "KnowledgeBaseArticles/" + filePath;

            var collectedData = [];
            collectedData.push({ 'title': title, 'labels': labels, 'sections': sections});

            //var fileContent = JSON.stringify(title) + JSON.stringify(labels) + JSON.stringify(sections);

            //fs.writeFile(filePath, JSON.stringify(collectedData), function (err) {
            //    if (err) {
            //        throw err;
            //    }
            //});

            //console.log(JSON.stringify(title));
            //console.log(JSON.stringify(labels));
            //console.log(JSON.stringify(sections));

            //console.log(title);
            //console.log(labels);
            //console.log(sections);
        }
    });
}

getAllArticlesUnderCategory('/hc/en-us/categories/201253936-Accounts');

//parseArticle('/hc/en-us/articles/115004481846-How-can-I-sign-into-the-Unity-website-Unity-Editor-');
//parseArticle('/hc/en-us/articles/210716003-How-do-I-change-my-billing-details-');
//parseArticle('/hc/en-us/articles/210978246-Can-I-be-paid-as-an-individual-instead-of-as-a-company-');
//parseArticle('/hc/en-us/articles/205053589-How-do-I-change-my-username-');