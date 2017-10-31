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
            //var articleBodyHtmlContent = $('.article-body').children('.article-body').html();
            
            //if (articleBodyHtmlContent == null)
            //{
            //    articleBodyHtmlContent = $('.article-body').html();
            //}

            var articleBodyHtmlContent = $('.article-body').html();

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
            subcategoryTitle = subcategoryTitle.trim(); 
            //console.log(subcategoryTitle);
            dir = dir + '/' + subcategoryTitle;
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            url = url.replace('/hc/en-us/articles/', '');
            var filePath = url + ".json";
            filePath = dir + '/' + filePath;

            var articleBodyFilePath = url + ".html";
            articleBodyFilePath = dir + '/' + articleBodyFilePath;

            // Replace all starting or ending '<div>' tag with blank space
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<div[^>]*>/g, '').replace(/<\/div>/g, '');

            // Replace all starting or ending '<span>' tag with blank space
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '');

            // Replace all starting or ending header '<h1>' to <h7> tag with blank space
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<h[^>]*>/g, '').replace(/<\/h[^>]*>/g, '');

            // Replace '<p><strong><u>' with '<p><strong>' tag
            // Replace '</u></strong></p>' with '</strong></p>' tag
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<p><strong><u>/g, "<p><strong>").replace(/<\/u><\/strong><\/p>/g, "</strong></p>");

            // Replace '<strong><strong>' with '<strong>'
            // Replace '</strong></strong>' with '</strong>'            
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong><strong>/g, "<strong>").replace(/<\/strong><\/strong>/g, "</strong>");

            // Replace '<strong><br></strong>' with '<br>'
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong><br><\/strong>/g, "<br>");

            // Replace '<br></strong>' with '</strong>'
            // Replace '<br></em>' with '</em>'
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<br><\/strong>/g, "</strong>").replace(/<br><\/em>/g, "</em>");

            // Replace '<em><strong>' with '<strong>'
            // Replace '</strong></em>' with </strong>
            // articleBodyHtmlContent = articleBodyHtmlContent.replace(/<em><strong>/g, "<strong>").replace(/<\/strong><\/em>/g, "</strong>");

            // Replace '<strong><em>' with '<strong>'
            // Replace '</em></strong>' with '</strong>'
            // articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong><em>/g, "<strong>").replace(/<\/em><\/strong>/g, "</strong>");
            
            // There should be some space between starting '<strong>' tag and previous word  
            // There should be no space between starting <strong> tag and next coming word
            // There should be some space between ending </strong> tag and next coming word
            // If previous word is a tag itself then no need of space
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong>/g, ' <strong>')
                .replace(/<strong> /g, '<strong>')
                .replace(/<\/strong>/g, '</strong> ')
                .replace(/> <strong>/g, '><strong>');

            // There should be some space between starting '<em>' tag and previous word     
            // There should be no space between starting <em> tag and next coming word
            // There should be some space between ending </em> tag and next coming word
            // If previous word is a tag itself then no need of space
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<em>/g, ' <em>')
                .replace(/<em> /g, '<em>')
                .replace(/<\/em>/g, '</em> ')
                .replace(/> <em>/g, '><em>');

            // There should not be any blank space between starting <strong> and <em> tags
            // There should not be any blank space between ending </strong> and </em> tags
            //articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong> <em>/g, '<strong><em>').replace(/<\/strong> <\/em>/g, '</strong></em>');

            // There should not be any blank space between <em> and <strong> tags
            // There should not be any blank space between ending </strong> and </em> tags
            //articleBodyHtmlContent = articleBodyHtmlContent.replace(/<em> <strong>/g, '<em><strong>').replace(/<\/em> <\/strong>/g, '</em></strong>');

            // Replace '</em>  <em>' with blank space        
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<\/em>  <em>/g, '');

            // Replace '<em><strong>&nbsp;</strong></em>' with blank line
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<em><strong> <\/strong><\/em>/g, '');

            // Replace '<strong></strong>' with blank space
            // Replace '</strong> <strong>' with blank space
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong><\/strong>/g, '').replace(/<\/strong> <strong>/g, '');

            // Replace '<br></strong>' with '</strong>' tag
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<br><\/strong>/g, '</strong>');

            // Replace '<strong><em>&#xA0;</em> </strong>' with blank line
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong><em>&#xA0;<\/em> <\/strong>/g, '');

            // Replace '<strong>&#xA0;</strong>' with blank space
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong>&#xA0;<\/strong>/g, '');
                                
            // Replace '<strong>&#xA0;' with '<strong>'
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<strong>&#xA0;/g, '<strong>');

            // Replace '<em>&#xA0;</em>' with blank line
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/<em>&#xA0;<\/em>/g, '');

            // Replace '*' with '&ast;'
            articleBodyHtmlContent = articleBodyHtmlContent.replace(/\*/g, '&ast;');

            var collectedData = [];
            collectedData.push({ 'title': title, 'authorName': authorName, 'createdDate': createdDate, 'updatedDate': updatedDate, 'labels': labels, 'sections': sections });

            var fileContent = JSON.stringify(title) + JSON.stringify(labels) + JSON.stringify(sections);

            fs.writeFile(filePath, JSON.stringify(collectedData), function (err) {
                if (err) {
                    throw err;
                }
            });

            fs.writeFile(articleBodyFilePath, articleBodyHtmlContent, function (err) {
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

//getAllArticlesUnderCategory('/hc/en-us/categories/201253936-Accounts', 'Accounts');
//getAllArticlesUnderCategory('/hc/en-us/categories/201268913-Licenses', 'Licenses');
//getAllArticlesUnderCategory('/hc/en-us/categories/201253946-Asset-Store', 'Asset-Store');
//getAllArticlesUnderCategory('/hc/en-us/categories/115000215726-Community', 'Community');
getAllArticlesUnderCategory('/hc/en-us/categories/201964166-Unity-Editor', 'Unity-Editor');
//getAllArticlesUnderCategory('/hc/en-us/categories/200417079-Services', 'Services');



//parseArticle('/hc/en-us/articles/205646083-How-do-I-update-my-purchased-assets-');
//parseArticle('/hc/en-us/articles/115004481846-How-can-I-sign-into-the-Unity-website-Unity-Editor-');
//parseArticle('/hc/en-us/articles/210716003-How-do-I-change-my-billing-details-');
//parseArticle('/hc/en-us/articles/210978246-Can-I-be-paid-as-an-individual-instead-of-as-a-company-');
//parseArticle('/hc/en-us/articles/205053589-How-do-I-change-my-username-');