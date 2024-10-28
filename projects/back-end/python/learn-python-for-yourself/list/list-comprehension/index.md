# List Comprehension

## Source

https://pythonbook.cc/chapters/basic/list#%E4%B8%B2%E5%88%97%E6%8E%A8%E5%B0%8E%E5%BC%8F

## Practice

一堆資料 -> 經過某些處理 -> 變成另一堆資料，有點像 JS 的 map

```
[ 結果 for 個體 in 集合 ]
[ 結果 for 個體 in 集合 if 條件判斷 ]
```

```python
[ n * 2 for n in range(5) ] # [0, 2, 4, 6, 8]
[ n for n in range(1, 11) if n % 2 == 0 ] # [2, 4 ,6 , 8, 10]
```

### 跟 for 迴圈的差異

迴圈裡的變數在 for 迴圈結束後，依然可以正常存取

```python
for n in range(10):
  pass

print(n) # 9
```

迴圈裡的變數在串列推導式結束後，無法存取（Python3 的特性）

```python
[n for n in range(10)]

print(n) # name 'n' is not defined.
```
