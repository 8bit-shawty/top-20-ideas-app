import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function Hero() {
    const {theme, setTheme} =useContext(ThemeContext)

    return (
        <div className=' my-10 flex flex-col items-center gap-5'>
            <h2 className=' text-3xl font-bold text-center'>Top 20 Productivie ideas for your next startup</h2>
            <h2 className=' text-center my-3'><strong className=' text-secondary'>Like your favorite ideas. </strong>Like your favorite ideas. Write your best Ideas, no account needed!</h2>

            <div>
            <select 
            onChange={(event) => setTheme(event.target.value)}
            className="select select-bordered border-primary w-full max-w-xs">
                <option disabled selected>Select theme</option>
                <option>winter</option>
                <option>light</option>
                <option>dark</option>
                <option>cupcake</option>
                <option>bumblebee</option>
                <option>emerald</option>
                <option>corporate</option>
                <option>synthwave</option>
                <option>retro</option>
                <option>cyberpunk</option>
                <option>valentine</option>
                <option>halloween</option>
                <option>garden</option>
                <option>forest</option>
                <option>aqua</option>
                <option>lofi</option>
                <option>pastel</option>
                <option>fantasy</option>
                <option>wireframe</option>
                <option>black</option>
                <option>luxury</option>
                <option>dracula</option>
                <option>autumn</option>
                <option>business</option>
                <option>lemonade</option>
                <option>acid</option>
                <option>night</option>
                <option>coffee</option>
                <option>dim</option>
                <option>nord</option>
                <option>sunset</option>
            </select>
            </div>
        </div>
    )
}

export default Hero