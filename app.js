VANTA.BIRDS({
    el: "#selector",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0,
    color1: 0xa0066,
    color2: 0xffffff,
    colorMode: "variance",
    birdSize: 0.20,
    wingSpan: 10.00,
    speedLimit: 1.00,
    separation: 100.00,
    alignment: 1.00,
    cohesion: 1.00
})

////////////////////////////////////////////// смена картинки для каждого отдельного NFT ----------->
let imagesOne  = ['img/1.jpg', 'img/2.jpg']
let lengthOne = imagesOne.length;
let indexOne = 1;

setInterval(function() {
    if (indexOne === lengthOne) indexOne = 0;
    document.getElementById('one',).src = imagesOne[indexOne++];
}, 30000);
//////////////////////////////////////////////
let imagesThree  = ['img/3.jpg', 'img/4.jpg',]
let lengthThree = imagesThree.length;
let indexThree = 1;

setInterval(function() {
    if (indexThree === lengthThree) indexThree = 0;
    document.getElementById('three',).src = imagesThree[indexThree++];
}, 30000);
//////////////////////////////////////////////
let imagesFour  = ['img/5.jpg', 'img/6.jpg',]
let lengthFour = imagesFour.length;
let indexFour = 1;

setInterval(function() {
    if (indexFour === lengthFour) indexFour = 0;
    document.getElementById('four',).src = imagesFour[indexFour++];
}, 30000);
//////////////////////////////////////////////
let imagesFive  = ['img/7.jpg', 'img/8.jpg',]
let lengthFive = imagesFive.length;
let indexFive = 1;

setInterval(function() {
    if (indexFive === lengthFive) indexFive = 0;
    document.getElementById('five',).src = imagesFive[indexFive++];
}, 30000);
//////////////////////////////////////////////
let imagesSix  = ['img/9.jpg', 'img/10.jpg',]
let lengthSix = imagesSix.length;
let indexSix = 1;

setInterval(function() {
    if (indexSix === lengthSix) indexSix = 0;
    document.getElementById('six',).src = imagesSix[indexSix++];
}, 30000);
//////////////////////////////////////////////
let imagesTwo  = ['img/11.jpg', 'img/12.jpg',]
let lengthTwo = imagesTwo.length;
let indexTwo = 1;

setInterval(function() {
    if (indexTwo === lengthTwo) indexTwo = 0;
    document.getElementById('two',).src = imagesTwo[indexTwo++];
}, 30000);
//////////////////////////////////////////////
let imagesEight  = ['img/13.jpg', 'img/14.jpg',]
let lengthEight = imagesEight.length;
let indexEight = 1;

setInterval(function() {
    if (indexEight === lengthEight) indexEight = 0;
    document.getElementById('eight',).src = imagesEight[indexEight++];
}, 30000);
//////////////////////////////////////////////
let imagesSeven  = ['img/15.jpg', 'img/16.jpg',]
let lengthSeven = imagesSeven.length;
let indexSeven = 1;

setInterval(function() {
    if (indexSeven === lengthSeven) indexSeven = 0;
    document.getElementById('seven',).src = imagesSeven[indexSeven++];
}, 30000);
//////////////////////////////////////////////
let imagesNine  = ['img/17.jpg', 'img/18.jpg',]
let lengthNine = imagesNine.length;
let indexNine = 1;

setInterval(function() {
    if (indexNine === lengthNine) indexNine = 0;
    document.getElementById('nine',).src = imagesNine[indexNine++];
}, 30000);
//////////////////////////////////////////////

AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})

//// подключение метамаск
async function connect() {
    if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.web3 = new Web3(window.ethereum);
        document.getElementById("MM").value = "Mint";
    } else {
        alert("You need to install MetaMask to use this feature. Click ok to download MetaMask");
        window.open("https://metamask.io/download.html");
    }
}

async function mint() {
    const button = document.getElementById("MM");

    if (button.value === "Mint") {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const address = "0x0ec80515C13263f7c096f1a7F3d35590f2809F8D";
        const weiValue = web3.utils.toWei("0.000001", "ether");
        const transactionParameters = {
            from: accounts[0],
            to: address,
            value: weiValue
        };

        try {
            await window.ethereum.request({ method: "eth_sendTransaction", params: [transactionParameters] });
            console.log("Transaction successful!");
        } catch (error) {
            console.error(error);
        } finally {
            // сброс значений
            button.value = 'Mint';
            button.innerText = 'Connect';
        }
    } else {
        alert(`Please click 'OK' button first to connect to Metamask.`)
    }
}