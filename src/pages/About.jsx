import React from "react";
import HeroSection from "../components/HeroSection";
import HeroImg from "../assets/27.jpg";
import AboutTextComponent from "../components/AboutTextComponent";
const About = () => {
  return (
    <div>
      <HeroSection
        class_name={"hero_section"}
        hero_img={HeroImg}
        hero_text={"About"}
      />

      <AboutTextComponent
        heading={"Our History"}
        description={`“Travel is the main thing you purchase that makes you more extravagant”.
        We, at TripAway swear by this and put stock in satisfying travel dreams
        that make you perpetually rich constantly. We have been moving excellent
        encounters for a considerable length of time through our cutting-edge
        planned occasion bundles and other fundamental travel administrations.
        We rouse our clients to carry on with a rich life, brimming with
        extraordinary travel encounters. Through our exceptionally curated
        occasion bundles, we need to take you on an adventure where you
        personally enjoy the stunning magnificence of America and far-off
        terrains. We need you to observe sensational scenes that are a long way
        past your creative ability.`}
      />

      <AboutTextComponent
        heading={"Our Mission"}
        description={`Since our origin in 2006, in excess of 7 million clients have utilized
        at least one of our exhaustive travel-related administrations, which
        incorporate local and global air ticketing, lodging appointments,
        homestays, occasion bundles, transport ticketing, rail ticketing,
        exercises, and subordinate administrations. With more than 83,000 inns
        contracted crosswise over America, we are America’s biggest stage for
        residential lodgings. A solid and “believed” travel brand of America,
        our qualities incorporate a vast and faithful client base, a
        multi-channel stage for relaxation and business explorers, and a
        powerful portable eco-framework for a range of voyagers and providers. A
        solid innovation stage intended to convey an abnormal state of
        adaptability and advancement and a prepared senior supervisory crew,
        including industry officials with profound roots in the movement
        business in America and abroad.`}
      />

      <AboutTextComponent
        heading={"Our Vision"}
        description={`To guarantee that you have a satisfying occasion and healthy encounters,
        all our vacation administrations are available to your no matter what.
        On your universal occasion, we guarantee that you are very much
        outfitted with outside trade (Forex Cards, Currency Notes), visa, and
        travel protection. We are the pioneers of outside trade in America, and
        booking forex online is basic and advantageous for us. Our online visa
        administrations are exceptional and make the bulky procedure of booking
        visas a cake stroll for clients. We likewise give exceptional visa,
        forex, and travel protection and outside settlement administrations for
        understudies voyaging abroad for study. Regardless of whether it’s
        reserving flights or inns for your movement, Company Name offers
        everything under one umbrella. We likewise have journey occasions for
        individuals who are searching for solace and reasonable extravagance.`}
      />
    </div>
  );
};

export default About;
