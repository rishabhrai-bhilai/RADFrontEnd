import React, { useState } from 'react'
import './PersonalInformation.css';

function MedicalInformation() {
  return (
    <>
        <div className='formHeadings'>
            {/* <div className='headings-true'>Personal Information</div> */}
            <div className='headings-true'>Medical</div>
            {/* <div className='headings'>Lifestyle</div> */}
        </div>
        <form className='personalInfoForm'>
            <div className='onePartRow'>
                <div className='item'>
                    <label htmlFor="allergies">Allergies*</label>
                    <input type="text" id="allergies" required />
                </div>
            </div>
            <div className='onePartRow'>
                <div className='item'>
                    <label htmlFor="currentMedications">Current Medications*</label>
                    <input type="text" id="currentMedications" required />
                </div>
            </div>
            <div className='onePartRow'>
                <div className='item'>
                    <label htmlFor="pasttMedications">Past Medications*</label>
                    <input type="text" id="pasttMedications" required />
                </div>
            </div>
            <div className='onePartRow'>
                <div className='item'>
                    <label htmlFor="chronicDiseases">Chronic Diseases*</label>
                    <input type="text" id="chronicDiseases" required />
                </div>
            </div>
        </form>
    </>
  )
}

export default MedicalInformation