import React from 'react'
import { useState } from 'react'
import Customhook from './customhook/Customhook'

function Form() {
  const[name,setname]=useState('')
  const[Email,setemail]=useState('')
  const[Age,setage]=useState('')
  const[guest,setguest]=useState('')
  const[error,seterror]=useState('')
  const[summary,setsummary]=useState(false)
  
    const[check ,setcheck]=useState(false)


   function changes(e){

const {value,title}=e.target;
switch(title){

  case 'setname': 
  setname(value);
  break;
case 'setemail':
  setemail(value);
  break;
  case 'setage':
    setage(value);
    break;
    case 'setguest':
      setguest(value);
      break;


}

   }

function submitter(e){
e.preventDefault();
name && Email && Age  && (check ? guest:true) ?setsummary(true) :alert('Fill out all feilds');
// we can perform api operation  i am just putting it


}




  return (
    <div className='w-screen relative flex flex-col justify-center items-center h-screen '>
<span className='text-[2rem] '>Event Registration Form</span>
<form className='flex form rounded w-[40rem] h-[30rem] shadow-xl flex-col gap-[1rem] py-[2rem]  '>

    <input required onChange={changes} title='setname'      placeholder='Name' className=' inputall outline-none   pl-[1rem]  h-[2.5rem] w-[30rem]   mx-auto border-[2px] border-zinc-3400' type='text'/>
    <input  onChange={changes}  title='setemail'    required     placeholder='Email'     className='   inputall outline-none pl-[1rem]   h-[2.5rem] w-[30rem]  mx-auto    border-[2px] border-zinc-3400' onBlur={()=>{Customhook(Email,seterror)}}    />
    {error && <span className='text-red-600 pl-[1rem] mx-auto'>{error}</span>}
    
    <input  onChange={changes}  title='setage'  required  placeholder='Age'    className='outline-none  inputall1   pl-[1rem]   h-[2.5rem] w-[20rem]    mx-auto border-[2px] border-zinc-3400'      type='number'/>
    <lablel className='mx-auto'>
        Are you attending with the guest ?
    </lablel>
    <div className='flex mx-auto gap-[5px]'>
        <label>yes</label>
         <input name='option'       onChange={()=>{setcheck(true)}}  value='yes' type='radio'/>
         <label>No</label>
    <input    name='option' value='no'  onChange={()=>{setcheck(false)}}    type='radio'/>
    </div>
    <input required  onChange={changes} title='setguest'    placeholder='Guest name'  className={`outline-none ${check?'':"hidden"}  pl-[1rem]  inputall h-[2.5rem] w-[30rem]   mx-auto border-[2px] border-zinc-3400`}/>
   <input className='mx-auto bg-blue-600 hover:bg-blue-400 w-[4rem] h-[2rem] rounded' onClick={submitter}   type='submit'/>
</form>
{summary &&
<div className='bg-white opacity-90 absolute x-auto rounded shadow-lg items-center flex flex-col top-2px  h-[70vh] w-[43rem]'>
<button onClick={()=>{setsummary(false)}} className='ml-0 text-[1.5rem] hover:text-red-500 mt-0'>X</button>
  <span className='mt-[3rem] text-zinc-600 font-sm text-[3rem]'>Summary of form</span>
  <div className='flex mt-[5rem] text-[1.3rem] font-thin gap-[2rem] flex-col'>
<span> Name: {name}</span>
<span>Email: {Email}</span>
<span>Age: {Age}</span>
<span>Guest: {guest}</span>

  </div>
</div>}
    </div>
  )
}

export default Form