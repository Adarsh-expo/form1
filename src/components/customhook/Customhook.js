import React from 'react'

function Customhook(email,seterror) {

    const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const value= emailformat.test(email);
   value?seterror(''):seterror('Please write the correct email format')

  
    
  
}

export default Customhook