$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Well hello sexy...</li>");
    $('ul#webpage').children('li').first().click(function() {
        $(this).remove();
    });
  });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>:(");
  });
  $("button#copy").click(function(){
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Well fuck right off then!</li>");
  });

  $("img#salad").click(function() {
    $(this).remove();
  });

});
