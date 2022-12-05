import { useRoutes } from 'react-router-dom';
import DetailLocation from './pages/DetailLocation';
import HomePage from './pages/HomePage';
import Location from './pages/Location';

function App() {
  let router = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'location', element: <Location /> },
    { path: 'location/:id', element: <DetailLocation /> },
  ]);

  return router;
}

export default App;
