import React from "react";

const UserData = ({ userData }) => {
  return (
    <div className="user-data">
      <div>
        <label className="label">IP Address</label>
        <div className="data">{userData.ip}</div>
      </div>
      <div>
        <label className="label">Location</label>
        <div className="data">
          {userData.city}, {userData.country} {userData.postalCode}
        </div>
      </div>
      <div>
        <label className="label">Timezone</label>
        <div className="data">UTC {userData.timezone}</div>
      </div>
      <div>
        <label className="label">ISP</label>
        <div className="data">{userData.isp}</div>
      </div>
    </div>
  );
};

export default UserData;
