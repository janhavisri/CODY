import { Outlet } from "react-router-dom";
import Header from "./header.js";


const Main = () => {
  const options = [
    
    {
      name : 'Add Review',
      link : '/main/addReview'
    },
  ]

  return (
    <>
    <Header></Header>     
      <Outlet />
    
    </>
  )
};
export default Main;
