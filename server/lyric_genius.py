from dotenv import load_dotenv
import os

load_dotenv()

# connect to lyricsgenius api
from lyricsgenius import Genius

genius = Genius(os.getenv('GENIUS_ACCESS_TOKEN'))
genius.verbose = False
genius.remove_section_headers = True
genius.excluded_terms = ["(Live)"]

def searchArtist(artist_name):
    artist = genius.search_artist(artist_name, max_songs=3, sort="popularity")
    return artist if artist else None
