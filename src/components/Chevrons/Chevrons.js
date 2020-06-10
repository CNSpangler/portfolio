import React from 'react';

const Chevrons = ({background = "blue"}) => {
  const handleClick = () => {
    document.getElementById('chev1').style.cssText = 'display: hidden';
  }

  return (    
    <div className="chevron-container">
      <div className="chevron" id="chev1">
        <div className="chevron-inner"></div>
      </div>

      <div className="chevron" id="chev2">
        <div className="chevron-inner"></div>
      </div>

      <div className="chevron" id="chev3">
        <div className="chevron-inner">
          <div className="chevron-content"></div>
        </div>
      </div>

      <div className="chevron" id="chev4">
        <div className="chevron-inner">
          <div className="chevron-content">Hi, I'm Chelsea (she/her). I build useful apps that solve real-world problems. I am currently looking for work in/near Portland OR, or remotely.</div>
        </div>
      </div>

      <div className="chevron" id="chev6">
        <div className="chevron-inner"></div>
      </div>
    </div>
  )
};

export default Chevrons;
