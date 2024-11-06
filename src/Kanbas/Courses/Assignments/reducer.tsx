import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; // Import initial assignments data

// Define the initial state with assignments from the database
const initialState = {
  assignments: assignments,
};

// Create the slice for assignments
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Add a new assignment
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableDate: assignment.availableDate,
        untilDate: assignment.untilDate,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    // Delete an assignment by ID
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },

    // Update an assignment by ID
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },

    // Set editing mode for a specific assignment by ID
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});

// Export actions and reducer
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
