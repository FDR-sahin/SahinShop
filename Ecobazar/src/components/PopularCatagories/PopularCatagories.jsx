import React from 'react'
import Container from '../contener/Container'
import categories from '../../api/categories'
import { Link } from 'react-router-dom'
import HomeHeader from '../homeheader/HomeHeader'

function PopularCatagories() {
  return (
    <Container>


        <div>
            <HomeHeader homeheader="Popular Categories"/>
        </div>



        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((item) => (
          <Link
            key={item.id}
            to={`/category/${item.slug}`} // dynamic link: e.g. /category/fresh-fruit
            className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-green-500 hover:shadow-md transition-all group duration-300"
          >
            <div className="w-24 h-24 mb-3 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-700 group-hover:text-green-600 text-center">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
      
    </Container>
  )
}

export default PopularCatagories
