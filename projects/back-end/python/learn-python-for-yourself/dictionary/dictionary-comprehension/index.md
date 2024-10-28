# Dictionary Comprehension

## Source

https://pythonbook.cc/chapters/basic/dictionary#%E5%AD%97%E5%85%B8%E6%8E%A8%E5%B0%8E%E5%BC%8F

## Practice

[串列推導式](/back-end/python/learn-python-for-yourself/list/list-comprehension/)

> 字典推導式的寫法跟串列推導式很像，只是把中括號換成大括號。而且因為字典是由 Key 跟 Value 組合而成，所以在推導式裡需要在中間加上冒號：

```python
numbers = [1, 2, 3, 4, 5]
square_dict = { x: x**2 for x in numbers }
square_dict
{ 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 }
```

```python
fruits = ["蘋果", "香蕉", "鳳梨", "芭樂"]
prices = [20, 10, 15, 30]

# 預期結果：{"蘋果": 20, "香蕉": 10, "鳳梨": 15, "芭樂": 30}
fruits_prices_zip = zip(fruits, prices)
fruit_price_dict = { f: p for f, p in fruits_prices_zip }

# or
dict(zip(fruits, prices))
```
