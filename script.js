const generateQuote = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let randomNum = Math.floor((Math.random() * data.length));
            let randomQuote = data[randomNum];
            document.getElementById("quote").innerHTML = `${randomQuote.text}`;
            document.getElementById("author").innerHTML = `${randomQuote.author ? randomQuote.author : ""}`;
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
        });
}