import { configureStore } from '@reduxjs/toolkit';
import resumeSlice from '../redux/resumeSlice';

export default configureStore({
  reducer: {
    resume: resumeSlice,
  },
});
