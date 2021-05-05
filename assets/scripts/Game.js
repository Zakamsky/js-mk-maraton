import {createEl, log, random} from "./utils.js"
import Logs from "./Logs.js"
import Player from "./Player.js"
import Arena from "./Arena.js"
import {servFetch} from "./ServerFetch.js";

export default class Game extends Arena {
    constructor(){
        super()
        this.HIT = {
            head: 30,
            body: 25,
            foot: 20,
        }
        this.ATTACK = ['head', 'body', 'foot'];
        this.logs = new Logs()
    }
    getPlayers = async () => {
        const randPlayer = await servFetch.getRandomPlayers()
        log(randPlayer, 'randPlayer')

        this.player1 = new Player({
            ...JSON.parse(localStorage.getItem('player1')),
            player: 1
        })

        this.player2 = new Player({
            ...randPlayer,
            player: 2
        })
    }

    start = async () => {
        await this.getPlayers()
        this.formListener()
        this.logs.fightLog('start', this.player1.name, this.player2.name)
    }

    formListener =  async () => {
        this.$form.addEventListener('submit',  async (evt) => {
            evt.preventDefault()

            const playerChoice = this.playerAttack(this.$form)
            log(playerChoice, 'playerChoice')

            const combatData = await servFetch.getAttack(playerChoice)
            log(combatData, 'combatData')
            const {player1: player, player2: enemy} = combatData
            log(player, 'player')
            log(enemy, 'enemy')


            this.attackAftermath(this.player2, this.player1.name, player.hit, enemy.defence)
            this.attackAftermath(this.player1, this.player2.name, enemy.hit, player.defence)

            this.$form.reset()

            this.isGameOver(this.player1, this.player2)

        })
    }

    attackAftermath = (player, aggressor, hit, defence) => {
        if ( hit !== defence) {
            const damage = random(this.HIT[hit], 5)
            player.changeHP( damage )
            player.renderHP()

            this.logs.fightLog('hit', aggressor, player.name, hit, player.hp, damage)
        } else {
            this.logs.fightLog('defence', aggressor, player.name, hit, player.hp)
        }
    }

    // enemyAttack = () => {
    //     const enemyAttack = {}
    //     enemyAttack.hit = this.ATTACK[random(3) -1]
    //     enemyAttack.defence = this.ATTACK[random(3) -1]
    //
    //     return enemyAttack
    // }

    playerAttack = (form) => {
        const player = {}
        for( let input of form) {

            if ( input.checked && input.name === 'hit' ) {
                player.hit = input.value
            }
            if ( input.checked && input.name === 'defence' ) {
                player.defence = input.value
            }
        }
        return player
    }

    isGameOver = (player1, player2) => {
        if (player1.hp === 0 || player2.hp === 0 ) {
            let $message = ''

            const $hitBtn = this.$form.querySelector('.button')
            $hitBtn.disabled = true

            if ( player1.hp > player2.hp ) {
                $message = this.playerWin(player1.name)
                this.logs.fightLog('end', player1.name, player2.name)
            } else if ( player1.hp < player2.hp) {
                $message = this.playerWin(player2.name)
                this.logs.fightLog('end', player2.name, player1.name)
            } else {
                $message = this.playerDraw()
                this.logs.fightLog('draw')
            }


            this.$arenas.appendChild( $message )
            this.$arenas.appendChild( this.createReloadButton() )

        }
    }

    playerDraw = () => createEl('div', 'loseTitle', 'draw')

    playerWin = (name) => createEl('div', 'winTitle', `${name} wins!`)

} // class Game
