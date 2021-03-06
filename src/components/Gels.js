import React from 'react';

function Gels(props){
    return (
        <div className={`gels ${props.color} ${props.engagement}`}>
          <div className="outermost">
            <div className="outer">
              <div className="inner">
                <div className="innermost">
                  { props.img && <img src={props.img.src} alt={props.img.alt} /> }
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Gels;