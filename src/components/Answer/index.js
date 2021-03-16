import React from 'react'

const Answer = ({ birds }) => {
  console.log(birds)
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
                <p className="instruction" style={{display: "block"}}>
                  <span>Послушайте плеер.</span>
                  <span>Выберите птицу из списка</span>
                </p>
                <div className="card-body" style={{display: "none"}}>
                  <img className="bird-image" src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg"
                       alt="Ворон"/>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h4>Ворон</h4>
                    </li>
                    <li className="list-group-item">
                      <span>Corvus corax</span>
                    </li>
                    <li className="list-group-item">
                      <div className="audio-player">
                        <audio
                            src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
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
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <span className="bird-description" style={{display: "none"}}>Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.</span>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Answer
