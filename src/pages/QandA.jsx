import React from 'react'
import './QandA.css'
import FAQ from '../components/Q&ACard';

const QandA = () => {

    const faqs = [
        {
          title: 'How do UI components improve UX?',
          description:
            'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
        },
        {
          title: 'Common UI component design challenges?',
          description:
            'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
        },
        {
          title: 'Ensuring UI component responsiveness?',
          description:
            'Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
        },
      ];      
  return (
    <div className='qanda-container'>
        <div className='qanda-header'>
            <a className='main-head'>Everything You Need To Know</a>
            <a className='main-tagline'>Everything You Need To Know</a>
        </div>
        <div className='container-qanda'>
            <FAQ faqs={faqs}/>
        </div>

    </div>
  )
}

export default QandA
