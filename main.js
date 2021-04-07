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


function createPlayer(classNames, character){
    const { name, hp, img } = character
    const $arenas = document.querySelector('.arenas')
    const $player = createEl('div', classNames)
    const $progress = createEl('div', 'progressbar')
    const $live = createEl('div', 'life')
    const $name = createEl('div', 'name')
    const $character = createEl('div', 'character')
    const $imgSrc = img
    const $img = createImg($imgSrc, name)

    $player.appendChild($progress)
    $progress.appendChild($live)
    $live.style.width = "100%"
    $live.innerText = hp
    $name.innerText = name
    $progress.appendChild($name)
    $player.appendChild($character)
    $character.appendChild($img)
    $arenas.appendChild($player)
    // return $player
}

createPlayer('player1', kitana )
createPlayer('player2', subZero )
// log(test, 'test')

function createEl( tag, className ) {
    const $element = document.createElement(tag)
    $element.classList.add(className)
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

function log( log, name = '' ) {
    name += ''
    console.log('### ' + name + ':', log)
}
