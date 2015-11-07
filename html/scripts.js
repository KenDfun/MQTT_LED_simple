

$(function(){

  $.get(
    'cgi-bin/mqtt_led_status.rb',
    function(data){
      mqtt_callback(data);
    }
  );
  /*

  timer1=setInterval(function(){
    $.get(
      'cgi-bin/mqtt_led_status.rb',
      function(data){
        mqtt_callback(data);
      }
    );
  },3000
  );
*/
  $("#btnSay").click(function(){
    // displayAlert();
    stopTimer();
  });

  $("#led_switch").on('click','button#led1_btn',function(){
    $.ajax({url:"cgi-bin/mqtt_web_if.rb",
            type:"GET",
            dataType:"text",
            cache:false,
            async:false,
            data:{"led":"0"},
            success: function(data){$(".ajax_res_work").html(data);},
            error: function(data){alert("error:"+data)}
    });

    $.get(
      'cgi-bin/mqtt_led_status.rb',
      null,
      function(data){
        mqtt_callback(data);
      }
    );

  });

  $("#led_switch").on('click','button#led2_btn',function(){
    $.ajax({url:"cgi-bin/mqtt_web_if.rb",
            type:"GET",
            dataType:"text",
            cache:false,
            async:false,
            data:{"led":"1"},
            success: function(data){$(".ajax_res_work").html(data);},
            error: function(data){alert("error:"+data)}
    });

    $.get(
      'cgi-bin/mqtt_led_status.rb',
      null,
      function(data){
        mqtt_callback(data);
      }
    );

  });

  $("#led_switch").on('click','button#led3_btn',function(){
    $.ajax({url:"cgi-bin/mqtt_web_if.rb",
            type:"GET",
            dataType:"text",
            cache:false,
            async:false,
            data:{"led":"2"},
            success: function(data){$(".ajax_res_work").html("led3!");},
            error: function(data){alert("error:"+data)}
    });

    $.get(
      'cgi-bin/mqtt_led_status.rb',
      null,
      function(data){
        mqtt_callback(data);
      }
    );

  });


  function mqtt_callback(data){
    $("#led_switch").html(data);
  }


  function stopTimer(){
    clearInterval(timer1);
  }

});
