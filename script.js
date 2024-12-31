// https:/twitter.com/intent/tweet
// https://jacintodesign.github.io/quotes-api/data/quotes.json
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote
function newQuote() {
  loading();
  // Random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Checking if Author is Unknown
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote lenght
  if (quote.length > 120) {
    quoteText.classList.add("long_quote");
  } else {
    quoteText.classList.remove("long_quote");
  }
  // Set quote & add loader
  quoteText.textContent = quote.text;
  complete();
}
// Get Quotes from API
async function getQuotes(params) {
  loading();
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

// Tweet a Quote
function tweetQuote() {
  const twitterUrl = `https:/twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
