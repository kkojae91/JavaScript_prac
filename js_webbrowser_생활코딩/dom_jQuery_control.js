var execute1 = document.getElementById('execute1');
execute1.addEventListener('click', function(){
    $('#demo>li').css('color','red');
})

var execute2 = document.getElementById('execute2');
execute2.addEventListener('click', function(){
    $('.active').css('color','blue');
})

var execute3 = document.getElementById('execute3');
execute3.addEventListener('click', function(){
    $('#active').css('color','green').css('textDecoration','underline');
})

var reload = document.getElementById('reload');
reload.addEventListener('click', function(){
    location.reload();
})