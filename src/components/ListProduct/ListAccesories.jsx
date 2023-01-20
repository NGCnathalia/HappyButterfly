import React from 'react'
import { useState } from 'react';
import { Card } from './Card';
import { dataAccesories } from '../../Data';
import styleCardList from   "./Card.module.css"

export const ListAccesories = (props) => {
  const { nameFilter } = props;
  let cont = 0;
  

  return (
    <section className={styleCardList.listCard}>
      {
        dataAccesories.map((lista => {
          if (nameFilter == "all") {
            return (
              <div className={styleCardList.cardListAccesories} key={lista.id}>
                <Card lista={lista} />
              </div>
            )
          } else if (nameFilter == "earrings" && lista.filter == "earrings") {
            return (
              <div key={lista.id}>
                <Card lista={lista} />
              </div>
            )
          } else if (nameFilter == "handles" && lista.filter == "handles") {
            return (
              <div key={lista.id}>
                <Card lista={lista} />
              </div>
            )
          } else if (nameFilter == "keyChains" && lista.filter == "keyChains") {
            return (
              <div key={lista.id}>
                <Card lista={lista} />
              </div>
            )
          }

        }))
      }
      <div className="">

      </div>
    </section>

  )
}