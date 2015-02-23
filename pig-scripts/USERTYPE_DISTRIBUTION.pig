BASEDATA = LOAD '/Users/hadoop/pig-0.12.1/localdata/feb2014.csv' using PigStorage(',')
--BASEDATA = LOAD '/user/mydata/' using PigStorage(',') 
as (tripduration,starttime,stoptime,start_station_id,start_station_name,start_station_latitude,
start_station_longitude,end_station_id,end_station_name,end_station_latitude,end_station_longitude,bikeid,usertype,
birth_year,gender);

RECORDS = FOREACH BASEDATA GENERATE tripduration,usertype;

GROUPEDBY_USERTYPE = GROUP RECORDS BY usertype;
USERTYPE_COUNT = FOREACH GROUPEDBY_USERTYPE GENERATE group, COUNT(RECORDS);                                            
STORE USERTYPE_COUNT INTO '/user/mydata/output';