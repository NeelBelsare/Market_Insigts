document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => response.json())
    .then(data => console.log("Data Loaded Successfully:", data))
    .catch(error => console.error("Failed to fetch data:", error));

            }
            return response.json();
        })
        .then(data => {
            const marketContainer = document.getElementById("market-container");
            marketContainer.innerHTML = `
                <h3>Bitcoin Price (USD): $${data.bpi.USD.rate}</h3>
                <p>Last Updated: ${data.time.updated}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const marketContainer = document.getElementById("market-container");
            marketContainer.innerHTML = "<p>Failed to load data. Please try again later.</p>";
        });
});
