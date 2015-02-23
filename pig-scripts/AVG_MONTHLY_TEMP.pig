WEATHERDATA = LOAD '/user/weather-data/' using PigStorage(',') as (stationid,recorddate,type,temp);
--LIMITED_WEATHERDATA = LIMIT WEATHERDATA 10;
WEATHERDATA = FOREACH WEATHERDATA GENERATE SUBSTRING(recorddate,0,6) as recordmonth,temp/10 as temp;
WEATHERDATA = GROUP WEATHERDATA BY recordmonth;
WEATHERDATA = FOREACH WEATHERDATA GENERATE group, ROUND(AVG(WEATHERDATA.temp));
STORE WEATHERDATA INTO '/user/myoutput' using PigStorage(',');