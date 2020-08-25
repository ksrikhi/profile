import React from 'react';
import './contectModal.css';


const Modelcard = ({isClose}) => {
    return (
        <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => isClose(false)}>&times;</span>
          <p>Please contect me at mail id : ksrikhi123@gmail.com</p>
        </div>
      
      </div>
    );
};
 
export default Modelcard ;
