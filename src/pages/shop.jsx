import React from "react";
import Layout from "../components/layout/index";
import { graphql } from "gatsby";
import products from "../data/products.js";
import Products from "../components/products";
import MandalaImages from "../components/hoc/mandala_images";
import HeroSection from "../components/hero_section";

const BuyMandalas = ({ data: { site: { siteMetadata: { SHOP_ADDRESS } } } }) => (
  <Layout>
    <HeroSection
      title="Shop"
    >
      <div className="background--healing-tools-hero background-cover-parent" />
    </HeroSection>
    <div className="slanted-section-decorator slanted-section-decorator--green"/>

    {
      // setTimeout(() => {
      //   console.log("SNIPCART!??! ", window && window.Snipcart);
      //   window && window.Snipcart.subscribe('page.validating', function(ev, data) {
      //     if(ev.type === 'cart-content') {
      //       ev.addError('uniqueId', '...Testing...');
      //     }
      //   });
      // }, 1000) && undefined
    }
    <div className="container container--max-width">
      <MandalaImages>
        <Products
          products={products}
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
  }
`;