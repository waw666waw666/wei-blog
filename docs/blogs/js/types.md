# 类型判断

```js
function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

getType(1)        // 'Number'
getType('a')      // 'String'
getType(true)     // 'Boolean'
getType([])       // 'Array'
getType({})       // 'Object'
getType(null)     // 'Null'
getType(undefined) // 'Undefined'
```
