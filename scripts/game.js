import {createEl, createImg, log, random} from "./utils.js"
import {logs} from "./logs.js"

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const attackAftermath = (player, aggressor, hit, defence) => {
    // const aggressor = player === player1 ? player2.name : player1.name
    const { name, hp } = player
    if ( hit !== defence) {
        const damage = random(HIT[hit], 5)
        player.changeHP( damage )
        player.renderHP()

        fightLog('hit', aggressor, name, hit, hp, damage)
    } else {
        fightLog('defence', aggressor, name, hit, hp)
    }
}

const fightLog = (logType, playerKick, playerDefence, hit, hp, damage) => {
    const $chat = document.querySelector('.chat') // not good... but only use here
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    let logStr = ''
    let str = ''
    if (logs[logType].length) {
        str = logs[logType][random(logs[logType].length - 1)].replace('[playerKick]', playerKick).replace('[playerDefence]', playerDefence)
    }

    switch (logType) {
        case 'hit':
            logStr = `${time} - ${str} -${damage}hp [${hp}/100]`
            break
        case 'defence':
            logStr = `${time} - ${str}`
            break
        case 'end':
            logStr = str.replace('[time]', time)
            break
        case 'start':
            logStr = logs[logType].replace('[time]', time).replace('[playerKick]', playerKick).replace('[playerDefence]', playerDefence)
            break
        case 'draw':
            logStr = logs['draw']
            break
    }

    const el = `<p class="log">${logStr}</p>`

    $chat.insertAdjacentHTML('afterbegin', el)

    // debuging
    if ( damage ) {
        log(  `${playerKick } бьет ${playerDefence} в ${hit} нанося - ${damage} урона!` , 'Log:')
    } else if ( logType === 'defence') {
        log( `${playerKick } бьет ${playerDefence} в ${hit} попадая в блок!` , 'Log:')
    }

}

const enemyAttack = () => {
    const enemyAttack = {}
    enemyAttack.hit = ATTACK[random(3) -1]
    enemyAttack.defence = ATTACK[random(3) -1]

    return enemyAttack
}

const playerAttack = (form) => {
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

const createPlayer = ({ name, hp, img, player }) => {

    const $player = createEl('div', `player${player}`)
    const $progress = createEl('div', 'progressbar')
    const $live = createEl('div', 'life')
    const $hp = createEl('div', 'hp', hp)
    const $name = createEl('div', 'name', name)
    const $character = createEl('div', 'character')
    const $img = createImg(img, name)

    $live.style.width = hp + "%"

    $player.appendChild($progress)
    $progress.appendChild($live)
    $progress.appendChild($hp)
    $progress.appendChild($name)
    $player.appendChild($character)
    $character.appendChild($img)

    return $player
}

const isGameOver = (player1, player2) => {
    if (player1.hp === 0 || player2.hp === 0 ) {
        let $message = ''

        const $arenas = document.querySelector('.arenas')
        const $form = document.querySelector('.control')
        const $hitBtn = $form.querySelector('.button')
        $hitBtn.disabled = true

        if ( player1.hp > player2.hp ) {
            $message = playerWin(player1.name)
            fightLog('end', player1.name, player2.name)
        } else if ( player1.hp < player2.hp) {
            $message = playerWin(player2.name)
            fightLog('end', player2.name, player1.name)
        } else {
            $message = playerDraw()
            fightLog('draw')
        }


        $arenas.appendChild( $message )
        $arenas.appendChild( createReloadButton() )

    }
}

const playerDraw = () => createEl('div', 'loseTitle', 'draw')

const playerWin = (name) => createEl('div', 'winTitle', `${name} wins!`)


const createReloadButton = () => {
    const $reloadWrap = createEl('div', 'reloadWrap')
    const $reloadBtn = createEl('button', 'button', 'Restart')
    $reloadWrap.appendChild($reloadBtn)
    $reloadBtn.addEventListener('click', () => window.location.reload())
    return $reloadWrap
}

export { attackAftermath, fightLog, enemyAttack, playerAttack, createPlayer, playerDraw, playerWin, createReloadButton, isGameOver }