### ex4_01
```
[콜백 함수 예제(1-1) setInterval]
- 콜백 함수는 다른 코드의 인자로 넘겨주는 함수
- setInterval func에 넘겨준 콜백 함수는 매 delay(ms)마다 실행 
```

### ex4_02
```
[콜백 함수 예제(1-2) setInterval]
- 콜백 함수의 제어권을 넘겨 받은 코드는 콜백 함수 호출 시점에 대한 제어권을 가짐
```

### ex4_03
```
[콜백 함수 예제(2-1) Array.prototype.map]
- map 메서드는 첫번째 인자로 call back 함수를 받고, call back 함수의 인자(argument)는 map 이 넣어 줌.
- map 메서드는 arrary의 element를 하나씩 순서대로 넣으면서 call back 함수를 실행하고 new array로 return 시켜 줌.
```

### ex4_04
```
[콜백 함수 예제(2-2) Array.prototype.map - 인자의 순서를 임으로 바꾸어 사용한 경우]
- 인자의 이름 아니라 순서에 의해서만 각각을 구분하고 인식함.
```

### ex4_05
```
[콜백 함수 예제(2-3) Array.prototype.map - 구현]
- Array.prototype.map 함수를 직접 구현.
- ex4_04 예제에서 인자의 순서를 바꾸었을 때 직접 구현한 map 함수를 역으로 수정하여 정상 동작 하도록 Test 해 봄.
```
