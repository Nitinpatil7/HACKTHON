import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider , Navigate } from 'react-router-dom'
import Subjects from './pages/Subjects.jsx'
import { QuizProvider } from './context/QuizContext.jsx'

import Dificulty from './pages/Dificulty.jsx'
import Quizes from './pages/Quizes.jsx'
import Res from './pages/Res.jsx'
import Wait from './pages/Wait.jsx'
import Certi from './pages/Certi.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/subject",
    element:<Subjects/>
  },
  {
    path:"/subject/dificulty",
    element:<Dificulty/>
  },
  {
    path:"/subject/dificulty/wait",
    element: <Wait />
  },
  {
    path:"/subject/dificulty/quiz",
    element:<Quizes/>
  },
  {
    path:"/subject/dificulty/quiz/result",
    element: <Res />
  },
  {
    path:"/subject/dificulty/quiz/result/certificate",
    element: <Certi/>
  }
])
createRoot(document.getElementById('root')).render(
 <QuizProvider>
    <RouterProvider router={router} />
  </QuizProvider>
)
