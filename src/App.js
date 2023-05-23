import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import MainHome from './pages/MainHome';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router= createBrowserRouter([{
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<MainHome></MainHome>
      }
      
    ]
}

])
  return (
    <div>
      
      <div>
      <div  className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
     </div>
    </div>
  );
}

export default App;
