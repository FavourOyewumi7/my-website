let names = ['Front End Web Developer', 'Machine Learning Enthusiast', 'Photographer']
console.log(names.length)
let tag = document.getElementsByClassName('words')[0]





myWords(names,tag)

function myWords(names, target) {
    for (let i = 0; i < names.length; i++) {
        setInterval((c => () => target.innerHTML = c)(names[i]), (i + 1)* 1000);
    }
}


new WOW().init();
