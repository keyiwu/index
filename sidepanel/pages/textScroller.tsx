import React, { useEffect, useState } from 'react';  
import '~style/MarqueeText.scss'; // 导入 CSS 样式  

const MarqueeText = ({ text }) => {  
  const [displayText, setDisplayText] = useState(text); // 初始化显示的文本  

  // 监听外部传入的文本变化  
  useEffect(() => {  
    setDisplayText(text);  
  }, [text]);  

  return (  
    <div className="marquee-container">  
      <div className="marquee-text">{displayText}</div>  
    </div>  
  );  
};  

export default MarqueeText;