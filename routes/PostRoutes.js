const router = require("express").Router();

// Controllers
const {
  createPost,
  getAllPost,
  getAllActivePost,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/PostController");

router.post("/", createPost);
router.get("/", getAllPost);
router.get("/active", getAllActivePost);
router.get("/:id", getSinglePost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
