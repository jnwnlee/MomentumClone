const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: 'Oscar Wilde'
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: 'Marilyn Monroe'
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: 'Albert Einstein'
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: 'Mae West'
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: 'Mahatma Gandhi'
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: 'J.K. Rowling'
    },
    {
        quote: "Don’t walk in front of me… I may not follow\nDon’t walk behind me… I may not lead\nWalk beside me… just be my friend.",
        author: 'Albert Camus'
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;