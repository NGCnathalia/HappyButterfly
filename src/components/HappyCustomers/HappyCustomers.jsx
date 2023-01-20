import React from 'react'
import styleHappyCustomersCss from "./HappyCustomers.module.css"
import ph1 from '../../assets/img/happyCustomers/1.jpeg'
import ph2 from '../../assets/img/happyCustomers/2.jpeg'
import ph3 from '../../assets/img/happyCustomers/3.jpeg'
import ph4 from '../../assets/img/happyCustomers/4.jpeg'
import ph5 from '../../assets/img/happyCustomers/5.jpeg'

export const HappyCustomers = () => {
  return (
    <div className={styleHappyCustomersCss.photo}>
        <img src= {ph1} alt="" />
        <img src= {ph2} alt="" />
        <img src= {ph3} alt="" />
        <img src= {ph4} alt="" />
        <img src= {ph5} alt="" />
    </div>
  )
}
