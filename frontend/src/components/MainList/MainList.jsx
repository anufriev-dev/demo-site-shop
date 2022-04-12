import React, {useEffect,useState} from 'react';
import Post from '../Post/Post';

import './MainList.scss';

function MainList () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/auth/api/product')
      .then(json => json.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setStore(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[])

if(error){
  return ( <div>Error:  {error.message}</div>)
}else if(!isLoaded){
  return (<div>Загрузка...</div>)
  
}else{
  return (
    <div className='container'>
      <div className='main-container'>
      {store.map(item => (
       <Post item={item} key={item.product}/>
      ))}

      </div>
    </div>
  );
}
}
export {MainList};