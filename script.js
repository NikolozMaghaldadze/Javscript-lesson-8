let array = [
    {
        id:1,
        imageURL:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcclean.io%2Fwp-content%2Fgallery%2Fforest-hd-wallpapers%2F39312.jpg&f=1&nofb=1&ipt=c9730232ceb8c7e5813fcbb591ad2611b50786faa7576c67a56c94c42a84ed83&ipo=images",
        title:"სათაური 1"
    },
    {
        id:2,
        imageURL:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallsdesk.com%2Fwp-content%2Fuploads%2F2016%2F12%2FPictures-of-Rocky-Mountains.jpg&f=1&nofb=1&ipt=fa7af52b14399130a3f8b2dbb3c90cd32ea38e77facf4dbf5481e507a44aa526&ipo=images",
        title:"სათაური 2"
    },
    {
        id:3,
        imageURL:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs---Jp3oE95--%2Fc_fill%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600%2F199zpfi8dig2njpg.jpg&f=1&nofb=1&ipt=41b3a884ad78da8508ecb07d6c5cb5c42308b73ced1eef13f7c7f2e3a0d221a7&ipo=images",
        title:"სათაური 3"
    },
    {
        id:4,
        imageURL:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2016%2F01%2FOcean-Images-HD-Wallpaper-1402157-1366x768.jpg&f=1&nofb=1&ipt=07a4509a3e5f535053e6952b95788b25738540109de18f843fdde36585d4d20c&ipo=images",
        title:"სათაური 4"
    },
    {
        id:5,
        imageURL:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sickchirpse.com%2Fwp-content%2Fuploads%2F2015%2F02%2FAmazing-Forest-BaVARIA.jpg&f=1&nofb=1&ipt=ca2a2e0a638ef6d102e65e422a98a136266695e4ad48aa6c6106950ed1a6b278&ipo=images",
        title:"სათაური 5"
    }
];


let dotItem = document.getElementsByClassName('childDots');
let leftArrow = document.getElementById('previous');
let rightArrow = document.getElementById('next');
let sliderContent = document.getElementById('slider-content');
let sliderIndex = 0;


function createDivs(i) {
    let div = document.createElement('div');
    div.classList.add('image-wrapper');
    div.style.backgroundImage = `url(${i.imageURL})`;
    return div;
}

function createHeader(item){
    let header = document.createElement('h2');
    header.classList.add('header-tag');
    header.textContent = item.title;
    return header;
};


function setDots (item){
    let dotParent = document.createElement('div');
    dotParent.classList.add('dotswrap');

    array.forEach(element => {
        let dotChild = document.createElement('div');
        dotChild.classList.add('childDots');
        dotChild.setAttribute("data-id",element.id -1);
        dotParent.appendChild(dotChild);

        dotChild.addEventListener('click', function(event){
            console.log(event.target);
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            console.log(id);
            addSlides();
        })
    })
    return dotParent;
}


function addSlides() {
    sliderContent.innerHTML=" ";
    let sliderCreate = createDivs(array[sliderIndex]);
    let headerMain = createHeader(array[sliderIndex]);
    let dot = setDots();
    

    sliderCreate.appendChild(headerMain);
    sliderContent.appendChild(sliderCreate);
    sliderContent.appendChild(dot);
    activeDots();
};

// click events

leftArrow.addEventListener('click', function(){
    if ((sliderIndex == 0)) {
        return
    }
    sliderIndex--;
    addSlides();
});

rightArrow.addEventListener('click', function(){
    if ((sliderIndex == array.length - 1)) {
        return
    }
    sliderIndex++;
    addSlides();
});

function activeDots(){
    dotItem[sliderIndex].classList.add('active');
};


addSlides();