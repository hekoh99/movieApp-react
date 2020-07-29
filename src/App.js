import React from 'react';

function Movie(i) { //매개변수 i는 객체. 
return (
  <div>
    <h2>my favorite movie : {i.name} by {i.director}</h2>
    <img src={i.poster} alt={i.name} />
  </div>
  );
}

const movieList = [
  {
    id : 1, //컴포넌트의 key값으로 전달하기 위해 id를 설정. html 태그의 id와 비슷?? (각 컴포넌트 요소가 유일함을 알려주기 위해)
    name : "Thirst",
    director : "ParkChanWook",
    poster : 'http://imgnews.naver.net/image/038/2009/03/30/ju200903291936450.jpg',
  },
  {
    id : 2,
    name : "parasite",
    director : "BongJoonHo",
    poster : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMDAxMTdfNTIg%2FMDAxNTc5MjQ5NDg1Mjg2.SxGQtv-RTufAB42ndTslTK_g67NvCAI0Bh1PE6HVo0Yg.mBzMN60NQFwOWdgdAsK2pXofhX7C55fuJBZ9atrUQ1Ig.JPEG%2FIQ98PY2P_s0UhlYNO2EBX7Pj6R-M.jpg&type=b400',
  },
  {
    id : 3,
    name : "Alice In Earnestland",
    director : 'AnGookJin',
    poster : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5348%2F2015%2F08%2F18%2F2015081812425741783_2_99_20150818143206.jpg&type=b400',
  }
];

function App() {
  console.log(movieList.map((movie) => {
    return <Movie key = {movie.id} name = {movie.name} director = {movie.director} poster = {movie.poster} />;
  }))
  return (
    <div>
      {movieList.map((movie) => {
        return <Movie key = {movie.id} name = {movie.name} director = {movie.director} poster = {movie.poster} />;
      })} 
    </div>
    );
} //필요한 변수를 객체에 담아 컴포넌트로 전달 (name, poster 등등등)

export default App;
