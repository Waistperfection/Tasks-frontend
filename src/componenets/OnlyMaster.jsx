import React, { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

function OnlyMaster({ children }) {
  const { user } = useContext(AuthContext);
  return <>{user?.is_master ? children : <></>}</>;
}

export default OnlyMaster;
