$(function() {
  var b = $("#title");
  var w = $("#contact_end");
  var l = $("#list");
  var title = $("#title");

  b.click(function() {

    if(w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
      title.text("contact >");
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
      title.text("got it <");
    }
  });
});
