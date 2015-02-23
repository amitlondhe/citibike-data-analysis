BASEDATA = LOAD '/user/mydata/' using PigStorage(',') 
as (tripduration,starttime,stoptime,start_station_id,start_station_name,start_station_latitude,
start_station_longitude,end_station_id,end_station_name,end_station_latitude,end_station_longitude,bikeid,usertype,
birth_year,gender);

RECORDS = FOREACH BASEDATA GENERATE tripduration,(int)REPLACE(tripduration, '\"', '') AS f1,start_station_name,end_station_name;

CAT_RECORDS = FOREACH RECORDS GENERATE f1,(CASE 
	WHEN f1 < 1000 THEN '0-1000'
	WHEN f1 < 2000 THEN '1000-2000'
	WHEN f1 < 3000 THEN '2000-3000'
	WHEN f1 < 4000 THEN '3000-4000'
	WHEN f1 < 5000 THEN '4000-5000'
	WHEN f1 < 8000 THEN '5000-8000'
	WHEN f1 < 10000 THEN '8000-10000'
	ELSE '10000+'
	END) as cat_trip,start_station_name,end_station_name;
	
GROUP_BY_TRIP_DURATION_CAT = GROUP CAT_RECORDS BY (chararray)cat_trip;
COUNT_BY_TRIP_DURATION_CAT = FOREACH GROUP_BY_TRIP_DURATION_CAT GENERATE group, COUNT(CAT_RECORDS) as numberOfTrips;
SORT_BY_TRIP_DURATION_CAT = ORDER COUNT_BY_TRIP_DURATION_CAT BY numberOfTrips DESC;
STORE SORT_BY_TRIP_DURATION_CAT INTO '/user/myoutput' using PigStorage(',');