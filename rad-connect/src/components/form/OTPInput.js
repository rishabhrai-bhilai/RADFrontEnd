import React, { useState, useRef, useEffect } from 'react';
import './OTPInput.css'



function OTPInput({ length = 6,handleSubmit,setOtpValue }) {
  const [values, setValues] = useState(Array(length).fill(''));
  const inputRefs = useRef(Array(length).fill(null));

  useEffect(() => {
    inputRefs.current.forEach((input, index) => {
      input.dataset.index = index;
      input.addEventListener("keyup", handleOtp);
      input.addEventListener("paste", handleOnPasteOtp);
    });

    return () => {
      
    };
  }, [length]);

  const handleOtp = (e) => {
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < length - 1 && isValidInput) {
      input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
      input.previousElementSibling.focus();
    }

    if (fieldIndex == length - 1 && isValidInput) {
      // submit();
    }
  };

  const handleOnPasteOtp = (e) => {
    const data = e.clipboardData.getData("text");
    // setOtp(e.target.value);
    const value = data.split("");
    if (value.length === length) {
      inputRefs.current.forEach((input, index) => {
        input.value = value[index];
      });
      // submit();
    }
  };

  const onSubmit = (e) => {
    

    e.preventDefault();
    console.log("Submitting...");
    let otp = "";
    inputRefs.current.forEach((input) => {
      otp += input.value;
      input.disabled = true;
      input.classList.add("disabled");
    });
    console.log(otp);
    setOtpValue(otp);
    handleSubmit();
    // setOtp("");
  };


  // const submit = () => {
  //   console.log("Submitting...");
  //   let otp = "";
  //   inputRefs.current.forEach((input) => {
  //     otp += input.value;
  //     input.disabled = true;
  //     input.classList.add("disabled");
  //   });
  //   console.log(otp);
  //   if (onSubmit) {
  //     onSubmit(otp);
  //   }
  // };

  return (
    <div className='otp__container'>
      {/* <h1>Enter OTP</h1> */}
      <form onSubmit={onSubmit} >

        <div className="otp-field">
          {Array.from({ length }, (_, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              className='mx-1'
            />
          ))}
        </div>

        <button type="submit" className='submit-btn mt-2'>Submit</button>

      </form>
      
    </div>
  );
}

export default OTPInput;
