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


let slide1 = [
    {
        popular1: 'assets/popular/vikingsWrapper.jpg',
        popular2: 'assets/popular/gothamWrapper.jpg',
        popular3: 'assets/popular/breakingbadWrapper.jpg',
        popular4: 'assets/popular/brooklyn99Wrapper.jpg',  
    },
    {
        popular1: 'assets/popular/friendsWrapper.jpg',
        popular2: 'assets/popular/blackmirrorWrapper.png',
        popular3: 'assets/popular/luciferWrapper.jpg',
        popular4: 'assets/popular/shooterWrapper.jpg',
    }  
];
let slide2 = [
    {
        list1: 'assets/mylist/daredevilWrapper.png',
        list2: 'assets/mylist/blacksailsWrapper.jpg',
        list3: 'assets/mylist/blacklistWrapper.jpg',
        list4: 'assets/mylist/theranchWrapper.jpg'
    },
    {
        list1: 'assets/mylist/alteredcarbonWrapper.jpg',
        list2: 'assets/mylist/frontierWrapper.jpg',
        list3: 'assets/mylist/marcopoloWrapper.jpg',
        list4: 'assets/mylist/houseofcardsWrapper.jpg'
    }
];
let slide3 = [
    {
        again1: 'assets/watchagain/spartacusWrapper.jpg',
        again2: 'assets/watchagain/punisherWrapper.jpg',
        again3: 'assets/watchagain/sherlockWrapper.jpg',
        again4: 'assets/watchagain/freshprinceWrapper.jpg'
    },
    {
        again1: 'assets/watchagain/bettercallsaulWrapper.jpg',
        again2: 'assets/watchagain/drhouseWrapper.jpg',
        again3: 'assets/watchagain/howimetyourmotherWrapper.jpg',
        again4: 'assets/watchagain/thegetdownWrapper.jpeg'
    }
];

let counterSlide1 = 0
let counterSlide2 = 0
let counterSlide3 = 0
let popularSection1 = document.querySelector('.popular1')
let popularSection2 = document.querySelector('.popular2')
let popularSection3 = document.querySelector('.popular3')
let popularSection4 = document.querySelector('.popular4')
let listSection1 = document.querySelector('.list1')
let listSection2 = document.querySelector('.list2')
let listSection3 = document.querySelector('.list3')
let listSection4 = document.querySelector('.list4')
let againSection1 = document.querySelector('.again1')
let againSection2 = document.querySelector('.again2')
let againSection3 = document.querySelector('.again3')
let againSection4 = document.querySelector('.again4')

function setImage1(){
    popularSection1.setAttribute('src', slide1[counterSlide1].popular1)
    popularSection2.setAttribute('src', slide1[counterSlide1].popular2)
    popularSection3.setAttribute('src', slide1[counterSlide1].popular3)
    popularSection4.setAttribute('src', slide1[counterSlide1].popular4)

};
function setImage2(){
    listSection1.setAttribute('src', slide2[counterSlide2].list1)
    listSection2.setAttribute('src', slide2[counterSlide2].list2)
    listSection3.setAttribute('src', slide2[counterSlide2].list3)
    listSection4.setAttribute('src', slide2[counterSlide2].list4)
};
function setImage3(){
    againSection1.setAttribute('src', slide3[counterSlide3].again1)
    againSection2.setAttribute('src', slide3[counterSlide3].again2)
    againSection3.setAttribute('src', slide3[counterSlide3].again3)
    againSection4.setAttribute('src', slide3[counterSlide3].again4)
};

let prevImg1 = document.querySelector('.prevArrow1')
let prevImg2 = document.querySelector('.prevArrow2')
let prevImg3 = document.querySelector('.prevArrow3')
let nextImg1 = document.querySelector('.nextArrow1')
let nextImg2 = document.querySelector('.nextArrow2')
let nextImg3 = document.querySelector('.nextArrow3')

// slide 1 //

prevImg1.addEventListener('click', function(){
    if(counterSlide1 > 0){
        counterSlide1--
    }
    else{
        counterSlide1 = 1
    }
    setImage1()
})
nextImg1.addEventListener('click', function(){
    if(counterSlide1 < 1){
        counterSlide1++
    }
    else{
        counterSlide1 = 0
    }
    setImage1()
});

// slide 2 //

prevImg2.addEventListener('click', function(){
    if(counterSlide2 > 0){
        counterSlide2--
    }
    else{
        counterSlide2 = 1
    }
    setImage2()
})
nextImg2.addEventListener('click', function(){
    if(counterSlide2 < 1){
        counterSlide2++
    }
    else{
        counterSlide2 = 0
    }
    setImage2()
});

// slide 3 //

prevImg3.addEventListener('click', function(){
    if(counterSlide3 > 0){
        counterSlide3--
    }
    else{
        counterSlide3 = 1
    }
    setImage3()
})
nextImg3.addEventListener('click', function(){
    if(counterSlide3 < 1){
        counterSlide3++
    }
    else{
        counterSlide3 = 0
    }
    setImage3()
})

// // 