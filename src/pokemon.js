class Pokemon {
  constructor(name, frontImage, backImage, id) {
    this.name = name
    this.frontImage = frontImage
    this.backImage = backImage
    this.id = id
  }

  render() {
    return `
            <li>
              <h2> ${this.name} </h2>
                <img src="${this.frontImage}"/>
            </li>`
  }

}
