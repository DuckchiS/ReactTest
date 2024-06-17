import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집일까?';
  let [글제목, 글제목수정] = useState(['남자 코트 추천', '강남 라멘맛집', '파이썬 독학']); 
  let [title, setTitle] = useState(0);
  let [따봉,따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');
  
  function Click(){
    setModal(!modal);
  }
  return (
    <div className="App">
        <div className="black-nav">
            <h4 style={{color:'aqua',fontSize:'20px'}}>덕치생치 블로그</h4>
        </div>
        {
          글제목.map(function(a, i){
            return(
              <div className="list" key={i}>
              <h4 onClick={()=>{setTitle(i); Click()}}>{글제목[i]}</h4><span onClick={(e)=>{ e.stopPropagation(); 따봉변경(따봉+1)}}>👍</span> {따봉}
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i,1);
                글제목수정(copy);
              }}>글삭제</button>
              </div>
            )
          })
        }
        <textarea onChange={(e)=>{입력값변경(e.target.value)}}></textarea>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목수정(copy);
        }}>글발행</button>
        {
          //삼항연산자 
          //조건식 ? 참일때 실행하는 코드 : 거짓일떄 실행하는 코드
          modal == true ? <Modal title={title} 글제목수정={글제목수정} 글제목={글제목} /> : null
        }
        <h4>{post}</h4>
    </div>
  );
}

function Modal(props){
  return(
    <div className="model" style={props.color}>
    <h4>제목 : {props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{props.글제목수정(['여자 코트 추천', '강남 라멘맛집', '파이썬 독학'])}}>글수정</button>
  </div>
  )
}

export default App;
