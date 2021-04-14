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
const $form = document.querySelector('.control')
const $hitBtn = $form.querySelector('.button')

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

let player1 = {
    ...scorpion,
    player: 1,
    elHP,
    elHPNum,
    changeHP,
    renderHP,

}

let player2 = {
    ...subZero,
    player: 2,
    elHP,
    elHPNum,
    changeHP,
    renderHP,
}

$arenas.appendChild(createPlayer( player1 ))
$arenas.appendChild(createPlayer( player2 ))


$form.addEventListener('submit', function(evt){
    evt.preventDefault()
    const enemy =  enemyAttack()
    const player = {}

    for( let input of $form) {
        // log(input, 'input')
        if ( input.checked && input.name === 'hit' ) {
            player.hit = input.value
        }
        if ( input.checked && input.name === 'defence' ) {
            player.defence = input.value
        }
    }
    player.damage = random(HIT[player.hit], 5)
    log(enemy, 'enemy')
    log(player, 'player')

    if ( enemy.hit !== player.defence) {
        player1.changeHP( enemy.damage )
        player1.renderHP()
        console.log(`${player2.name} бьет ${player1.name} в ${enemy.hit} нанося - ${enemy.damage} урона!`)
    } else if (enemy.hit === player.defence) {
        console.log(`${player2.name} бьет ${player1.name} в ${enemy.hit} попадая в блок!`)
    }

    if ( player.hit !== enemy.defence) {
        player2.changeHP( player.damage )
        player2.renderHP()
        console.log(`${player1.name} бьет ${player2.name} в ${player.hit} нанося - ${player.damage} урона!`)
    } else if (player.hit === enemy.defence) {
        console.log(`${player1.name} бьет ${player2.name} в ${player.hit} попадая в блок!`)
    }

    $form.reset()

    if (player1.hp === 0 || player2.hp === 0 ) {
        let $message = ''
        $hitBtn.disabled = true
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


function enemyAttack() {
    const enemyAttack = {}
    enemyAttack.hit = ATTACK[random(3) -1]
    enemyAttack.defence = ATTACK[random(3) -1]
    enemyAttack.damage = random(HIT[enemyAttack.hit], 5)

    return enemyAttack
}

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
