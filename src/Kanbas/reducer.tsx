import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the enrollment state
interface EnrollmentState {
  enrollments: Record<string, boolean>; // Keyed by courseId, value is true if enrolled, false if not enrolled
}

const initialState: EnrollmentState = {
  enrollments: {}, // Initially, no courses are enrolled
};

// Create the enrollment slice
const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    // Enroll in a course
    enroll: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      state.enrollments[courseId] = true;
    },

    // Unenroll from a course
    unenroll: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      state.enrollments[courseId] = false;
    },
  },
});

// Export actions and reducer
export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
