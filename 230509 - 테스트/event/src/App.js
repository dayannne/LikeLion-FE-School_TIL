import React, { useState } from 'react';
import Login from './components/Login/Login';
import Homepage from './components/Login/Homepage';
import Modal from './components/Modal/Modal';

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234',
  };

  const [login, setLogin] = useState(false);
  const [close, setClose] = useState(false);

  const handleCloseModal = () => {
    setClose(true);
  };

  return (
    <>
      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      {!close && (
        <Modal>
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam. Pariatur id
            blanditiis veniam ipsam? Natus aperiam, blanditiis nam labore consequuntur officiis a
            debitis eos consequatur aspernatur officia! Quod, nisi!
          </p>
          <a href="#">더 보기</a>
          <button onClick={handleCloseModal}>닫기</button>
        </Modal>
      )}
    </>
  );
}

export default App;
