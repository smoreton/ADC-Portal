export class CssMixin {
  _mixinContent = [];

  addCssProperty(key, value) {
    this._mixinContent.push({
      key: key,
      value: value
    });
  }

  get cssStyles() {
    return this._mixinContent.reduce((result, current) => {
      result += current.key + ": " + current.value + ";";
      return result;
    }, "");
  }
}
