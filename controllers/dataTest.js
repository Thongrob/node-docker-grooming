exports.dataTest = (req, res, next) => {
    
    res.json(
      {
        "id": 1,
        "productName": "iPhone 13 Pro Max",
        "price": "45000",
        "thumbnail": "/images/product/1.jpg"
      },
      {
        "id": 2,
        "productName": "iPad Mini 2021",
        "price": "25000",
        "thumbnail": "/images/product/2.jpg"
      },
      {
        "id": 3,
        "productName": "Apple Watch 2021",
        "price": "15800",
        "thumbnail": "/images/product/3.jpg"
      }
    ) 
     
}