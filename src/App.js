
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout.js/Main';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Register from './components/Register';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/home',
        element: <Home></Home>
      },
      
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
