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

// I believe this is where I am making the mistake of appending the swap and delete buttons
// to not only the new div but also every existing div. At the point of stopping the code
// challenge I was beginning to try appending only the buttons to each NEW div.
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