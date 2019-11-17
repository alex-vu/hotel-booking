import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";

class HotelDetail extends React.Component {
  state = {};

  componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(this.props.location.state.item);
  }

  render() {
    const { fields } = this.props.location.state.item;
    return (
      // <div className="container grid">
      //   <h3>{fields.name}</h3>
      //   <h4>{fields.price}$</h4>
      //   <h4>{fields.type}</h4>
      //   <div>{fields.description}</div>
      // </div>
      <main>
        <section className="hotel-detail">
          <Breadcrumb textColor="text-dark" />
          <div className="detail-wrapper">
            <div className="container grid">
              <div className="columns">
                <div className="column col-3 col-xl-4 col-lg-12">col 3</div>
                <div className="column col-9 col-xl-8 col-lg-12">col 9</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

export default HotelDetail;
