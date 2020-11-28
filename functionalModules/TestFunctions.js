
class TestFunctions {
  static sum(a, b) {
    return a + b;
  }

  static difference(a, b) {
    return a - b;
  }

  static abs(a) {
    return a > 0 ? a : 0 - a;
  }

  static absDiff(a,b) {
    return this.abs(this.difference(a, b));
  }
}

export default TestFunctions;
