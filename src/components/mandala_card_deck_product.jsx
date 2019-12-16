import React from 'react';
import ProductCard from './product_card';

export default function MandalaCardDeckProduct ({ SHOP_ADDRESS, image }) {
    return (
        <React.Fragment>
            <h1>Mandala Card Deck</h1>
            <div className='mandala-card-deck-product--wrapper'>
                <div className='mandala-card-deck-product--inner-wrapper'>
                    <ProductCard
                        id='mandala-card-deck-121519'
                        title='Mandala Manifestation: An Inner Journey Card Deck'
                        category='Card Deck'
                        price='27'
                        description='A card deck to help you understand your path towards enlightenment'
                        SHOP_ADDRESS={SHOP_ADDRESS}
                        image={image}
                    />
                    <p>
                        <span>Once you've placed your order, join the private Mandala Card Deck </span>
                        <a href='https://www.facebook.com/groups/555165868377833/'>Facebook group!</a>
                    </p>
                </div>
                <div className='right-inline-testimonial'>
                    <blockquote><span>Hi Gina, Love, love, love the Mandala card decks. They are GORGEOUS!!! I had remarkable luck with just the Mandela note card before even opening the deck! I found myself crying - success!! Release is great right? They are amazing &amp; beautiful - thanks so much!! Thanks for all you do to try to spread love in this world!!!! </span> ~Patty</blockquote>
                </div>
            </div>
        </React.Fragment>        
    );
}