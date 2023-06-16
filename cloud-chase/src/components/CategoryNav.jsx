import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

function CategoryNav() {
    const {data} = useFetch('/categories')
  return (
    <aside>
        <div>
        
        </div>
    </aside>
  )
}

export default CategoryNav
