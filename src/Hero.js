import React from 'react'

export default function Hero({heroName}) {
    if(heroName==='Joker'){
        throw new Error("not a hero");
    }
    return (
        <div>
            Hello {heroName}
        </div>
    )
}
