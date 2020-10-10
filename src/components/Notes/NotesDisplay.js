/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import NotesBox from './NotesBox';

class NotesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotes: true,
      showLastYearQuestions: true,
      showImportantLinks: true,
    };
  }

  toggle = (property) => {
    const oldProperty = this.state[property];
    this.setState({ [property]: !oldProperty });
  };

  render() {
    const a = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    const { showNotes, showLastYearQuestions, showImportantLinks } = this.state;
    return (
      <div className="notes-display">
        <h3 className="text-center text-primary pt-2"> ECT 303 </h3>
        <h4 className="cursor-pointer" onClick={() => this.toggle('showNotes')}>
          Notes
          <span className="float-right">{showNotes ? '^' : 'D'}</span>
        </h4>
        <hr />
        {showNotes && (
          <div className="row">
            {a.map(() => (
              <div className="col-lg-3 col-md-4 col-sm-6 px-0 py-0">
                <NotesBox />
              </div>
            ))}
          </div>
        )}
        <br />

        <h4 className="cursor-pointer" onClick={() => this.toggle('showLastYearQuestions')}>
          Last year Question papers
          <span className="float-right">{showLastYearQuestions ? '^' : 'D'}</span>
        </h4>
        <hr />
        {showLastYearQuestions && (
          <div className="row">
            {a.map(() => (
              <div className="col-lg-3 col-md-4 col-sm-6 px-0 py-0">
                <NotesBox />
              </div>
            ))}
          </div>
        )}
        <br />

        <h4 className="cursor-pointer" onClick={() => this.toggle('showImportantLinks')}>
          Important Links
          <span className="float-right">{showImportantLinks ? '^' : 'D'}</span>
        </h4>
        <hr />
        {showImportantLinks && (
          <div className="">
            <div className="px-4 text-center py-3 text-danger font-weight-bold border border-danger">
              <h6>Nothing Availabe Here !! Please Contribute to help others </h6>
            </div>
          </div>
        )}
        <br />
      </div>
    );
  }
}

export default NotesDisplay;
