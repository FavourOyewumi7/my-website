let names = ['Front End Web Developer', 'Machine Learning Enthusiast', 'Photographer']
console.log(names.length);
let tag = document.getElementsByClassName('words')[0];
let nav = document.getElementsByClassName('width')[0];
let lists = document.getElementsByClassName('nav-lists')[0];
let bar = document.getElementsByClassName('bars')[0]
let lis = document.getElementsByClassName('nav-list')[0];


myWords(names,tag)

function myWords(names, target) {
    for (let i = 0; i < names.length; i++) {
        setInterval((c => () => target.innerHTML = c)(names[i]), (i + 1)* 1000);
    }
}


new WOW().init();

nav.addEventListener("click", showNav);

function showNav(){
 
    bar.style.display = 'none';
    lists.style.display = 'block';
    lis.style.display = 'none'
}