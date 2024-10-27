import React from 'react';

//// クラスコンポーネント
// class ImageCard extends React.Component {
//   // createRefは現在非推奨。子コンポーネントの動作をきっかけに、親コンポーネントから再表示したい場合。
//   constructor(props) {
//     super(props);
//     this.state = { spans: 0 };
//     this.imageRef = React.createRef();
//   }

//   // componentDidMountは、コンポーネントがレンダーされる際に呼び出されるメソッド
//   componentDidMount() {
//     this.imageRef.current.addEventListener('load', this.setSpans);
//   }

//   // 画像の高さに応じてspanの計算を行う。
//   setSpans = () => {
//     const height = this.imageRef.current.clientHeight;
//     const spans = Math.ceil(height / 10);
//     this.setState({ spans });
//   };

//   render() {
//     const { description, urls } = this.props.image;

//     return (
//       <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
//         <img ref={this.imageRef} alt={description} src={urls.regular} />
//       </div>
//     );
//   }
// }

// 関数コンポーネント
const ImageCard = (props) => {
  const [spans, setSpans] = React.useState(0);
  const imageRef = React.useRef(null);

  const calculateSpans = () => {
    const height = imageRef.current.clientHeight;
    setSpans(Math.ceil(height / 10));
  };

  // useEffectもレンダーされる際に動く関数だが、componentDidMountとは異なる。
  React.useEffect(() => {
    imageRef.current.addEventListener('load', calculateSpans);
  });

  const { description, urls } = props.image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
