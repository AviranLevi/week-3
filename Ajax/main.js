///////////////
//Exercise #1//
///////////////
/*
const books = [9782806269171, 1440633908, 9781945048470, 9780307417138];

const fetch = function () {
    books.forEach(b => {
        $.ajax({
            url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${b}`,
            method: "GET",
            success: function (data) {
                console.log(data)
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    });
};
*/

///////////////
//Exercise #2//
///////////////
/*
const fetch = function (queryType, queryValue) {
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}${queryValue}`,
        method: "GET",
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
};

fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
*/

///////////////
//Exercise #3//
///////////////
/*
const books = [9782806269171, 1440633908, 9781945048470, 9780307417138];

const fetch = function () {
    books.forEach(b => {
        $.ajax({
            url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${b}`,
            method: "GET",
            success: function (data) {
                console.log(
                    `Title: ${data.items[0].volumeInfo.title}, Authors: ${data.items[0].volumeInfo.authors}, ISPN: ${b}`
                )
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    });
};
*/

///////////////
//Exercise #5//
///////////////
/*
const giphy = function () {
    let input = $("#input");
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${input.val()}&api_key=Reeu1KBvMWYt0f4SCj2RJHEhgj1E44Um`,
        method: "GET",
        success: function (data) {
            return $("body").append(`<iframe src="${data.data[0].embed_url}"></iframe>`)
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
};
*/

//////////////////////
//Exercise EXTENSION//
//////////////////////
/*
const giphy = function () {
    let input = $("#input");
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${input.val()}&api_key=Reeu1KBvMWYt0f4SCj2RJHEhgj1E44Um&limit=5`,
        method: "GET",
        success: function (data) {
            $("#searchDiv").empty();

            data.data.forEach(g => {
                return $("#searchDiv").append(`<div><iframe class="frame" src="${g.embed_url}"></iframe><button class="button">ADD THIS GIF</button></div>`);
            });
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    })
};

$("body").on("click", ".button", function () {
    let src = $(this).siblings("iframe").attr("src");
    return $("#favorite").append(`<iframe src="${src}"></iframe>`)
});
*/
