# Sequence Unpacking

## Source

https://pythonbook.cc/chapters/basic/list#%E4%B8%B2%E5%88%97%E9%96%8B%E7%AE%B1

## 用途

用 JS 來理解的話，引用書中的一段話：

> 在 JavaScript 的話是被稱做「解構（Destructuring）」。不過不同的是，如果在開箱的過程中數量搭不起來的話，在 Python 是會出錯的

`*` 符號是 Unpacking Operator

```python
heroes = ["悟空", "鳴人", "流川楓"]
a, *b = heroes

print(a) # '悟空'
print(b) # ['鳴人', '流川楓']
```

```python
heroes = ["悟空"]
a, *b = heroes

print(a) # '悟空'
print(b) # []
```

```python
players = ["Curry", "Iverson", "Durant", "Rose", "James"]
head, *_, tail = players

print(head) # Curry
print(tail) # James
```
