import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = React.useState([]);

  // asyncは非同期の処理を実行するときに用いる。非同期関数を使う目印の役割。
  const onSearchSubmit = async (term) => {
    // awaitとすることで、非同期処理の中で同期処理のように振る舞うことができる。
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    setImages(response.data.results);
  };

  return (
    <div className="App">
      <Header>
        {/* 下記がchildrenとprops。propsはchildrenに引数を与えるためのもの */}
        <Search onSearchSubmit={onSearchSubmit}/>
      </Header>
      <div>
        <ImageList images={images}/>
      </div>
    </div>
  );
}

export default App;
