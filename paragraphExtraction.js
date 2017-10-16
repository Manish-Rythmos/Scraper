var request = require('request');
var cheerio = require('cheerio');
var Promise = require('bluebird');
var fs = require('fs');

var base_url = 'https://support.unity3d.com';

var totalArticleCount = 0;

function getAllArticlesUnderCategory(url) {
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
                        getAllArticlesUnderSubcategoryWithNextPage(nextPageLink);
                    }
                    //console.log($(ele).attr('class'));
                });

                resolve(subcategory_title);
            }
            reject();
        });
    });
}

function getAllArticlesUnderSubcategoryWithNextPage(url) {
    return new Promise(function (resolve, reject) {
        request({
            uri: base_url + url
        }, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                var $ = cheerio.load(body);
                                
                $('.article-list li a').each(function (i, ele) {
                    parseArticle($(ele).attr('href'));
                    totalArticleCount++;
                });             
            }            
        });
    });
}

function parseArticle(url) {
    request({
        uri: base_url + url
    }, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(body);
            
            //console.log($('.article-body p:nth-child(1)').html());
            console.log(url);
            console.log(totalArticleCount);
                                                   
        }
    });
}


//getAllArticlesUnderCategory('/hc/en-us/categories/201253936-Accounts');
getAllArticlesUnderCategory('/hc/en-us/categories/200417079-Services');



//parseArticle('/hc/en-us/articles/115004481846-How-can-I-sign-into-the-Unity-website-Unity-Editor-');
//parseArticle('/hc/en-us/articles/210716003-How-do-I-change-my-billing-details-');
//parseArticle('/hc/en-us/articles/210978246-Can-I-be-paid-as-an-individual-instead-of-as-a-company-');
//parseArticle('/hc/en-us/articles/205053589-How-do-I-change-my-username-');