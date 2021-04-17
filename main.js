const logs = {
    start: 'Часы показывали [time], когда [playerKick] и [playerDefence] бросили вызов друг другу.',
    end: [
        'Результат удара [playerKick]: [playerDefence] - труп',
        '[playerDefence] погиб от удара бойца [playerKick]',
        'Результат боя: [playerDefence] - жертва, [playerKick] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
}

const characters = [
    {
        name: 'scorpion',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
        attack: function(){
            console.log(this.name + ' Fight...')
        },
    },
    {
        name: 'kitana',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
        weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
        attack: function(){
            console.log(this.name + ' Fight...')
        },
    },
    {
        name: 'liu kang',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
        weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
        attack: function(){
            console.log(this.name + ' Fight...')
        },
    },
    {
        name: 'sonya',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
        weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
        attack: function(){
            console.log(this.name + ' Fight...')
        },
    },
    {
        name: 'sub-zero',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
        weapon: [ 'low punch', 'high punch', 'low kick', 'high kick', 'sword', ],
        attack: function(){
            console.log(this.name + ' Fight...')
        },
    },

]
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
const $chat = document.querySelector('.chat')

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const char1 = characters[random(characters.length - 1)]
const char2 = characters[random(characters.length - 1)]

let player1 = {
    ...char1,
    player: 1,
    elHP,
    elHPNum,
    changeHP,
    renderHP,

}

let player2 = {
    ...char2,
    player: 2,
    elHP,
    elHPNum,
    changeHP,
    renderHP,
}

$arenas.appendChild(createPlayer( player1 ))
$arenas.appendChild(createPlayer( player2 ))

fightLog('start', player1.name, player2.name)

$form.addEventListener('submit', function(evt){
    evt.preventDefault()
    const enemy =  enemyAttack()
    const player = playerAttack($form)

    attackAftermath(player2, player.hit, enemy.defence)
    attackAftermath(player1, enemy.hit, player.defence)

    $form.reset()

    if (player1.hp === 0 || player2.hp === 0 ) {
        let $message = ''
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

})


function attackAftermath(player, hit, defence) {
    // const name = player.name
    const aggressor = player.name === player1.name ?player2.name : player1.name
    if ( hit !== defence) {
        const damage = random(HIT[hit], 5)
        player.changeHP( damage )
        player.renderHP()
        fightLog('hit', aggressor, player.name, hit, player.hp, damage)
    } else {
        fightLog('defence', aggressor, player.name, hit, player.hp)

    }
}

function fightLog(logType, playerKick, playerDefence, hit, hp, damage) {
    const time = new Date().getHours() + ':'+ new Date().getMinutes()

    let str = logs[logType][random(logs[logType].length - 1)].replace('[playerKick]', playerKick).replace('[playerDefence]', playerDefence)
    let logStr = ''

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
        case 'draw':
            logStr = logs[logType]
            break
        default:
            logStr = logs[logType].replace('[time]', time).replace('[playerKick]', playerKick).replace('[playerDefence]', playerDefence)
    }

    const el = `<p class="log">${logStr}</p>`

    $chat.insertAdjacentHTML('afterbegin', el)
}

function enemyAttack() {
    const enemyAttack = {}
    enemyAttack.hit = ATTACK[random(3) -1]
    enemyAttack.defence = ATTACK[random(3) -1]

    return enemyAttack
}

function playerAttack(form) {
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
