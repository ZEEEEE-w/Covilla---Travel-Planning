console.log('main.js');
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


menuBtn.addEventListener('click', function (event) {
    console.log('menu-btn');

    event.stopPropagation();
    if (getComputedStyle(sideMenu).display === 'none') {
        sideMenu.style.display = 'block';
    }
    else {
        sideMenu.style.display = 'none';
    }
})
sideMenu.addEventListener('click', function (event) {
    event.stopPropagation();
})
document.addEventListener('click', function () {
    sideMenu.style.display = 'none';
})




// home page slider
const home = document.querySelector('.home');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const title = document.querySelector('.title');
const price = document.querySelector('.price');

const images = [{ src: './img/img1.jpeg', title: 'Bahariya Oasis, Egypt', price: 'STARTING AT $6400' },
{ src: './img/img2.jpeg', title: 'Thessaloniki, Greece', price: 'STARTING AT $6700' },
{ src: './img/img3.jpeg', title: 'Denpasar, Indonesia', price: 'STARTING AT $1900' }];

let imagesIndex = 0;

function updateContent() {
    home.style.backgroundImage = `url('${images[imagesIndex].src}')`;
    title.textContent = images[imagesIndex].title;
    price.textContent = images[imagesIndex].price;
}

left.addEventListener('click', function () {
    imagesIndex = (imagesIndex - 1 + images.length) % images.length;
    updateContent();
});
right.addEventListener('click', function () {
    imagesIndex = (imagesIndex + 1) % images.length;
    updateContent();
});

// choose desitination dropdown menu
const dropdownBtn2 = document.querySelector('.destinations2');
const dropdownMenu2 = document.querySelector('.dropdown-menu2');

dropdownBtn2.addEventListener('click', function (event) {
    event.stopPropagation();
    if (dropdownMenu2.style.display === 'block') {
        dropdownMenu2.style.display = 'none';
    }
    else {
        dropdownMenu2.style.display = 'block';
    }
})

dropdownMenu2.addEventListener('click', function (event) {
    event.stopPropagation();
})
document.addEventListener('click', function () {
    dropdownMenu2.style.display = 'none';
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

// Popular Vacation 
const bar2 = document.querySelector('.bar2');
const lineBoxs = document.querySelectorAll('.lineBox');
const contentBoxes = document.querySelectorAll('.contentBar');

lineBoxs.forEach((box, index) => {
    box.addEventListener('click', () => {
        document.querySelectorAll('.line').forEach((el) => el.classList.remove('active'));
        document.querySelectorAll('.line-son').forEach((el) => el.classList.remove('active'));
        contentBoxes.forEach((el) => el.classList.remove('active'));

        const currentLine = box.querySelector('.line');
        const currentSon = box.querySelector('.line-son');

        currentLine.classList.add('active');
        currentSon.classList.add('active');

        bar2.style.width = `${(index + 1) * 25}%`;
        contentBoxes[index].classList.add('active');
    });
});


// video
const videoIcon = document.getElementById('videoIcon')
const videoIconCircle = document.getElementById('videoIconCircle')
const circleOne = document.getElementById('circleOne')
const circleTwo = document.getElementById('circleTwo')
const circleThree = document.getElementById('circleThree')

videoIcon.addEventListener('mouseover', function () {
    circleOne.style.animation = 'videoPulse 2s infinite';
    circleTwo.style.animation = 'videoPulse 2s infinite';
    circleThree.style.transform = 'scale(1)'
    circleThree.style.opacity = '1'
    videoIcon.style.backgroundColor = '#fff'
    videoIcon.style.border = '0'
    videoIconCircle.style.backgroundColor = '#081c3a'
})
videoIcon.addEventListener('mouseout', function () {
    circleOne.style.animation = false;
    circleTwo.style.animation = false;
    circleThree.style.opacity = '0'
    videoIcon.style.backgroundColor = 'rgba(255, 255, 255,0)'
    videoIcon.style.border = '1px dashed rgb(244, 244, 244,.3)'
    videoIconCircle.style.backgroundColor = 'rgba(8, 28, 58,.1)'

})