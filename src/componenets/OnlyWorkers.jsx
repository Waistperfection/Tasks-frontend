import React, { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

function OnlyWorkers({ children }) {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <>{(user && !user.is_master) ? children : <></>}</>;
}

export default OnlyWorkers;