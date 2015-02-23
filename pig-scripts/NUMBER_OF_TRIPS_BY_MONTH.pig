BASEDATA = LOAD '/Users/hadoop/pig-0.12.1/localdata/feb2014-small.csv' using PigStorage(',') 
as (tripduration,starttime,stoptime,start_station_id,start_station_name,start_station_latitude,
start_station_longitude,end_station_id,end_station_name,end_station_latitude,end_station_longitude,bikeid,usertype,
birth_year,gender);

RECORDS = FOREACH BASEDATA GENERATE tripduration,SUBSTRING(starttime,0,8) as MONTH_YEAR,gender;

GROUPEDBY_MONTH = GROUP RECORDS BY (MONTH_YEAR);
TRIPS_BY_MONTH = FOREACH GROUPEDBY_MONTH GENERATE group, COUNT(RECORDS) as numberOfTrips;  
SORTED_BY_TRIPS_PER_MONTH = ORDER TRIPS_BY_MONTH BY numberOfTrips DESC;                                          
STORE SORTED_BY_TRIP_DURATION INTO '/user/myoutput' using PigStorage(',');
--Figure out the


/* On Real Data 
BASEDATA = LOAD '/user/mydata/' using PigStorage(',') 
as (tripduration,starttime,stoptime,start_station_id,start_station_name,start_station_latitude,
start_station_longitude,end_station_id,end_station_name,end_station_latitude,end_station_longitude,bikeid,usertype,
birth_year,gender);

RECORDS = FOREACH BASEDATA GENERATE tripduration,SUBSTRING(starttime,0,8) as MONTH_YEAR,gender;

GROUPEDBY_MONTH = GROUP RECORDS BY (MONTH_YEAR);
TRIPS_BY_MONTH = FOREACH GROUPEDBY_MONTH GENERATE group, COUNT(RECORDS) as numberOfTrips;  
STORE TRIPS_BY_MONTH INTO '/user/myoutput' using PigStorage(',');
*/


