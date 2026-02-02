import User from "../models/User.js";
import Package from "../models/Package.js";

export const createFavorite = async (req, res, next) => {


  try {
    await User.findOneAndUpdate({username:req.params.id}, {
      $push: { favorites: req.params.num },
    });
    res.status(200).json({"status":"favorite added"});
  } catch (err) {
    next(err);
  }
};

export const deleteFavorite = async (req, res, next) => {
  try {
    await User.findOneAndUpdate({username:req.params.id}, {
      $pull: { favorites: req.params.num },
    });
    res.status(200).json({"status":"favorite removed"});
  } catch (err) {
    next(err);
  }
};

export const getFavorites = async (req, res, next) => {

  try {
    const user = await User.findOne({username:req.params.id})
    const packages = await Package.find({Sr_no:{$in: user.favorites}})
      res.status(200).json(packages);
  } catch (err) {
    next(err);
  }

 
};


export const getFavoriteslist = async (req, res, next) => {

  try {
    const user = await User.findOne({username:req.params.id})
    res.status(200).json({"favorites":user.favorites});
  } catch (err) {
    next(err);
  }

 
};


