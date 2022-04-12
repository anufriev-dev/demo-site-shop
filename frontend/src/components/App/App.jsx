import {Routes,Route, useParams} from 'react-router-dom';

import {Layout} from '../Layout/Layout';
import {Error} from '../Error/Error.jsx';
import {Params} from '../../pages/Params/Params.jsx'; 
import {MainList} from '../MainList/MainList.jsx';
import {FormReg} from '../../pages/FormReg/FormReg';
import {BrowserRouter} from 'react-router-dom';


function App () {
  // console.log(useParams());
  return (
    <>
    <BrowserRouter>
      <Routes>
        { /* Главная страница */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainList/>}/>
        </Route>
        { /* Страница регистрации */}
        <Route path='/feed'>
          <Route index element={<FormReg />}/>
          <Route path=':auth' element={<Params />} />
        </Route>
        {/* Страница Api*/}
        <Route path='/auth/api'>
          <Route index element={<></>} />
        </Route>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default  App;