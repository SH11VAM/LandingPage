import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import './index.css'
import Layout from './Layout.jsx'
import Home from "./Components/home/Home.jsx"
import About from './Components/about/About.jsx'
import Contact from "./Components/contact/Contact.jsx"
import User from './Components/user/User.jsx'
import Github, { gitInfoLoader } from './Components/github/Github.jsx'

// const router =createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element:<Home />
//       },{
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]

// }])

//second way to represent routing 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userId' element={<User />}/>
      <Route 
      path='github' 
      element={<Github />}
loader={gitInfoLoader}
      
      />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
