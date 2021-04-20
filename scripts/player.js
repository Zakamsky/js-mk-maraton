class Player {
    constructor({name, hp, img, player}) {
        this.name = name
        this.hp = hp
        this.img = img
        this.player = player
    }

    changeHP = (count)  => this.hp > count ? this.hp -= count : this.hp = 0

    elHP = () => document.querySelector(`.player${this.player} .life`)

    elHPNum = () => document.querySelector(`.player${this.player} .hp`)

    renderHP = () => {
        this.elHP().style.width = this.hp + "%"
        this.elHPNum().innerText = this.hp
    }
}

export default Player