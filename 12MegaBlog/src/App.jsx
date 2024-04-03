import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { Footer, Header } from './components'
// import { login,logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
Outlet


function App() {
  const[loding,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loding ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
         TOdo: {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null

}

export default App
