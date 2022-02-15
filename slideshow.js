const imagens = [
    {'url':'./img/wallpapper1.jpg' },
    {'url':'./img/wallpapper2.jpg' },
    {'url':'./img/wallpapper3.jpg' },
    {'url':'./img/wallpapper4.jpg' },
    {'url':'./img/wallpapper5.jpg' },
    {'url':'./img/wallpapper6.png' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( imagens, container ) => {
    imagens.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( imagens, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);