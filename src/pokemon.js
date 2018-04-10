let pokedex = []

class Pokemon {
  constructor(name, frontImage, backImage, id) {
    this.name = name
    this.frontImage = frontImage
    this.backImage = backImage
    this.id = id
    pokedex.push(this)
  }

  render(image) {
    return `<div id = "${this.id}">` + this.renderGuts(image) + `</div>`
  }

  renderGuts(image){
    return `
      <h2> ${this.name} </h2>
      <img class = "image" src="${image}"/>
      <a href="#" id = ${this.name}> flip card </a>`
  }
}
