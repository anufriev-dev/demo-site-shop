import {Routes,Route, useParams} from 'react-router-dom';

import {Layout} from '../Layout/Layout';
import {Auth} from '../../pages/Auth/Auth.jsx';
import {Error} from '../Error/Error.jsx';
import {Params} from '../../pages/Params/Params.jsx'; 


function App () {
  console.log(useParams());
  return (
    <>
    <Routes>
      { /* Главная страница */}
      <Route path="/" element={<Layout/>}>
        <Route index element={<p>Динамический текст в Outlet </p>}/>
      </Route>
      { /* Страница регистрации */}
      <Route path='/auth'>
        <Route index element={<Auth />}/>
        <Route path=':id' element={<Params />} />
      </Route>
      <Route path='*' element={<Error />}/>
    </Routes>
    </>
  );
}
export default  App;