console.log('about.js');
// top right dropdown menu
const dropdownBtn = document.querySelector('.destinations');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    }
    else {
        dropdownMenu.style.display = 'block';
    }
})

dropdownMenu.addEventListener('click', function (event) {
    event.stopPropagation();
})
document.addEventListener('click', function () {
    dropdownMenu.style.display = 'none';
})

//top left side menu
const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');


menuBtn.addEventListener('click', function(event){
    console.log('menu-btn');
    
    event.stopPropagation();
    if (sideMenu.style.display ==='none'){
        sideMenu.style.display = 'block';
    }
    else{
        sideMenu.style.display = 'none';
    }
})
sideMenu.addEventListener('click', function(event){
    event.stopPropagation();
})
document.addEventListener('click', function(){
    sideMenu.style.display = 'none';
})


// navigation bar transition
window.addEventListener('scroll', function () {
    const navagation = document.querySelector('.navagation');
    const container_center = document.querySelector('.container_center');
    const container = document.querySelector('.container');
    const span = document.querySelector('span');
    const menuBtn = document.querySelector('.menu-btn');
    const destinations = document.querySelector('.destinations');
    const dropdown_menu = document.querySelector('.dropdown-menu');
    const logo = document.querySelector('.logo');

    if (window.scrollY > 40) {
        navagation.style.backgroundColor = 'white';
        container_center.style.visibility = 'visible';
        span.style.color = 'black';
        container.style.height = '60px';
        menuBtn.style.height = '30px'
        destinations.style.color = 'black';
        dropdown_menu.style.top = '60px'
        logo.style.backgroundImage = `url('./img/arrow_down.svg')`;
    }
    else {

        navagation.style.backgroundColor = 'transparent';
        container_center.style.visibility = 'hidden';
        span.style.color = 'white';
        container.style.height = '80px';
        menuBtn.style.height = '50px'
        destinations.style.color = 'white';
        dropdown_menu.style.top = '80px'
        logo.style.backgroundImage = `url('./img/arrow_down_white.svg')`;
    }
})

//scroll bar 
const progressBar1 = document.querySelector('.progress-bar1');
const progressBar2 = document.querySelector('.progress-bar2');


// 2. 监听窗口的滚动 
window.addEventListener('scroll', function () {
    // 3. 获取滚动的高度--整个文档的滚动后，进度条滚动的距离  document.documentElement.scrollTop等于window.scrollY
    const n = document.documentElement.scrollTop
    // console.log(n);
    
    // 4.获取左侧进度条可移动的高度和页面文档的可移动的高度， 获取元素的高度offsetHeight
    const distance = progressBar1.offsetHeight - progressBar2.offsetHeight

    // 获取body除去窗口目前所占的高度（文档总高度-可以看到的文档高度）  
    const view = document.body.offsetHeight - window.innerHeight
    // console.log(view);
    

    // 5. 左侧进度条 根据滚动距离来计算小滑块儿可以移动的
    // n / view： 计算滚动进度,  (n / view) * distance : 计算进度条滑块儿应该移动的高度
    if (n < view) {
        progressBar2.style.top = (n / view) * distance + 'px'
    }
})

//support.html contactInfo div move
// const contactInfo = document.querySelector('.contactInfo');
// const contactInfoBox = document.querySelector('.contactInfoBox');

// window.addEventListener('scroll', function(){
//     const contactInfoTop = contactInfo.getBoundingClientRect().top;
//     console.log(contactInfoTop);
    
//     if (contactInfoTop < 0) {
//         const contactInfoBoxOffset = Math.max(0,-contactInfoTop)
//         console.log(contactInfoBoxOffset);
        
//         contactInfoBox.style.top = contactInfoBoxOffset + 'px';
//     }
//     else if (contactInfoTop > 0){
//         contactInfoBox.style.top = '0px';
//     }
// })