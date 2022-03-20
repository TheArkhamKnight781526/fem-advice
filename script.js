const quoteID = document.querySelector('#quote-id');
const quote = document.querySelector('#quote');
const dice = document.querySelector('#dice');

const apiURL = "https://api.adviceslip.com/advice";
const internetUnavailableQuote = "Last night the Internet stopped working so I spent a few hours with my family. They seem like good people.";

dice.addEventListener('click', async () => {
    try {
        let res = await fetch(apiURL, { cache: "no-store" });
        
        if(res.ok) {
            let { slip } = await res.json();

            let id = slip.id;
            let advice = slip.advice;

            quoteID.textContent = `Advice #${id}`;
            quote.textContent = `"${advice}"`;
        }
    } catch {
        quoteID.textContent = "Advice #0";
        quote.textContent = internetUnavailableQuote;
    }
})