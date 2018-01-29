var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_uzSKTmrb";
  myform.find("button").text("Отправляем...");
  emailjs.send(service_id,template_id,params)
  	.then(function(){ 
       alert("Заказ отправлен!");
       myform.find("button").text("Заказать");
     }, function(err) {
       alert("Отправить письмо не удалось, звоните!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Заказать");
    });
  return false;
});

var myform2 = $("form#myform2");
myform2.submit(function(event){
	event.preventDefault();

	var params = myform2.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_uzSKTmrb2";
  myform2.find("button").text("Отправляем...");
  emailjs.send(service_id,template_id,params)
  	.then(function(){ 
       alert("Сообщение отправлено!");
       myform2.find("button").text("Отправить");
     }, function(err) {
       alert("Отправить письмо не удалось, звоните!\r\n Response:\n " + JSON.stringify(err));
       myform2.find("button").text("Отправить");
    });
  return false;
});

var today = new Date();
document.getElementById('today').innerHTML="* Цена актуальна на " + today.toLocaleDateString();
