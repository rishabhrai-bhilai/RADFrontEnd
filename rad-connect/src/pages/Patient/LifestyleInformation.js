import React, { useState } from 'react'
import './PersonalInformation.css';

function LifestyleInformation() {
  return (
    <>
        <div className='formHeadings'>
            {/* <div className='headings-true'>Personal Information</div>
            <div className='headings-true'>Medical</div> */}
            <div className='headings-true'>Lifestyle</div>
        </div>
        <form className='personalInfoForm'>           
            <div className='onePartRow'>
                <div class="smoking-button-group">
                    <div>Smoking Habits:</div>
                    <input type="radio" name="option" id="never" value="never" />
                    <label for="never">Never</label>
                    <input type="radio" name="option" id="1-2" value="1-2" />
                    <label for="1-2">1-2/day</label>
                    <input type="radio" name="option" id="3-5" value="3-5" />
                    <label for="3-5">3-5/day</label>
                    <input type="radio" name="option" id="sometimes" value="sometimes" />
                    <label for="sometimes">Sometimes</label>
                    <input type="radio" name="option" id="more5" value="more5" />
                    <label for="more5">More than 5</label>
                    <input type="radio" name="option" id="quit" value="quit" />
                    <label for="quit">I've Quit</label>
                </div>
            </div>
            <div className='onePartRow'>
                <div class="drinking-button-group">
                    <div>Drinking Habits:</div>
                    <input type="radio" name="option1" id="never1" value="never" />
                    <label for="never1">Never</label>
                    <input type="radio" name="option1" id="regular" value="regular" />
                    <label for="regular">Regular</label>
                    <input type="radio" name="option1" id="social" value="social" />
                    <label for="social">Social</label>
                    <input type="radio" name="option1" id="sometimes1" value="sometimes" />
                    <label for="sometimes1">Sometimes</label>
                    <input type="radio" name="option1" id="heavy" value="heavy" />
                    <label for="heavy">Heavy</label>
                    <input type="radio" name="option1" id="quit1" value="quit" />
                    <label for="quit1">I've Quit</label>
                </div>
            </div>
            <div className='onePartRow'>    
                <div class="food-button-group">
                    <div>Food Preferences:</div>
                    <input type="radio" name="option2" id="vegan" value="vegan" />
                    <label for="vegan">Vegan</label>
                    <input type="radio" name="option2" id="vegetarian" value="vegetarian" />
                    <label for="vegetarian">Vegetarian</label>
                    <input type="radio" name="option2" id="eggetarian" value="eggetarian" />
                    <label for="eggetarian">Eggetarian</label>
                    <input type="radio" name="option2" id="Non-Veg" value="Non-Veg" />
                    <label for="Non-Veg">Non-Veg</label>
                </div>
            </div>
        </form>
    </>
  )
}

export default LifestyleInformation