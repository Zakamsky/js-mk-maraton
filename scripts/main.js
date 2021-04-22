import { random } from './utils.js'
import { attackAftermath, fightLog, enemyAttack, playerAttack, createPlayer, isGameOver } from "./game.js"
import { logs } from './logs.js'
import { characters } from "./characters.js"
import Player from './player.js'


const $arenas = document.querySelector('.arenas')
const $form = document.querySelector('.control')
// const $hitBtn = $form.querySelector('.button')
// const $chat = document.querySelector('.chat')

// const HIT = {
//     head: 30,
//     body: 25,
//     foot: 20,
// }
// const ATTACK = ['head', 'body', 'foot'];


const player1 = new Player({
    ...characters[random(characters.length - 1)],
    player: 1
})

const player2 = new Player({
    ...characters[random(characters.length - 1)],
    player: 2
})

$arenas.appendChild(createPlayer( player1 ))
$arenas.appendChild(createPlayer( player2 ))
fightLog('start', player1.name, player2.name)

$form.addEventListener('submit', function(evt){
    evt.preventDefault()
    const enemy =  enemyAttack()
    const player = playerAttack($form)

    attackAftermath(player2, player1.name, player.hit, enemy.defence)
    attackAftermath(player1, player2.name, enemy.hit, player.defence)

    $form.reset()

   isGameOver(player1, player2)

})
