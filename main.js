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
});


// popular slide //


let slides = [
    {
        popular1: 'assets/popular/vikingsWrapper.jpg',
        popular2: 'assets/popular/gothamWrapper.jpg',
        popular3: 'assets/popular/breakingbadWrapper.jpg',
        popular4: 'assets/popular/brooklyn99Wrapper.jpg',
        list1: 'assets/mylist/daredevilWrapper.png',
        list2: 'assets/mylist/blacksailsWrapper.png',
        list3: 'assets/mylist/blacklistWrapper.png',
        list4: 'assets/mylist/theranchWrapper.png',
        again1: 'assets/watchagain/spartacusWrapper.jpg',
        again2: 'assets/watchagain/punisherWrapper.jpg',
        again3: 'assets/watchagain/sherlockWrapper.jpg',
        again4: 'assets/watchagain/freshprinceWrapper.jpg'
    },
    {
        popular1: 'assets/popular/',
        popular2: 'assets/popular/',
        popular3: 'assets/popular/',
        popular4: 'assets/popular/',
        list1: 'assets/mylist/',
        list2: 'assets/mylist/',
        list3: 'assets/mylist/',
        list4: 'assets/mylist/',
        again1: 'assets/watchagain/',
        again2: 'assets/watchagain/',
        again3: 'assets/watchagain/',
        again4: 'assets/watchagain/'
    }  
]

let counter = 0
let popular1 = document.querySelector('.popular1')
let popular2 = document.querySelector('.popular2')
let popular3 = document.querySelector('.popular3')
let popular4 = document.querySelector('.popular4')
let list1 = document.querySelector('.list1')
let list2 = document.querySelector('.list2')
let list3 = document.querySelector('.list3')
let list4 = document.querySelector('.list4')
let again1 = document.querySelector('.again1')
let again2 = document.querySelector('.again2')
let again3 = document.querySelector('.again3')
let again4 = document.querySelector('.again4')

function setImage(){
    popuplar1.setAttribute('src', slides[counter].popular1)
    popuplar2.setAttribute('src', slides[counter].popular2)
    popuplar3.setAttribute('src', slides[counter].popular3)
    popuplar4.setAttribute('src', slides[counter].popular4)
    list1.setAttribute('src', slider[counter].list1)
    list2.setAttribute('src', slider[counter].list2)
    list3.setAttribute('src', slider[counter].list3)
    list4.setAttribute('src', slider[counter].list4)
    again1.setAttribute('src', slides[counter].again1)
    again2.setAttribute('src', slides[counter].again2)
    again3.setAttribute('src', slides[counter].again3)
    again4.setAttribute('src', slides[counter].again4)
};

let prevImg1 = document.querySelector('.prevArrow1')
let prevImg2 = document.querySelector('.prevArrow2')
let prevImg3 = document.querySelector('.prevArrow3')
let nextImg1 = document.querySelector('.nextArrow1')
let nextImg2 = document.querySelector('.nextArrow2')
let nextImg3 = document.querySelector('.nextArrow3')

prevImg1.addEventListener('click', function(){
    if(counter > 0){
        counter--
    }
    else{
        counter = 1
    }
    setImage()
})
nextImg1.addEventListener('click', function(){
    if(counter < 1){
        counter++
    }
    else{
        counter = 0
    }
    setImage()
});


prevImg2.addEventListener('click', function(){
    if(counter > 0){
        counter--
    }
    else{
        counter = 1
    }
    setImage()
})
nextImg2.addEventListener('click', function(){
    if(counter < 1){
        counter++
    }
    else{
        counter = 0
    }
    setImage()
});


prevImg3.addEventListener('click', function(){
    if(counter > 0){
        counter--
    }
    else{
        counter = 1
    }
    setImage()
})
nextImg3.addEventListener('click', function(){
    if(counter < 1){
        counter++
    }
    else{
        counter = 0
    }
    setImage()
})

// // 