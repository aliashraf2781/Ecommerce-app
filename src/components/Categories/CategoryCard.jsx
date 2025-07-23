import React from 'react'
import { Link } from 'react-router-dom'


export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.id}`} className="flex flex-col items-center text-center space-y-2 w-24 cursor-pointer  transition-transform duration-200 ">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow p-1 hover:p-0  transition-all">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover rounded-full hover:border-2 hover:border-light"
        />
      </div>
      <span className="text-sm font-medium text-dark">{category.nameEn}</span>
    </Link>
  )
}

