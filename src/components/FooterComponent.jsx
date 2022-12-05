import React from 'react';

function FooterComponent(){
  return(
    <footer id="footer">
      <div className="left">
        <h1><a href="./index.html" title="JUST쇼핑몰"><img src="./images/footerLogo.png" alt="logo" /></a></h1>
      </div>
      <div className="center">
        <div className="row1">
          <span><a href="!#" title="개인정보처리방침">개인정보처리방침</a></span>
          <span><i>|</i></span>
          <span><a href="!#" title="영상정보처리기기운영방침">영상정보처리기기운영방침</a></span>
          <span><i>|</i></span>
          <span><a href="!#" title="오시는 길">오시는 길</a></span>  
        </div>
        <div className="row2">
          <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
        </div>
      </div>
      <div className="right">
        <span><a href="!#" title="페이스북"><img src="./images/sns1.jpg" alt="" /></a></span>
        <span><a href="!#" title="트윗터"><img src="./images/sns2.jpg" alt="" /></a></span>
        <span><a href="!#" title="인스타그램"><img src="./images/sns3.jpg" alt="" /></a></span>
      </div>
    </footer>
  );
}

export default FooterComponent;