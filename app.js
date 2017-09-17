'use strict';
// JQuery "document ready" function
$(function() {

  function onInit() {
    console.log('App started!');

    // Generate navigation links
    var nav = $('#navMenu');
    for (var i = 0; i < headerNavItems.length; i++) {
      nav.append('<a href = "' + headerNavItems[i].href + '" target = "_blank">' + headerNavItems[i].name + '</a>');
    }

    // Generate news
    var otherNews = $('#otherNews');
    for (var n = 0; n < allNews.length; n++) {
      // Append other news
      otherNews.append(
        '<div class="other-news">' +
          '<div class="other-news-header">' +
            '<span>' + allNews[n].createdAt + '</span>' +
            '<h4 class="news-title">' + allNews[n].title + '</h4>' +
          '</div>' +
          '<div class="other-news-content">' +
            '<div class="recent-img">' +
              '<img src="' + allNews[n].imgLink + '">' +
            '</div>' +
            '<p class="news-inner-text">' + allNews[n].shortDescription + '</p>' +
          '</div>' +
          '<div class="other-news-actions">' +
              '<button>READ MORE</button>' +
              '<button>' + allNews[n].comments.length + ' Comments</button>' +
          '</div>' +
        '</div>'
      );
    }

  }
  
  onInit();

});

// IIFE - Immediately invoked function expression
// (function() {
// 	// Application logic is written here
// })();
//