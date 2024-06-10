// Component 예제 2

import { useState } from "react";

// 함수형 컴포넌트
function Exam2() {

    // 함수형 컴포넌트에서 상태를 사용하는 방법
    const [name, setName] = useState("수민!");
    // userSates : Hooks, 많은 기능을 손쉽게 이용하기 위해 리액트에서 만들어 논 기능 중 하나

    const handleClick = () => { 
        setName("setName 변경")
    }

    return ( // 함수형 컴포넌트는 render() 함수 제외하고 바로 retrun 작성하면 된다.
        <div>
            <h1>Hello, {name}</h1>
            <button onClick={handleClick}>이름 바꾸기</button>
        </div>
    );
}

export default Exam2;