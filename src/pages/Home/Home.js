import React from "react";
import FormHeader from "../../components/FormHeader/FormHeader";
import MainForm from "../../components/MainForm/MainForm";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import Facilities from "../../components/Facilities/Facilities";
import Destinations from "../../components/Destinations/Destinations";
import FilterTab from "../../components/FilterTab/FilterTab";
import News from "../../components/News/News";
import GoTop from "../../components/GoTop/GoTop";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <main>
        <BackgroundVideo>
          <MainForm
            suggestions={[
              "Alligator",
              "Allbracadbra",
              "Bask",
              "Crocodilian",
              "Death Roll",
              "Eggs",
              "Jaws",
              "Reptile",
              "Solitary",
              "Tail",
              "Wetlands",
              "Tokyo, Prefecture"
            ]}
          >
            <FormHeader />
          </MainForm>
        </BackgroundVideo>
        <Destinations>
          <FilterTab />
        </Destinations>
        {/* <Facilities /> */}
        <GoTop scrollStepInPx="80" delayInMs="12.66" />
        <Newsletter />
        <News />
        <Footer />
      </main>
    );
  }
}

export default Home;
