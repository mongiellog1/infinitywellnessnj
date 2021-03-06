import React from "react";
import Layout from "../components/layout/index";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import products from "../data/products.js";
import Products from "../components/products";
import MandalaImages from "../components/hoc/mandala_images";
import HeroSection from "../components/hero_section";
import MandalaCardDeckProduct from '../components/mandala_card_deck_product';

const BuyMandalas = ({ data: { image, image2, site: { siteMetadata: { SHOP_ADDRESS } } } }) => (
  <Layout>
    <HeroSection
      title="Shop"
      Background={<Img className="background-cover-parent" fluid={image.childImageSharp.fluid} />}
    />
    <div className="slanted-section-decorator slanted-section-decorator--green"/>
    
    {
      setTimeout(() => {
        typeof window !== "undefined" && window.Snipcart.subscribe('page.validating', function(ev, data) {
          if(ev.type === 'order-confirm' && data.itemsTotal < 20) {
            ev.addError('uniqueId', 'Cart must be over $20!');
          }
        });
      }, 1000) && undefined
    }
    <div className="container container--max-width">
      <div className='container container--pad-top'>
        <MandalaCardDeckProduct
          SHOP_ADDRESS={SHOP_ADDRESS}
          image={image2}
        />
      </div>
      <MandalaImages>
        <Products
          products={products.sort((a, b) => (
            a.title > b.title ? 1 : -1
          ))}
          SHOP_ADDRESS={SHOP_ADDRESS}
        />
      </MandalaImages>
    </div>
  </Layout>
);

export default BuyMandalas;

export const addressQuery = graphql`
  query {
    site {
      siteMetadata {
        SHOP_ADDRESS
      }
    }
    image: file(relativePath: { eq: "mandala_workshop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "CardDeck-Small-121519/IMG_5885-DeckSpread-WoodBg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
