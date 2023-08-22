const mainWrapper = document.getElementById('main');

const getNbaStats = async()=>{
    const response = await fetch('https://64e32c7bbac46e480e7851eb.mockapi.io/nbaStats')
    const nbaStats = await response.json()
    return nbaStats
}

const populateStats = async ()=>{
    const stats = await getNbaStats()
    stats.forEach((player) => {
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'player-wrapper')

        const idWrapper = document.createElement('div')
        idWrapper.innerHTML = player.id
        idWrapper.setAttribute('class', 'id-wrapper')

        const image = document.createElement('img')
        image.setAttribute('class', 'player-image')
        image.src = player.img_url

        const idImageWrapper = document.createElement('div')
        idImageWrapper.setAttribute('class', 'idImage-wrapper')
        idImageWrapper.append(idWrapper, image)

        const heading = document.createElement('h2')
        heading.innerHTML = player.playerName

        const text = document.createElement('p')
        text.innerHTML = player.stats

        wrapper.append(idImageWrapper, heading, text)
        mainWrapper.append(wrapper)
    });
}

populateStats()
