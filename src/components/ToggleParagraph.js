import React, { useState } from 'react';

function ToggleParagraph(){
const [isVisible, setIsVisible] = useState(false);

const handleClick = () => {
    setIsVisible(!isVisible);
}
  return(
    <div id="main">
        <button id='click' onClick={handleClick}>
          {isVisible ?  'Hide Paragraph' : 'Show Paragraph' }
          {isVisible && <p id='para'>"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy".</p>}
        </button>
    </div>
  )
}


export default ToggleParagraph;