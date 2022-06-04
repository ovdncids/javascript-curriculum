# 정규식 (Regular expressions)

## 대소문자, 숫자, _만 사용 가능
```js
if (/[^a-zA-Z0-9_]/.test('한글')) {
  alert('CODE는 "대소문자, 숫자, _"만 사용 가능합니다.');
}
```
