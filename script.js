// the Javascipt was inspired by a youtube turtrial more on the readME.//
// tool a long time to learn java script but now i can say that i am kind of confident on how things work//
// The code is very understandble and easy. Just the two varibles of the two buttons.//
let nextbn = document.querySelector('.next')
let prevbn = document.querySelector('.prev')

// in simple terms if the button is clicked append  slide div function  into the first item (o)//
nextbn.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

// samething as the last one but it will take away o
prevbn.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})


// The easiest java script code i have done//