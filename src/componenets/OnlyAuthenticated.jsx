import useContext from "react";
import { AuthContext } from "../hoc/AuthProvider";

function OnlyAuthenticated(children) {
  const user = useContext(AuthContext);
  return <>{user ? <>{children}</> : <></>}</>;
}

export default OnlyAuthenticated;
