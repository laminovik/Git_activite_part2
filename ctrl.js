$(function(){
//Controle de longueur du MdP
  $('#pswd1').on('blur',function(){
    if($('#pswd1').val().length<6){
         $('#pswd_msg1').css('display','block');
        }
   else {
        $('#pswd_msg1').css('display','none');
        }
      });
//Controle d'identité des 2 MdP
 $('#pswd1').on('blur',function(){
    if($('#pswd2').val()!=$('#pswd1').val()){
         $('#pswd_msg2').css('display','block');
        }
    else {
        $('#pswd_msg2').css('display','none');
        }
      });

});

