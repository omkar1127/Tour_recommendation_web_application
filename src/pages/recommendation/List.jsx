import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState,useContext } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useFetchfav from "../../hooks/useFetchfav";
import { AuthContext } from "../../context/AuthContext";

const RecList = () => {
  const [destination, setDestination] = useState("");
  const [style, setStyle] = useState("");
  const [price, setPrice] = useState(0);
  const [options, setOptions] = useState("");
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { user } = useContext(AuthContext);

 

  const { data, loading, error, reFetch } = useFetch(
    `/recommendations?city=${destination}&style=${style}&price=${price || 0}&min=${min || 0 }&max=${max || 999}&limit=10`
  );

  const { datalist,reFetch1,loading1 } = useFetchfav(
    `/favorites/${user.username}/favlist`
  );
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Enter your Preferences</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input 
                onChange={(e) => setDestination(e.target.value)}
                placeholder={destination}
                value={destination}
                type="text" />
            </div>

            <div className="lsItem">
              <label>Travel Style</label>
              <input 
                onChange={(e) => setStyle(e.target.value)}
                placeholder={style}
                value={style}
                type="text" />
            </div>

            <div className="lsItem">
              <label>Price</label>
              <input 
                onChange={(e) => setPrice(e.target.value)}
                placeholder={price}
                value={price}
                type="number" />
            </div>
           
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
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
                  <SearchItem item={item} list ={datalist.favorites} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecList;
