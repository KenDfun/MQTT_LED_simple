

$(function(){


  timer1=setInterval(function(){
    $.get(
      'cgi-bin/mqtt_led_status.rb',
      function(data){
        mqtt_callback(data);
      }
    );
  },3000
  );

  $("#btnSay").click(function(){
    // displayAlert();
    stopTimer();
  });

  $("#led1_switch").click(function(){
    htext='<button id="led1_btn"  type="button" name="led1_btn" value="ON"><img src="button_off.png" alt="LED1" ></button>';
    $("#led1_switch").html(htext);
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
        mqtt_callback(data);
      }
    );
  });



  function mqtt_callback(data){
    $('.main_console').html(data);
  }

  function displayAlert(){
    $(".ajax_res_work").text("クリックされました。");
    $.post(
      'cgi-bin/mqtt_web_if.rb',
      {'led1':6, 'led3':5},
      function(data){
        $('.ajax_res').html(data);
      }
    );
  }

  function stopTimer(){
    clearInterval(timer1);
  }

});
