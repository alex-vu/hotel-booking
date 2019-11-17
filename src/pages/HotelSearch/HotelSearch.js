import React from "react";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MainForm from "../../components/MainForm/MainForm";
import Hero from "../../components/Hero/Hero";
import Tabs from "../../components/Tabs/Tabs";
import HotelList from "../../components/HotelList/HotelList";
import HotelFilter from "../../components/HotelFilter/HotelFilter";

import ImageFile from "../../ImageFile";
import datas from "../../data";

class HotelSearch extends React.Component {
  state = {};

  handleCheckedValue = checkedValue => {
    console.log(checkedValue);
    datas.forEach(data => {
      if (data.fields.type === checkedValue) {
        return console.log(data);
      }
    });
  };

  showFilter = e => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <main>
        <section className="hotel-search-top">
          <div className="container grid">
            <Breadcrumb textColor="text-dark" />
            <Hero hero="hotel-hero">
              <div className="columns">
                <div className="column col-3 col-xl-12">
                  <img src={ImageFile.mapG[0]} alt="" />
                </div>
                <div className="column col-9 col-xl-12 flex-center">
                  <MainForm
                    inputClass="shelf-container"
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
                  />
                </div>
              </div>
            </Hero>
          </div>
        </section>
        <section className="hotel-search bg-gray">
          <div className="container grid">
            <div className="columns">
              <div className="column col-3 col-xl-4 col-lg-12">
                <HotelFilter handleCheckedValue={this.handleCheckedValue} />
              </div>
              <div className="column col-9 col-xl-8 col-lg-12">
                <h3>Tokyo: 697 properties found</h3>
                <section className="hotel-filter">
                  <Tabs>
                    <div label="Price (Low to High)">
                      <HotelList datas={datas} />
                    </div>
                    <div label="Star rating">2</div>
                    <div label="Room type">3</div>
                  </Tabs>
                </section>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

export default HotelSearch;
