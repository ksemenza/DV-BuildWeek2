import React, {
  useState,
  useEffect
} from "react";
import axios from 'axios'
import View from "./View";



const GetRequest = props => {
const [info, setInfo] = useState([])

useEffect(() => {
  axios
    .get(`https://dog.ceo/api/breed/pug/images/random/15`
)
    .then(res => {
      setInfo(res.data.message);
      console.log(res.data);
    })
    .catch(error => {
      console.log(
        "The data was not returned",
        error
      );
    });
}, []);
console.log(info)



  return(
<div> 

{info.map(props =>{
  return<View key={props} breed={props} imgUrl={props}/>

})}

</div>)
 


}

export default GetRequest

