import { useState } from 'react';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import { validateProfile, normalizeString } from './utils/validation';
import { SECTIONS } from './consts/headings';
import { CSS_CLASSES, USER_FIELDS } from './consts/input';

function App() {
  const [profile, setProfile] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    address: '',
    zipcode: '',
    citytown: '',
    linkedin: '',
    website: '',
    education: [{}],
  });

  // state variable to control which section is displayed, each index represents a section, index is updated on submit button
  const [activeIndex, setActiveIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [activeEducationIndex, setActiveEdcationIndex] = useState(0);

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
   * Map the designated profile property that has an array,
   * Update the object at the given index with new value
   */
  function updateProfileArray(
    profileKey,
    fieldToUpdate,
    newValue,
    indexToUpdate,
  ) {
    return profile[profileKey].map((edu, index) =>
      index === indexToUpdate ? { ...edu, [fieldToUpdate]: newValue } : edu,
    );
  }

  function handleProfileArrayChange(e, section, sectionIndex) {
    const input = e.target;
    const updatedProfile = {
      ...profile,
      [section]: updateProfileArray(
        section,
        input.id,
        input.value,
        sectionIndex,
      ),
    };
    setProfile(updatedProfile);
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
            onSubmit={handleNextStep}
            errors={errors}
          />
          {/* <!-- Education Section --> */}
          <Education
            title={SECTIONS.EDUCATION}
            id={normalizeString(SECTIONS.EDUCATION, '')}
            isActive={activeIndex === 1}
            onChange={(e) =>
              handleProfileArrayChange(
                e,
                USER_FIELDS.EDUCATION,
                activeEducationIndex,
              )
            }
            onSubmit={handleNextStep}
            onPrevious={handlePrevious}
            errors={errors}
          />
        </form>
      </section>
    </>
  );
}

export default App;
