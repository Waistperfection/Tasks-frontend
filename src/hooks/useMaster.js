import React from "react";
import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

function useMaster() {
  const { is_master } = useContext(AuthContext);

  return is_master;
}

export default useMaster;
