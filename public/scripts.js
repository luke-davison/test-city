
runOnStart()

function runOnStart () {
  let data = mapData
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 28; j++) {
      if (data[i * 28 + j][1]) {
        let img = document.createElement('img')
        img.src = '../sprites/' + data[i * 28 + j][1]
        img.style.position = 'absolute'
        img.classList.add('id' + i)
        img.classList.add('tile')
        document.getElementById('main').appendChild(img)
        img.onload = () => {moveImage(img, j, i)}

      }
    }
  }
}

function moveImage(img, xpos, ypos) {
  console.log(this)
  img.style.left = xToIso(xpos, ypos, img.width) + 'px'
  img.style.top = yToIso(xpos, ypos, img.height) + 'px'
}

function xToIso (xpos, ypos, width) {
  return 66 * (18 + xpos - ypos)
}

function yToIso (xpos, ypos, imgHeight) {
  console.log(xpos, ypos)
  return (xpos + ypos) * 33 - imgHeight
}
