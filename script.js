// https://jacintodesign.github.io/quotes-api/data/quotes.json
let apiQuotes = [];

// Shopw new quote
function newQuote() {
  // Random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}
// Get Quotes from API

async function getQuotes(params) {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    console.log(apiQuotes);
  } catch (error) {
    // Catch the error
  }
}

// On Load
getQuotes();
