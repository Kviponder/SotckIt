const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({          //findAll is a Sequelize method to find all instances based on the model we're working with
    include: [Product],       //Including the Product model in the Category model
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  Category.findOne({
    //findOne is a Sequelize method to find one instance based on the model we're working with
    where: {
      id: req.params.id, //Finding one category by its id
    },
    include: [Product], //Including the Product model in the Category model
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  Category.create(req.body) //create is a Sequelize method for creating a new instance based on the model we're working with
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  Category.update(req.body, {     //update is a Sequelize method for updating an instance based on the model we're working with and the object we send in as an argument
    where: {
      id: req.params.id, 
    },
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
Categorey.destroy({     //destroy is a Sequelize method for deleting an instance based on the model we're working with and the object we send in as an argument
    where: {
      id: req.params.id,      
    },
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
});


module.exports = router;
