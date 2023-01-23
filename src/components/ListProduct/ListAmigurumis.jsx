import React from 'react';
import { useState } from 'react';
import { Card } from './Card';
import { data } from '../../Data';
import styleCardList from "./Card.module.css";

export const ListAmigurumis = (props) => {
    const { nameFilter } = props;
    let cont = 0;

    return (
        <section className={styleCardList.listCard}>
            {
                data.map((lista => {
                    if (nameFilter == "all") {
                        return (
                            <div className={styleCardList.cardListAccesories} key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                    } else if (nameFilter == "small" && lista.filter == "small") {
                        return (
                            <div key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                    } else if (nameFilter == "medium" && lista.filter == "medium") {
                        return (
                            <div key={lista.id}>
                                <Card lista={lista} />
                            </div>
                        )
                    } else if (nameFilter == "large" && lista.filter == "large") {
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

