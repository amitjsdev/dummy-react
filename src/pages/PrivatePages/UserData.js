import React, { useEffect, useCallback, useState } from "react";
import { getUsersList } from "../../redux/actions/RegisterActions";
import { connect } from "react-redux";

const UserData = (props) => {
  const { count } = props;
console.log('count-count',count)
  return <div>Record count{count}</div>;
};

export default UserData;
