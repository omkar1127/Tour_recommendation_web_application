import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/packages?limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.img_link}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.Package_name}</span>
              <span className="fpCity">{item.Main_style}</span>
              <span className="fpPrice">Starting from ₹{item.Price}</span>
              {item.rating && <div className="fpRating">
                <button>{item.Review_star}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
