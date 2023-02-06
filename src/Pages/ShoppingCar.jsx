import React from 'react'
import { CarouselHome } from '../components/Banner/CarouselHome'
import { TableShopping } from '../components/Table/TableShopping'

export const ShoppingCar = () => {
  return (
    <div className='divContainerSC'>
      <CarouselHome/>
      <TableShopping />
    </div>
  )
}
