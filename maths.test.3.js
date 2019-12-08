function expect (result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error(`预期结果有误,预期结果应为${actual},结果为${result}`);
      }
    }
  }
}

function test (describe, fn) {
  try {
    fn();
    console.log(`${describe}测试通过`);
  } catch (error) {
    console.log(`${describe}测试失败,${error}`);    
  }
}


test('3 + 3 加法', () => expect(add(3, 3)).toBe(6));

test('3 - 3 减法', () => expect(minus(3, 3)).toBe(0));