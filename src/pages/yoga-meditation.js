import React from "react";
import Layout from "../components/layout/index";
import ContactGinaCta from "../components/contact_gina_cta";
import HeroSection from "../components/hero_section";
import Section from "../components/section";
import "./healing-tools.css";

const YogaMeditation = () => (
  <Layout>
    <HeroSection
      title="Yoga & Meditation"
      subtitle="Finding our own common threads."
      paragraphs={["Use yoga and meditation to answer all your questions"]}
    />
    <Section
      title="Here's a title."
      subsections={[
        `Maybe I should combine all of these Healing tools and put them into
        the homepage.  I could put the `
      ]}
    />
  </Layout>
);

export default YogaMeditation;
