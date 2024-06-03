import logo from './logo.svg';
import './App.css';
import Exam1 from './exam/Exam1';
import Exam2 from './exam/Exam2';

// 터미널 Ctrl + Shift + ` 로 열고
// 터미널에서 yarn start 서버 켜기
// 터미널에서 Ctrl + c 서버 끄기


function App() {
  return (
    <div>
      {/* Ctrl + / : jsx 주석 */}
      <Exam1 />
      <Exam2 />
    </div>
  );
}

export default App;
