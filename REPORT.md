# Redux

## Redux 등장배경

* facebook에서 react와 함께 소개한 Flux 아키텍쳐를 구현하기 위한 라이브러리
* 컴포넌트 간 state 데이터를 효율적으로 관리하기 위해 등장
* Flux 와 MVC 패턴의 차이
* MVC 패턴은 앱의 규모가 커지면 그에따라 Model과 View가 늘어나기에 프로젝트가 복잡해진다.
* Model과 View가 1:1관계가 아니므로 데이터 관리도 어렵다는 단점이 있다.
* Flux 특징은 http://2dubbing.tistory.com/26 [flux 아키텍쳐란?]  포스팅 참고
* Redux는 facebook에서 만든 라이브러리는 아님.
* react를 공부하고 간단한 프로젝트를 하다보면 state 데이터 관리에 신경쓰게 된다.
* 기존 앱에 기능이 추가되고, 그에따라 컴포넌트가 추가 되다보면 state 데이터 관리가 힘들어진다.

## Redux의 특징

* 단 하나의 store만 존재한다. (flux는 여러개의 store 사용)
* store에 있는 state는 Read-only 속성이며, state를 핸들링 하려면 반드시 action을 통해서…
* reducer는 pure function 해야 한다. (action객체를 처리하는 함수를 reducer라 부름)
* pure function이라 함은, 함수 내부로직에 네트워크 통신이나 데이터베이스 접근 등… 행위가 이루어지지 않음을 뜻함.)
* reducer는 action에서 받은 정보를 어떻게 업데이트 할지만 정의.
* reducer는 여러개 존재가능.


## Action 이란?

* '작업에 대한 정보’ 를 지니고있는 객체
  * ex) 값을 증가시키기, 값을 감소시키기, 새로운 색상 설정하기….

## Reducer 란?

* ‘변화'를 일으키는 함수.
* pure해야 한다. (비동기 작업, 인수 변경 등… 행위가 존재하면 안 됨.)
* '이전 상태'와 ‘액션'을 받아서 '다음 상태'를 반환한다.
* 이전 상태의 데이터는 immutable 해야 한다.


## Store 란?

* 어플리케이션의 현재상태를 지니고 있음
* redux에서 Store는 단 한개만 존재
* redux의 createStore() 를 사용하여 Store 생성
<pre>ex) import { createStore } ‘redux’;
      const store = createStore(reducers);
</pre>
* reducer에서 전달받은 action을 redux의 dispatch() 함수를 사용하여 store로 전달
* 현재 store의 state 상태를 알고 싶을 땐, redux의 getState() 를 사용
* store의 state상태가 바뀔때 실행할 함수를 등록하려면 redux의 subscribe(listener) 사용
* redux의 unsubscribe() 함수를 통해 subscribe()에 등록한 콜백함수 구독을 취소

## react-redux 란?

* view 레이어 바인딩 도구
* Provider는 컴포넌트에서 redux를 사용하도록 제공하는 컴포넌트
* connect 함수는 컴포넌트를 redux에 연결하는 또다른 함수를 반환한다.


출처: http://2dubbing.tistory.com/38 [비실이네]
