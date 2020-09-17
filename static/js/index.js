//https://www.eclipse.org/paho/clients/js/

function E_1() {
	ImputText1=document.getElementById("ImputText1").value
	ImputClave1=document.getElementById("ImputClave").value
	message =new Paho.MQTT.Message("L10"+" "+ImputText1+" "+ImputClave1)
	message.destinationName = "jorgebito777@gmail.com/RASP";
	client.send(message);
  
}
function E_2(){	
	ImputText2=document.getElementById("ImputText1").value
	ImputClave2=document.getElementById("ImputClave").value
	message =new Paho.MQTT.Message("L1N"+" "+ImputText2+" "+ImputClave2);
	message.destinationName = "jorgebito777@gmail.com/RASP";
	client.send(message);
}
function E_1_1() {
	ImputText3=document.getElementById("ImputText1").value
	ImputClave3=document.getElementById("ImputClave").value
	message =new Paho.MQTT.Message("L2O"+" "+ImputText3+" "+ImputClave3);
	message.destinationName = "jorgebito777@gmail.com/RASP";
	client.send(message);
  
}
function E_2_2() {
	ImputText4=document.getElementById("ImputText1").value
	ImputClave4=document.getElementById("ImputClave").value
	message =new Paho.MQTT.Message("L2N"+" "+ImputText4+" "+ImputClave4);
	message.destinationName = "jorgebito777@gmail.com/RASP";
	client.send(message);
  
}








// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jorgebito777@gmail.com",
    password: "proevolution10",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jorgebito777@gmail.com/WEB");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jorgebito777@gmail.com/RASP";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
	//text=(message.payloadString);
	//console.log(text)
	//document.getElementById("respuesta").innerHTML = text;
	console.log("Nuevo mensaje:"+message.payloadString); 
    document.getElementById("respuesta").innerHTML=message.payloadString.split(" ")[0];
	document.getElementById("respuesta1").innerHTML=message.payloadString.split(" ")[1];
	


  
  }
  
