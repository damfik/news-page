'use strict';
// JQuery "document ready" function
$(function() {
  var navItems = headerNavItems;
  var newsFiltered = allNews;
  var searchNews = '';
  var tagsInfo = columnNews;
  
  // Initiol actions
  function onInit() {
    console.log('App started!');
    renderNavMenu();
    renderRecentNews();
    renderOtherNews();
    renderTagNews();
  }
  
  // Generate navigation links
  function renderNavMenu() {
    var nav = $('#navMenu');
    for (var i = 0; i < navItems.length; i++) {
      nav.append('<a href = "' + navItems[i].href + '" target = "_blank">' + navItems[i].name + '</a>');
    }
  }

  // Generate tags info

  function renderTagNews() {
    for (var propName in columnNews) {
//       columnNews.tagList.items
//       columnNews['tagList'].items
      var listContainer = $('#' + propName);
      listContainer.html('');
      for (var a = 0; a < columnNews[propName].items.length; a++) {
        listContainer.append(
          '<li><a href="#" target = "_self" title="' + columnNews[propName].items[a] + '">' + columnNews[propName].items[a] + '</a></li>'
        );
      }
    }
  }

  // Generate news
  function renderOtherNews() {
    // Get access to news container tag
    var otherNews = $('#otherNews');
    // Clear news container
    otherNews.html('');
    // In loop append filtered news
    for (var n = 0; n < newsFiltered.length; n++) {
      // Append other news
      otherNews.append(
        '<div class="other-news">' +
          '<div class="other-news-header">' +
            '<span>' + newsFiltered[n].createdAt + '</span>' +
            '<h4 class="news-title">' + newsFiltered[n].title + '</h4>' +
          '</div>' +
          '<div class="other-news-content">' +
            '<div class="recent-img">' +
              '<img src="' + newsFiltered[n].imgLink + '">' +
            '</div>' +
            '<p class="news-inner-text">' + newsFiltered[n].shortDescription + '</p>' +
          '</div>' +
          '<div class="other-news-actions">' +
              '<button>READ MORE</button>' +
              '<button>' + newsFiltered[n].comments.length + ' Comments</button>' +
          '</div>' +
        '</div>'
      );
    }
  }
  
 // Generate recent news
  function renderRecentNews() {
    var randNewsId = getRandomNewsId(allNews.length-1);
    var updatedNews = [];
    for (var n = 0; n < newsFiltered.length; n++) {
      if (n !== randNewsId) {
        updatedNews.push(newsFiltered[n]);
      }
    }
    newsFiltered = updatedNews;
    // Get access to recent news container tag
    var recentNews = $('#mainNews');
    // Clear recent news container
    recentNews.html('');
    // Append filtered recent news
    recentNews.append(
      '<h4>recent news</h4>' +
      '<h2 class="news-title">' + allNews[randNewsId].title + '</h2>' +
      '<div class="recent-img">' +
        '<img src="' + allNews[randNewsId].imgLink + '">' +
      '</div>' +
      '<p class="news-inner-text">' + allNews[randNewsId].fullDescription + '</p>'
    );
  }
  
  // Filter new by search text value
  function filterNews(searchText) {
    if (searchText) {
      // Filtering goes here
      var filtered = [];
      // In loop compare news with searchText
      for (var i = 0; i < allNews.length; i++) {
        // Check if title includes searchText. We get bool true/false
        var foundInTitle = allNews[i].title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        // Check if fullDescription includes searchText. We get bool true/false
        var foundInDescription = allNews[i].fullDescription.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        // If something found, push this news to filtered array
        if (foundInTitle || foundInDescription) {
          filtered.push(allNews[i]);
        }
      }
      // Update newsFiltered with found news
      newsFiltered = filtered;
    } else {
      // Update news filtered variable with all news
      newsFiltered = allNews;
    }
    // Invoke clear and rerender filtered news
    renderOtherNews();
  } 

  // Returns random number from 0 to maxId value with step 1
  function getRandomNewsId(maxId) {
    return Math.floor(Math.random() * maxId);
  }
  
  // Listen on input value change
  $('#newsSearchInput').keyup(function(event) {
    // Get input value from keyup event
    const searchValue = event.target.value;
    // Invoke filter news function
    filterNews(searchValue);
  });
  
  // Initialize application with our data
  onInit();

});

// IIFE - Immediately invoked function expression
// (function() {
//  // Application logic is written here
// })();
//