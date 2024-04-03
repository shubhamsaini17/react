import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLofer } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",   // slash ka baad kuch nhi to home page dika do 
//         element: <Home/>
//       },
//       {
//         path: "about",   //  slash ka baad about to about page dika
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='contact' element ={<Contact/>}/>
      <Route path='user/:userid' element ={<User/>}/>  
      <Route 
      path='github' 
      element ={<Github />} 
      loader={githubInfoLofer} 
      />  
    </Route>
  )
)
/*  <Route path='user/:userid' element ={<User/>}/>   => take dynamic values form url ,url ma se user/ ka baad vala chij code ma laka ana ka lea banaya ha ya uper vali line */



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
