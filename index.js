let container = document.getElementById('container');
const root = document.documentElement;
const promptSide = parseInt(prompt('How many per side?: '));

root.style.setProperty('--side', promptSide);
const grid = promptSide * promptSide;

for (let i = 0; i < grid; i++) {
    const div = document.createElement('div');
    div.id = i;
    div.style.width = '100%';
    div.style.height = '100%';
    container.append(div);
}

container.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'cadetblue';
});
