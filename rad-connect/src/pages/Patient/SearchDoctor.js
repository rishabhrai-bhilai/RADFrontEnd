import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProfileCard from "./ProfileCard";
import "../Patient/SearchDoctor.css";

import SearchBar from "../../components/ui/SearchBar";

function SearchDoctor() {
  return (
    <>
      <Navbar></Navbar>
      <section className="home">
        <div className="parent-container">
          <div className="all-items">
            <div className="static-dashboard-heading | text-blue-extradark">
              Search Doctor's
            </div>

            {/* fixed part end here */}

            <div className="search-profile">
              <div className="search-doctor">
                <SearchBar></SearchBar>
                <div></div>
              </div>
              <div className="search-options">
                <div class="search-options-button">
                <button class="btn-1">All</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Cardiologist</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Orthopedics</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Cardiologist</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Orthopedics</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Cardiologist</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Orthopedics</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Cardiologist</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Orthopedics</button>
                </div>
                <div class="search-options-button">
                <button class="btn-1">Dental</button>
                </div>
              </div>
            </div>

            <div className="profile-card-container">
              <div className="profile">
                <ProfileCard></ProfileCard>
              </div>

              <div className="profile">
                <ProfileCard></ProfileCard>
              </div>

              <div className="profile">
                <ProfileCard></ProfileCard>
              </div>

              <div className="profile">
                <ProfileCard></ProfileCard>
              </div>

              <div className="profile">
                <ProfileCard></ProfileCard>
              </div>

              <div className="profile">
                <ProfileCard></ProfileCard>
              </div>

              <div className="profile">
                <ProfileCard></ProfileCard>
              </div>

              <div className="profile">
                <ProfileCard></ProfileCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchDoctor;
