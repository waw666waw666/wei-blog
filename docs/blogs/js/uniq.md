# 数组去重

JavaScript 数组去重的几种常见方法：

## 1. Set

```js
const unique = [...new Set(arr)]
```

## 2. filter + indexOf

```js
const unique = arr.filter((item, index) => arr.indexOf(item) === index)
```

## 3. reduce

```js
const unique = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) acc.push(cur)
  return acc
}, [])
```
