import React from 'react'

import logo from '../../logo.svg'
import Pagination from "./Pagination";

const Header = ({ numberQuestion }) => {
  return (
    <div className="header d-flex">
      <div className="top-panel d-flex">
        <div className="logo">
          <img width="200" height="55" src={logo} alt="SongBird"/>
        </div>
        <h5>Score: <span className="score">0</span></h5>
      </div>
      <Pagination numberQuestion={numberQuestion} />
    </div>
  )
}

export default Header
