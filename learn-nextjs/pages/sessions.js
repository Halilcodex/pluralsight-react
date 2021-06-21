import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Link from "next/link";

export default class Sessions extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  static async getInitialProps() {
    const promise = axios
      .get("http://localhost:4000/sessions")
      .then((res) => {
        return {
          hasError: false,
          sessionData: res.data,
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
      sessions: props.sessionData,
      message: props.message,
    };
  }

  render() {
    return (
      <div className="sessions">
        <Link href="/">
          <a
            className="session-button"
            style={{ position: "absolute", top: "50px" }}
          >
            Home
          </a>
        </Link>
        <ul>
          {this.state.sessions ? (
            this.state.sessions.map((item) => (
              <li key={item.id}>
                <b>{item.title}:</b> {item.descriptionShort}
              </li>
            ))
          ) : (
            <div>
              <h4>An error occured</h4>
              <p className="error">{this.state.message}</p>
            </div>
          )}
        </ul>
      </div>
    );
  }
}
