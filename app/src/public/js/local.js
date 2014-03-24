$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });

  $('#new-btn').click(function() {
    $('#sidebar').find('li.active').removeClass('active');
    $('#sidebar').find('a[href="#new"]').parent().addClass('active');
  });

  $(document).on('click', '.panel-heading span.panel-clickable', function(e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
      $this.parents('.panel').find('.panel-body').slideUp();
      $this.addClass('panel-collapsed');
    } else {
      $this.parents('.panel').find('.panel-body').slideDown();
      $this.removeClass('panel-collapsed');
    }
  });
  $(document).on('click', '.panel div.panel-clickable', function(e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
      $this.parents('.panel').find('.panel-body').slideUp();
      $this.addClass('panel-collapsed');
    } else {
      $this.parents('.panel').find('.panel-body').slideDown();
      $this.removeClass('panel-collapsed');
    }
  });
  $('.panel-heading span.panel-clickable').click();
  $('.panel div.panel-clickable').click();

  $('#tip').change(function(){
    $('#tipNum').text($(this).val() + '%');
  });

  $( document ).on('click', '.btn-add', function(e) {
    e.preventDefault();

    var field = $(this).closest('.form-group');
    var field_new = field.clone();

    $(this)
    .toggleClass('btn-default')
    .toggleClass('btn-add')
    .toggleClass('btn-warning')
    .toggleClass('btn-remove')
    .html('–');

    field_new.find('input').val( '' );
    field_new.insertAfter( field );
  });

  $( document ).on('click', '.btn-remove', function(e) {
    e.preventDefault();
    $(this).closest('.form-group').remove();
  });

  // For iOS Apps
  // Open all links in the iOS web app
  if (('standalone' in window.navigator) && window.navigator.standalone) {
    $('a').on('click', function(e){
      e.preventDefault();
      var new_location = $(this).attr('href');
      if (new_location !== undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') === undefined){
        window.location = new_location;
      }
    });
  }

  // For iOS Apps
  if (window.navigator.standalone) {
    FastClick.attach(document.body);
  }

  // Fix Facebook auth redirect url
  if (window.location.hash && window.location.hash == '#_=_') {
    if (window.history && history.pushState) {
      window.history.replaceState('', document.title, window.location.pathname);
    } else {
      // Prevent scrolling by storing the page's current scroll offset
      var scroll = {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
      };
      window.location.hash = '';
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scroll.top;
      document.body.scrollLeft = scroll.left;
    }
  }
});
