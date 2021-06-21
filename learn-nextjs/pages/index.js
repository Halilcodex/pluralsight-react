import React from 'react';
import DigitalClock from '../src/DigitalClock';

class Index extends React.Component {

    static async getInitialProps () {
        return ({
            time: new Date().toISOString()
        })
    }

    constructor(props) {
        super(props);
        
        this.state = {
            time: props.time
        }
    }

    tick () {
        this.setState({
            time: new Date().toISOString()
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            return this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render () {
        return <div>
            <h1>Welcome to Next js</h1>
            <hr/>
            <br />
            <DigitalClock time={this.state.time}></DigitalClock>
        </div>
    }
}

export default Index