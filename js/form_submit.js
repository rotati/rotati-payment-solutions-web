$(document).ready(function () {
  var $form = $("form");
  $form.submit(function () {
      $.ajax({
        type: "POST",
        dataType: 'json',
        url: $form.attr("action"),
        data: $form.serialize(),
        success: function(){
          $form[0].reset();
        },
        error: function(){
          alert("Fail to sent your message. Please try later!");
        }
        console.log($form.serialize());
        console.log($form.attr("action"));
      });
      
    return false;
  });
});