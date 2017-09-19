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
    renderOtherNews();
    renderTegNews()
  }
  
  // Generate navigation links
  function renderNavMenu() {
    var nav = $('#navMenu');
    for (var i = 0; i < navItems.length; i++) {
      nav.append('<a href = "' + navItems[i].href + '" target = "_blank">' + navItems[i].name + '</a>');
    }
  }

  // Generate tags info

  function renderTegNews() {
    var infoNews = $('#navListItem');
    for (var a = 0; a < tagsInfo.length; a++) {
      infoNews.append();
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
// 	// Application logic is written here
// })();
//