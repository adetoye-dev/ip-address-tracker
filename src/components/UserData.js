import React, { useState } from "react";

const UserData = () => {
  return (
    <div className="user-data">
      <div>
        <label className="label">IP Address</label>
        <div className="data">192.212.174.101</div>
      </div>
      <div>
        <label className="label">Location</label>
        <div className="data">Brooklyn, NY 10001</div>
      </div>
      <div>
        <label className="label">Timezone</label>
        <div className="data">UTC - 05:00</div>
      </div>
      <div>
        <label className="label">ISP</label>
        <div className="data">SpaceX Starlink</div>
      </div>
    </div>
  );
};

export default UserData;
