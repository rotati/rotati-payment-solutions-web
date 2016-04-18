$(document).ready(function () {
  var $form = $("form");
  $form.submit(function () {
      $.ajax({
        type: "post",
        dataType: 'json',
        url: $form.attr("action"),
        data: $form.serialize(),
        success: function(){
          $form[0].reset();
        },
        error: function(){
          alert("Fail to sent your message. Please try later!");
        }
      });
      
    return false;
  });
});