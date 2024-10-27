import * as React from 'react';
import './Search.css';

const Search = ({ onSearchSubmit }) => {
  // Hooks
  // 第1：termは現在の状態。第2：状態を更新するための関数
  const [term, setTerm] = React.useState('');

  // Enteyキー押下した際のイベント
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className='Search'
        value={term}
        placeholder="検索"
        // アロー関数、e.target.valueで値を取り出し、termの更新をする。
        onChange={e => setTerm(e.target.value)}
      />
    </form>
  );
};

export default Search;
