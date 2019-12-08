function expect (result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error(`预期结果有误,预期结果应为${actual},结果为${result}`);
      }
    }
  }
}


expect(add(3, 3)).toBe(6);

expect(minus(3, 3)).toBe(0);