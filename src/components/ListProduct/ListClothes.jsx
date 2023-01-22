import React from 'react'
import { useState } from 'react';
import { Card } from './Card';
import { dataClothes } from '../../Data';
import styleCardList from "./Card.module.css";

export const ListClothes = (props) => {
    const { nameFilter } = props;
    let cont = 0;

    return (
        <section className={styleCardList.listCard}>
            {
                dataClothes.map((lista => {
                    if (nameFilter == "all") {
                        return (
                            <div className={styleCardList.cardListClothes} key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                    } else if (nameFilter == "cropTop" && lista.filter == "cropTop") {
                        return (
                            <div key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                    } else if (nameFilter == "swimsuit" && lista.filter == "swimsuit") {
                        return (
                            <div key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                    }

                }))
            }

        </section>

    )

}
