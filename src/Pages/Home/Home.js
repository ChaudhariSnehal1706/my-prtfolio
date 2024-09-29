import React from "react";
import { ContactUsForm, FirstSection, ForthSection, Layout, SecondSection, TestComponent, ThirdSection } from "../../Components";

const Home = () => {
  return (
    <Layout>
      <FirstSection />

      {/* Divider */}
      <div class="elementor-divider relative lg:-top-32 -top-14">
        <span class="elementor-divider-separator"></span>
      </div>

      {/* Second Section */}
      <SecondSection />

      {/* Divider */}
      {/* <div class="elementor-divider2">
        <span class="elementor-divider-separator2"></span>
      </div> */}

      {/* Third Section */}
      <ThirdSection/>

      <ForthSection/>
      {/* <TestComponent/> */}

      <ContactUsForm/>

    </Layout>
  );
};

export default Home;
