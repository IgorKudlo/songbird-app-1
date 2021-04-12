import React from 'react'
import {useSelector} from 'react-redux';

import logo from '../../logo.svg'
import Pagination from './Pagination';

const Header = () => {
  const score = useSelector(state => state.score.score)

  return (
    <div className="header d-flex">
      <div className="top-panel d-flex">
        <div className="logo">
          <img width="200" height="55" src={logo} alt="SongBird"/>
        </div>
        <h5>Score: <span className="score">{score}</span></h5>
      </div>
      <Pagination />
    </div>
  )
}

export default Header
