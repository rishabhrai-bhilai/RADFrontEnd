import React from 'react'
import './AdminPageRegistrationForm.css'

const AdminPageRegistrationForm = () => {
  return (
    <>
    <div class="admin-form-container mx-8 shadow-md">
      {/* <div class="logo-container">
        New Doctor Registration
      </div> */}

      <form class="form">
        <div class="form-group">

        {/* <label for="email">Name</label> */}
        <input type="text" placeholder="Username" />

          {/* <label for="email">Email</label> */}
          <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
          {/* <label for="email">Name</label> */}
        <input type="text" placeholder="Username" />

          {/* <label for="email">Email</label> */}
          <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
        
          {/* <label for="email">Name</label> */}
        <input type="text" placeholder="Username" />

          {/* <label for="email">Email</label> */}
          <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
        
        </div>

        <button class="form-submit-btn" type="submit">Register</button>
      </form>

      
    </div>
    </>
  )
}

export default AdminPageRegistrationForm