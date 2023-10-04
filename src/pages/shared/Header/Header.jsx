import React from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png' 

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo}></img>
           <p>Journalism Without Fear or Favour</p>
           <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;<h2 className="text-3xl">Header</h2>