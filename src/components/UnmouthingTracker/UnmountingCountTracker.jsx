import React from "react";
import "./UnmountingCountTracker.css";

export default class UnmountingCountTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { id: 1, isHidden: false, mounted: 0 },
        { id: 2, isHidden: false, mounted: 0 },
        { id: 3, isHidden: false, mounted: 0 },
        { id: 4, isHidden: false, mounted: 0 },
        { id: 5, isHidden: true, mounted: 0 },
        { id: 6, isHidden: false, mounted: 0 },
        { id: 7, isHidden: false, mounted: 0 },
      ],
      isReportBoxShow: false,
    };
  }

  handleClose = (e) => {
    this.setState((prevState) => ({
      cards: prevState.cards.map((el) =>
        el.id === +e.target.id
          ? { ...el, isHidden: true, mounted: el.mounted + 1 }
          : el
      ),
    }));
  };

  handleOpen = (e) => {
    this.setState((prevState) => ({
      cards: prevState.cards.map((el) =>
        el.id === +e.target.id ? { ...el, isHidden: false } : el
      ),
    }));
  };

  handleReport = () => {
    this.setState({
      isReportBoxShow: true,
    });
  };

  render() {
    return (
      <div>
        <h1>Unmounting Count Tracker</h1>
        <div className="wrapper">
          <div className="cardContainer">
            {this.state.cards.map((el) => {
              if (!el.isHidden) {
                return (
                  <div className="cardBox" id={el.id} key={el.id}>
                    {el.id}
                    <button id={el.id} onClick={this.handleClose}>
                      X
                    </button>
                  </div>
                );
              } else {
                return (
                  <button onClick={this.handleOpen} id={el.id}>
                    show
                  </button>
                );
              }
            })}
          </div>
          <button onClick={this.handleReport}>Get Report</button>
          <section>
            <div>
              {this.state.isReportBoxShow && (
                <div className="reportBox">
                  {this.state.cards.map((el) => {
                    return (
                      <p key={el.id}>
                        Cart no: {el.id} mounted {el.mounted} times
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
