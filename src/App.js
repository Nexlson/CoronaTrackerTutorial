import React, { Component } from "react";
// import Cards from "./components/Cards/Cards";
// import Charts from "./components/Charts/Charts";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchdata } from "./api";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchdata();
    this.setState({
      data,
    });
  }

  handleCountryChange = async (country) => {
    const data = await fetchdata(country);
    this.setState({
      data,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <br />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
