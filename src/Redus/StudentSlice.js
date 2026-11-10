import { createSlice } from "@reduxjs/toolkit";

// Step 1: Initial State
const initialState = {
  students: [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 }
  ]
};

// Step 2: Create Slice
const studentSlice = createSlice({
  name: "students",

  initialState,


  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },

    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    }
  }
});

// Step 4: Export Actions
export const { addStudent, deleteStudent } =
  studentSlice.actions;

// Step 5: Export Reducer
export default studentSlice.reducer;