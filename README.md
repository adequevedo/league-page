# league-page
League page for Goodbye forever mr vo
https://remotemysql.com/databases.php


## Running Locally
Must run routes.js and npm start the react app 


## To create mysql compute instance on gcp
```
gcloud beta compute --project=fantasy-league-293621 instances create mysql-serv --zone=us-east1-b --machine-type=f1-micro --subnet=default --network-tier=PREMIUM --maintenance-policy=MIGRATE --service-account=475335529484-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --tags=http-server,https-server --image=ubuntu-1804-bionic-v20201111 --image-project=ubuntu-os-cloud --boot-disk-size=10GB --boot-disk-type=pd-standard --boot-disk-device-name=mysql-serv --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --reservation-affinity=any
```


## Mysql create remote access user
```
CREATE USER '<user>'@'localhost' IDENTIFIED BY '<pass>';
CREATE USER '<user>'@'%' IDENTIFIED BY '<pass>';

GRANT ALL ON *.* TO '<user>'@'localhost';
GRANT ALL ON *.* TO '<user>'@'%';
flush privileges;
```
League page for Goodbye forever mr vo fantasy football league 


## Storage:
mysql db

## Scripts
- historical-data.py: gets cumulative season data (only finished seasons)
- mysql-actions.py: self explanitory 











## TODO
