var request = require('request');
var cheerio = require('cheerio');
var Promise = require('bluebird');
var fs = require('fs');

var base_url = 'https://support.unity3d.com';

var totalArticleCount = 0;

function getAllArticlesUnderCategory(url, categoryTitle) {
    request({
        uri: base_url + url
    }, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(body);
            var category_title = $('.section-title').text();
            var p;
            //$('.section-tree .see-all-articles').each(function (i, ele) {
            $('.section-tree .section h3 a').each(function (i, ele) {
                if (!p) {
                    p = getAllArticlesUnderSubcategory($(ele).attr('href'), categoryTitle);
                } else {
                    p.then(getAllArticlesUnderSubcategory($(ele).attr('href'), categoryTitle));
                }
            });
        }
    });
}

function getAllArticlesUnderSubcategory(url, categoryTitle) {
    return new Promise(function (resolve, reject) {
        request({
            uri: base_url + url
        }, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                var $ = cheerio.load(body);

                var subcategory_title = $('.section-area h1').text().split('\n')[0];
                console.log(subcategory_title);
                $('.article-list li a').each(function (i, ele) {
                    parseArticle($(ele).attr('href'), subcategory_title, categoryTitle);
                    totalArticleCount++;
                });

                //debugger;
                //Get pagination list
                $('nav.pagination li').each(function (i, ele) {

                    var classAttr = $(ele).attr('class');
                    //console.log(classAttr);
                    if (classAttr == 'pagination-current' || classAttr == 'pagination-next' || classAttr == 'pagination-last') {

                    }
                    else {
                        //console.log($(ele).html());
                        var nextPageLink = $(ele).children('a').attr('href');
                        //nextPageLink = $(nextPageLink).attr('href');
                        //console.log(nextPageLink);
                        getAllArticlesUnderSubcategoryWithNextPage(nextPageLink, subcategory_title, categoryTitle);
                    }
                    //console.log($(ele).attr('class'));
                });

                resolve(subcategory_title);
            }
            reject();
        });
    });
}

function getAllArticlesUnderSubcategoryWithNextPage(url, subcategoryTitle, categoryTitle) {
    return new Promise(function (resolve, reject) {
        request({
            uri: base_url + url
        }, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                var $ = cheerio.load(body);

                $('.article-list li a').each(function (i, ele) {
                    parseArticle($(ele).attr('href'), subcategoryTitle, categoryTitle);
                    totalArticleCount++;
                });
            }
        });
    });
}

//function parseArticle(url) {
//    request({
//        uri: base_url + url
//    }, function (err, res, body) {
//        if (!err && res.statusCode == 200) {
//            var $ = cheerio.load(body);

//            //console.log($('.article-body p:nth-child(1)').html());
//            console.log(url);
//            console.log(totalArticleCount);

//        }
//    });
//}

function parseArticle(url, subcategoryTitle, categoryTitle) {
    request({
        uri: base_url + url
    }, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(body);

            //get title 
            var title = $('.article-header h1').text().trim();

            var authorName = $('.article-metadata .article-author .user-profile').text();

            var createdDate = $('.article-metadata .article-author .article-updated time:nth-child(1)').attr('datetime');
            var updatedDate = $('.article-metadata .article-author .article-updated time:nth-child(2)').attr('datetime');

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
                    content = [];
                }
                else {
                    content.push($(e).html());
                }
            });
            sections.push({
                title: section_title,
                content: content
            });

            //creating parent for all knowledge base articles category folders
            var dir = 'KnowledgeBaseArticles';
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            //creating parent folder for all knowledge base articles subcategory folders
            dir = dir + '/' + categoryTitle;
            //console.log(categoryTitle);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            //creating knowledge base articles subcategory folder
            //replacing '/' with '-' from subcatregory folder name
            //because '/' not allowed in windows folder naming convention
            subcategoryTitle = subcategoryTitle.replace(/\//g, '-');
            //console.log(subcategoryTitle);
            dir = dir + '/' + subcategoryTitle;
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            url = url.replace('/hc/en-us/articles/', '');
            var filePath = url + ".json";
            filePath = dir + '/' + filePath;

            var collectedData = [];
            collectedData.push({ 'title': title, 'authorName': authorName, 'createdDate': createdDate, 'updatedDate': updatedDate, 'labels': labels, 'sections': sections });

            var fileContent = JSON.stringify(title) + JSON.stringify(labels) + JSON.stringify(sections);

            fs.writeFile(filePath, JSON.stringify(collectedData), function (err) {
                if (err) {
                    throw err;
                }
            });

            //console.log(JSON.stringify(title));
            //console.log(JSON.stringify(labels));
            //console.log(JSON.stringify(sections));

            //console.log(title);
            //console.log(labels);
            //console.log(sections);
        }
    });
}

getAllArticlesUnderCategory('/hc/en-us/categories/201253936-Accounts', 'Accounts');
getAllArticlesUnderCategory('/hc/en-us/categories/201268913-Licenses', 'Licenses');
getAllArticlesUnderCategory('/hc/en-us/categories/201253946-Asset-Store', 'Asset-Store');
getAllArticlesUnderCategory('/hc/en-us/categories/115000215726-Community', 'Community');
getAllArticlesUnderCategory('/hc/en-us/categories/201964166-Unity-Editor', 'Unity-Editor');
getAllArticlesUnderCategory('/hc/en-us/categories/200417079-Services', 'Services');



//parseArticle('/hc/en-us/articles/115004481846-How-can-I-sign-into-the-Unity-website-Unity-Editor-');
//parseArticle('/hc/en-us/articles/210716003-How-do-I-change-my-billing-details-');
//parseArticle('/hc/en-us/articles/210978246-Can-I-be-paid-as-an-individual-instead-of-as-a-company-');
//parseArticle('/hc/en-us/articles/205053589-How-do-I-change-my-username-');