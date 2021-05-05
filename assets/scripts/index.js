import {createEl} from "./utils.js";
import {servFetch} from "./ServerFetch.js";

const $parent = document.querySelector('.parent');
const $player = document.querySelector('.player');

function createEmptyPlayerBlock() {
    const el = createEl('div', ['character', 'div11', 'disabled']);
    const img = createEl('img');
    img.src = 'http://reactmarathon-api.herokuapp.com/assets/mk/avatar/11.png';
    el.appendChild(img);
    $parent.appendChild(el);
}

async function init() {
    localStorage.removeItem('player1');

    const players = await servFetch.getAllPlayers();

    let imgSrc = null;
    createEmptyPlayerBlock();


    players.forEach(item => {
        const el = createEl('div', ['character', `div${item.id}`]);
        const img = createEl('img');

        el.addEventListener('mousemove', () => {
            if (imgSrc === null) {
                imgSrc = item.img;
                const $img = createEl('img');
                $img.src = imgSrc;
                $player.appendChild($img);
            }
        });

        el.addEventListener('mouseout', () => {
            if (imgSrc) {
                imgSrc = null;
                $player.innerHTML = '';
            }
        });

        el.addEventListener('click', () => {
            localStorage.setItem('player1', JSON.stringify(item));

            el.classList.add('active');

            setTimeout(() => {
                window.location.pathname += 'arena/';
            }, 1000);
        });

        img.src = item.avatar;
        img.alt = item.name;

        el.appendChild(img);
        $parent.appendChild(el);
    });
}

init();
