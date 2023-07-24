import mysql.connector
from espn_api.football import League
import os, json, re



# used to populate db with data
def insert_data(owner, year, team_name, wins, losses, points_for, points_against, season_finish, final_finish):
    sql = 'INSERT INTO yearly_stats (owner, year, team_name, wins, losses, points_for, points_against, season_finish, final_finish) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)'
    vals = (owner, year, team_name, wins, losses, points_for, points_against, season_finish, final_finish)
    mycursor = mydb.cursor()
    mycursor.execute(sql, vals)
    mydb.commit()

def yearly_historical_inserts(league_id, year_start, year_end, db_insert, s2, swid):

    print_json=False

    stats = {}
    reg="\((.*?)\)"
    tmp2 = {}
    for year in range(year_start, year_end):
        print("Running year: ", year)
        try:
            league=League(league_id=league_id, year=year, espn_s2=ESPN_S2, swid=SWID)
        except exception as e:
            print(f"error getting league data for year: {year}\nWith error: {e}")
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
            if db_insert:
                insert_data(team.owner, year, team.team_name, team.wins, team.losses, team.points_for, team.points_against, team.standing, team.final_standing)
            if not tmp2:
                tmp2 = temp_dict
            else:
                tmp2.update(temp_dict)
        stats[str(year)] = tmp2
        tmp2 = {}


    if print_json:
        with open('data.json', 'w') as outfile:
            json.dump(stats, outfile)
    if print_csv:


def main():


    print("Hello welcome to the league data import tool, please follow the prompts")
    is_private = input("\nIs this a private league? 1. Yes \n 2. No")
    league_id = input("\nWhat is your league ID: ")
    year_start=input("\nFirst year of the league: ")
    year_end=input("\nLast completed year of the league: ")
    db_insert = input("\nHow would you like to output the data? 1. Myql Database \n 2. Csv file \n 3. Json File")

    if db_insert:
        print("Please provide the database information... \n\n")
        host = input('HOST: ')
        dbname = input('DB_NAME: ')
        username = input('USER: ')
        db_pass = input('DB_PASS: ')
        mydb = mysql.connector.connect(host=host,database=db_name,user=username,password=pass)

    if is_private:
        ESPN_S2 = os.environ.get('ESPN-S2')
        SWID = os.environ.get('SWID')


    yearly_historical_inserts(league_id, year_start, year_end, db_insert, s2, swid)




if __name__ == '__main__':
    main()