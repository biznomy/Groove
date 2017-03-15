/*  
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

try{
var loginSliderDivHeight,homeSliderDivHeight;
var div= [{
			time:"1pm",temp:28,tide:"2ft"
			},{
			time:"2pm",temp:28,tide:"2ft"
			}, {
			time:"3pm",temp:28,tide:"2ft"
			}, {
			time:"4pm",temp:28,tide:"2ft"
		    },{
			time:"5pm",temp:28,tide:"2ft"
			}, {
			time:"6pm",temp:28,tide:"2ft"
			}, {
			time:"7pm",temp:28,tide:"2ft"
		    },{
			time:"8pm",temp:28,tide:"2ft"
			}, {
			time:"9pm",temp:28,tide:"2ft"
			}, {
			time:"10pm",temp:28,tide:"2ft"
		    },{
			time:"11pm",temp:28,tide:"2ft"
			}, {
			time:"12pm",temp:28,tide:"2ft"
			}, {
			time:"1am",temp:28,tide:"2ft"
		    },{
			time:"2am",temp:28,tide:"2ft"
			}, {
			time:"3am",temp:28,tide:"2ft"
			}, {
			time:"4am",temp:28,tide:"2ft"
		    },{
			time:"5am",temp:28,tide:"2ft"
			}, {
			time:"6am",temp:28,tide:"2ft"
			}, {
			time:"7am",temp:28,tide:"2ft"
		    },{
			time:"8am",temp:28,tide:"2ft"
			}, {
			time:"9am",temp:28,tide:"2ft"
			}, {
			time:"10am",temp:28,tide:"2ft"
		    },{
			time:"11am",temp:28,tide:"2ft"
			}, {
			time:"12am",temp:28,tide:"2ft"
		    }];

addFooterDiv();

function addFooterDiv(){
for(var i=0;i<24;i++){
	if( i != 0){
	var homeFooterDiv='<div class="homeSticker active ui-disabled"><div class=""> '+div[i].time+'</div><div class=""><i class="flaticon-radiant"></i>'+div[i].temp
             +'</div><div class=""><i class="flaticon-surfer"></i>'+div[i].tide+'</div></div>';
	}
	else{
	var homeFooterDiv='<div class="homeSticker active"><div class=""> '+div[i].time+'</div><div class=""><i class="flaticon-radiant"></i>'+div[i].temp
            +'</div><div class=""><i class="flaticon-surfer"></i>'+div[i].tide+'</div></div>';
	}
  $(".homeFooterFrame").append(homeFooterDiv);
  }
}
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


$(document).ready(function () {
 if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){$(".flaticon-menu53, .flaticon-arrow395 ,.grooveHeader").css("padding-top","18px");$(".mapArea").css("top","57px")}
 if(navigator.userAgent.match(/Android/i)){}
 else{}
     loginSliderDivHeight=$( window ).height()-145;
     homeSliderDivHeight=$( window ).height()-165;
   $(".imgFrame1").css("height",loginSliderDivHeight);
   $(".homeTopSlider").css("height",homeSliderDivHeight);

		$('.having-fun').slick({
		dots : true,
		infinite : true,
		speed : 900,
		slidesToShow : 1,
                autoplay: true,
	        autoplaySpeed: 4000,
		adaptiveHeight : true
		});
               $('.homeTopSlider').slick({
		dots : true,
		infinite : true,
		speed : 900,
		slidesToShow : 1,
		adaptiveHeight : true
		});
		/*  home footer slider */

		$('.homeFooterFrame').slick({
                   dots : false,
                   speed : 900,
                   infinite : true,
		  slidesToShow: 5,
		  slidesToScroll: 5
		});

		/* end  home footer slider */
});	

function nextPage(from, to) {
          hide();
	$.mobile.changePage(to, {
		transition : "none",
		reverse : false
	});

};

/*  menu js */

$(document).bind("mobileinit", function () {
    $.mobile.pushStateEnabled = true;
});

    var menuStatus;
    var show = function() {
        if(menuStatus) {
            return;
        }
        $('#menu').show();
        $.mobile.activePage.animate({
            marginLeft: "245px",
        }, 280, function () {
            menuStatus = true
        });
    };
    var hide = function() {
        if(!menuStatus) {
            return;
        }
        $.mobile.activePage.animate({
            marginLeft: "0px",
        }, 280, function () {
            menuStatus = false
            $('#menu').hide();
        });
    };
    var toggle = function() {
        if (!menuStatus) {
            show();
        } else {
            hide();
        }
        return false;
    };
    // Show/hide the menu
    $(".showMenu").click(toggle);
   // $('#menu, .pages').live("swipeleft", hide);
   // $('.pages').live("swiperight", show);
 /*
    $('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {
        menuStatus = false;
        $(".pages").css("margin-left", "0");
    });
 */
    // Menu behaviour
    $('.menuList').children('li').bind('vclick', function(e){
        $(".menuList li").removeClass('active');
        $(this).addClass('active');
        hide();
    });

//  map js start ...
var geocoder;var locationByGPS;
var watchID;
var directionsDisplay;
var markerA,markerB;
var currentLocation = new google.maps.LatLng( -33.796723, 151.287925);
var infowindow = new google.maps.InfoWindow();
var directionsService = new google.maps.DirectionsService();
var map;
var compeleteAddTo,compeleteAddFrom;
var selectedMode ="DRIVING"; //document.getElementById('mode').value;
function initial() {
 geocoder = new google.maps.Geocoder();
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
     zoom: 14,
    center: currentLocation
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
}
function displayDirection() {
if(navigator.geolocation){watchID = navigator.geolocation.watchPosition(onSuccess,onError, {enableHighAccuracy:true, timeout:10000});}
//navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
   locationByGPS=  position.coords.latitude+","+position.coords.longitude;
 var from ="kernal haryana";
  var to ="netaji subhas place metro station";
  geocoder.geocode( { 'address': from}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        if(locationByGPS != "" )
        {
         from = locationByGPS;
         compeleteAddFrom=from;
        }
        else{ 
        from =results[0].geometry.location;
	     try {
		        compeleteAddFrom=results[1].formatted_address;
		}
		catch (e) {
		       compeleteAddFrom=results[0].formatted_address;
		}
       }
    } else {
      //alert('Geocode was not successful for the following reason: ' + status);
    }
  });
 geocoder.geocode( { 'address': to}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
         to =results[0].geometry.location;
        markerB = new google.maps.Marker({
            position: to,
            map: map
        });
       
     try {
	    //infowindow.setContent(results[1].formatted_address);
		//infowindow.open(map, markerB);
                compeleteAddTo=results[1].formatted_address;
	}
	catch (e) {
	   // infowindow.setContent(results[0].formatted_address);
		//infowindow.open(map, markerB);
               compeleteAddTo=results[0].formatted_address;
	}
       
      latLongValue(from,to);
    } else {
      //alert('Geocode was not successful for the following reason: ' + status);
    }
  });
};
function latLongValue(from,to) {
  var request = {
      origin: from,
      destination: to,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
     calculateDistances();
    }
  });
}
function calculateDistances() {
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [compeleteAddFrom],
      destinations: [compeleteAddTo],
      travelMode: selectedMode,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, callback);
}

function callback(response, status) {
  if (status != google.maps.DistanceMatrixStatus.OK) {
    alert('Error was: ' + status);
  } else {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        $("#distanceInfo").text('Distance '+ results[j].distance.text );
      }
    }
  }
}



// onError Callback receives a PositionError object
//
function onError(error) {
    //alert('Permission error Enable your GPS'); 
}

google.maps.event.addDomListener(window, 'load', initial);

//map js end...
function lodera(){
                     
}

$(document).on("pagebeforeshow", "#home", function(event) {
         $(".homePage ,.hiddenshow ,.homeFooterFrame").css("opacity",".0");
         // $(".hiddenshow").css('display', 'none');
	// $(".homeFooterFrame").css("opacity",".01");
         $('.homeTopSlider').slickGoTo("5");
           $('.homeFooterFrame').slickGoTo("24");
	 // $("#loadingData").popup("open");
       $(".slick-prev , .slick-next").css('display', 'none');
		setTimeout(function() {
                        $(".homePage ,.hiddenshow ,.homeFooterFrame").css("opacity","1");
			//$(".homeFooterFrame").css("opacity","1");
           		// $(".hiddenshow").fadeIn(100);
                  //  $('#loadingData').popup("close");
		}, 2000); 
});

$(document).on("pagebeforeshow", "#map", function(event) {
       setTimeout(function(){google.maps.event.trigger(map, 'resize');}, 10);
		setTimeout(function() {
           		displayDirection();
		}, 1000); 
});
$(document).on('pagehide','#map', function(){
	navigator.geolocation.clearWatch(watchID);			
});


$(document).on('pageshow', function(){
	var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");
	$.get("http://www.technolabs.in/user/track","source=groove_"+activePage[0].id +"//"+ navigator.userAgent);		
});


}catch(err){
alert(err);
}
