import React from 'react';

function HeaderComponent(props){

  const {homePath, logoTitle, imgSrc, imgAlt, subMenu1, subMenu2, subMenu3, subMenu4} = props;

  // 상태관리 React.useState()
  const [addClass, setAddClass] = React.useState({
    addClass1: false,
    addClass2: false,
    addClass3: false,
    addClass4: false,
  });

  // addClass 상태 관리 객체의 속성을 비구조화
  const {addClass1, addClass2, addClass3, addClass4} = addClass;

  // 상태 변경 이벤트
  const onMouseEnter1=()=>{
    setAddClass({
      addClass1: true,
      addClass2: false,
      addClass3: false,
      addClass4: false
    })
  }
  const onMouseEnter2=()=>{
    setAddClass({
      addClass1: false,
      addClass2: true,
      addClass3: false,
      addClass4: false
    })
  }
  const onMouseEnter3=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: true,
      addClass4: false
    })
  }
  const onMouseEnter4=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: true
    })
  }

  // 마우스가 nav를 떠나면 addClass를 false로 상태 변경
  const onMouseLeaveAddClass=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: false
    })
  }

  return(
    <header id="header">
      <div className="left">
        <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt} /></a></h1>
      </div>
      <div className="right">
        <nav id="nav" onMouseLeave={onMouseLeaveAddClass}>
          <ul>
            <li>
              <a onMouseEnter={onMouseEnter1} href="!#" className={`main-btn ${addClass1 && 'on'}`} title="탑">탑</a>
              <div className={`sub sub1 ${addClass1 && 'on'}`}>
                <ul>
                  { // JSX는 중괄호 안에 자바스크립트 코딩을 한다. 아니라면 return문 위에다가
                    subMenu1.map((item, idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li>
              <a onMouseEnter={onMouseEnter2} href="!#" className={`main-btn ${addClass2 && 'on'}`} title="아우터">아우터</a>
              <div className={`sub sub2 ${addClass2 && 'on'}`}>
                <ul>
                  {
                    subMenu2.map((item, idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>              
            </li>
            <li>
              <a onMouseEnter={onMouseEnter3} href="!#" className={`main-btn ${addClass3 && 'on'}`} title="팬츠">팬츠</a>
              <div className={`sub sub3 ${addClass3 && 'on'}`}>
                <ul>
                  {
                    subMenu3.map((item, idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>                
            </li>
            <li>
              <a onMouseEnter={onMouseEnter4} href="!#" className={`main-btn ${addClass4 && 'on'}`} title="악세서리">악세서리</a>
              <div className={`sub sub4 ${addClass4 && 'on'}`}>
                <ul>
                  {
                    subMenu4.map((item, idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>  
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// HeaderComponent 안에서 사용하는 모든 변수 -> Default Props (=기본 Props) 설정
HeaderComponent.defaultProps = {
  logoTitle: 'JUST쇼핑몰',
  homePath: './index.html',
  imgSrc: './images/logo.png',
  imgAlt: 'Logo Image',

  subMenu1 : ['블라우스', '티', '셔츠', '니트'],
  subMenu2 : ['자켓', '코트', '가디건', '머플러'],
  subMenu3 : ['청바지', '짧은바지', '긴바지', '레깅스'],
  subMenu4 : ['귀고리', '목걸이', '반지', '팔찌']
}

export default HeaderComponent;