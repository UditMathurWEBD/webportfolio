import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { m } from 'framer-motion'


const HomeComponent = lazy(()=> import ('./Components/Home.jsx'))
const TechStackComponent = lazy(()=> import('./Components/TechStack.jsx'))
const ProjectsComponent = lazy(()=> import('./Components/Projects.jsx'))
const ChatComponent = lazy(()=> import('./Components/Chat.jsx'))
const ProjectDetailsPageComponent = lazy(()=> import('./Components/ProjectDetailsPage.jsx'))

const routes = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
         path : "/",
          element : <HomeComponent/>
      },
        {
         path : "/TechStack",
          element : <TechStackComponent/>
      },
      {
         path : "/Chat",
          element : <ChatComponent/>
      },
      {
         path : "/Projects",
          element : <ProjectsComponent/>
      },
           {
         path : "/Projects/:projectName",
          element : <ProjectDetailsPageComponent/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} >
  </RouterProvider>

)
