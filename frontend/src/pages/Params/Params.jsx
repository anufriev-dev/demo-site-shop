import {useParams} from 'react-router-dom'

function Params () {
  let {id} = useParams()
  return(
    <>
      id = {id}
    </>
  )
};
export {Params}