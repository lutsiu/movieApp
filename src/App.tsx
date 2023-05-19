import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from './MainPage';
import HomePage from './Pages/MainPage';
import SwipePage from './Pages/SwipePage';
import MoviePage from './Pages/MoviePage';
const router = createBrowserRouter([
  {path: '/', element:<MainPage/>},
  {path: '/home/:type', element: <HomePage/>, },
  {path: '/swipe/:type', element: <SwipePage/>},
  {path: ':movie', element: <MoviePage/> }
]);


function App() {

  return <RouterProvider router={router}/>
}

export default App
