import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import ModalComponent from './ModalComponent';

function WrapComponent(){

  // modal 상태 관리 - 초기값 false(안보임)
  const [show, setShow] = React.useState(false);

  // modal 열기
  const modalOpen=()=>{
    setShow(true);
  }

  // modal 닫기
  const modalClose=()=>{
    setShow(false);
  }

  return (
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/>
      <FooterComponent/>
      {
        show && <ModalComponent modalClose={modalClose}/>
      }
    </div>
  );
};

export default WrapComponent;