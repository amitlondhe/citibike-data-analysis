var pieChartData = [
	//"Customer",1150379,"Subscriber",8574247
	{
        value: 1150379,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Customer"
    },
    {
        value: 8574247,
        color: "#46BFBD",
        highlight: "#5AD3D1",
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


var barChartDataTemplate = {
    labels:[],
    datasets: []
};

var barChartDataSetTemplate = {
        label: "",
        fillColor: "orange",
        strokeColor: "yellow",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: []
};
