## 断开展示
```css
p, a {
    word-break: break-all;
}
```

## a标签文字不换行展示
```css
#toc {
  max-width: 180px;
  overflow-x: scroll;
}

#toc>>> a {
  color: #5c6b72;
  padding: 4px 2px;
  border-radius: 3px;
  word-break: keep-all;
  white-space: nowrap;
}
```