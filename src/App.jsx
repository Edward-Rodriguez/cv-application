import { useState } from 'react';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import { validateProfile, normalizeString } from './utils/validation';
import { SECTIONS } from './consts/headings';
import { CSS_CLASSES, USER_FIELDS } from './consts/input';
import WorkExperience from './components/WorkExperience';
import Template from './components/Template';
import {
  initPersonalDetails,
  initEduEntry,
  initWorkEntry,
} from './consts/initValues';

function App() {
  const [profile, setProfile] = useState(initPersonalDetails);

  // state variable to control which section is displayed, each index represents a section, index is updated on submit button
  const [activeIndex, setActiveIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [activeEducationIndex, setActiveEdcationIndex] = useState(0);
  const [activeWorkExpIndex, setactiveWorkExpIndex] = useState(0);

  function handleOnChange(e) {
    const input = e.target;
    const updatedProfile = { ...profile, [input.id]: input.value };
    setProfile(updatedProfile);
    if (attemptedSubmit) {
      const newErrors = validateProfile(updatedProfile);
      setErrors(newErrors);
    }
  }

  /**
   * used to update profile properties that contain an array of objects
   * Ex: education, workexperience properties
   * category: profile key that is being updated, Ex: education
   * entryIndex: index of object in the array to be updated
   */
  function handleProfileArrayChange(e, category, entryIndex) {
    const { id, value } = e.target;
    setProfile((prevProfile) => {
      const entries = [...prevProfile[category]];
      if (!entries[entryIndex]) {
        entries[entryIndex] = createEntry(category);
      }
      entries[entryIndex] = {
        ...entries[entryIndex],
        [id]: value,
      };
      return {
        ...prevProfile,
        [category]: entries,
      };
    });
  }

  function createEntry(category) {
    const baseEntry =
      category === USER_FIELDS.EDUCATION ? initEduEntry : initWorkEntry;
    return {
      ...baseEntry,
      id: crypto.randomUUID(),
    };
  }

  function handleNextStep(e) {
    e.preventDefault();
    const newErrors = validateProfile(profile);
    if (Object.keys(newErrors).length === 0) {
      setActiveIndex(activeIndex + 1);
    } else {
      setErrors(newErrors);
    }
    setAttemptedSubmit(true);
  }

  function handlePrevious(e) {
    e.preventDefault();
    setActiveIndex(activeIndex - 1);
    setAttemptedSubmit(false);
    console.log(profile);
  }

  function handleClearForm(category, indexToUpdate) {
    const educationKey = USER_FIELDS.EDUCATION;
    const workKey = USER_FIELDS.WORK_EXPERIENCE;
    const personalDetailsKey = normalizeString(SECTIONS.PERSONAL_DETAILS);
    if (category === personalDetailsKey) {
      setProfile({
        ...initPersonalDetails,
        [educationKey]: [...profile[educationKey]],
        [workKey]: [...profile[workKey]],
      });
    } else {
      setProfile({
        ...profile,
        [category]: profile[category].filter(
          (_, index) => index !== indexToUpdate,
        ),
      });
    }
  }

  return (
    <>
      <section className={CSS_CLASSES.FORM_SECTION}>
        <form>
          {/* <!------- Personal Information Section -------> */}
          <PersonalDetails
            title={SECTIONS.PERSONAL_DETAILS}
            id={normalizeString(SECTIONS.PERSONAL_DETAILS)}
            isActive={activeIndex === 0}
            onChange={handleOnChange}
            onClick={handleNextStep}
            onClear={handleClearForm}
            errors={errors}
            profile={profile}
          />
          {/* <!-- Education Section --> */}
          <Education
            title={SECTIONS.EDUCATION}
            id={normalizeString(SECTIONS.EDUCATION, '')}
            isActive={activeIndex === 1}
            activeEduIndex={activeEducationIndex}
            setActiveEduIndex={setActiveEdcationIndex}
            onClick={handleNextStep}
            onPrevious={handlePrevious}
            onClear={handleClearForm}
            profile={profile}
            onChange={(e) =>
              handleProfileArrayChange(
                e,
                USER_FIELDS.EDUCATION,
                activeEducationIndex,
              )
            }
          />
          {/* <!------- Work Experience Section -------> */}
          <WorkExperience
            title={SECTIONS.WORK_EXPERIENCE}
            id={normalizeString(SECTIONS.WORK_EXPERIENCE, '')}
            isActive={activeIndex === 2}
            activeWorkIndex={activeWorkExpIndex}
            setActiveWorkIndex={setactiveWorkExpIndex}
            onClick={handleNextStep}
            onPrevious={handlePrevious}
            onClear={handleClearForm}
            profile={profile}
            onChange={(e) =>
              handleProfileArrayChange(
                e,
                USER_FIELDS.WORK_EXPERIENCE,
                activeWorkExpIndex,
              )
            }
          />
        </form>
      </section>
      <section className={CSS_CLASSES.TEMPLATE}>
        <Template
          profile={profile}
          isActive={activeIndex === 3}
          onPrevious={handlePrevious}
        />
      </section>
    </>
  );
}

export default App;
