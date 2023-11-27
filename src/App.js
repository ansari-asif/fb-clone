import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './Index.css';
import protectedRoutes from './Route/ProtectedRoutes';
import publicRoutes from './Route/PublicRoutes';
import Main from './Layout/Main';

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            {protectedRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={index}
                />
              )
            })}
          </Route>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={index}
              />
            )
          })}
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
