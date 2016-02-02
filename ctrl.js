$(function(){
  $('#pswd1').on('blur',function(){
    if($('#pswd1').val().length<6){
         $('#pswd_msg1').css('display','block');
        }
   else {
        $('#pswd_msg1').css('display','none');
        }
      });
});

