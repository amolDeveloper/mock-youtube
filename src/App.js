import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Login from './components/Login';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'body',
    element: <Body />,
    children: [
      {
        path: '',
        element: <Maincontainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      },
      {
        path: 'demo',
        element: <Demo />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
          <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  )
}

export default App;
