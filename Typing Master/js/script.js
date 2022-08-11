let word = document.getElementById('word');
let input = document.getElementById('input');
let time = document.getElementById('time');
let ball = document.getElementById('ball');

let ballStatus = 0;
let gameTimeOut = 60;
function timeOut() {
    time.innerText = gameTimeOut;
    gameTimeOut--;
}

let words = ["npm", "cache", "vue", "hacking", "world", "end", "all", "number", "oil", "within", "now", "right", "feet", "leave", "what", "now", "facebook", "came", "live", "test", "about", "netflix", "came", "set", "were", "follow", "study", "day", "structure", "over", "why", "talk", "soon", "because", "random", "watch", "year", "her", "any", "snapchat", "both", "around", "book", "line", "mother", "open", "now", "defend", "mile", "go", "by", "found", "said", "eye", "come", "so", "place", "food", "got", "city", "always", "these", "any", "use", "been", "was", "read", "their", "without", "as", "change", "leave", "can", "they", "those", "eat", "never", "no", "eat", "story", "time", "be", "good", "to", "the", "person", "have", "new", "of", "and", "year", "do", "first", "in", "way", "say", "last", "for", "that", "day", "get", "long", "on", "thing", "make", "great", "with", "it", "man", "go", "little", "at", "not", "world", "know", "own", "by", "he", "life", "take", "other", "from", "as", "hand", "see", "old", "up", "you", "part", "come", "right", "about", "this", "child", "think", "big", "into", "but", "eye", "look", "high", "over", "his", "woman", "want", "different", "after", "they", "place", "give", "small", "her", "work", "use", "large", "she", "week", "find", "next", "or", "case", "tell", "early", "an", "point", "ask", "young", "will", "government", "work", "important", "my", "company", "seem", "few", "one", "number", "feel", "public", "all", "group", "try", "bad", "would", "javohir", "problem", "leave", "same", "there", "fact", "call", "able", "their", "Word", "the", "be", "to", "of", "and", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "into", "year", "your", "good", "some", "could", "them", "see", "other", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"]
words.map(item => {
    if (item.length < 2) console.log(item)
})
let soz;

function randomWord() {
    soz = words[Math.round(Math.random() * (words.length - 1))];
    word.innerText = soz;
}

randomWord();
input.addEventListener('input', () => {
    if (input.value.toLowerCase().trim() === soz) {
        randomWord()
        ballStatus++;
        ball.innerText = ballStatus;
        input.value = '';
    }
})

var interval = setInterval(() => {
    if (gameTimeOut <= 0) {
        clearInterval(interval);
        input.setAttribute('disabled', '')
        document.querySelector('.gameOver').style.display = 'block';
        document.getElementById('score').innerText = `Siz 1daqiqada ${ballStatus}ta so'z yozdingiz`;
        let highRecord = localStorage.getItem('high-record');
        if (ballStatus > highRecord)
            localStorage.setItem('high-record', ballStatus);
        document.getElementById('high-record').innerText = localStorage.getItem("high-record")
    }
    timeOut();
}, 1000)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("/serviceWorker.js")
    })
}