import mysql.connector
from espn_api.football import League
import os, json, re

mydb = mysql.connector.connect(host='remotemysql.com',database='gH2RrQirXv',user='gH2RrQirXv',password='QeEJr7upsz')
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
    
def main():
    year_start=2014
    year_end=2020
    league_id='1721747'
    
    ESPN_S2='AEBsc%2BBB19uKgZkPt70zzaGwKqJj%2FvkjZsPv3c9QWwFWj5LLlbO9kHexW%2Fa3Z2cp8pAYOz5sOCsokGQOBEvrEbqJF%2B7EDZEcKnbnUX8Iv4daAPJ5X5gTBsd4cOTWn1PIbWXF380%2FlRHUgepq%2BMXIN3skmwzPslX3kEe%2F%2Bi87P85qPtsuj1vKu2xQ7%2Bcvz7NcYMNqQOQcAp5h%2FzI2Q%2F2nAipesOQoTNeiBpCGHDmsx8yTB3NRM3OKMKxyCJa%2Fk%2F1Y340aeOPEi8Kt3FEwv0GQXbQn6irNw%2F7PgDwP%2FkLWAM2y8ChdlHyLhi%2BEw2GwtuYtLPc%3D'
    SWID='{D865F316-4356-40EE-B983-E7E07E53445F}'
    
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

    
if __name__ == '__main__':
    main()
