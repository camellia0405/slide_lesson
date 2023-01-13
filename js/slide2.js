let images =['./img/image01.jpg','./img/image02.jpg','./img/image03.jpg',]
let current = 0;

let pageNum = function(){
    document.getElementById('page').textContent = (current + 1) + '/' + images.length;
}

let changeImage = function(num){
    if(current + num >= 0 && current +num < images.length){
        current += num;
        document.getElementById('img_main').src = images[current];
        pageNum();
    }
};

pageNum();

document.getElementById('prev').onclick = function(){
    changeImage(-1);
}

document.getElementById('next').onclick = function(){
    changeImage(1);
};


document.getElementById('img1').onclick = function(){
    document.getElementById('img_main').src = images[0]
    current = 0;
    pageNum();
}

document.getElementById('img2').onclick = function(){
    document.getElementById('img_main').src = images[1]
    current = 1;
    pageNum();
}

document.getElementById('img3').onclick = function(){
    document.getElementById('img_main').src = images[2]
    current = 2;
    pageNum();
}

document.getElementById('thumb').addEventListener('click', function(){
    this.classList.toggle('thumb_line');
});