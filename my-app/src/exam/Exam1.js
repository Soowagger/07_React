// Component 예제 1

import { Component } from "react";

/*

* Component :
- React 앱의 구성 요소로, 재사용 가능
- UI를 작은 조각으로 나누어 관리
- 컴포넌트명은 보통 대문자로 작성

1. 클래스형 컴포넌트 : React.Component 클래스를 상속받아 구현
* 장점 
- 생명주기 메서드 제공 : componentDidMount, componentDidUpdate, componentWillUnmount...
    -> 컴포넌트의 생명주기 동안 특정 동작을 쉽게 구현할 수 있음

* 단점
- 복잡성 : 문법이 복잡하고, this 키워드를 자주 사용해야 하므로 코드를 작성하고 이해하기 어려울 수 있음
- 함수형 컴포넌트에 비해서 코드 길이가 길다.
- Hooks 도입 이후 사용 추세 감소



2. 함수형 컴포넌트 : 함수 형태로 구현
* 장점 
- 간결함 : 코드 길이 감소, this 키워드 사용할 필요가 없기 때문에 이해하기 쉽다.
- Hooks 사용 가능 : Hooks를 사용하여 함수형 컴포넌트에서도 
                    상태 관리와 생명주기 메서드와 유사한 기능을 구현할 수 있음
- 성능 최적화 : 클래스형 컴포넌트에 비해 메모리 사용이 더 적고, 성능이 더 좋음

* 단점
- Hooks를 사용한 생명주기 관리가 클래스형 컴포넌트의 메서드보다 직관적이지 않을 수 있음(러닝커브 있을 수 있음)
- 레거시 코드 호환이 떨어진다(기존 클래스형 컴포넌트와 호환이 어려울 수 있음)


* state와 props
React 컴포넌트는 두 종류의 데이터를 다룸
1. props(속성) : 부모 컴포넌트로부터 전달되는 읽기 전용 데이터
2. state(상태) : 컴포넌트의 내부에서 관리되며, 컴포넌트의 동작 및 UI 렌더링을 제어하는데 사용
                (내부 상태를 관리하는데 사용되는 데이터)

*/

// 1. 클래스형 컴포넌트
class Exam1 extends Component { // 컴포넌트의  선언부
    
    // 컴포넌트 정의

    // 필드

    // 생성자
    constructor(prop) { // prop : 부모에게 받은 속성
        super(prop);
        this.state = { count : 0 }; // state : 컴포넌트 내부 상태 관리에 사용되는 데이터
        // count는 Exam1이라는 컴포넌트의 내부 상태 중 하나의 데이터이며,
        // 초기값이 0으로 설정됨.

    }

    /*
    
    ************************** 상태state)와 변수(variable) **************************

    React에서 상태(state)와 변수(variable)는 둘 다 데이터 저장과 관련되어 있지만, 
    각기 다른 역할과 사용방식을 가진다.

    - 상태(state)는 React 컴포넌트에서 데이터가 저장되는 곳으로, 
        [중요!] 상태값이 변경될 때 마다 컴포넌트가 다시 렌더링된다.

    - 변수(variable)는 컴포넌트 내에서 상태가 아닌 다른 데이터를 저장하기 위해 사용되므로,
        변수값이 변경되어도 컴포넌트는 다시 렌더링되지 않는다.
    
    */



    // 메서드(함수)
    handleClick = () => { // handleClick이라는 이름의 함수를 정의함
        this.setState({ count : this.state.count + 1 });
        // 이 컴포넌트의 상태(state)중 count를 현재 상태값에서 +1 한 값으로 상태를 다시 세팅(변경)

    }

    // render 함수(클래스형 컴포넌트에서 필수 구문)
    render() {
        // 클래스형 컴포넌트에서 render 함수 안에 return 구문을 필수로 작성해야 한다.
        // return에는 무엇을 렌더링할지 작성하면 됨.
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleClick}>증가</button>
            </div>
        );
    }

}

export default Exam1; // 컴포넌트 내보내기
// == 해당 Exam.js 파일에서 기본적으로 내보내는 컴포넌트의 이름은 Exam1이다.

