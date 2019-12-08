var result = add(3, 3);
var expect = 6;

if (result !== expect) {
  throw Error(`3+3 预期值为：${expect}, 结果为：${result}`);
}
