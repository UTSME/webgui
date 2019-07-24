
$(document).ready(function socket(){

  var socket = io('http://localhost:3000'); //Connects to the library transferring data from the server to html
  //Listening to a line essentiallyu
    socket.on('hello', function( type, number) {
      switch(type) {
        case 'steer' : {
          //document.getElementById('steer-num').innerHTML = number + "°";
          $('#steer-num').html(number + "°"); //These just mean change the html in the div
          //#Steer-num is the div class
          //whats in the html tage is what the div is changing to
          // number/=180;
          // number*=100;
          if(number > 0) number += 90;
          number/=180;
          number*=100;
            $("#dynamic").css("width", number + "%");
            $("#dynamic").attr("aria-valuenow", number);

          break;
        }
        case 'speed' : {
            //document.getElementById('sc-value').innerHTML = number + "km/h";
            $('#sc-value').html(number + "km/h");
            number/=120;
            number*=100;
            $("#speedometer").css("width", number + "%");
            $("#speedometer").attr("aria-valuenow", number);
            break;
        }
        case 'brake' : {
          //document.getElementById('brake-value').innerHTML = number+"%";
          $('#brake-value').html(number + "%");
          $("#brake").css("width", number + "%");
          $("#brake").attr("aria-valuenow", number);
          break;
        }
        case 'bms' : $('#bms-number').html(number);break;
        case 'voltage' : {
          //document.getElementById('vol-value').innerHTML = number + "v";
          $('#vol-value').html(number + "v");
          number/=10;
          $("#voltage").css("width", number + "%");
          $("#voltage").attr("aria-valuenow", number);
          break;
        }
        case 'temp' : {
          //document.getElementById('temp-value').innerHTML = number + "°c";
          $('#temp-value').html(number + "°c");
          number/=90;
          number*=100;
          $("#temperature").css("width", number + "%");
          $("#temperature").attr("aria-valuenow", number);
          break;
        }
        case 'df-fault1' : document.getElementById('df-fault-1').style.backgroundColor = "#dc0000"; break;
        case 'df-fault2' : document.getElementById('df-fault-2').style.backgroundColor = "#dc0000"; break;
        case 'df-fault3' : document.getElementById('df-fault-3').style.backgroundColor = "#dc0000"; break;
        case 'df-fault4' : document.getElementById('df-fault-4').style.backgroundColor = "#dc0000"; break;
        case 'fault1' : document.getElementById('fault-1').style.backgroundColor = "#dc0000"; break;
        case 'fault2' : document.getElementById('df-fault-2').style.backgroundColor = "#dc0000"; break;
        case 'fault3' : document.getElementById('df-fault-3').style.backgroundColor = "#dc0000"; break;
        case 'fault4' : document.getElementById('df-fault-4').style.backgroundColor = "#dc0000"; break;
        case 'battery' : {
            // document.getElementById('bt-num').innerHTML = number + "°";
            $('#bt-num').html(number + "°c");
            number/=90;
            number*=100;
            $("#battery").css("width", number + "%");
            $("#battery").attr("aria-valuenow", number);
          break;
        }
        case 'batvol' : {
          // document.getElementById('bv-num').innerHTML = number + "v";
          $('#bv-num').html(number + "v");
          number/=10;
            $("#batvol").css("width", number + "%");
            $("#batvol").attr("aria-valuenow", number);
          break;
        }
        case 'coolant' : {
          // document.getElementById('ct-num').innerHTML = number + "°";
          $('#ct-num').html( number + "°c");
            $("#colant").css("width", number + "%");
            $("#colant").attr("aria-valuenow", number);
          break;
        }
        case 'wheelfront' : {
          // document.getElementById('ws-front').innerHTML = number + "km/h";
          $('#ws-front').html(number + "km/h");
          $("#front").css("width", number + "%");
          $("#front").attr("aria-valuenow", number);
        }
        case 'wheelrear' : {
          //document.getElementById('ws-rear').innerHTML = number + "km/h";
          $('#ws-rear').html(number + "km/h");
          $("#rear").css("width", number + "%");
          $("#rear").attr("aria-valuenow", number);
        }
        default: break;
      }

  });
});
