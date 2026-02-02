import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import {  useContext,useEffect,useNavigate,useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import useFetchfav from "../../hooks/useFetchfav";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const List = () => {
  


  const location = useLocation();
  const { user } = useContext(AuthContext);
  const[change,setchange] = useState(0);

  const { datalist,reFetch1,loading1 } = useFetchfav(
    `/favorites/${user.username}/favlist`
  );

  useEffect(()=>{
    reFetch();
   

  },[change])
  const { data, loading, error, reFetch } = useFetch(
    `/favorites/${user.username}`
  );

  




  const handleClick = () => {
    reFetch();
  };

  return (
   
    <div>
      <Navbar />
      <Header type="list" />
          <div className="listResult">
            {loading1 ? (
              <>
              <Skeleton count={10} style={{marginLeft:"50px",marginRight:"50px"}} />
              <br></br>
              <Skeleton count={10} style={{marginLeft:"50px",marginRight:"50px"}} />
              <br></br>
              <Skeleton count={10} style={{marginLeft:"50px",marginRight:"50px"}} />
              <br></br>
              <Skeleton count={10} style={{marginLeft:"50px",marginRight:"50px"}} />
              <br></br>
              <Skeleton count={10} style={{marginLeft:"50px",marginRight:"50px"}} />
    
              
              </>
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item}  change ={setchange} list ={datalist.favorites} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
  
  );
};

export default List;
