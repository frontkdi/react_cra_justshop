// 1. 컴포넌트
function WrapComponent(){

  // modal 상태 관리 - 초기값 false(안보임)
  const [show, setShow] = React.useState(false);

  // modal 부모 컴포넌트에서 상태변경 함수를 만든다
  // 그리고 자식 컴포넌트에게 Props로 함수를 내려주고 버튼 클릭 이벤트로 상태변경 함수를 실행한다

  // modal 열기
  const modalOpen=()=>{
    setShow(true);
  }

  // modal 닫기
  const modalClose=()=>{
    setShow(false);
  }

  return(
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/>
      <FooterComponent/>
      {
        show && <ModalComponent modalClose={modalClose}/>
      }
    </div>
  );
}
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
                  <a onMouseEnter={onMouseEnter1} href="#" className={`main-btn ${addClass1 && 'on'}`} title="탑">탑</a>
                  <div className={`sub sub1 ${addClass1 && 'on'}`}>
                    <ul>
                      { // JSX는 중괄호 안에 자바스크립트 코딩을 한다. 아니라면 return문 위에다가
                        subMenu1.map((item, idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>
                <li>
                  <a onMouseEnter={onMouseEnter2} href="#" className={`main-btn ${addClass2 && 'on'}`} title="아우터">아우터</a>
                  <div className={`sub sub2 ${addClass2 && 'on'}`}>
                    <ul>
                      {
                        subMenu2.map((item, idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>              
                </li>
                <li>
                  <a onMouseEnter={onMouseEnter3} href="#" className={`main-btn ${addClass3 && 'on'}`} title="팬츠">팬츠</a>
                  <div className={`sub sub3 ${addClass3 && 'on'}`}>
                    <ul>
                      {
                        subMenu3.map((item, idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                          )
                        })
                      }
                    </ul>
                  </div>                
                </li>
                <li>
                  <a onMouseEnter={onMouseEnter4} href="#" className={`main-btn ${addClass4 && 'on'}`} title="악세서리">악세서리</a>
                  <div className={`sub sub4 ${addClass4 && 'on'}`}>
                    <ul>
                      {
                        subMenu4.map((item, idx)=>{
                          return(
                            <li key={idx}><a href="#" title={item}>{item}</a></li>
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
    }

    // HeaderComponent 안에서 사용하는 모든 변수 -> Default Props (=기본 Props) 설정
    HeaderComponent.defaultProps = {
      logoTitle: 'JUST쇼핑몰',
      homePath: './index.html',
      imgSrc: './images/logo.png',
      imgAlt: 'Logo Image',
      /*       
      subMenu: [
        {subMenu1 : '블라우스', '티', '셔츠', '니트'},
        {subMenu2 : '자켓', '코트', '가디건', '머플러'},
        {subMenu3 : '청바지', '짧은바지', '긴바지', '레깅스'},
        {subMenu4 : '귀고리', '목걸이', '반지', '팔찌'}
      ], 
      */
      subMenu1 : ['블라우스', '티', '셔츠', '니트'],
      subMenu2 : ['자켓', '코트', '가디건', '머플러'],
      subMenu3 : ['청바지', '짧은바지', '긴바지', '레깅스'],
      subMenu4 : ['귀고리', '목걸이', '반지', '팔찌']
    }

    function MainComponent({modalOpen}){
      return(
        <main id="main">
          <Section1Component/>
          <Section2Component modalOpen={modalOpen}/>
        </main>
      );
    }

        function Section1Component(){
          return(
            <section id="section1">
              <div className="slide-container">
                <div className="slide-view">
                  <ul className="slide-wrap">
                    <li className="slide slide3">
                      <img src="./images/img3.jpg" alt="" />
                      <h2>장바구니 할인 이벤트</h2>
                    </li>              
                    <li className="slide slide1">
                      <img src="./images/img1.jpg" alt="" />
                      <h2>쇼핑몰 홈페이지 새단장</h2>
                    </li>
                    <li className="slide slide2">
                      <img src="./images/img2.jpg" alt="" />
                      <h2>이달의 쇼핑 이벤트</h2>
                    </li>
                    <li className="slide slide3">
                      <img src="./images/img3.jpg" alt="" />
                      <h2>장바구니 할인 이벤트</h2>
                    </li>
                    <li className="slide slide1">
                      <img src="./images/img1.jpg" alt="" />
                      <h2>쇼핑몰 홈페이지 새단장</h2>
                    </li>              
                  </ul>
                </div>
              </div>
            </section>
          );
        }

        function Section2Component({notice, gallery, modalOpen}){

          // 공지사항, 갤러리 상태 관리 - 초기값 false
          const [show, setShow] = React.useState(false);

          const onClickNoticeBtnEvent=(e)=>{
            e.preventDefault();
            setShow(false);
          }

          const onClickGalleryBtnEvent=(e)=>{
            e.preventDefault();
            setShow(true);
          }

          // 공지사항 첫번째 목록 클릭 시 모달 오픈 이벤트
          const onClickModalOpen=(e)=>{
            e.preventDefault();
            // 최상위 위치(WrapComponent)의 모달 열기 함수 실행하기
            modalOpen();
          }

          return(
            <section id="section2">
              <div className="left">
                <button onClick={onClickNoticeBtnEvent} className={`notice-btn ${show && 'on'}`}>공지사항</button>
                <button onClick={onClickGalleryBtnEvent} className={`gallery-btn ${show && 'on'}`}>갤러리</button>
                <div className={`notice-box ${show && 'on'}`}>
                    <div className="gap">
                      <ul>
                        {
                          notice.map((item, idx)=>{
                            return(
                              <li key={idx}><a href="#" onClick={idx === 0 && onClickModalOpen} className={idx === 0 && 'modal-btn'}>{item.공지목록}</a><span>{item.날짜}</span></li>
                              // <li key={idx}><a href="#" className={idx === 0 ? 'modal-btn' : ''}>{item.공지목록}</a><span>{item.날짜}</span></li>
                            )
                          })
                        }
                        
                        {/* 첫번째 줄만 클래스 추가 */}
                        {/* 
                        <li><a href="#" className="modal-btn">신규회원 대상 할인 이벤트 안내</a><span>2020.11.23</span></li>
                        <li><a href="#">S/S 시즌 신규 의류 신상품 안내</a><span>2020.11.12</span></li>
                        <li><a href="#">반품/환불 규정에 대해 알려드립니다</a><span>2020.11.07</span></li>
                        <li><a href="#">3월 재입고 품목을 알려드립니다</a><span>2020.10.28</span></li> 
                        */}
                      </ul>
                    </div>
                </div>
                <div className={`gallery-box ${show && 'on'}`}>
                  <div className="gap">
                    <ul>
                      {
                        gallery.map((item, idx)=>{
                          return(
                            <li key={idx}>
                              <div className="col-gap"><a href="#" title={item.title}><img src={item.imgSrc} alt="" /></a></div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="title"><h2 stlye={{color:'rgb(95,0,128)', fontSize:'16px', fontWeight:'500'}}>BANNER LINK</h2></div>
                <div className="img-box">
                  <a href="#" title="banner"><img src="./images/banner.jpg" alt="" /></a>
                </div>
              </div>
              <div className="right">
                <div className="title"><h2 stlye={{color:'rgb(95,0,128)', fontSize:'16px', fontWeight:'500'}}>DIRECT LINK</h2></div>
                <div className="img-box">
                  <a href="#" title="direct"><img src="./images/direct.jpg" alt="" /></a>
                </div>
              </div>  
            </section>
          );
        }

        // Default Props 설정
        Section2Component.defaultProps = {
          notice: [
            {공지목록: "신규회원 대상 할인 이벤트 안내", 날짜: "2020.11.23"},
            {공지목록: "S/S 시즌 신규 의류 신상품 안내", 날짜: "2020.11.12"},
            {공지목록: "반품/환불 규정에 대해 알려드립니다", 날짜: "2020.11.07"},
            {공지목록: "3월 재입고 품목을 알려드립니다", 날짜: "2020.10.28"}
          ],
          gallery: [
            {title: "img1", imgSrc: "./images/icon1.jpg"},
            {title: "img2", imgSrc: "./images/icon2.jpg"},
            {title: "img3", imgSrc: "./images/icon3.jpg"}
          ]
        }

    function FooterComponent(){
      return(
        <footer id="footer">
          <div className="left">
            <h1><a href="./index.html" title="JUST쇼핑몰"><img src="./images/footerLogo.png" alt="logo" /></a></h1>
          </div>
          <div className="center">
            <div className="row1">
              <span><a href="#" title="개인정보처리방침">개인정보처리방침</a></span>
              <span><i>|</i></span>
              <span><a href="#" title="영상정보처리기기운영방침">영상정보처리기기운영방침</a></span>
              <span><i>|</i></span>
              <span><a href="#" title="오시는 길">오시는 길</a></span>  
            </div>
            <div className="row2">
              <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
            </div>
          </div>
          <div className="right">
            <span><a href="#" title="페이스북"><img src="./images/sns1.jpg" alt="" /></a></span>
            <span><a href="#" title="트윗터"><img src="./images/sns2.jpg" alt="" /></a></span>
            <span><a href="#" title="인스타그램"><img src="./images/sns3.jpg" alt="" /></a></span>
          </div>
        </footer>
      );
    }

    function ModalComponent({modalClose}){

      // 닫기 버튼 클릭 시 모달 닫기 이벤트
      const onClickModalClose=(e)=>{
        e.preventDefault();
        modalClose();
      }

      return(
        <div id="modal">
          <div className="modal-wrap">
            <div className="modal-container">
              <div className="title">
                <h2>신규회원 대상 이벤트 안내</h2>
              </div>
              <div className="content">
                <ol>
                  <li>
                      즐거운 쇼핑 환경을 위해 항상 노력하는 JUST 쇼핑몰입니다.
                  </li>
                  <li>
                      고객님들께 한 단계 더 나아가 보답하는 ON쇼핑몰이 되고자신규회원 대상 10% 할인 이벤트를 실시하고 있습니다.
                  </li>
                  <li>
                      웹과 모바일에서 모두 이용 가능하며, 수준 높은 서비스를 위해 앞으로도 꾸준히 노력할 것을 약속드립니다.              
                      <br />
                      <br />
                      <img src="./images/icon1.jpg" alt="" />
                  </li>
                </ol>
              </div>
              <div className="button-box">
                <button onClick={onClickModalClose} className="modal-close">닫기</button>
              </div>      
            </div>      
          </div>
        </div>
      );
    }

// 2. 리액트 돔은 루트 돔 컨테이너(#root)와 컴포넌트 연동
ReactDOM.render(
  <WrapComponent/>,
  document.getElementById('root')
);