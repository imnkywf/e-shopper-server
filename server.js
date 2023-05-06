const express = require("express")
const app = express()
const jwt = require('jsonwebtoken');
const secretKey = 'qwertyuiopeshooper';


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

const users = [
  {
    user_id: 1,
    username: "qwer444",
    password: "1234",
    cart: []
  },
  {
    user_id: 2,
    username: "cxvxvx222",
    password: "1234",
    cart: []
  },
  {
    user_id: 3,
    username: "crt001122",
    password: "1234",
    cart: []
  },
  {
    user_id: 4,
    username: "nf140901",
    password: "1234",
    cart: []
  }
]

const imgUrls = [
  { id: 1, img_url: "https://www.capitalcuisine.co.uk/shop/wp-content/uploads/2021/04/ApricotGingerChutney_Jar_LR-306x306.jpg" },
  { id: 2, img_url: "https://ekofood.com.tr/wp-content/uploads/2020/04/6798-1-306x306.jpg" },
  { id: 3, img_url: "https://img0.baidu.com/it/u=113188305,3423571500&fm=253&fmt=auto&app=138&f=JPEG?w=306&h=306" },
  { id: 4, img_url: "https://img0.baidu.com/it/u=1256750200,1060162502&fm=253&fmt=auto&app=138&f=JPEG?w=306&h=306" },
  { id: 5, img_url: "https://patisserie-cle.com/wp-content/uploads/2023/05/Product-pic-300x300.jpg" },
  { id: 6, img_url: "https://www.primaham-thai.com/wp-content/uploads/2022/05/Boneless-Ham-Steak-300x300.png" },
  { id: 7, img_url: "https://creamofwheat.com/wp-content/uploads/80106053-Front-300x300.png" },
  { id: 8, img_url: "https://www.heavenduft.com/wp-content/uploads/2023/05/0F1A8867-scaled-300x300.jpg" },
  { id: 9, img_url: "https://evohelmet.com/wp-content/uploads/2023/04/RX05-BLACK4-1-300x300.jpg" },
  { id: 10, img_url: "https://cdn.shopify.com/s/files/1/0371/2945/products/PRODUCTTEMPLATE_300x.png?v=1619828642" }
]

app.get("/api/getnewgoods", function (req, res) {
  res.json({
    products: [
      {
        name: "Apricot Jam",
        description: 'Apricot jam is a sweet and delicious fruit spread made from fresh apricots, sugar, and water. The apricots are cooked down until they are soft and the sugar is dissolved, resulting in a thick and syrupy mixture with chunks of fruit.',
        img_url: "https://www.capitalcuisine.co.uk/shop/wp-content/uploads/2021/04/ApricotGingerChutney_Jar_LR-306x306.jpg",
        price: 20,
        id: 1,
      },
      {
        name: "USA Frozen Fries",
        description: 'USA Frozen Fries are a classic American food staple that have become a popular menu item at fast-food restaurants and a must-have in many households. These frozen fries are made from high-quality potatoes that are carefully selected and cut to produce the perfect size and texture for frying. They are pre-cooked and frozen to preserve their flavor, texture, and nutrients, making them a convenient and easy-to-prepare side dish or snack.',
        img_url: "https://ekofood.com.tr/wp-content/uploads/2020/04/6798-1-306x306.jpg",
        price: 10,
        id: 2,
      },
      {
        name: "Zebra Sneaker",
        description: 'The USA zebra sneakers are made from high-quality materials that are designed to last, including a sturdy rubber sole and a soft and breathable fabric upper. They also feature a cushioned insole that provides excellent support and comfort, making them ideal for long walks or runs.',
        img_url: "https://img0.baidu.com/it/u=113188305,3423571500&fm=253&fmt=auto&app=138&f=JPEG?w=306&h=306",
        price: 95,
        id: 3,
      },
      {
        name: "Valentine's Candles",
        description: "Valentine's candles are the perfect way to set the mood for a romantic evening with your special someone. These candles are carefully crafted to create a warm, inviting ambiance that will help you and your loved one relax and enjoy each other's company.",
        img_url: "https://img0.baidu.com/it/u=1256750200,1060162502&fm=253&fmt=auto&app=138&f=JPEG?w=306&h=306",
        price: 15,
        id: 4,
      }
    ],
  })
})

app.get("/api/getproducts", function (req, res) {
  res.json({
    products: [
      {
        name: "Dainsh Cup Cake",
        description: 'Each cupcake is handcrafted with care and attention to detail, ensuring that every bite is as delicious as the last. Whether you enjoying it with your morning coffee, as an afternoon snack, or as a dessert after dinner, our Danish Cup Cake is the perfect indulgence.',
        img_url: "https://patisserie-cle.com/wp-content/uploads/2023/05/Product-pic-300x300.jpg",
        flag: 'Pastry',
        price: 20,
        id: 5,
      },
      {
        name: "PrimaHam",
        description: 'PrimaHam is a premium ham product from Thailand, made from high-quality pork that is carefully selected and processed to create a delicious and flavorful ham. The ham is known for its tender texture, rich taste, and beautiful appearance.',
        img_url: "https://www.primaham-thai.com/wp-content/uploads/2022/05/Boneless-Ham-Steak-300x300.png",
        flag: 'Food',
        price: 15,
        id: 6,
      },
      {
        name: "Cream of Wheat",
        description: 'Cream of Wheat is a brand of hot cereal made from wheat semolina that has been ground into a fine granular consistency. The cereal is easy to prepare and can be cooked on the stove or in the microwave. It has a smooth and creamy texture and a mild, nutty flavor that can be enhanced with the addition of milk, sugar, honey, or fruit.',
        img_url: "https://creamofwheat.com/wp-content/uploads/80106053-Front-300x300.png",
        flag: 'Food',
        price: 8,
        id: 7,
      },
      {
        name: "Heavenduft",
        description: "Coastal India is an all-season fragrance for all occasions.  It is distinctively designed for use in the scorching climate of India. The scent profile is very rich, elegant, and sophisticated.  It doesn’t have the typical strong attar fragrance, and one will find that it’s more towards the French style.",
        img_url: "https://www.heavenduft.com/wp-content/uploads/2023/05/0F1A8867-scaled-300x300.jpg",
        flag: 'Life',
        price: 500,
        id: 8,
      },
      {
        name: "EVO Helemt",
        description: "The EVO Helmet is a high-quality, full-face helmet designed for motorcycle riders who demand the best in safety, comfort, and style. This helmet is constructed using advanced materials and manufacturing techniques, making it both strong and lightweight.",
        img_url: "https://evohelmet.com/wp-content/uploads/2023/04/RX05-BLACK4-1-300x300.jpg",
        flag: 'Sport',
        price: 200,
        id: 9,
      },
      {
        name: "Balance Bike",
        description: "Introducing our Balance Bike - the perfect way for your child to learn the fundamentals of biking! This lightweight and durable bike is designed with young children in mind, featuring a sturdy aluminum frame and adjustable handlebars and seat to accommodate growth spurts.",
        img_url: "https://cdn.shopify.com/s/files/1/0371/2945/products/PRODUCTTEMPLATE_300x.png?v=1619828642",
        flag: 'Sport',
        price: 380,
        id: 10,
      },

    ],
  })
})

app.get("/api/getusers", function (req, res) {
  const username = req.query.username
  const password = req.query.password
  const foundUser = users.find(e => e.username === username && e.password === password)

  if (foundUser) {
    const token = jwt.sign({ user_id: foundUser.user_id }, secretKey, { expiresIn: '1h' })
    res.json({
      token,
      foundUser
    })
  }
  else {
    res.status(404).json({
      error: "User not found"
    })
  }
})

app.get("/api/getuserscart", function (req, res) {
  const username = req.query.username
  const foundUser = users.find(e => e.username === username)

  if (foundUser) {
    res.json({
      cart: foundUser.cart
    })
  }
  else {
    res.status(404).json({
      error: "User not found"
    })
  }
})

app.post("/api/addtoCart", function (req, res) {
  const { username, id, good_name, quantity, price, img_url } = req.query
  const { img_url: fullUrl } = imgUrls.find(e => e.id === +id)
  const newGood = { id, good_name, quantity, price, fullUrl }
  console.log(fullUrl);

  const foundUser = users.find(e => e.username === username)
  if (foundUser) {
    foundUser.cart.push(newGood)
    console.log(foundUser.cart);
    res.json({
      responseText: 'good has been added successfully'
    })
  }
  else {
    res.status(404).json({
      error: "User not found"
    })
  }
})

app.listen(5000, "localhost", (err) => {
  if (!err) {
    console.log("server is runnning......")
    console.log("New goods: http://localhost:5000/api/getnewgoods")
    console.log("All products: http://localhost:5000/api/getproducts")
    console.log("Users: http://localhost:5000/api/getusers")
    console.log("Cart: http://localhost:5000/api/getuserscart")
    console.log("AddCart: http://localhost:5000/api/addtoCart")
  }
  else console.log(err);
})
