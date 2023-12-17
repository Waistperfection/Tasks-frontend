import { Outlet } from "react-router-dom";

function CleanLayout() {
  return (
    <>
    <div style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        paddingInline: "16px",
    }}>
        <Outlet />
    </div>
    </>
  );
}

export default CleanLayout;
