var a = document.getElementsByClassName('c')[0];
console.log(a);
a.addEventListener("mouseover", handler, false);
a.addEventListener("mouseout", handler1, false);

function handler(e) {
    if (e.target && e.target.tagName.toLowerCase() === 'li') {
        e.target.classList.add('active');
    }
}

function handler1(e) {
    if (e.target && e.target.tagName.toLowerCase() === 'li') {
        e.target.classList.remove('active');
    }
}
var img = document.getElementsByClassName('cc')[0];
var button = document.getElementsByClassName('ccc')[0];
console.log(img);
console.log(button);
button.addEventListener('click', lunbo, false);

function lunbo(e) {
    if (e.target && e.target.tagName.toLowerCase() === 'li') {
        e.target.style.background = 'black';

    }

}