import React, { useEffect, useCallback, useState } from "react";
import { getUsersList } from "../../redux/actions/RegisterActions";
import { connect } from "react-redux";

const UserList = (props) => {
  const { userList,getUserList } = props;
  console.log('userList','render')

  return (
    <div>
        <div>
        <button onClick={getUserList}>Display Records</button>
      </div>
      {userList &&
        userList.length > 0 &&
        userList.map((item,i) => {
          return <div key={i}>{item.title}</div>;
        })}
    </div>
  );
};

export default UserList;
