from pydantic import BaseModel
from typing import List, Optional

class Song(BaseModel):
    title: Optional[str]
    lyrics: Optional[str]
    
class ArtistInput(BaseModel):
    name: str
    num_songs: int
    songs: List[Song]

class ArtistRequest(BaseModel):
    artist: str
    
class AnalyzeRequest(BaseModel):
    artists: List[ArtistInput]

