  let nextbn = document.querySelector('.next')
  let prevbn = document.querySelector('.prev')


nextbn.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})


prevbn.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})