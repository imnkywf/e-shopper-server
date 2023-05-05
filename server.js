const express = require("express")
const axios = require("axios")
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

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
        login: "yyx990803",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 1,
      },
      {
        login: "ruanyf",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 2,
      },
      {
        login: "yyx9908032",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 3,
      },
      {
        login: "ruanyf2",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 4,
      },
      {
        login: "yyx9908033",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 5,
      },
      {
        login: "ruanyf3",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 6,
      },
      {
        login: "yyx9908034",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 7,
      },
      {
        login: "ruanyf4",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 8,
      },
      {
        login: "yyx9908035",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 9,
      },
    ],
  })
})


app.listen(5000, "localhost", (err) => {
  if (!err) {
    console.log("server is runnning......")
    console.log("New goods: http://localhost:5000/api/getnewgoods")
    console.log("All products: http://localhost:5000/api/getproducts")
  }
  else console.log(err);
})
