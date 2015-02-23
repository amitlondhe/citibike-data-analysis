BASEDATA = LOAD '/user/mydata/' using PigStorage(',') 
as (tripduration,starttime,stoptime,start_station_id,start_station_name,start_station_latitude,
start_station_longitude,end_station_id,end_station_name,end_station_latitude,end_station_longitude,bikeid,usertype,
birth_year,gender);

RECORDS = FOREACH BASEDATA GENERATE tripduration,gender,usertype,start_station_name;

GROUPEDBY_START_STATION_NAME = GROUP RECORDS BY (start_station_name);
START_STATION_NAME_TRIPS = FOREACH GROUPEDBY_START_STATION_NAME GENERATE group, COUNT(RECORDS) as numberOfTrips;
                                            
SORTED_BY_NO_OF_TRIPS = ORDER START_STATION_NAME_TRIPS BY numberOfTrips DESC;   
                                         
STORE SORTED_BY_NO_OF_TRIPS INTO '/user/myoutput' using PigStorage(',');