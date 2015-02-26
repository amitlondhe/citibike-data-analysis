BASEDATA = LOAD '/user/mydata/' using PigStorage(',') 
as (tripduration,starttime,stoptime,start_station_id:chararray,start_station_name,start_station_latitude,
start_station_longitude,end_station_id:chararray,end_station_name,end_station_latitude,end_station_longitude,bikeid,usertype,birth_year,gender);

RECORDS = FOREACH BASEDATA GENERATE REPLACE(start_station_id, '\"', '') as start_station_id,REPLACE(end_station_id, '\"', '') as end_station_id;

GROUPEDBY_START_END_STATION = GROUP RECORDS BY (start_station_id,end_station_id);

COUNT_TRIPS = FOREACH GROUPEDBY_START_END_STATION GENERATE FLATTEN(group), COUNT(RECORDS) as numberOfTrips; 

TRIPS_GROUPED_BY_START_STN = GROUP COUNT_TRIPS BY start_station_id;

top5 = foreach TRIPS_GROUPED_BY_START_STN {
        sorted = order COUNT_TRIPS by numberOfTrips desc;
        top    = limit sorted 6;
        generate flatten(top);
};
top5_pruned = FILTER top5 by (start_station_id != end_station_id);

STORE top5_pruned INTO '/user/myoutput' using PigStorage(',');