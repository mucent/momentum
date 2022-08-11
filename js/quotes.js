const quotes = [
  {
    quote:
      "You know, Hobbes, some days even my lucky rocketship underpants don't help.",
    author: 'Bill Watterson',
  },
  {
    quote:
      "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
    author: 'Stephen Chbosky',
  },
  {
    quote: "And now that you don't have to be perfect, you can be good.",
    author: 'John Steinbeck',
  },
  {
    quote: `I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.`,
    author: 'Holly Black',
  },
  {
    quote: `But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.`,
    author: `Charles Darwin`,
  },
  {
    quote: `Life is never fair, and perhaps it is a good thing for most of us that it is not.`,
    author: `Oscar Wilde`,
  },
  {
    quote: `I've had the sort of day that would make St. Francis of Assisi kick babies.`,
    author: `Douglas Adams`,
  },
  {
    quote: 'Anyone who has never made a mistake has never tried anything new.',
    author: 'Albert Einstein',
  },
  {
    quote: "We are all broken, that's how the light gets in.",
    author: 'Ernest Hemingway',
  },
  {
    quote:
      'Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.',
    author: 'Stephen King',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
