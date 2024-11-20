import requests

TITLES_URL = "http://127.0.0.1:8000/api/v1/titles/"
GENRE_URL = "http://127.0.0.1:8000/api/v1/genres/"

def fetch_movies_by_params(url, key, value):
    params = {key:value}   
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        return data["results"]
    else:
        return print(response.status_code)

# Film avec la meilleure note
best_score = fetch_movies_by_params(TITLES_URL, "imdb_score_min", 9.5)
for movie in best_score :
    print(f"{movie['title']} - Score : {movie['imdb_score']}")
    
# Montre les films les mieux notés d’une catégorie donnée.
action_movies = fetch_movies_by_params(TITLES_URL, "genre", "action")

for movie in action_movies :
    print(movie['title'])

# Liste de toutes les catégories
def fetch_all_categries(url):
    results = []
    
    while url:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            results.extend(data["results"])
            url = data["next"]
        else:
            print(response.status_code)
            break
    
    return results

categories = fetch_all_categries(GENRE_URL)
for category in categories:
    print(category["name"]) 

# Movie data
def movie_info(url, movie_title):
    params = {"title":movie_title}
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        data = data["results"][0]
        movie_id = data["id"]

        detail_response = requests.get(f"{url}{movie_id}")
        return detail_response.json()
    else:
        return print(response.status_code)

avatar = movie_info(TITLES_URL, "Avatar")

# Le titre du film
title = avatar["title"]
# Le genre complet du film
genres = avatar["genres"]
# Sa date de sortie
year = avatar["year"]
# Son score IMDB
score = avatar["imdb_score"]
# Son réalisateur
directors = avatar["directors"]
# La liste des acteurs
actors = avatar["actors"]
# Sa durée
duration = avatar["duration"]
# Le pays d’origine
countries = avatar["countries"]
# Les recettes au box-office
budget = avatar["budget"]
# Le résumé du film
description = avatar["description"]

print(title,
      genres,
      year,
      score,
      directors,
      actors,
      duration,
      countries,
      budget,
      description)