import spacy

nlp = spacy.load('en_core_web_sm')

class ArtistAnalysis:
    def __init__(self, wordcount, verbs, nouns, adjectives, pronouns):
        self.wordcount = wordcount
        self.verbs = verbs
        self.nouns = nouns
        self.adjectives = adjectives
        self.pronouns = pronouns
        
def analyzeArtist(artist):
    all_lyrics = " ".join([song.lyrics for song in artist.songs if song.lyrics])
    
    if not all_lyrics:
        return None
    
    doc = nlp(all_lyrics)

    return ArtistAnalysis(
        wordcount=len(doc),
        verbs=sum(1 for token in doc if token.pos_ == 'VERB'),
        nouns=sum(1 for token in doc if token.pos_ == 'NOUN'),
        adjectives=sum(1 for token in doc if token.pos_ == 'ADJ'),
        pronouns=sum(1 for token in doc if token.pos_ == 'PRON')
    )
    