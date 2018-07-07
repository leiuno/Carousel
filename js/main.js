var allButtons = $('.buttons > button')
for(let i = 0; i < allButtons.length; i++){
  $(allButtons[i]).on('click',function(e){
    var index = $(e.currentTarget).index()
    let n = index * -300
    $('.images').css({
      transform: 'translateX('+ n +'px)'
    })
    num = index
    activeButton(allButtons.eq(num))
      
  })
}

let num = 0
let size = allButtons.length
playSlide(num % size)
  
let timeId = setTimer()

function setTimer(){
  return setInterval(function(){
    num = num + 1
    playSlide(num % size)
  },1000)
}
function playSlide(index){
  allButtons.eq(index).trigger('click')
}
function activeButton($button){
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}

$('.wrap').on('mouseenter',function(){
  clearInterval(timeId)
})
$('.wrap').on('mouseleave',function(){
  timeId = setTimer()
})

