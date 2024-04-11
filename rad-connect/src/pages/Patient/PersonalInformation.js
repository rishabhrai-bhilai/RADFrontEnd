import React, { useState } from "react";
import "./PersonalInformation.css";
import {
  DATA_HOST,
  DATA_PORT,
  IMAGES_HOST,
  IMAGES_PORT,
  CHAT_HOST,
  CHAT_PORT,
} from "../../constants";

function PersonalInformation({ username, uid }) {
  console.log(username);
  console.log(uid);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [allergies, setAllergies] = useState("");
  const [currMed, setCurrMed] = useState("");
  const [pastMed, setPastMed] = useState("");
  const [chronicDiseases, setChronicDiseases] = useState("");
  const [smokingHabit, setSmokingHabit] = useState("");
  const [drinkingHabit, setDrinkingHabit] = useState("");
  const [food, setFood] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [responseMessage,setResponseMessage]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      firstName,
      middleName,
      lastName,
      phone,
      dob,
      address,
      city,
      state,
      pincode,
      height,
      weight,
      bloodGroup,
      gender,
      allergies,
      currMed,
      pastMed,
      chronicDiseases,
      smokingHabit,
      drinkingHabit,
      food,
    });

    const formData = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      phoneNumber: phone,
      dateOfBirth: dob,
      email: username,
      address: address,
      city: city,
      state: state,
      pinCode: pincode,
      height: height,
      weight: weight,
      bloodGroup: bloodGroup,
      gender: gender,
      allergies: allergies,
      currentMedication: currMed,
      pastMedication: pastMed,
      chronicDiseases: chronicDiseases,
      smokingHabits: smokingHabit,
      drinkingHabits: drinkingHabit,
      foodPreferences: food,
      emergencyContact: emergencyContact,
      userId: uid,
    };

    try {
      const response = await fetch(
        "http://" + DATA_HOST + ":" + DATA_PORT + "/teleRadiology/addPatient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Data saved successfully");
      setResponseMessage("Patient Registered");
    } catch (error) {
      console.error("There was a problem saving the data:", error);
    }
  };

  return (
    <>
      <div className="formHeadings">
        <div className="headings-true">Personal Information</div>
      </div>
      <form className="personalInfoForm" onSubmit={handleSubmit}>
        <div className="threePartRow">
          <div className="item">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              id="middleName"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="item">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="twoPartRow">
          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder={username} disabled />
          </div>
          <div className="item">
            <label htmlFor="dob">Date of Birth*</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="twoPartRow">
          <div className="item">
            <label htmlFor="phone">Phone*</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="emergencyContact">Emergency Contact*</label>
            <input
              type="text"
              id="emergencyContact"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="onePartRow">
          <div className="item">
            <label htmlFor="address">Address*</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="threePartRow">
          <div className="item">
            <label htmlFor="city">City*</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="state">State*</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="pincode">Pincode*</label>
            <input
              type="text"
              id="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="fourPartRow">
          <div className="item">
            <label htmlFor="height">Height*</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="weight">Weight*</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="bloodgroup">Blood Group*</label>
            <select
              name="bloodgroup"
              id="bloodgroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            >
              <option value="">-Select-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="gender">Gender*</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">-Select-</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        {/* </form> */}

        <div className="formHeadings">
          <div className="headings-true">Medical</div>
        </div>
        {/* <form className='personalInfoForm'> */}
        <div className="onePartRow">
          <div className="item">
            <label htmlFor="allergies">Allergies*</label>
            <input
              type="text"
              id="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </div>
        </div>
        <div className="onePartRow">
          <div className="item">
            <label htmlFor="currentMedications">Current Medications*</label>
            <input
              type="text"
              id="currentMedications"
              value={currMed}
              onChange={(e) => setCurrMed(e.target.value)}
            />
          </div>
        </div>
        <div className="onePartRow">
          <div className="item">
            <label htmlFor="pasttMedications">Past Medications*</label>
            <input
              type="text"
              id="pasttMedications"
              value={pastMed}
              onChange={(e) => setPastMed(e.target.value)}
            />
          </div>
        </div>
        <div className="onePartRow">
          <div className="item">
            <label htmlFor="chronicDiseases">Chronic Diseases*</label>
            <input
              type="text"
              id="chronicDiseases"
              value={chronicDiseases}
              onChange={(e) => setChronicDiseases(e.target.value)}
            />
          </div>
        </div>
        {/* </form> */}

        <div className="formHeadings">
          <div className="headings-true">Lifestyle</div>
        </div>
        {/* <form className='personalInfoForm'>            */}
        <div className="onePartRow">
          <div class="smoking-button-group">
            <div>Smoking Habits:</div>
            <input
              type="radio"
              name="smokingHabit"
              id="never"
              value="never"
              checked={smokingHabit === "never"}
              onChange={(e) => setSmokingHabit(e.target.value)}
            />
            <label htmlFor="never">Never</label>
            <input
              type="radio"
              name="smokingHabit"
              id="1-2/day"
              value="1-2/day"
              checked={smokingHabit === "1-2/day"}
              onChange={(e) => setSmokingHabit(e.target.value)}
            />
            <label htmlFor="1-2/day">1-2/day</label>
            <input
              type="radio"
              name="smokingHabit"
              id="3-5/day"
              value="3-5/day"
              checked={smokingHabit === "3-5/day"}
              onChange={(e) => setSmokingHabit(e.target.value)}
            />
            <label htmlFor="3-5/day">3-5/day</label>
            <input
              type="radio"
              name="smokingHabit"
              id="sometimes"
              value="sometimes"
              checked={smokingHabit === "sometimes"}
              onChange={(e) => setSmokingHabit(e.target.value)}
            />
            <label htmlFor="sometimes">Sometimes</label>
            <input
              type="radio"
              name="smokingHabit"
              id="moreThan5"
              value="moreThan5"
              checked={smokingHabit === "moreThan5"}
              onChange={(e) => setSmokingHabit(e.target.value)}
            />
            <label htmlFor="moreThan5">More than 5</label>
            <input
              type="radio"
              name="smokingHabit"
              id="quit"
              value="quit"
              checked={smokingHabit === "quit"}
              onChange={(e) => setSmokingHabit(e.target.value)}
            />
            <label htmlFor="quit">I've Quit</label>
          </div>
        </div>
        <div className="onePartRow">
          <div class="drinking-button-group">
            <div>Drinking Habits:</div>
            <input
              type="radio"
              name="drinkingHabit"
              id="never1"
              value="never"
              checked={drinkingHabit === "never"}
              onChange={(e) => setDrinkingHabit(e.target.value)}
            />
            <label htmlFor="never1">Never</label>
            <input
              type="radio"
              name="drinkingHabit"
              id="regular"
              value="regular"
              checked={drinkingHabit === "regular"}
              onChange={(e) => setDrinkingHabit(e.target.value)}
            />
            <label htmlFor="regular">Regular</label>
            <input
              type="radio"
              name="drinkingHabit"
              id="social"
              value="social"
              checked={drinkingHabit === "social"}
              onChange={(e) => setDrinkingHabit(e.target.value)}
            />
            <label htmlFor="social">Social</label>
            <input
              type="radio"
              name="drinkingHabit"
              id="sometimes1"
              value="sometimes"
              checked={drinkingHabit === "sometimes"}
              onChange={(e) => setDrinkingHabit(e.target.value)}
            />
            <label htmlFor="sometimes1">Sometimes</label>
            <input
              type="radio"
              name="drinkingHabit"
              id="heavy"
              value="heavy"
              checked={drinkingHabit === "heavy"}
              onChange={(e) => setDrinkingHabit(e.target.value)}
            />
            <label htmlFor="heavy">Heavy</label>
            <input
              type="radio"
              name="drinkingHabit"
              id="quit1"
              value="quit"
              checked={drinkingHabit === "quit"}
              onChange={(e) => setDrinkingHabit(e.target.value)}
            />
            <label htmlFor="quit1">I've Quit</label>
          </div>
        </div>
        <div className="onePartRow">
          <div class="food-button-group">
            <div>Food Preferences:</div>
            <input
              type="radio"
              name="food"
              id="vegan"
              value="vegan"
              checked={food === "vegan"}
              onChange={(e) => setFood(e.target.value)}
            />
            <label htmlFor="vegan">Vegan</label>
            <input
              type="radio"
              name="food"
              id="vegetarian"
              value="vegetarian"
              checked={food === "vegetarian"}
              onChange={(e) => setFood(e.target.value)}
            />
            <label htmlFor="vegetarian">Vegetarian</label>
            <input
              type="radio"
              name="food"
              id="eggetarian"
              value="eggetarian"
              checked={food === "eggetarian"}
              onChange={(e) => setFood(e.target.value)}
            />
            <label htmlFor="eggetarian">Eggetarian</label>
            <input
              type="radio"
              name="food"
              id="Non-Veg"
              value="Non-Veg"
              checked={food === "Non-Veg"}
              onChange={(e) => setFood(e.target.value)}
            />
            <label htmlFor="Non-Veg">Non-Veg</label>
          </div>
        </div>

        <div className="footer">
          <button className="footButtons" type="submit">
            Back To Login
          </button>
          <button className="footButtons" type="submit">
            Submit
          </button>
        </div>
        {responseMessage.length > 0 && <div>{responseMessage}</div>}
      </form>
    </>
  );
}

export default PersonalInformation;