document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('.random-color-divider')
  
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
  }

  const divideBlock = element => {
    const horOrVer = Math.floor(Math.random() * 2)
    console.log(horOrVer)
    const width = horOrVer ? `${Math.floor(element.offsetWidth / 2)}px` : `${element.offsetWidth}px`
    const height = horOrVer ? `${element.offsetHeight}px` : `${Math.floor(element.offsetHeight / 2)}px`
    const div1 = `<div style="width: ${width}; height: ${height}; background-color: ${randomColor()}"></div>`
    const div2 = `<div style="width: ${width}; height: ${height}; background-color: ${randomColor()}"></div>`
    
    element.innerHTML = `${div1}${div2}`
  }

  const addListenerForEvent = element => {
    element.addEventListener('click', event => {
      divideBlock(event.target)
      event.target.querySelectorAll('div').forEach(divItem => addListenerForEvent(divItem))
    })
  }

  mainElement.style.backgroundColor = randomColor()
  addListenerForEvent(mainElement)
})