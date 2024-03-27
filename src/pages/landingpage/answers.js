import React, { useState } from 'react';
import '../../styles/landingpage/answers.css'
import questionImage from '../../assets/questions.jpg'
const Answers = () => {
const [selected,setSelected]=useState(0)
const toggle =(i)=>{

  if(selected===i){
    setSelected(null)
  }
  else{
    setSelected(i)
  }


}

  const data =  [
    {
      question: 'How Our Team Serve You Well',
      answer: 'Order beautiful premium quality live plants online for your home garden',
    },
    {
      question: 'Fast Accurate Plant Delivery',
      answer: 'We ensure fast and accurate plant delivery to your doorstep.',
    },
    {
      question: 'Plant Freshness come First',
      answer: 'We prioritize the freshness of our plants to ensure your satisfaction.',
    },
  ];

  return (
    <div className='answers'>
      <div className='answers-container'>
        <div className='answers-text'>
          <h1>You Have Questions</h1>
          <h1>We Have Answers</h1>   
          <div className='accordion-wrapper'>
            <div className='line'></div>
            {data.map((item, index) => (
              
              <div className='accordion' key={index}>

                <div className='title' onClick={()=>{toggle(index)}}>
                  <h2>{item.question}</h2>
                  <span>{selected === index ? '-' : '+'}</span>
                </div>
                <div className={selected === index ? 'content show' : 'content'}>
                  <p>{item.answer}</p>
                </div>
                <div className='line'></div>

              </div>
            ))}

          </div>
        </div>
        <div className='answers-image'>
          <img src={questionImage}/>
        </div>
      </div>
    </div>
  );
};

export default Answers;
