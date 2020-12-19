import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    name: '',
    image: '',
    about: '',
    location: '',
    experience: [],
    skills: [{
        name: 'Communication'
    }],
    references: [],
    education: [],
    contact: {
        email: 'princanurag07@gmail.com',
        secondaryEmail: '',
        phoneno: '9151514101'
    },
    socialMedia: {
        linkedIn: '',
        github: '',
        gitlab: '',
    }
 },
  reducers: {
    setName: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload;
    },
    setImage: (state, action) => {
        state.image = action.payload
    },
    setAbout: (state, action) => {
      state.about = action.payload
    },
    setLocation: (state, action) => {
        state.location = action.payload
      },
    setExperience: (state, action) => {
        state.experience = action.payload
    },
    setEducation: (state, action) => {
        state.education = action.payload
    },
    setSkills: (state, action) => {
        state.skills = action.payload
    },
    setReferences: (state, action) => {
        state.references = action.payload
    },
    setContact: (state, action) => {
       state.contact = {
           ...action.payload
       }
    },
    setSocialMedia: (state, action) => {
        state.socialMedia = {
            ...action.payload
        }
    }
  },
});

export const {
    setName,
    setImage,
    setAbout,
    setContact,
    setEducation,
    setReferences,
    setLocation,
    setExperience, 
    setSkills,
    setSocialMedia
 } = resumeSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// Reusme Functions
export const setNameState = name => dispatch => {
    dispatch(setName(name));
}

export const setImageState = image => dispatch => {
    dispatch(setImage(image));
}

export const setAboutState = about => dispatch => {
    dispatch(setAbout(about));
}

export const setContactState = contact => dispatch => {
    dispatch(setContact(contact));
}

export const setEducationState = education => dispatch => {
    dispatch(setEducation(education));
}

export const setReferencesState = references => dispatch => {
    dispatch(setReferences(references));
}
export const setLocationState = location => dispatch => {
    dispatch(setLocation(location));
}
export const setExperienceState = experience => dispatch => {
    dispatch(setExperience(experience));
}

export const setSkillsState = skills => dispatch => {
    dispatch(setSkills(skills));
}
export const setSocialMediaState = socialMedia => dispatch => {
    dispatch(setSocialMedia(socialMedia));
}



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const getResume = state => state.resume

export const getName = state => state.resume.name;

export default resumeSlice.reducer;
