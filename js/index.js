let quotes = [
   `"Be yourself; everyone else is already taken."`,
   `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
   `"So many books, so little time."`,
   `"Be the change that you wish to see in the world."`,
   `"In three words I can sum up everything I've learned about life: it goes on."`,
   `"If you tell the truth, you don't have to remember anything."`,
   `"To live is the rarest thing in the world. Most people exist, that is all."`,
   `"A friend is someone who knows all about you and still loves you."`,
   `"Always forgive your enemies; nothing annoys them so much."`,
   `"We accept the love we think we deserve."`,
];
let authors = [
   "--Oscar Wilde",
   "--Bernard M. Baruch",
   "--Frank Zappa",
   "--Mahatma Gandhi",
   "--Robert Frost",
   "--Mark Twain",
   "--Oscar Wilde",
   "--Elbert Hubbard",
   "--Oscar Wilde",
   "--Stephen Chbosky",
];
let lastIndex = -1;
let btnElement = document.querySelector("button");
btnElement.addEventListener("click", function () {
    let index;
    do {
        index = Math.floor(Math.random() * quotes.length);
    } while (index === lastIndex)
    lastIndex = index;
    let quoteElement = document.querySelector(".quote");
    let authorElement = document.querySelector(".author");
    quoteElement.textContent = quotes[index];
    authorElement.textContent = authors[index];
});