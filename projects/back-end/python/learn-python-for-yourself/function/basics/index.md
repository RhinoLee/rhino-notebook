# Function

## Source

https://pythonbook.cc/chapters/basic/function

## 引數

source: https://docs.python.org/3/library/functions.html#sorted

```python
sorted(iterable, /, *, key=None, reverse=False)
  Return a new sorted list from the items in iterable.
```

- `/` 前的 `iterable` 一定要用位置引數
- `*` 後的 `key`、`reverse` 一定要用關鍵字引數
- example：
  ```python
  sorted([9, 5, 2, 7], reverse=True)
  ```

## 參數預設值的坑

source: https://pythonbook.cc/chapters/basic/function#%E5%8F%83%E6%95%B8%E9%A0%90%E8%A8%AD%E5%80%BC

```python
def add_to_box(a, b, box=[]):
  box.append(a)
  box.append(b)
  return box

add_to_box(1, 4) # [1, 4]
add_to_box(5, 0) # [1, 4, 5, 0]
```

可以調整為：

```python
def add_to_box(a, b, box=None):
  if box is None:
      box = []
  box.append(a)
  box.append(b)
  return box

add_to_box(1, 4) # [1, 4]
add_to_box(5, 0) # [5, 0]
```
