import React from "react";
import Layout from "../components/layout/index";
import HeroSection from "../components/hero_section";
import Section from "../components/section";
import ContactGinaCta from "../components/contact_gina_cta";
import Divider from "../components/page_divider";

import "./healing-tools.css";

const SoundHealing = () => (
  <Layout>
    <HeroSection
      title="Sound Bathing & Gratitude"
      cssHeroType="sound-healing"
      subtitle="The Peace and Joy Igniter"
      paragraphs={["Lay your head to rest while I play sounds that dance with your soul"]}
    />
    <div className="container">
      <Section
        title="Calm your mind to the sound of angels."
        classes="big-lines"
        subsections={[
          `My sound healing training has come from Dr. John Beaulieu, a brilliant musician, sound healer, and naturopath. In 1974 while working at Bellevue Psychiatric Hospital in New York City, Dr. Beaulieu discovered that tuning forks could be used to tune the human nervous system. He began sounding them for his patients at Bellevue, and because they had such profound effects, Dr. Beaulieu began running scientific experiments on the tuning forks and their effects. After many decades of experience, success, and science, he teaches sound healing around the world and has composed music based on tuning forks as well as written books about human tuning.`,
          `Much like a mantra, the sound that a tuning fork emits is a point of focus that can unify. It aligns us to its vibration, and can lead us into new insights, new levels of awareness, and new patterns. A sound bath with tuning forks is often felt as deeply relaxing and rejuvenating, other worldly one could say. The sounds themselves create nitric oxide releases in the body which balances the autonomic nervous system. Some of the other benefits of nitric oxide release can include enhanced cell vitality, digestion regulation, and enhanced vascular flow among others. A sound bath is a journey into a field of peace and joy. It can feel much like dancing, though the body is still.`,
          `In a sound bath session, you, the client are laying down in a comfortable position. Blankets, pillows, or bolsters can be used to create supreme comfort. The sound bath is mostly a passive process for you, with the exception that at certain intervals, you will make gratitude statements. As I sound the tuning forks, your eyes are open or closed. The pairing of the gratitude practice with the sound helps to bring on a true state of gratitude. The vibration of gratitude is very high and becomes an attractor field for more things to be grateful for in life.`,
          `No two sessions are alike, all tuning forks are selected based on intuition and the presence of us both.`,
          <>“Tuning forks are effortless ways of empowering change in our life. Their tones are archetypal ideas which spiral around a still point. When we hear them, we are drawn into a still point, and our nervous system naturally shifts into a new tone”<br/>
          ~Dr. John Beaulieu</>
        ]}
      />
      <Divider showLogo={false} />
      <p>
        Some say the world and everything in it is held together by sound. Sound healing is so simple yet so profound. I fall in love with it each and every time.
      </p>
    </div>
  </Layout>
);

export default SoundHealing;
