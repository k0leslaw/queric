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
                'word count': analysis.wordcount,
                'verbs': analysis.verbs,
                'adjectives': analysis.adjectives,
                'nouns': analysis.nouns,
                'pronouns': analysis.pronouns
            })
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
    
