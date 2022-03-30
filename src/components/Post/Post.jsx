import React, {useState,useEffect} from "react";
import './Post.scss';
import { Button } from "../Button/Button";

function Post () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/auth/api')
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
  return(
    <>
      {store.map(item => (
        <div className="post" key={item.productid}>
          <img className="post__img" src={item.img} alt="картинка" width={300} height={300}/>
          <p className="post__desc">{item.title}</p>
          <div className="post__wrapPrice"> 
          <span><b>$</b><span className="post__price">{item.price}</span></span>  
            <Button className={"btn-post"} text={"BUY NOW"}  />
          </div>
        </div>
      ))}  
    </>
  );
}
}
export default Post;