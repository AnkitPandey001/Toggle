
import { useState } from 'react'
const App = () => {

  const[isdarkmode,setIsDarkMode] = useState(false);

  function handleSubmit(){
    setIsDarkMode(!isdarkmode)
  }

  return (
    <div className={`w-full h-screen flex flex-col  items-center ${isdarkmode ? 'bg-black text-white' : 'bg-white text-black'}`}>
    <h1 className='text-xl font-semibold'>Click On Button to enable   {isdarkmode ? 'Light Mode' : 'Dark Mode'}</h1>
    <button onClick={handleSubmit} className="border border-blue-900 mt-6 p-2 rounded-xl">
      {isdarkmode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </div>
  )
}

export default App
