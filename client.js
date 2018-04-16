console.log('javascript sourced');

let counting = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jquery sourced');
    $('#generate-btn').on('click', clickedHandler);
}

function clickedHandler() {
    console.log('Button has been clicked');
    counting++;
    console.log(counting);
    $('body').append('<div class="contents">' + '<p class="counter">' + '</p>' + '</div>');
    addButtons();
    updateCounter();
    remove();
    swapColor();
}

function addButtons() {
    $('.contents').append('<button class="swap-btn">' + 'Swap' + '</button');
    $('.contents').append('<button class="delete-btn">' + 'Delete' + '</button');
}

function updateCounter() {
    $('.counter').text(counting);
}

function swapColor() {
    $('.swap-btn').on('click', function(){
        $(this).parent().toggleClass('yellow');
    });
}

function remove() {
    $('.delete-btn').on('click', function(){
        $(this).parent().remove();
    });
}