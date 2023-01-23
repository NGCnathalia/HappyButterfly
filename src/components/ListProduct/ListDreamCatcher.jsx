import React from 'react'
import { useState } from 'react';
import { Card } from './Card';
import { data } from '../../Data';
import styleCardList from "./Card.module.css";

export const ListDreamCatcher = (props) => {
    const { nameFilter } = props;
    let cont = 0;

    return (
        <section className={styleCardList.listCard}>
            {
                data.map((lista => {
                    if (nameFilter == "all") {
                        return (
                            <div className={styleCardList.cardDreamCatcher} key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                    } else if (nameFilter == "light" && lista.filter == "light") {
                        return (
                            <div key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                    } else if (nameFilter == "dark" && lista.filter == "dark") {
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
