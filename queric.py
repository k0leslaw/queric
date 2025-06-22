from dotenv import load_dotenv
from lyricsgenius import Genius
import os
import requests

load_dotenv()

LG_CLIENT_ID = os.getenv('LG_CLIENT_ID')
LG_CLIENT_SECRET = os.getenv('LG_CLIENT_SECRET')
LG_CLIENT_ACCESS_TOKEN = os.getenv('LG_CLIENT_ACCESS_TOKEN')

genius = Genius(LG_CLIENT_ACCESS_TOKEN)
artist = genius.search_artist("Zach Bryan", max_songs=25, sort="title")
print(artist.songs)
