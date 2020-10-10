import React, { Component } from 'react';
import { getNotesFromServer } from '../../server/server';
import NotesForm from './NotesForm';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: false,
      branch: '',
      semester: '',
      subject: '',
      formErrors: {},
      notesData: null,
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getNotes = async () => {
    const formErrors = {};
    const { branch, semester, subject } = this.state;
    if (!branch || !semester || !subject) {
      if (!branch) formErrors.branch = 'Please select branch';
      if (!semester) formErrors.semester = 'Please select semester';
      if (!subject) formErrors.subject = 'Please select subject';
      this.setState({ formErrors });
    } else {
      this.setState({ loading: true, formErrors: {}, error: null });
      const res = await getNotesFromServer(subject);
      const data = res;
      const { success } = res;
      if (success) {
        this.setState({ loading: false, notesData: data });
      } else {
        this.setState({ loading: false, error: 'There is some error' });
      }
    }
  };

  contribute = async (notes) => {
    return notes;
  };

  render() {
    const { branch, semester, subject, formErrors, loading } = this.state;
    const { error, notesData } = this.state;
    return (
      <div className="notes">
        <div className="row">
          <div className="col-md-3 border-right px-4 py-3">
            <NotesForm
              branch={branch}
              semester={semester}
              subject={subject}
              formErrors={formErrors}
              onInputChange={this.onInputChange}
              onSubmit={this.getNotes}
              disabled={loading}
            />
          </div>
          <div className="col-md-9">
            {!notesData && !loading && !error && 'Initial Stage'}
            {loading && 'Loading Here'}
            {error && 'Error Here'}
            {notesData && !loading && !error && 'Data Here'}
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
