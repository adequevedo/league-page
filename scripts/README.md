# Scripts to run manually or automate to pull league info 

## Must source env file 


# Fantasy football league info scrapper

## Fields to scrap
- Trades per season
- Transactions per season
- Points for / against
- Average finish
- Seasons making / missing playoffs
- Overall record
- List of team names

## Where to save info
- mysql
- local json


### Mysql table needed for inserts
```
CREATE TABLE yearly_stats (
       owner VARCHAR(255),
       year INT,
       team_name VARCHAR(255),
       wins INT,
       losses INT,
       points_for INT,
       points_against INT,
       season_finish INT,
       final_finish INT,
       primary KEY (owner, year)
   )
```

## Commands
Install virtual environment  
`pip install virtualenv`  

Create virtual environment  
`virtualenv my_name`  

Activate the virtual environment  
`source virtualenv_name/bin/activate`  

Deactivate  
`deactivate`  
