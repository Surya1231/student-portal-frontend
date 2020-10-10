import { branchNames, branchCodes, semesters, subjects } from '../../data/notes';

const initialState = {
  branchNames,
  branchCodes,
  semesters,
  subjects,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
