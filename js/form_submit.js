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
          alert('Your message has been sent successfully. Thank you.')
        },
        error: function(){
          alert("Your message has not been sent. Please try again later!");
        }
      });
      
    return false;
  });
});