# 정규식 (Regular expressions, regex)

## 표현식
#### 기본은 & 조건
#### `문자`: abc 문자가 문자열 안에 포함 되면 참
```js
/abc/.test('def abcghi')
```

#### `i`: 대소문자를 구별하지 않음
```js
/aBc/i.test('AbC')
```

#### `^`: 문자열 시작
```js
/^a/.test('abc')
```

#### `|`: 또는
```js
/^a|^bc/.test('bc')
```

#### `$`: 문자열 끝
```js
/c$/.test('abc')
```

#### `.`: 아무 문자 하나를 뜻함
```js
/^a.c$/.test('abc') === true
/^a.c$/.test('ac') === false
```

#### `*`: 앞에 (문자 또는 그룹) n개를 뜻함 (0개 포함)
```js
/^a.*c$/.test('ac')
/^a.*c$/.test('abbc')
```

#### `+`: 앞에 (문자 또는 그룹) n개를 뜻함 (1개 부터)
```js
/^a.+c$/.test('a c')
```

#### `?`: 앞에 (문자 또는 그룹) 0개 또는 1개를 뜻함
```js
/^a.?c$/.test('ac')
/^a.?c$/.test('abc')
```

#### `{}`: 반복. {1,3} 1번 이상 3번 이하
```js
/^ab{1,2}c$/.test('abbc') === true
/^ab{1,2}c$/.test('abbbc') === false
```

#### `[]`: 그룹. 문자열 안에 그룹형식이 포함 되면 참
```js
/[a-z]/.test('1a3')
```

#### `[^]`: 대괄호 안에 `^`는 부정을 뜻하고, 문자열이 '' 또는 그룹형식으로만 되어 있는 경우 거짓이 된다.
```js
/[^a-z]/.test('123') === true
/[^a-z]/.test('abc123') === true
/[^a-z]/.test('') === false
/[^a-z]/.test('abc') === false
```

## AND 조건
* http://1004lucifer.blogspot.com/2019/04/regex-and.html
```js
/(?=(^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$))(?=(.*[1-9]))/.test('1.2.3') === true
/(?=(^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$))(?=(.*[1-9]))/.test('0.0.0') === false
// 조건1. {숫자 1자리 ~ 3자리}.{숫자 1자리 ~ 3자리}.{숫자 1자리 ~ 3자리}
// 조건2. 1 ~ 9사이의 숫자 하나 이상 포함

/(?=(^[0-9]{3}\.[0-9]{3}\.[0-9]{3}$))(?=(.*[1-9]))/.test('123.456.789') === true
/(?=(^[0-9]{3}\.[0-9]{3}\.[0-9]{3}$))(?=(.*[1-9]))/.test('000.000.000') === false
```

## 특정 문자열 포함하지 않는 매칭
* http://1004lucifer.blogspot.com/2019/06/regex.html
```js
// ^((?!단어).)*$
/^((?!').)*$/.test("abc123") === true
/^((?!').)*$/.test("abc'123") === false ('(홑따옴표)가 포함 되면 거짓)
```

## 대소문자, 숫자, 한글, _만 사용 가능
```js
if (/[^a-zA-Z0-9ㄱ-ㅎ가-힣\_]/.test('!@#$')) {
  alert('"대소문자, 숫자, 한글, _"만 사용 가능합니다.');
}

if (/^[a-zA-Z0-9ㄱ-ㅎ가-힣\_]+$/.test('azAZ09ㄱㅎ가힣\')) {
  alert('"대소문자, 숫자, 한글, _"로만 되어 있습니다.');
}
```
* ❕ 가독성 좋게 `/^[a-z|A-Z|0-9|ㄱ-ㅎ|가-힣|\_]+$/` 이렇게 사용한다면 특수문자 `|`도 포함되어 버린다. 

## 1%에서 99%까지만 사용 가능
```js
/^[1-9][0-9]?\%$/.test('99%')
```

## 문자열에서 숫자만 뽑기
```js
'a1b2c3'.replace(/[^0-9]/g, '')
```

# Highlight (하이라이트)
```html
<script>
const enterToBr = function(text) {
  return text.replace(/(?:\\ r\n|\r|\n)/g, '<br>');
};
const highlightApply = function(originalText, highlightText) {
  try {
    highlightText = highlightText.replace(new RegExp('\\\\', 'g'), '\\\\');
    for (const specialCharacter of '$^*()+[]|/?') {
      highlightText = highlightText.replace(new RegExp('\\' + specialCharacter, 'g'), '\\$&');
    }
    originalText = originalText.replace(new RegExp(`${highlightText}`, 'gi'), '<span style="color: orange;">$&</span>');
    originalText = enterToBr(originalText);
  } catch(error) {
    console.error(error);
  }
  return originalText;
}
const change = function() {
  const originalText = document.getElementById('originalText').value;
  const highlightText = document.getElementById('highlightText').value;
  document.getElementById('highlight').innerHTML = highlightApply(originalText, highlightText);
}
</script>
<textarea id="originalText">`~!@#$%^&*()-=_+[]{}\|;':",./<>?</textarea>
<textarea id="highlightText"></textarea>
<button onclick="change();">Change</button>
<div id="highlight"></div>
```
