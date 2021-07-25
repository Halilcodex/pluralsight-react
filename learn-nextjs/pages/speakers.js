import React from "react";
import axios from "axios";
import Speakers from "../src/Speakers";
import Link from "next/link";

class Index extends React.Component {
  static async getInitialProps() {
    const promise = axios
      .get("http://localhost:4000/speakers")
      .then((res) => {
        return {
          hasError: false,
          speakerData: res.data,
        };
      })
      .catch((err) => {
        return {
          hasError: true,
          message: err.message,
        };
      });
    return promise;
  }

  constructor(props) {
    super(props);

    this.state = {
      speakers: props.speakerData,
      message: props.message,
    };
  }

  render() {
    return (
      <Speakers speakers={this.state.speakers} message={this.state.message} />
    );
  }
}

export default Index;
