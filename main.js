const graveText = document.getElementById("grave-text");

// const verbs = ['ran', 'flew', 'died'];
// const prepositions = ['by', 'in', 'from', 'out of'];
// const adverbs = ['too', 'very', 'extremely', 'vaguely', 'sort of'];
const adjectives = ["silly", "dumb", "happy", "hungry", "fast", "flat",
    "slippery", "fat", "skinny", "damned", "dastardly", "seaworthy",
    "rotund", "unreliable", "scared", "eager", "lively", "skeevy"];
const nouns = ["dog", "hat", "hombre", "temptress", "fool", "varmint",
    "cat", "dark figure", "snail", "porcupine"];
const endings = ["did 'em in", "ended their life", "was their undoing",
    "was the end of them", "did 'em", "was the last they ever saw",
    "sent 'em 'eavenward", "did get them in the end"]

function getAdjective() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(adj[0]) ? "n " + adj : " " + adj;
}

graveText.textContent = "A" + getAdjective() + " "
    + nouns[Math.floor(Math.random() * nouns.length)] + " "
    + endings[Math.floor(Math.random() * endings.length)] + ".";