import React from 'react'
import { CardStyle } from './Molecules.style'
import { Link } from 'react-router-dom'
function Cards(data) {

  return (
   <>
   <CardStyle>
   <div class="single-product-card">
                <img src={`${data.fethed.profile_image}`} alt="" />
                <h3>{data.fethed.name} </h3>
                <p>swapped their grids for solar are waiting for your decision!</p>
                <button class="btn"><a href=""><Link to={`product-detail/${data.fethed.id}`}>See Profile </Link></a></button>
    </div>
    </CardStyle>
   </>
  )
}

export default Cards
