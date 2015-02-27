var pieChartData = [
	//"Customer",1150379,"Subscriber",8574247
	{
        value: 1150379,
        color:"MediumOrchid",
        label: "Customer"
    },
    {
        value: 8574247,
        color: "RosyBrown",
        label: "Subscriber"
    }
];
		

genderData = [
			//Customer -   "Male",83 	  "Unknown",1150282 "Female",14
			//Subscriber - "Male",6587739 "Unknown",926 	"Female",1985582
			{
		        value: 6587822,
		        color:"Blue",
		        highlight: "Blue",
		        label: "Male"
		    },
			{
		        value: 1985596,
		        color:"Deeppink",
		        highlight: "Deeppink",
		        label: "Female"
		    },
			{
		        value: 1151208,
		        color:"grey",
		        highlight: "darkgrey",
		        label: "Unknown"
		    }
];
		
subscriberData = [
			//"Male",6587739 "Unknown",1985582 "Female",926
			{
		        value: 6587739,
		        color:"Blue",
		        highlight: "Blue",
		        label: "Male"
		    },
			{
		        value: 1985582,
		        color:"Deeppink",
		        highlight: "Deeppink",
		        label: "Female"
		    },
			{
		        value: 926,
		        color:"grey",
		        highlight: "darkgrey",
		        label: "Unknown"
			}
];
		
customerData = [
			
			{
		        value: 83,
		        color:"Blue",
		        highlight: "Blue",
		        label: "Male"
		    },
			{
		        value: 14,
		        color:"Deeppink",
		        highlight: "Deeppink",
		        label: "Female"
		    },
			{
		        value: 1150282,
		        color:"grey",
		        highlight: "darkgrey",
		        label: "Unknown"
		    }
];		
		
tripCategories = [
	{
		label: "0-1000",
		value: 7098163,
		color:"violet",
	},
	{
		label: "1000-2000",
		value: 2158332,
		color:"blue",
	},
	{
		label: "2000-3000",
		value: 327115,
		color:"green",
	},
	{
		label: "3000-4000",
		value: 30091,
		color:"yellow",
	},
	{
		label: "4000-5000",
		value: 25400,
		color:"orange"
	},
	{
		label: "5000-8000",
		value: 30091,
		color:"red"
	},															
	{
		label: "8000-10000",
		value: 8418,
		color:"magenta"
	},	
	{
		label: "10000+",
		value: 17591,
		color:"chocolate"
	},					
];	

topStations = [
               {label:"8 Ave & W 31 St", value:101916},
               {label:"E 17 St & Broadway", value:97180},
               {label:"Lafayette St & E 8 St", value:96544},
               {label:"Broadway & E 14 St", value:80190},
               {label:"W 21 St & 6 Ave", value:80150},
               {label:"West St & Chambers St", value:78158},
               {label:"8 Ave & W 33 St", value:72318},
               {label:"Cleveland Pl & Spring St", value:71201},
               {label:"Broadway & E 22 St", value:71201},
               {label:"University Pl & E 14 St", value:70015}
];

quietStations = [
               {label:"Sands St & Gold St", value:3692},
               {label:"Bedford Ave & S 9th St", value:3203},
               {label:"Franklin Ave & Myrtle Ave", value:3095},
               {label:"Monroe St & Classon Ave", value:3072},
               {label:"Peck Slip & Front Street", value:2908},
               {label:"Hanover Pl & Livingston St", value:2415},
               {label:"Park Ave & St Edwards St", value:2109},
               {label:"7 Ave & Farragut St", value:1426},
               {label:"Railroad Ave & Kay Ave", value:1046},
               {label:"Sands St & Navy St", value:500}
];

tripNWeatherByMonth = [
	{label:"Jul-13",value:843416,tempf:26},
	{label:"Aug-13",value:1001958,tempf:23},
	{label:"Sep-13",value:1034359,tempf:19},
	{label:"Oct-13",value:1037712,tempf:15},
	{label:"Nov-13",value:675774,tempf:7},
	{label:"Dec-13",value:443966,tempf:4},
	{label:"Jan-14",value:300400,tempf:-2},
	{label:"Feb-14",value:224736,tempf:0},
	{label:"Mar-14",value:439117,tempf:3},
	{label:"Apr-14",value:670780,tempf:11},
	{label:"May-14",value:866117,tempf:17},
	{label:"Jun-14",value:936880,tempf:22},
	{label:"Jul-14",value:968842,tempf:24},
	{label:"Aug-14",value:280570,tempf:23},
];



var barChartDataTemplate = {
    labels:[],
    datasets: []
};

var barChartDataSetTemplate = {
        label: "",
        fillColor: "Royalblue",
        highlightFill: "blue",
        barStrokeWidth : 1,
        data: []
};

function lineDataTemplate(labels,datasets) {
	this.labels = labels;
	this.datasets = datasets;
}

function lineDataSetTemplate(label,strokeColor,pointColor,fillColor,data) {
	this.label=label;
	this.strokeColor=strokeColor;
	this.pointColor = pointColor;
	this.fillColor = fillColor;
	this.data = data;
    this.pointHighlightFill= "#fff";
    this.pointHighlightStroke= "rgba(151,187,205,1)";
}


function shuffle(array) {
	    var input = array;
	    for (var i = input.length-1; i >=0; i--) {
	        var randomIndex = Math.floor(Math.random()*(i+1)); 
	        var itemAtIndex = input[randomIndex]; 
	        input[randomIndex] = input[i]; 
	        input[i] = itemAtIndex;
	    }
	    return input;
}

function drawMap(stationData) {
	  var image = 'img/beachflag.png';
	  
	  var mapOptions = {
	    zoom: 13,
	    /*Empire State is the center*/
	    center: new google.maps.LatLng(40.746987,-73.982084)
	  };
	  var map = new google.maps.Map(
			  document.getElementById('map-canvas'),
			  mapOptions);

	  var bikeLayer = new google.maps.BicyclingLayer();
	  bikeLayer.setMap(map);

	  var myStartStationLatlng = new google.maps.LatLng(stationData.lat, stationData.long);

	  var start_station = new google.maps.Marker({
		      position: myStartStationLatlng,
		      map: map,
		      title: stationData.station,
		      icon: image
		  });	
	  	
	  for(i=0;i<stationData.trips.length;i++) {
		  endStation = stationData.trips[i];
		  endStationLatLong = new google.maps.LatLng(endStation.lat,endStation.long);
		  end_station = new google.maps.Marker({
		      position: endStationLatLong,
		      map: map,
		      title: endStation.station,
		      icon: image
		  });		
		  
		  var bikePathCoordinates = [myStartStationLatlng,endStationLatLong];
		  
		  var bikePath = new google.maps.Polyline({
		    path: bikePathCoordinates,
		    geodesic: true,
		    strokeColor: '#0000FF',
		    strokeOpacity: 0.8,
		    strokeWeight: 3
		  });
		  bikePath.setMap(map); 
	  }  
}

var top5TripsForStations = [
{station:"8 Ave & W 31 St", lat:40.75044999,long:-73.99481051,
	trips:[
	      {station:"9 Ave & W 16 St",lat:40.74206539,long:-74.00443172,trips:463},
	      {station:"W 22 St & 10 Ave",lat:40.74691959,long:-74.00451887,trips:462},
	      {station:"11 Ave & W 27 St",lat:40.751396,long:-74.005226,trips:458},
	      {station:"W 49 St & 8 Ave",lat:40.76227205,long:-73.98788205,trips:450},
	      {station:"8 Ave & W 52 St",lat:40.76370739,long:-73.9851615,trips:447}
	      ]}
];

