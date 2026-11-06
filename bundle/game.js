import { mount } from '/engine-sdk/ui.js';

const FLOORS = 8;
const TILES = 4;
const zone = document.getElementById('tower');

for (let i = FLOORS; i >= 1; i--) {
    const row = document.createElement('div');
    row.className = 'floor';
    row.dataset.floor = i;
    for (let t = 0; t < TILES; t++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.tile = t;
        row.append(tile);
    }
    zone.append(row);
}

function render(round) {
    const bust = round.state === 'busted'; // round.busted is the drawn path's, also after a cash-out
    for (let i = 1; i <= FLOORS; i++) {
        const row = zone.querySelector(`[data-floor="${i}"]`);
        const data = round.data[i - 1];
        row.classList.toggle('revealed', !!data);
        row.classList.toggle('bust', bust && i === round.step);
        for (const tile of row.children) {
            const t = Number(tile.dataset.tile);
            tile.classList.toggle('trap', !!data && t === data.trap);
            tile.classList.toggle('safe', !!data && t !== data.trap);
        }
    }
}

await mount(document.getElementById('game'), {
    step: (round) => render(round),
});
