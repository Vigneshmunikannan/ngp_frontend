import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image file
      title: 'White T-shirt',
      description: 'A white T-shirt is a fundamental piece of casual clothing that offers both comfort and style. Made from soft and breathable cotton fabric, this T-shirt features a clean and minimalist design. With its short sleeves and crew neckline, it provides a relaxed fit that complements various body types.',
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/6210323/pexels-photo-6210323.jpeg?auto=compress&cs=tinysrgb&w=600"', // Replace with actual image file
        title: 'Colorfull T-shit for women',
        description: 'Our Colorful T-Shirt Collection features a mesmerizing array of hues that span the entire spectrum. From lively pastels to bold and vivid shades, each t-shirt is a canvas of colors that brings life and energy to your wardrobe.',
      },
      {
        id: 3,
        image: 'https://images.pexels.com/photos/6593752/pexels-photo-6593752.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image file
        title: 'White Printed T-shirt',
        description: 'Upgrade your casual wardrobe with our White Printed T-shirt. Crafted from soft and breathable cotton, this t-shirt offers all-day comfort while keeping you effortlessly stylish. The pristine white hue provides a clean canvas for the eye-catching printed design that adds a touch of personality to your look.',
      },
    
    
   
  ];

  return (
    <div className="featured-products" >
      <h2 style={{marginLeft:"40%",fontSize:"40px"}} >Featured Products</h2>
      <div className="product-list" >
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title}  />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
