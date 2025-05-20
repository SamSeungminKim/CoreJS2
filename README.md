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

### ex4_06
```
[콜백 함수 내부에서의 this]
- click 시 콘솔에 찍히는 this는 button#a PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …} 로 나옴
```

### ex4_07
```
[메서드를 콜백 함수로 전달한 경우]
- obj의 method로 호출한 경우 this는 ojb이고,
- forEach 함수의 콜백 함수로 전달한 경우, this는 전역 객체(window)가 됨
```

### ex4_08
```
[콜백 함수 내부의 this에 다른 값을 바인딩 하는 방법(1) - 전통적인 방식]
- 객채의 메서드를 콜백 함수로 전달하면 해당 개체를 this로 바라볼 수 없으므로,
- obj1.func 메서드 내부에서 self 변수에 this를 담아 활용.
```