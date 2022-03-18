import {Routes,Route} from 'react-router-dom';

import {Layout} from '../Layout/Layout';

function App () {
  return (
    <>
    <Routes>
      /* Главная страница */
      <Route path="/" element={<Layout/>}>
        <Route index element={<p>Динамический текст в Outlet </p>}/>
      </Route>
      /* Страница регистрации */
      <Route path='/auth'>
        <Route index element={<p>Страница Регистрации</p>}/>
      </Route>
    </Routes>
    </>
  );
}
export default  App;