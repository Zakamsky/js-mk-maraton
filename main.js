const scorpion = {
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const kitana = {
    name: 'kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const liukang = {
    name: 'liu kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const sonya = {
    name: 'sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const subZero = {
    name: 'sub-zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
    attack: function(){
        console.log(this.name + ' Fight...')
    },
}

const $arenas = document.querySelector('.arenas')
const $randBtn = document.querySelector('.button')
// const $control = document.querySelector('.control')

let player1 = {
    ...scorpion,
    player: 1,
    elHP: elHP,
    elHPNum: elHPNum,
    changeHP: changeHP,
    renderHP: renderHP,

}

let player2 = {
    ...subZero,
    player: 2,
    elHP: elHP,
    elHPNum: elHPNum,
    changeHP: changeHP,
    renderHP: renderHP,
}

$arenas.appendChild(createPlayer( player1 ))
$arenas.appendChild(createPlayer( player2 ))

$randBtn.addEventListener('click', () => {
    player2.changeHP(random(20, 5))
    player1.changeHP(random(20, 5))
    player2.renderHP()
    player1.renderHP()

    if (player1.hp === 0 || player2.hp === 0 ) {
        let $message = ''
        $randBtn.disabled = true
        if ( player1.hp > player2.hp ) {
            $message = playerWin(player1.name)
        } else if ( player1.hp < player2.hp) {
            $message = playerWin(player2.name)
        } else {
            $message = playerDraw()
        }

        $arenas.appendChild( $message )
        $arenas.appendChild( createReloadButton() )

    }
})


function createPlayer({ name, hp, img, player }){

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

// function changeHP(player, count) {
//
//     const $lifeBar = document.querySelector(`.player${player.player} .life`)
//     const $hp = document.querySelector(`.player${player.player} .hp`)
//     player.hp -= count
//
//     if ( player.hp <= 0 ) {
//         player.hp = 0
//     }
//     $lifeBar.style.width = player.hp + "%"
//     $hp.innerText = player.hp
// }

function changeHP(count) {
    if (this.hp > count) {
        return this.hp -= count
    } else {
        return this.hp = 0
    }
}

function elHP() {
    return document.querySelector(`.player${this.player} .life`)
}
function elHPNum() {
    return document.querySelector(`.player${this.player} .hp`)
}
function renderHP() {
    this.elHP().style.width = this.hp + "%"
    this.elHPNum().innerText = this.hp
}

function playerDraw() {

    return createEl('div', 'loseTitle', 'draw')
}

function playerWin(name) {
    const winText = name + ' wins!'
    return createEl('div', 'winTitle', winText)
}

function createReloadButton() {
    const $reloadWrap = createEl('div', 'reloadWrap')
    const $reloadBtn = createEl('button', 'button', 'Restart')
    $reloadWrap.appendChild($reloadBtn)
    $reloadBtn.addEventListener('click', () => window.location.reload())
    return $reloadWrap
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
