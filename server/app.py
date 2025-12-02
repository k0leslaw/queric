from fastapi import FastAPI, HTTPException

from models import *
from lyric_genius import *
from lyric_analysis import *

app = FastAPI()

@app.post('/api/search-artist')
def search_artist(request: ArtistRequest):
    artist = searchArtist(request.artist)
    if artist:
        return {'artist': {
            'name': artist.name,
            'num_songs': len(artist.songs),
            'songs': artist.songs
        }}
    else:
        raise HTTPException(status_code=404, detail='Artist not found')

@app.post('/api/analyze-artists')
def analyze_artists(request: AnalyzeRequest):
    results = []
    for artistData in request.artists:
        analysis = analyzeArtist(artistData)
        
        if analysis:
            results.append({
                'name': artistData.name,
                'word_count': analysis.word_count,
                'most_common': analysis.most_common,
                'unique_count': analysis.unique_count,
                
                'favorite_verb': analysis.favorite_verb,
                'verb_count': analysis.verb_count,
                
                'favorite_adjective': analysis.favorite_adjective,
                'adjective_count': analysis.adjective_count,
                
                'favorite_noun': analysis.favorite_noun,
                'noun_count': analysis.noun_count,
                
                'favorite_pronoun': analysis.favorite_pronoun,
                'pronoun_count': analysis.pronoun_count
            })
            print(results)
    return {'results': results}

@app.get('/api/search-bar-suggest-artists')
def search_bar_suggest_artists(query: str):
    searchResults = genius.search_artists(query)
    
    suggestions = set()
    
    sections = searchResults.get('sections', [])
    for section in sections:
        hits = section.get("hits", [])
        for hit in hits:
            result = hit.get("result", {})
            name = result.get("name")
            if name:
                suggestions.add(name)

    return {'suggestions': list(suggestions)}
    