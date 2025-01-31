import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import unProtectedRoutes from './routers/unProtected';
import Whatsapp from './components/Whatsapp/Whatsapp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            {unProtectedRoutes?.map((elem, index) => <Route path={elem?.path} element={elem?.element} key={index} />)}
          </Route>
        </Routes>
      </BrowserRouter>
      <Whatsapp />
    </>
  );
}

export default App;
