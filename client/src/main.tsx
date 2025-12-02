import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//  
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import TodoView from './pages/TodoListPage/TodoView.tsx'
import DoneView from './pages/TodoListPage/DoneView.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'todo/:listtitle/:id',
        element: <TodoView/>
      },
      {
        path: 'done/:listtitle/:id',
        element: <DoneView/>
      }
    ]
  },
  {
    element: <div><h1>Log In</h1></div>,
    path: "login"
  },
  {
    element: <div>Success!!!</div>,
    path: "success"
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
