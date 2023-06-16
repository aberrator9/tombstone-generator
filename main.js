const graveText = document.getElementById("grave-text");

// const verbs = ['ran', 'flew', 'died'];
// const prepositions = ['by', 'in', 'from', 'out of'];
// const adverbs = ['too', 'very', 'extremely', 'vaguely', 'sort of'];
const adjectives = ["silly", "dumb", "happy", "hungry", "fast", "flat",
    "slippery", "fat", "skinny", "damned", "dastardly", "seaworthy",
    "rotund", "unreliable", "scared"];
const nouns = ["dog", "hat", "hombre", "temptress", "fool", "varmint",
    "cat", "dark figure", "snail", "porcupine"];
const endings = ["did 'em in", "ended their life", "was their undoing",
    "was the end of them", "did 'em", "was the last they ever saw",
    "sent 'em 'eavenward", "did get them in the end"]

class templateBuilder {

}

graveText.textContent =
    "A " + adjectives[Math.floor(Math.random() * adjectives.length)] + " "
    + nouns[Math.floor(Math.random() * nouns.length)] + " "
    + endings[Math.floor(Math.random() * endings.length)] + ".";