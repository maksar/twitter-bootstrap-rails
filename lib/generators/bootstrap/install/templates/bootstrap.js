// Generated by CoffeeScript 1.4.0
(function() {
  var initTooltips;

  initTooltips = function() {
    $("a[rel=popover]").popover();
    $(".tooltip").tooltip();
    return $("a[rel=tooltip]").tooltip();
  };

  jQuery(function() {
    return initTooltips();
  });

  $(document).on('page:load', initTooltips);

}).call(this);
