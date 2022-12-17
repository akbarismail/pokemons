import { useRoutes } from 'react-router-dom';
import DetailLocation from './pages/DetailLocation';
import Fight from './pages/Fight';
import HomePage from './pages/HomePage';
import Location from './pages/Location';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  let router = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'location', element: <Location /> },
    { path: 'location/:id', element: <DetailLocation /> },
    { path: 'login', element: <Login /> },
    { path: 'fight', element: <Fight /> },
    { path: '*', element: <NotFound /> },
  ]);

  return router;
}

export default App;
