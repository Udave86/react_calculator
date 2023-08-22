import React, { useEffect, useRef } from 'react'

import  './Header.css';

const Header = (props) => {
    const resultRef = useRef();

    useEffect(() => {
        resultRef.current.scrollIntoView();
    }, [])


  return (
    <div className='header custom-scroll'>
        <div className='header_history'>
           <p>x 4545</p>
           <p>x 4545</p>
           <p>x 4545</p>
           <p>x 4545</p>
           <p>x 4545</p>
           <p>x 4545</p>
           <p>x 4545</p>
        </div>

        <div className='header_expression custom-scroll' >
            <p>{props.expression}</p>
        </div>
        <div ref={resultRef} className='header_result'>
           <p>6767787</p>        </div>
    </div>
  )
}

export default Header