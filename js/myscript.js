console.log('hello, world')
var mouseMove = setInterval(simulationMove, 1000)
var mouseClick = setInterval(simulationClick, 1000)
clearInterval(mouseMove)
clearInterval(mouseClick)

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(`${request.type}: ${request.action}`)

    if (request.type === 'simulationMove') {
      if (request.action) {
        mouseMove = setInterval(simulationMove, 1000)
      }else {
        clearInterval(mouseMove)
      }
    }
    if (request.type === 'simulationClick') {
      if (request.action) {
        mouseClick = setInterval(simulationClick, 1000)
      }else {
        clearInterval(mouseClick)
      }
    }
  }
)

function simulationMove () {
  var windowWidth = $(document).width()
  var windowHeight = $(document).height()
  // console.log(`(${windowWidth}, ${windowHeight})`)

  // create a jQuery event
  var e = $.Event('mousemove')

  // set coordinates

  e.pageX = Math.floor(Math.random() * windowWidth)
  e.pageY = Math.floor(Math.random() * windowHeight)

  // trigger event - must trigger on document
  $(document).trigger(e)
  $('p').html(`(${e.pageX}, ${e.pageY})`)
  console.log(`(${e.pageX}, ${e.pageY})`)
}

function simulationClick () {
  var windowWidth = $(document).width()
  var windowHeight = $(document).height()
  // console.log(`(${windowWidth}, ${windowHeight})`)

  // create a jQuery event
  var e = $.Event('click')

  // set coordinates

  e.pageX = Math.floor(Math.random() * windowWidth)
  e.pageY = Math.floor(Math.random() * windowHeight)

  // trigger event - must trigger on document
  $(document).trigger(e)
  console.log(`Click`)
}

// test
$(document).on('mousemove', function (event) {
  // console.log(`(${event.pageX}, ${event.pageY})`)
})
