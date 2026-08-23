import apple from "../assets/apple.jpg";
import potato from "../assets/bigp.jpg";
import cabbage from "../assets/cabbage.jpg";
import ladiesFinger from "../assets/latus.jpg";
import komola from '../assets/komola.png'
import tomato from "../assets/begun.jpg";
import eggplant from "../assets/fulcopy.jpg";
import chili from "../assets/greenchili.jpg";
import mango from "../assets/capsicam.jpg";
import corn from "../assets/tomato.jpg";



const popularProduct = [
    {
        id: 1,
        name: "Green Apple",
        image: apple,
        price: 29.99,
        oldPrice: 20.99,
        rating: 5,
        stock: "In Stock",
        sale: null,
      },
       {
    id: 2,
    name: "Fresh Indian Malta",
    image: komola,
    price: 30.99,
    oldPrice: 20.99,
    rating: 5,
    stock: "In Stock",
    sale: null,
  }, 
      {
    id: 3,
    name: "Big Potatoes",
    image: potato,
    price: 14.99,
    oldPrice: 20.99,
    rating: 5,
    stock: "In Stock",
    sale: null,
  },
  {
    id: 4,
    name: "Chinese Cabbage",
    image: cabbage,
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
  {
    id: 6,
    name: "Green Lettuce",
    image: ladiesFinger,
    price: 14.99,
    oldPrice: 20.99,
    rating: 5,
    stock: "In Stock",
    sale: null,
  },
  {
    id: 7,
    name: "Eggplant",
    image: eggplant,
    price: 14.99,
    oldPrice: 20.99,
    rating: 5,
    stock: "In Stock",
    sale: null,
  },
  {
    id: 8,
    name: "Green Chilli",
    image: chili,
    price: 14.99,
    oldPrice: 20.99,
    rating: 5,
    stock: "In Stock",
    sale: null,
  },
  {
    id: 9 ,
    name: "Fresh Mango",
    image: mango,
    price: 14.99,
    oldPrice: 20.99,
    rating: 5,
    stock: "In Stock",
    sale: null,
  },
  {
      id: 10,
      name: "Indian Corn",
      image: corn,
      price: 14.99,
      oldPrice: 20.99,
      rating: 5,
      stock: "Out of Stock",
      sale: null,
    },
 
]
export default popularProduct;