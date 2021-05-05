 class ServerFetch {
    constructor(url ) {
        this.url = url
    }
    getAllPlayers = () => fetch(`${this.url}/players`).then(res => res.json())
    getRandomPlayers = () => fetch(`${this.url}/player/choose`).then(res => res.json())
    getAttack = async (playerChoice) => {
        return await fetch( `${this.url}/player/fight`, {
            method: 'POST',
            body: JSON.stringify(playerChoice)
        }).then(res => {
            console.log('$$$ res', res )
            return res.json()
        })
    }
}

 export const servFetch = new ServerFetch('https://reactmarathon-api.herokuapp.com/api/mk')