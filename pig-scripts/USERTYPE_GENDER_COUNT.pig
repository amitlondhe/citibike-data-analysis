BASEDATA = LOAD '/Users/hadoop/pig-0.12.1/localdata/feb2014.csv' using PigStorage(',') 
as (tripduration,starttime,stoptime,start_station_id,start_station_name,start_station_latitude,
start_station_longitude,end_station_id,end_station_name,end_station_latitude,end_station_longitude,bikeid,usertype,
birth_year,gender);

RECORDS = FOREACH BASEDATA GENERATE tripduration,gender,usertype;

GROUPEDBY_USERTYPE_GENDER = GROUP RECORDS BY (usertype,gender);
USERTYPE_GENDER_COUNT = FOREACH GROUPEDBY_USERTYPE_GENDER GENERATE group, COUNT(RECORDS);                                            
STORE USERTYPE_COUNT INTO '/user/myoutput' using PigStorage(',');

/* On Real Data 
BASEDATA = LOAD '/user/mydata/' using PigStorage(',') 
as (tripduration,starttime,stoptime,start_station_id,start_station_name,start_station_latitude,
start_station_longitude,end_station_id,end_station_name,end_station_latitude,end_station_longitude,bikeid,usertype,
birth_year,gender);

RECORDS = FOREACH BASEDATA GENERATE tripduration,gender,usertype;

GROUPEDBY_USERTYPE_GENDER = GROUP RECORDS BY (usertype,gender);
USERTYPE_GENDER_COUNT = FOREACH GROUPEDBY_USERTYPE_GENDER GENERATE group, COUNT(RECORDS);                                            
STORE USERTYPE_GENDER_COUNT INTO '/user/myoutput' using PigStorage(',');
*/