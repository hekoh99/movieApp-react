import React from 'react';

function Movie(i) { //매개변수 i는 객체. 
  return <h3>my favorite director : {i.fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Movie fav="chanwookPark" /> 
      <Movie fav="junhoBong" />
    </div>
    );
}//필요한 변수를 객체에 담아 컴포넌트로 전달 (fav)

export default App;
