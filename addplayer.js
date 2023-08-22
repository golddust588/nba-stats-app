const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", async()=>{
    const statNameInput = document.getElementById('statSection').value;
    const playerImageUrlInput = document.getElementById('img_url').value;
    const playerNameInput = document.getElementById('playerName').value.toUpperCase();
    const statsInput = document.getElementById('stats').value;


    const playerStats = {
        statSection: statNameInput,
        img_url: playerImageUrlInput,
        playerName: playerNameInput,
        stats: statsInput,
        // id: "4"
    }

    console.log(playerStats)

    try{

        const response = await fetch('https://64e32c7bbac46e480e7851eb.mockapi.io/nbaStats', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playerStats)
        });

        const data = await response.json();

        if(data){

            const messageWrapper = document.getElementById("response-message");
            messageWrapper.innerHTML = "Player stats was inserted"

            setTimeout(()=>{
                window.location.replace("./index.html");
            },3000)

        }

    }catch(err){
        console.log('err',err)
        const messageWrapper = document.getElementById("response-message");
        messageWrapper.innerHTML = "Player stats were NOT inserted, ERROR happened"
    }

})
