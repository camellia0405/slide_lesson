let thumbs = document.querySelectorAll('.thumb');
for(let i = 0;i < thumbs.length; i++){
    thumbs[i].addEventListener('click', function(){
        document.getElementById('img_main').src = this.dataset.image;
    });
}