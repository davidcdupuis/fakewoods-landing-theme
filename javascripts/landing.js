window.addEventListener('DOMContentLoaded', (event) => {
  var $memberList = $('#member-list');
  var $toggleList = $memberList.find('.item-list-toggle');
  var $itemList = $memberList.find('.item-list');

  function handleGroupToggle(group) {
    if (group && group !== 'everyone') {
      $itemList.find(`.item:not(.${group})`).removeClass("show");
      $itemList.find(`.item.${group}`).addClass("show");
    } else {
      $itemList.find('.item').addClass('show');
    }
  }

  handleGroupToggle(window.location.hash.replace(/^#/, ''));
  $memberList.find('a.toggle').on("click", function(e) {
    $toggleList.find('.toggle').removeClass('active');
    $(e.target).addClass('active');
    handleGroupToggle(e.target.getAttribute("data-group"));
  });

	// NEWS BLOG
  var $news_blog = $('body.news, body.news-post');
  var $news_subscribeModal = $news_blog.find(".modal.subscribe");
  var $news_subscribeBtn = $news_blog.find(".btn-subscribe");

  $news_blog.find($news_subscribeBtn).on('click', function(e) {
    if ($(this).hasClass('user')) {
      $news_subscribeModal.addClass("active");
    } else {
      window.location.href = '/login'
    }
  });

  $news_subscribeModal.find(".modal.subscribe .modal-close").on('click', function(e) {
    $news_subscribeModal.removeClass("active");
  });

  $news_blog.on('click', function(e) {
    if ($(e.target).closest(".modal.subscribe .modal-content, .btn-subscribe").length == 0) {
      $news_subscribeModal.removeClass("active");
    }
  });

  $news_blog.find('.canvas p').each(function() {
    let $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length == 0) {
      $this.remove();
    }
  });

	// FINANCIAL PROFILE BLOG
	var $profile_blog = $('body.financial-profile, body.financial-profile-post');
	var $profile_subscribeModal = $news_blog.find(".modal.subscribe");
	var $profile_subscribeBtn = $news_blog.find(".btn-subscribe");

	$profile_blog.find($profile_subscribeBtn).on('click', function(e) {
    if ($(this).hasClass('user')) {
      $profile_subscribeModal.addClass("active");
    } else {
      window.location.href = '/login'
    }
  });

  $profile_subscribeModal.find(".modal.subscribe .modal-close").on('click', function(e) {
    $profile_subscribeModal.removeClass("active");
  });

  $profile_blog.on('click', function(e) {
    if ($(e.target).closest(".modal.subscribe .modal-content, .btn-subscribe").length == 0) {
      $profile_subscribeModal.removeClass("active");
    }
  });

  $profile_blog.find('.canvas p').each(function() {
    let $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length == 0) {
      $this.remove();
    }
  });

	// FAQ BLOG
	var $faq_blog = $('body.faq, body.faq-post');
	var $faq_subscribeModal = $news_blog.find(".modal.subscribe");
	var $faq_subscribeBtn = $news_blog.find(".btn-subscribe");

	$faq_blog.find($faq_subscribeBtn).on('click', function(e) {
    if ($(this).hasClass('user')) {
      $faq_subscribeModal.addClass("active");
    } else {
      window.location.href = '/login'
    }
  });

  $faq_subscribeModal.find(".modal.subscribe .modal-close").on('click', function(e) {
    $faq_subscribeModal.removeClass("active");
  });

  $faq_blog.on('click', function(e) {
    if ($(e.target).closest(".modal.subscribe .modal-content, .btn-subscribe").length == 0) {
      $faq_subscribeModal.removeClass("active");
    }
  });

  $faq_blog.find('.canvas p').each(function() {
    let $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length == 0) {
      $this.remove();
    }
  });

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	    document.getElementById("header").style['background-color'] = "white";
			var links = document.getElementsByClassName("primary-item-link");
			for (var i = 0; i < links.length; i++) {
			  links[i].style.color = "black";
			}
	  } else {
	    document.getElementById("header").style.background = "none";
			var links = document.getElementsByClassName("primary-item-link");
			for (var i = 0; i < links.length; i++) {
			  links[i].style.color = "white";
			}
	  }
	}
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

new TradingView.widget({
  "width": 980,
  "height": 610,
  "symbol": "NASDAQ:AAPL",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "container_id": "tradingview_27427"
});
