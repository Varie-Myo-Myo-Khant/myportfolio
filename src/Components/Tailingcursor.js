import React from "react";
import AnimatedCursor from "react-animated-cursor";

function Tailingcursor(){
    return(
        <AnimatedCursor
      innerSize={8}
  outerSize={8}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '1px solid #8892b0'
  }}
  innerStyle={{
    backgroundColor: '#64ffda'
  }}
      
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    )
}

export default Tailingcursor;