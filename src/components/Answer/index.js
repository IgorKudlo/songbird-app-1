import React, { useState, useRef } from 'react';

const Answer = ({ birds, checkAnswer }) => {

  const [firstClick, setFirstClick] = useState(false);
  const [selectBird, setSelectBird] = useState(null);

  const audioRef = useRef(null);

  const birdClickHandler = (bird) => {
    setFirstClick(true);
    setSelectBird(bird);
    checkAnswer(bird.id);

    if (audioRef.current) {
      audioRef.current.load();
    }
  };

  return (
    <div className="row mb2">
      {
        !birds ? (
          <h3>Загрузка ...</h3>
        ) : (
          <>
            <div className="col-md-6">
              <ul className="item-list list-group">
                {
                  birds.map((bird) => {
                    return (
                      <li
                        className="list-group-item"
                        key={bird.id}
                        onClick={() => birdClickHandler(bird)}
                      >
                        <span className="li-btn"/>{bird.name}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="col-md-6">
              <div className="bird-details card">
                {
                  !firstClick ? (
                    <p className="instruction">
                      <span>Послушайте плеер.</span>
                      <span>Выберите птицу из списка</span>
                    </p>
                  ) : (
                    <>
                      <div className="card-body">
                        <img className="bird-image" src={selectBird.image}
                             alt={selectBird.name}/>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <h4>{selectBird.name}</h4>
                          </li>
                          <li className="list-group-item">
                            <span>{selectBird.species}</span>
                          </li>
                          <li className="list-group-item">
                            <div className="audio-player">
                              <audio controls ref={audioRef}>
                                <source src={selectBird.audio} type="audio/mpeg"/>
                              </audio>
                              {/*<audio
                                  src={selectBird.audio}
                                  hidden=""/>
                              <div className="controls">
                                <div className="playback-button">
                                  <svg viewBox="-200 0 1200 1000">
                                    <path fill="#00bc8c"
                                          d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"/>
                                  </svg>
                                </div>
                                <div className="timebar" style={{position: "relative"}}>
                                  <div className="timebar-bar"
                                       style={{background: "linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) 0%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%)"}}/>
                                  <div className="timebar-circle" style={{left: "0%"}}/>
                                  <div className="timebar-time-info">
                                    <div>00:00</div>
                                    <div>00:12</div>
                                  </div>
                                </div>
                              </div>*/}
                            </div>
                          </li>
                        </ul>
                      </div>
                      <span className="bird-description">{selectBird.description}</span>
                  </>
                  )
                }
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Answer
