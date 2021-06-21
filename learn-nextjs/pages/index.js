import React from "react";
import DigitalClock from "../src/DigitalClock";
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
          time: new Date().toISOString(),
        };
      })
      .catch((err) => {
        return {
          hasError: true,
          message: err.message,
          time: new Date().toISOString(),
        };
      });
    return promise;
  }

  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
      speakers: props.speakerData,
      message: props.message,
    };
  }

  tick() {
    this.setState({
      time: new Date().toISOString(),
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      return this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Welcome to Next js</h1>
          <Link href="/sessions">
            <a className="session-button">SESSIONS</a>
          </Link>
        </div>
        <hr />
        <br />
        <DigitalClock time={this.state.time}></DigitalClock>
        <Speakers speakers={this.state.speakers} message={this.state.message} />
      </div>
    );
  }
}

export default Index;
