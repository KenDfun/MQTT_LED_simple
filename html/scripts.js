$(function(){

  $("#btnSay").click(function(){
    $(".ajax_res_work").text("クリックされました。");
    $.post(
      'cgi-bin/mqtt_web_if.rb',
      {'led1':6, 'led3':5},
      function(data){
        $('.ajax_res').html(data);
      }
    );
  });



});
