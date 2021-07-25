import React from "react";
import DigitalClock from "../src/DigitalClock";
import Link from "next/link";

class Index extends React.Component {
  static async getInitialProps() {
    return { time: new Date().toISOString() };
  }

  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
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
            width: "70vw",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Welcome to Next js</h1>
          <div style={{display: "flex", justifyContent: "space-between", width: "25%"}}>
            <Link href="/sessions">
              <a className="session-button">SESSIONS</a>
            </Link>
            <Link href="/speakers">
              <a className="session-button">SPEAKERS</a>
            </Link>
          </div>
        </div>
        <hr />
        <br />
        <DigitalClock time={this.state.time}></DigitalClock>
      </div>
    );
  }
}

export default Index;
