import React from 'react';
import { Link } from 'react-router-dom';
import * as CSSModule from './Header.module.scss';

const Header: React.FC = () => (
  <header id="Header">
    <div className="row">
      <div className="col-3">
        <div className={CSSModule.headerMenu}>
          <Link to="/">Users</Link>
        </div>
      </div>
      <div className="col-3">
        <div className={CSSModule.headerMenu}>
          <Link to="/messages">Messages</Link>
        </div>
      </div>
      <div className="col-3">
        <div className={CSSModule.headerMenu}>
          <Link to="/relations">Relations</Link>
        </div>
      </div>
      <div className="col-3">
        <div className={CSSModule.headerMenu}>
          <Link to="/mypage">MyPage</Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
