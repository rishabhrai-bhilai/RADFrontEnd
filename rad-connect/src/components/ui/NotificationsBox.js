import React from "react";
import "./NotificationBox.css";

const NotificationsBox = () => {
  return (
    <div className="notify-container ">
      {/* <div class="bg-white w-48 h-64 rounded-lg">
        <div class="flex p-2 gap-1">
          <div class="">
            <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div class="circle">
            <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div class="circle">
            <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div class="card__content"></div>
      </div> */}

<div class="notify-card animate__animated animate__backInRight ">
  <div class="notify-img"></div>
  <div class="notify-textBox">
    <div class="notify-textContent">
      <p class="notify-h1">Clans of Clash</p>
      <span class="notify-span">12 min ago</span>
    </div>
    <p class="notify-p">Xhattmahs is not attacking your base!</p>
  <div>
</div></div></div>
    </div>
  );
};

export default NotificationsBox;
