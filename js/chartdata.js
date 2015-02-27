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
	      ]},
{station:"E 17 St & Broadway", lat:40.73704984,long:-73.99009296,
	trips:[
	      {station:"Pershing Square N",lat:40.75188406,long:-73.97770164,trips:1417},
	      {station:"E 42 St & Vanderbilt Ave",lat:40.752416,long:-73.97837,trips:462},
	      {station:"W 17 St & 8 Ave",lat:40.74177603,long:-74.00149746,trips:1988},
	      {station:"Lafayette St & E 8 St",lat:40.73028666,long:-73.9907647,trips:1369},
	      {station:"W 21 St & 6 Ave",lat:40.74173969,long:-73.99415556,trips:1358}
	      ]},
{station:"Lafayette St & E 8 St", lat:40.73028666,long:-73.9907647,
	trips:[
	      {station:"E 10 St & Avenue A",lat:40.72740794,long:-73.98142006,trips:2569},
	      {station:"E 7 St & Avenue A",lat:40.72621788,long:-73.98379855,trips:2227},
	      {station:"E 17 St & Broadway",lat:40.73704984,long:-73.99009296,trips:2309},
	      {station:"Broadway & E 14 St",lat:40.73454567,long:-73.99074142,trips:1942},
	      {station:"E 9 St & Avenue C",lat:40.72521311,long:-73.97768752,trips:1713}
	      ]},
{station:"Broadway & E 14 St", lat:40.73454567,long:-73.99074142,
	trips:[
	      {station:"Washington Pl & Broadway",lat:40.72903917,long:-73.99404649,trips:1948},
	      {station:"Lafayette St & E 8 St",lat:40.73028666,long:-73.9907647,trips:1612},
	      {station:"E 10 St & Avenue A",lat:40.72740794,long:-73.98142006,trips:1582},
	      {station:"E 13 St & Avenue A",lat:40.72955361,long:-73.98057249,trips:1458},
	      {station:"Washington Square E",lat:40.73049393,long:-73.9957214,trips:1426}
	      ]},
{station:"W 21 St & 6 Ave", lat:40.74173969,long:-73.99415556,
	trips:[
			{station:"W 22 St & 10 Ave",lat:40.74691959,long:-74.00451887,trips:3224},
			{station:"9 Ave & W 22 St",lat:40.7454973,long:-74.00197139,trips:2658},
			{station:"W 22 St & 8 Ave",lat:40.74475148,long:-73.99915362,trips:2135},
			{station:"8 Ave & W 31 St",lat:40.75044999,long:-73.99481051,trips:1783},
			{station:"W 15 St & 7 Ave",lat:40.73935542,long:-73.99931783,trips:1472}
	      ]},
{station:"West St & Chambers St", lat:40.71754834,long:-74.01322069,
	trips:[
			{station:"12 Ave & W 40 St",lat:40.76087502,long:-74.00277668,trips:2520},
			{station:"West Thames St",lat:40.70834698,long:-74.01713445,trips:2152},
			{station:"W 14 St & The High Line",lat:40.74195138,long:-74.00803013,trips:1927},
			{station:"Christopher St & Greenwich St",lat:40.73291553,long:-74.00711384,trips:1874},
			{station:"Centre St & Chambers St",lat:40.71273266,long:-74.0046073,trips:1842}
	      ]},
{station:"8 Ave & W 33 St", lat:40.751551,long:-73.993934,
	trips:[
			{station:"W 37 St & 10 Ave",lat:40.75660359,long:-73.9979009,trips:1977},
			{station:"8 Ave & W 52 St",lat:40.76370739,long:-73.9851615,trips:1686},
			{station:"W 34 St & 11 Ave",lat:40.75594159,long:-74.0021163,trips:1621},
			{station:"11 Ave & W 41 St",lat:40.76030096,long:-73.99884222,trips:1523},
			{station:"Pershing Square N",lat:40.75188406,long:-73.97770164,rips:1499}
	      ]},
{station:"Cleveland Pl & Spring St", lat:40.7218158,long:-73.99720307,
	trips:[
			{station:"Lafayette St & E 8 St",lat:40.73028666,long:-73.9907647,trips:2451},
			{station:"MacDougal St & Prince St",lat:40.72710258,long:-74.00297088,trips:1427},
			{station:"Broadway & E 14 St",lat:40.73454567,long:-73.99074142,trips:1173},
			{station:"Great Jones St",lat:40.72743423,long:-73.99379025,trips:1170},
			{station:"E 17 St & Broadway",lat:40.73704984,long:-73.99009296,trips:1082}	
	      ]},
{station:"Broadway & E 22 St", lat:40.7403432,long:-73.98955109,
	trips:[
			{station:"E 17 St & Broadway",lat:40.73704984,long:-73.99009296,trips:1865},
			{station:"W 22 St & 10 Ave",lat:40.74691959,long:-74.00451887,trips:1317},
			{station:"University Pl & E 14 St",lat:40.73492695,long:-73.99200509,trips:1226},
			{station:"E 23 St & 1 Ave",lat:40.736502,long:-73.97809472,trips:1145},
			{station:"Broadway & E 14 St",lat:40.73454567,long:-73.99074142,trips:1126}
	      ]},
{station:"University Pl & E 14 St", lat:40.73492695,long:-73.99200509,
	trips:[
			{station:"Greenwich Ave & 8 Ave",lat:40.7390169121,long:-74.0026376103,trips:2074},	
			{station:"Washington Square E",lat:40.73049393,long:-73.9957214,trips:1659},
			{station:"W 13 St & 6 Ave",lat:40.73649403,long:-73.99704374,trips:1433},
			{station:"W 13 St & 7 Ave",lat:40.73781509,long:-73.99994661,trips:1406},
			{station:"Sullivan St & Washington Sq",lat:40.73047747,long:-73.99906065,trips:1318}
	      ]}			  
];


