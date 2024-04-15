import React from "react";
import "../Patient/ProfileCard.css";

const ProfileCard = () => {
  return (
    <>
      <div className="wrapper">
        <div className="img-area">
          <div className="inner-area">
            <img
              src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>


        <div className="icon arrow">
            <span class="fa fa-star checked">
              <i class="bx bx-star"></i>
              5.0
            </span>
        </div>

        

        <div className="icon dots">
          <i class="bx bx-heart"></i>
          {/* <i class='bx bx-dots-vertical-rounded'></i> */}
        </div>
        <div className="name">Dr. John Doe</div>
        <div className="about">City Hospital</div>
        <div className="specialist">cardiologist</div>

        <div className="buttons">
          <button>
            <i class="bx bx-notepad"></i>Availablity
          </button>
          <button>
            <i class="bx bx-phone-call"></i> Make a Call
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
