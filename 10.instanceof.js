function myInstanceOf(obj, fn) {
  const proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === fn.prototype)
      return true
    proto = Object.getPrototypeOf(proto)
  }
  return false;
}
// test
const obj = { a: 1, b: 2 }
console.log(myInstanceOf(obj, Object)) // true

