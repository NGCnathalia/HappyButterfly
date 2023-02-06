import React from 'react'
import { useState } from 'react';
import { Card } from './Card';
import { data } from '../../Data';
import styleCardList from "./Card.module.css";

export const ListClothes = (props) => {
    const { nameFilter } = props;
    let cont = 0;
    let res = [];
    function filtracion(filtro) {
        if(filtro=="all"){
            data.map((lista) => {
                if (lista.filter =="cropTop" ||lista.filter =="swimsuit"  ) {
                  res.push(lista);
                }
              });
        }else{
            data.map((lista) => {
                if (lista.filter == filtro) {
                  res.push(lista);
                }
              });
        }    
      }
      filtracion(nameFilter);
 
    return (
        <section className={styleCardList.listCard}>
            {
                res.map((lista => {
                        return (
                            <div className={styleCardList.cardListClothes} key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                   
                }))
            }

        </section>

    )

}
