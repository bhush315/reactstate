import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Initializing the state with Person object and show state.
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Henry Sparrow",
        bio: "A software developer with a passion for React.",
        imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Software Engineer",
      },
      shows: false,
      timeElapsed: 0, // Keeps track of the time since the component mounted
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  // Lifecycle method to set the interval after the component mounts
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000); // Update every second
  }

  // Clean up the interval when the component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Method to toggle the `shows` state
  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Conditionally render profile */}
        {shows && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>
              <strong>Profession:</strong> {profession}
            </p>
            <p>{bio}</p>
          </div>
        )}

        {/* Time interval since component mounted */}
        <p>Time since component mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
