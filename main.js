// function search input  //

function search(){
    if (document.querySelector('.pesquisa').style.display == 'none'){
    document.querySelector('.pesquisa').style.display = 'flex';
    document.querySelector('.pesquisa').focus()
    document.querySelector('.search-box').style.width = '250px';
    document.querySelector('.search-box').style.border = 'solid 0.5px white';
    document.querySelector('.search-box').style.backgroundColor = '#141414'
    }
    else {
        document.querySelector('.pesquisa').style.display = 'none';
        document.querySelector('.search-box').style.border = 'none';
        document.querySelector('.search-box').style.width = '40px';
        document.querySelector('.search-box').style.backgroundColor = 'transparent'
    }
};

// function scroll window //

function scrollWindow(event) {
    if(window.scrollY <= 0){
        document.querySelector('header').style.backgroundColor = 'transparent'
    }
    else{
        document.querySelector('header').style.backgroundColor = 'black'
    }
    console.log(event)
};

// function hover buttons //

let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let symbol1 = document.querySelector('.symbol1')
let symbol2 = document.querySelector('.symbol2')
let symbol3 = document.querySelector('.symbol3')
let p1 = document.querySelector('.buttonText1')
let p2 = document.querySelector('.buttonText2')
let p3 = document.querySelector('.buttonText3')

button1.addEventListener('mouseenter', function(event){
    if(button1.style.backgroundColor === 'rgba(51, 51, 51, 0.4)'){
        button1.style.backgroundColor = '#FFF'
        button1.style.transform = 'scale(1.05)'
        symbol1.style.color = '#141414'
        p1.style.color = '#141414'
    }
    console.log(event)
})

button1.addEventListener('mouseleave', function(event){
    button1.style.backgroundColor = 'rgba(51, 51, 51, 0.4)'
    button1.style.transform = 'scale(1)'
    symbol1.style.color = '#FFF'
    p1.style.color = '#FFF'
})

button2.addEventListener('mouseenter', function(event){
    if(button2.style.backgroundColor === 'rgba(51, 51, 51, 0.4)'){
        button2.style.backgroundColor = '#FFF'
        button2.style.transform = 'scale(1.05)'
        symbol2.style.color = '#141414'
        p2.style.color = '#141414'
    }
    console.log(event)
})

button2.addEventListener('mouseleave', function(event){
    button2.style.backgroundColor = 'rgba(51, 51, 51, 0.4)'
    button2.style.transform = 'scale(1)'
    symbol2.style.color = '#FFF'
    p2.style.color = '#FFF'
})

button3.addEventListener('mouseenter', function(event){
    if(button3.style.backgroundColor === 'rgba(51, 51, 51, 0.4)'){
        button3.style.backgroundColor = '#FFF'
        button3.style.transform = 'scale(1.05)'
        symbol3.style.color = '#141414'
        symbol3.style.border = 'solid 2px #141414'
        p3.style.color = '#141414'
    }
    console.log(event)
})

button3.addEventListener('mouseleave', function(event){
    button3.style.backgroundColor = 'rgba(51, 51, 51, 0.4)'
    button3.style.transform = 'scale(1)'
    symbol3.style.color = '#FFF'
    symbol3.style.border = 'solid 2px #FFF'
    p3.style.color = '#FFF'
});

// function menu right nav bar dropdown //

let perfil = document.querySelector('.perfil-menu')
let menuAcc = document.querySelector('.menuAccount')

perfil.addEventListener('click', function(event){
    if(menuAcc.style.display === 'none'){
        menuAcc.style.display = 'block'
    }
    else{
        menuAcc.style.display = 'none'
    }
    console.log(event)
})