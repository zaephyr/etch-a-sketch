let container = document.getElementById('container');
let kids = container.childNodes;
const root = document.documentElement;

function clicked() {
    const promptSide = parseInt(prompt('How many per side?: '));

    root.style.setProperty('--side', promptSide);
    const grid = promptSide * promptSide;

    for (let i = 0; i < grid; i++) {
        const div = document.createElement('div');
        div.style.width = '100%';
        div.style.height = '100%';
        container.append(div);

        if (kids[i].nodeName.toLowerCase() == 'div') {
            kids[i].style.background = '#f3f3f3';
        }
    }
}
container.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'cadetblue';
});
