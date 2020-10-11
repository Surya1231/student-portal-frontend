/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { FcPlus } from 'react-icons/fc';
import { AiFillMinusCircle } from 'react-icons/ai';
import { ErrorMessage } from '../common/Common';
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
        <hr />

        <div className="section">
          <div
            className="h4 border-bottom py-2 cursor-pointer"
            onClick={() => this.toggle('showNotes')}
          >
            <span className="float-right">
              {showNotes ? (
                <span className="text-danger">
                  <AiFillMinusCircle />
                </span>
              ) : (
                <FcPlus />
              )}
            </span>
            Notes
          </div>
          {showNotes && (
            <div className="row">
              {a.map(() => (
                <div className="col-lg-3 col-md-4 col-sm-6 px-0 py-0">
                  <NotesBox />
                </div>
              ))}
            </div>
          )}
        </div>
        <br />

        <div className="section">
          <div
            className="h4 border-bottom py-2 cursor-pointer"
            onClick={() => this.toggle('showLastYearQuestions')}
          >
            <span className="float-right">
              {showLastYearQuestions ? (
                <span className="text-danger">
                  <AiFillMinusCircle />
                </span>
              ) : (
                <FcPlus />
              )}
            </span>
            Last year Questions
          </div>
          {showLastYearQuestions && (
            <div className="row">
              {a.map(() => (
                <div className="col-lg-3 col-md-4 col-sm-6 px-0 py-0">
                  <NotesBox type="success" />
                </div>
              ))}
            </div>
          )}
        </div>
        <br />

        <div className="section">
          <div
            className="h4 border-bottom py-2 cursor-pointer"
            onClick={() => this.toggle('showImportantLinks')}
          >
            <span className="float-right">
              {showImportantLinks ? (
                <span className="text-danger">
                  <AiFillMinusCircle />
                </span>
              ) : (
                <FcPlus />
              )}
            </span>
            Important Links
          </div>
          {showImportantLinks && (
            <div className="px-3 pt-3">
              <div className="mx-auto" style={{ maxWidth: '400px' }}>
                <ErrorMessage message="Nothing Available Here! please Contribute" />
              </div>
            </div>
          )}
        </div>
        <br />
      </div>
    );
  }
}

export default NotesDisplay;
