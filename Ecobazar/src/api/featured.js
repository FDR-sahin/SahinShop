import apple from "../assets/apple.jpg";
import potato from "../assets/bigp.jpg";
import cabbage from "../assets/cabbage.jpg";
import ladiesFinger from "../assets/latus.jpg";
import tomato from "../assets/tomato.jpg";


const featuredProduct = [
    {
            id: 1,
            name: "Green Apple",
            image: apple,
            price: 14.99,
            oldPrice: 20.99,
            rating: 5,
            stock: "In Stock",
            sale: 'Sale 50%',
          },
           {
        id: 2,
        name: "Fresh Indian Malta",
        image: potato,
        price: 14.99,
        oldPrice: 20.99,
        rating: 5,
        stock: "In Stock",
        sale: null,
      }, 
          {
        id: 3,
        name: "Big Potatoes",
        image: cabbage,
        price: 14.99,
        oldPrice: 20.99,
        rating: 5,
        stock: "In Stock",
        sale: null,
      },
      {
        id: 4,
        name: "Chinese Cabbage",
        image: ladiesFinger,
        price: 14.99,
        oldPrice: 20.99,
        rating: 5,
        stock: "In Stock",
        sale: null,
        featured: true,
      },
      {
          id: 5,
          name: "Red Tomatoes",
          image: tomato,
          price: 14.99,
          oldPrice: 20.99,
          rating: 5,
          stock: "In Stock",
          sale: null,
        },
        
];

export default featuredProduct;