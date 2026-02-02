import Package from "../models/Package.js";
import Axios from 'axios';
export const getRecPackages = async (req, res, next) => {
    const { min, max, city,style,price,...others } = req.query;

    var link = `https://zennyrox.pythonanywhere.com/request/?destination=${city}&price=${price}&main_style=${style}`
   // var link = `https://zennyrox.pythonanywhere.com/request/?destination=New Delhi&price=50000&main_style=Explorer`
    console.log(link)
    

    const firstreclist =await Axios.get(link)
    const reclist =firstreclist.data.result
    console.log()
    try {
      const packages = await Package.find({
        ...others,
        Destination:{ "$regex": city, "$options": "i" },
        Price: { $gt: min | 1, $lt: max || 999 },
        Sr_no:{$in: reclist}
      }).limit(req.query.limit);
      res.status(200).json(packages);
    } catch (err) {
      next(err);
    }
  
   
  };