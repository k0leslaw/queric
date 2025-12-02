import spacy
from collections import Counter

nlp = spacy.load('en_core_web_sm')

class ArtistAnalysis:
    def __init__(self, word_count, most_common, unique_count,
                 favorite_verb, verb_count, 
                 favorite_noun, noun_count, 
                 favorite_adjective, adjective_count, 
                 favorite_pronoun, pronoun_count):
        self.word_count = word_count
        self.most_common = most_common
        self.unique_count = unique_count
        
        self.favorite_verb = favorite_verb
        self.verb_count = verb_count
        
        self.favorite_noun = favorite_noun
        self.noun_count = noun_count
        
        self.favorite_adjective = favorite_adjective
        self.adjective_count = adjective_count
        
        self.favorite_pronoun = favorite_pronoun
        self.pronoun_count = pronoun_count
        
def getMostCommonWords(lyrics, top_n=5, allow_stop=False):
    com_doc = nlp(lyrics.lower())
    words = []
    
    # filter tokens to remove stop words and puncuation
    if allow_stop is False:
        words = [
            token.text for token in com_doc
            if token.is_alpha and not token.is_stop
        ]
    else:
        words = [
            token.text for token in com_doc
            if token.is_alpha
        ]
    
    # get frequency
    word_freq = Counter(words)
    
    return word_freq.most_common(top_n)

def getUniqueWords(doc):
    unique_words = set()
    for token in doc:
        if not token.is_punct and not token.is_space:
            unique_words.add(token.lemma_.lower())
    return len(unique_words)
        
def analyzeArtist(artist):
    all_lyrics = " ".join([song.lyrics for song in artist.songs if song.lyrics])
    if not all_lyrics:
        return None
    
    doc = nlp(all_lyrics)

    verbs = " ".join([token.text for token in doc if token.pos_ == 'VERB'])
    nouns = " ".join([token.text for token in doc if token.pos_ == 'NOUN'])
    adjectives = " ".join([token.text for token in doc if token.pos_ == 'ADJ'])
    pronouns = " ".join([token.text for token in doc if token.pos_ == 'PRON'])

    return ArtistAnalysis(
        word_count=len(doc),
        most_common=getMostCommonWords(all_lyrics),
        unique_count=getUniqueWords(doc),
        
        favorite_verb=getMostCommonWords(verbs, 1) if verbs else None,
        verb_count=sum(1 for token in doc if token.pos_ == 'VERB'),
        
        favorite_noun=getMostCommonWords(nouns, 1) if nouns else None,
        noun_count=sum(1 for token in doc if token.pos_ == 'NOUN'),
        
        favorite_adjective=getMostCommonWords(adjectives, 1) if adjectives else None,
        adjective_count=sum(1 for token in doc if token.pos_ == 'ADJ'),
        
        favorite_pronoun=getMostCommonWords(pronouns, 1, allow_stop=True) if pronouns else None,
        pronoun_count=sum(1 for token in doc if token.pos_ == 'PRON')
    )
    