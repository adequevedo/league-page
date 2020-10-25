from espn_api.football import League
import os, json, re



year_start=2014
year_end=2017
league_id='1721747'

ESPN_S2='AEBsc%2BBB19uKgZkPt70zzaGwKqJj%2FvkjZsPv3c9QWwFWj5LLlbO9kHexW%2Fa3Z2cp8pAYOz5sOCsokGQOBEvrEbqJF%2B7EDZEcKnbnUX8Iv4daAPJ5X5gTBsd4cOTWn1PIbWXF380%2FlRHUgepq%2BMXIN3skmwzPslX3kEe%2F%2Bi87P85qPtsuj1vKu2xQ7%2Bcvz7NcYMNqQOQcAp5h%2FzI2Q%2F2nAipesOQoTNeiBpCGHDmsx8yTB3NRM3OKMKxyCJa%2Fk%2F1Y340aeOPEi8Kt3FEwv0GQXbQn6irNw%2F7PgDwP%2FkLWAM2y8ChdlHyLhi%2BEw2GwtuYtLPc%3D'
SWID='{D865F316-4356-40EE-B983-E7E07E53445F}'

stats = {}
reg="\((.*?)\)"
tmp2 = {}
for year in range(year_start, year_end):
    league=League(league_id=league_id, year=year, espn_s2=ESPN_S2, swid=SWID)
    temp_dict = {}
    for team in league.teams:
        temp_dict[team.owner] = {
            'team_name': team.team_name,
            'owner': team.owner,
            'wins': team.wins,
            'losses': team.losses,
            'points_for': team.points_for,
            'points_against': team.points_against,
            'season_finish': team.standing,
            'final_finish': team.final_standing,
            'scores': team.scores,
            # 'roster': team.roster,
            'mov': team.mov,
            'schedule': [re.search(reg, str(schd)).group() for schd in team.schedule]
        }
        if not tmp2:
            tmp2 = temp_dict
        else:
            tmp2.update(temp_dict)
    stats[str(year)] = tmp2
print(stats['2014']['Alex deQuevedo'])

# inputs to head2head matchup algo
with open('data.json', 'w') as outfile:
    json.dump(stats, outfile)
