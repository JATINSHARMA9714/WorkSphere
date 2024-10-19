import React from 'react'

const Header = ({changeUser,data}) => {


  const handleLogOut=()=>{
    localStorage.removeItem("loggedInUser")
    // window.location.reload;
    changeUser('');
  }


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data ? data.name:"Admin"} 👋</span></h1>
      <button onClick={handleLogOut} className='bg-red-600 px-5 py-2 rounded-md text-lg font-medium hover:bg-red-700'>Log Out</button>
    </div>
  )
}

export default Header
