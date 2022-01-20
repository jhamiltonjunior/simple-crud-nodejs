export default class SetImage {
  constructor(url, id) {
    this.url = url;

    this.img = document.getElementById(id);
  }

  innerImage() {
    this.img.src = this.url;
  }
}
