import requests, os, json

league_id = 1721747
year = 2018
print("yo")
# swid = os.environ.get('SWID')
# espn_s2 = os.environ.get('ESPN-S2')
espn_s2="AECQP4RamZZyVUMVvV5TtEVjE48yr6QAPelBWpELGpyj0uIT9sS%2FYuUfSyTzg5YJitML0IYG6Q2GRN5tjCgCww52u%2Foz7Ow8y7UFDquLpKVCB3fO6qet%2FFtF0oRWi1cki2zUZ2SEEmLnmD%2BYC4KWNo9c17H6KzSiJdKnFyFhI2gpaAWU06XaqNUfqa73irGc%2F3Gea9ZHnAF5cGaCb3NeetyKMey4IpWRIuM0FBE0f8y%2F5YnIKOkxUNDoPo2EenoDTI0TmVfpuDuS2IMF89gdklsKNa5e99Crn22trDcShSSsjW2fIoKkQCXZXG60crNJ%2BHQ%3D"
swid="{D865F316-4356-40EE-B983-E7E07E53445F}"

cookies={
    "swid": f"{swid}",
    "espn_s2": f"{espn_s2}"
}
url = "https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/" + \
      str(league_id) + "?seasonId=" + str(year)

r = requests.get(url, cookies)
d = r.json()[0]
print("o")
print(d)
