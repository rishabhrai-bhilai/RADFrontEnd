import React, { useState } from 'react'
import './PersonalInformation.css';

function PersonalInformation() {
  return (
    <>
        <div className='formHeadings'>
            <div className='headings-true'>Personal Information</div>
        </div>
        <form className='personalInfoForm'>
            <div className='threePartRow'>
                <div className='item'>
                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" id="firstName" required />
                </div>
                <div className='item'>
                    <label htmlFor="middleName">Middle Name*</label>
                    <input type="text" id="middleName" required />
                </div>
                <div className='item'>
                    <label htmlFor="lastName">Last Name*</label>
                    <input type="text" id="lastName" required />
                </div>
            </div>
            <div className='threePartRow'>
                <div className='item'>
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" required />
                </div>
                <div className='item'>
                    <label htmlFor="phone">Phone*</label>
                    <input type="text" id="phone" required />
                </div>
                <div className='item'>
                    <label htmlFor="dob">Date of Birth*</label>
                    <input type="date" id="dob" required />
                </div>
            </div>
            <div className='onePartRow'>
                <div className='item'>
                    <label htmlFor="address">Address*</label>
                    <input type="text" id="address" required />
                </div>
            </div>
            <div className='threePartRow'>
                <div className='item'>
                    <label htmlFor="state">State*</label>
                    <input type="text" id="state" required />
                </div>
                <div className='item'>
                    <label htmlFor="city">City*</label>
                    <input type="text" id="city" required />
                </div>
                <div className='item'>
                    <label htmlFor="pincode">Pincode*</label>
                    <input type="text" id="pincode" required />
                </div>
            </div>
            <div className='fourPartRow'>
                <div className='item'>
                    <label htmlFor="height">Height*</label>
                    <input type="text" id="height" required />
                </div>
                <div className='item'>
                    <label htmlFor="weight">Weight*</label>
                    <input type="text" id="weight" required />
                </div>
                <div className='item'>
                    <label htmlFor="bloodgroup">Blood Group*</label>
                    {/* <input type="text" id="bloodgroup" required /> */}
                    <select name="bloodgroup" id="bloodgroup">
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
                <div className='item'>
                    <label htmlFor="gender">Gender*</label>
                    <select name="gender" id="gender">
                        <option value="">-Select-</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
        </form>
    </>
  )
}

export default PersonalInformation