import React from 'react';
import '../Faq.scss';

function Accordian({ title, children }) {
    const [isOpen, setOpen] = React.useState(false);
  return (
    <div>
        <div className='contend-box'>
            <h5 onClick={() => setOpen(!isOpen)} className={`accordion-title ${isOpen ? "open" : ""}`}>{title}</h5>
            <p className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>{children}</p>
        </div>
    </div>
  )
}

export default Accordian;