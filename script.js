let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1 
  const element = document.getElementById('main-title')
  element.textContent = "Yooooo, I'm DOM!"

  // Part 2 
  document.body.style.backgroundColor = '#D0BDF0'

  // Part 3 
  const e = document.querySelector('#favorite-things li:last-child')
  e.parentElement.removeChild(e)

  // Part 4 
  const changes = Array.from(document.getElementsByClassName('special-title'))
  
  for (let i= 0; i < changes.length; i++) {
    let newSize = () => {
    changes[i].style.fontSize = '2rem'
  }
  newSize()
  }

  // Part 5
let removeChi = document.body.children[3].children[1].children[3]
removeChi.remove()

  // Part 6 
  let raceList = document.getElementById('past-races')
  let newLocation = document.createElement('li')
  newLocation.innerText = 'Davao'
  raceList.appendChild(newLocation)

  // Part 7 
  const newBlog = document.createElement('div')
  newBlog.classList.add('blog-post', 'purple', 'mine')
  document.querySelector('.main').appendChild(newBlog)

  const newHone = document.createElement('h1')
  newHone.innerText = 'Davao'
  document.querySelector('.mine').appendChild(newHone)
  
  const newParagraph = document.createElement('p')
  newParagraph.innerText = 'I took a break from driving and enjoyed the beach.'
  document.querySelector('.mine').appendChild(newParagraph)
}
