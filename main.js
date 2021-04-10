const scorpion = {
    name: 'scorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const kitana = {
    name: 'kitana',
    hp: 76,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const liukang = {
    name: 'liu kang',
    hp: 76,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}


const sonya = {
    name: 'sonya',
    hp: 76,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const subZero = {
    name: 'sub-zero',
    hp: 76,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const $arenas = document.querySelector('.arenas')
const $randBtn = document.querySelector('.button')

let player1 = {
    ...scorpion,
    player: 1,
}

let player2 = {
    ...subZero,
    player: 2,
}

function createPlayer({ name, hp, img, player }){
    // const { name, hp, img } = character

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


$arenas.appendChild(createPlayer( player1 ))
$arenas.appendChild(createPlayer( player2 ))

$randBtn.addEventListener('click', () => {
    changeHP(player2, random(20, 5))
    changeHP(player1, random(55, 15))
})


function changeHP(player, count) {

    const $lifeBar = document.querySelector(`.player${player.player} .life`)
    const $hp = document.querySelector(`.player${player.player} .hp`)
    player.hp -= count

    if ( player.hp <= 0 ) {
        player.hp = 0
        // $lifeBar.style.width = 0
        // $hp.innerText = 0

        const $message = player === player1 ? playerLose( 'you') : playerWin(player1.name)
        $arenas.appendChild( $message )

        $randBtn.disabled = true
    }
    $lifeBar.style.width = player.hp + "%"
    $hp.innerText = player.hp
}

function playerLose(name) {
    const LooseText = name + ' lose!'
    return createEl('div', 'loseTitle', LooseText)
}

function playerWin(name) {
    const winText = name + ' wins!'
    return createEl('div', 'winTitle', winText)
}



function random(max, min = 0) {
    const num = max - min
    return Math.ceil(Math.random() * num ) + min
}
function createEl( tag, className, text ) {
    const $element = document.createElement(tag)
    className && $element.classList.add(className)
    if (text) { $element.innerText = text }
    return $element
}
function createImg( src, alt = '', className ) {
    const $element = document.createElement('img')
    $element.src= src
    $element.alt = alt
    className && $element.classList.add(className)
    return $element
}
// for debugging:
// log(test, 'test')
function log( log, name = '' ) {
    name += ''
    console.log('### ' + name + ':', log)
}
