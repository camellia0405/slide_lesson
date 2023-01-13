let images =['./img/image01.jpg','./img/image02.jpg','./img/image03.jpg',]
let current = 0;

let pageNum = function(){
    document.getElementById('page').textContent = (current + 1) + '/' + images.length;
}

let changeImage = function(num){
    if(current + num >= 0 && current +num < images.length){
        current += num;
        document.getElementById('main_image').src = images[current];
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

