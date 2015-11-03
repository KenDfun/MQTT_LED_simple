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

  $(".chkled").click(function(){
    var code={'led1': '', 'led2':'','led3':''};
    if($("#chkled1").prop('checked')){
      code["led1"]="on";
    }
    if($("#chkled2").prop('checked')){
      code["led2"]="on";
    }
    if($("#chkled3").prop('checked')){
      code["led3"]="on";
    }

    $.post(
      'cgi-bin/mqtt_web_if.rb',
      code,
      function(data){
        $('.ajax_res').html(data);
      }
    );
  });



});
