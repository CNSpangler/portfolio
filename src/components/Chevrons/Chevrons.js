import React from 'react';
import Accordion from '../Accordion/Accordion';

const Chevrons = () => {
  return (
    <>  
    <Accordion 
      title="test"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin"
    />
      <div className="chevron-container">
        <div className="chevron" id="chev1">
          <div className="chevron-inner"></div>
        </div>

        <div className="chevron" id="chev2">
          <div className="chevron-inner"></div>
        </div>

        <div className="chevron" id="chev3">
          <div className="chevron-inner">
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
    </>
  )
};

export default Chevrons;
