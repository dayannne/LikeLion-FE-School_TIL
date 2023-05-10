import DisplayMood from './Components/DisplayMood/DisplayMood';
import MenuList from './Components/MenuList/MenuList';
import { useState } from 'react';

function App() {
  // 현재 기분이 저장된 currentMood 변수
  // 현재 기분을 바꿀 수 있는 setCurrentMood 함수
  const [currentMood, setCurrentMood] = useState('');
  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
