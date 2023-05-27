const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  Tag.destroy({
    //destroy is a Sequelize method for deleting an instance based on the model we're working with and the object we send in as an argument
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
