export class Generator2d {
  constructor(arr) {
    this.generator = Generator2d._createGenerator(arr);
  }

  next() {
    return this.generator.next();
  }

  static * _createGenerator(arr) {
    for (let i=0; i<arr.length; i++) {
      let currentArray = arr[i];

      let j=0;
      while (true) {
        let item = currentArray[j];
        if (!item) {
          break;
        }
        yield item;
        j++;
      }
    }
  }
}

export default {
  Generator2d,
  }