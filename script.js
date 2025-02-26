document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("market-container").innerHTML = `
                <h3>Bitcoin Price (USD): ${data.bpi.USD.rate}</h3>
                <p>Last Updated: ${data.time.updated}</p>
            `;
        })
        .catch(error => {
            document.getElementById("market-container").innerHTML = "<p>Failed to load data.</p>";
        });
});
