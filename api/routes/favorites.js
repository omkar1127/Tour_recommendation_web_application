import express from "express";
import {
 getFavoriteslist,
  createFavorite,
  deleteFavorite,
  getFavorites,
} from "../controllers/favorite.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

// //CREATE
router.post("/:id/add/:num",createFavorite);

// //UPDATE
// router.put("/:id", verifyAdmin, updatePackage);
//DELETE
router.delete("/:id/delete/:num", deleteFavorite);
// //GET

// router.get("/find/:id", getPackage);
// //GET ALL

router.get("/:id", getFavorites);

router.get("/:id/favlist", getFavoriteslist);


export default router;
