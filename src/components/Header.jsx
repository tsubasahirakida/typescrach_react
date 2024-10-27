import * as React from 'react';
import './Header.css';

//// クラスコンポーネント
// class Header extends React.Component {
//   render() {
//     return (
//       <>
//         <div className="Header">
//           <span className="Header__Logo">
//             TypeScrash
//           </span>
//         </div>
//       </>
//     );
//   }
// };

// 関数コンポーネント
// childrenはApp.jsから渡される入れ子のタグ
const Header = ({ children }) => {
  return (
      <div className="Header">
        <span className="Header__Logo">
          TypeScrash
        </span>
        {children}
      </div>
  );
};

export default Header;
