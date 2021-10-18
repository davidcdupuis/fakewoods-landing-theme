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
  
  var $blog = $('body.blog, body.blog-post');
  var $subscribeModal = $blog.find(".modal.subscribe");
  var $subscribeBtn = $blog.find(".btn-subscribe");

  $blog.find($subscribeBtn).on('click', function(e) {
    if ($(this).hasClass('user')) {
      $subscribeModal.addClass("active");
    } else {
      window.location.href = '/login'
    }
  });

  $subscribeModal.find(".modal.subscribe .modal-close").on('click', function(e) {
    $subscribeModal.removeClass("active");
  });
  
  $blog.on('click', function(e) {
    if ($(e.target).closest(".modal.subscribe .modal-content, .btn-subscribe").length == 0) {
      $subscribeModal.removeClass("active");
    }
  });

  $blog.find('.canvas p').each(function() {
    let $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length == 0) {
      $this.remove();
    }
  });
});
