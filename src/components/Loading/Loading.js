import React, { Component } from "react";
import './_loading.scss'
class Loading extends Component {
  render() {
    return (
      <div className="background">
        <div className="wrapper">
          
            <div className="spinner">
             
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"> 
                <g id="mintSpinnerLayer_2" data-name="mintSpinnerLayer 2">
                  <g id="mintSpinnerLayer_1-2" data-name="mintSpinnerLayer 1">
                    <path
                      fill="#029f7d"
                      className="cp1"
                      d="M7.56,29.92,1.77,28.16A39.77,39.77,0,0,0,0,39.64H6.05A33.58,33.58,0,0,1,7.56,29.92Z"
                    />
                    <path
                      fill="#ffcf40"
                      className="cp8"
                      d="M22.73,69.24l-3,5.24A40.06,40.06,0,0,0,29.8,78.69l1.5-5.86A34,34,0,0,1,22.73,69.24Z"
                    />
                    <path
                      fill="#ffec85"
                      className="cp7"
                      d="M40,73.95a34.09,34.09,0,0,1-8.68-1.12l-1.5,5.86A40.14,40.14,0,0,0,60,74.64l-3-5.23A34.06,34.06,0,0,1,40,73.95Z"
                    />
                    <path
                      fill="#a4ef55"
                      className="cp9"
                      d="M10.39,56.63l-5.24,3A40.31,40.31,0,0,0,19.71,74.48l3-5.24A34.21,34.21,0,0,1,10.39,56.63Z"
                    />
                 
                    <path
                      fill="#f54662"
                      className="cp6"
                      d="M80,39.64H73.94V40A33.95,33.95,0,0,1,57,69.4l3,5.24A40,40,0,0,0,80,40,3,3,0,0,0,80,39.64Z"
                    />
                    <path
                      fill="#00c872"
                      className="cp10"
                      d="M6,40v-.35H0V40A39.86,39.86,0,0,0,5.16,59.66l5.24-3A33.66,33.66,0,0,1,6,40Z"
                    />
                    <path
                      fill="#057be9"
                      className="cp3"
                      d="M23,10.58,20,5.34A40.15,40.15,0,0,0,5.46,19.8l5.24,3A34,34,0,0,1,23,10.58Z"
                    />
                    <path
                      fill="#bd90fe"
                      className="cp4"
                      d="M45.34.35A41.21,41.21,0,0,0,40,0,39.8,39.8,0,0,0,20,5.35l3,5.24A33.74,33.74,0,0,1,40,6.05a35.64,35.64,0,0,1,4.51.3,34,34,0,0,1,12.2,4.08l3-5.24A39.77,39.77,0,0,0,45.34.35Z"
                    />
                    <path
                      fill="#3ccae8"
                      className="cp2"
                      d="M10.68,22.83l-5.24-3a40.33,40.33,0,0,0-3.69,8.36L7.55,29.9A34.62,34.62,0,0,1,10.68,22.83Z"
                    />
                    <path
                      fill="#7a40da"
                      className="cp5"
                      d="M78.18,28A40.11,40.11,0,0,0,59.71,5.19l-3,5.24A33.92,33.92,0,0,1,73.95,39.66H80A40.28,40.28,0,0,0,78.18,28Z"
                    />
                  </g>
                </g>
              </svg>
              
            </div>
            <p>Loading...</p>
        </div>
      </div>
    );
  }
}

export default Loading;
