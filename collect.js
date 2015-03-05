var url='http://www.expedia.com/Flights-Search?trip=oneway&leg1=from:PIT,to:SFO,departure:04/08/2015TANYT&passengers=children:0,adults:1,seniors:0,infantinlap:Y&mode=search';
var page = require('webpage').create();

//page.onResourceRequested = function(request) {
//  console.log('Request ' + JSON.stringify(request, undefined, 4));
//};

//page.onResourceReceived = function(response) {
//  console.log('Receive ' + JSON.stringify(response, undefined, 4));
//};

page.onConsoleMessage = function(msg){
    console.log(msg);
};

page.open(url, function (status) {
    //page.render('expedia.png');
    console.log(status);
    page.evaluate(function(){
      console.log('wait for 5 secons');
      setInterval(function(){
	var items = document.getElementsByClassName('offer-price');
	console.log(items.length);
    	for(var i=0;i<10&&i<items.length;i++){
            console.log(items[i].innerHTML);  
        }
	console.log('5 seconds past');
      },5000);
    });
});
