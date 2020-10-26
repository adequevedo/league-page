import mysql.connector
from espn_api.football import League
import os, json, re
from dotenv import load_dotenv
load_dotenv()

host = os.environ.get('HOST')
dbname = os.environ.get('DB_NAME')
user = os.environ.get('USER')
db_pass = os.environ.get('DB_PASS')
espn_s2 = os.environ.get('ESPN-S2')
swid = os.environ.get('SWID')

mydb = mysql.connector.connect(host=host,database=dbname,user=user,password=db_pass)
# used to populate db with data

def create_yearly_stats():
    print("yearly")
    mycursor = mydb.cursor()
    mycursor.execute(
    '''
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
    ''')
    
def insert_data(owner, year, team_name, wins, losses, points_for, points_against, season_finish, final_finish):
    sql = 'INSERT INTO yearly_stats (owner, year, team_name, wins, losses, points_for, points_against, season_finish, final_finish) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)'
    vals = (owner, year, team_name, wins, losses, points_for, points_against, season_finish, final_finish)
    mycursor = mydb.cursor()
    mycursor.execute(sql, vals)
    mydb.commit()
    
def yearly_historical_inserts():
    year_start=2014
    year_end=2020
    league_id='1721747'
    
    ESPN_S2=espn_s2
    SWID=swid
    
    stats = {}
    reg="\((.*?)\)"
    tmp2 = {}
    for year in range(year_start, year_end):
        print(year)
        league=League(league_id=league_id, year=year, espn_s2=ESPN_S2, swid=SWID)
        # print(league)
        temp_dict = {}
        for team in league.teams:
            # print(team)
            temp_dict[team.owner] = {
                'team_name': team.team_name,
                'year': str(year),
                'owner': team.owner,
                'wins': team.wins,
                'losses': team.losses,
                'points_for': team.points_for,
                'points_against': team.points_against,
                'season_finish': team.standing,
                'final_finish': team.final_standing,
                'scores': team.scores,
                'mov': team.mov,
                'schedule': [re.search(reg, str(schd)).group() for schd in team.schedule]
            }
            insert_data(team.owner, year, team.team_name, team.wins, team.losses, team.points_for, team.points_against, team.standing, team.final_standing)
            if not tmp2:
                tmp2 = temp_dict
            else:
                tmp2.update(temp_dict)
        stats[str(year)] = tmp2
        tmp2 = {}
    
    print(stats['2014']['Alex deQuevedo'])
    # 
    print(stats['2018']['Alex deQuevedo'])
    print(stats['2019']['Alex deQuevedo'])
    
    
    
    
    # inputs to head2head matchup algo
    with open('data.json', 'w') as outfile:
        json.dump(stats, outfile)
    
def main():
    

    
if __name__ == '__main__':
    main()
