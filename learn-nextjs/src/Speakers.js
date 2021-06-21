import React from "react";

class Speakers extends React.Component {
  render() {
    const speakers = this.props.speakers;
    const errorMsg = this.props.message;

    return (
      <div className="speakers">
        <ul>
          {speakers ? (
            speakers.map((item) => (
              <li key={item.id}>
                {item.firstName} <strong>{item.lastName}</strong>
              </li>
            ))
          ) : (
            <div>
                <h4>An error occured</h4>
                <p className="error">{errorMsg}</p>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default Speakers;
