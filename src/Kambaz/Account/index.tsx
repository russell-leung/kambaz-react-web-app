import Signin from "./Signin.tsx";
import Profile from "./Profile.tsx";
import Signup from "./Signup.tsx";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";

export default function Account() {
  return (
    <div id="wd-account-screen">
      <div className="d-flex">
        <AccountNavigation />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/Kambaz/Account/Signin" />}
            />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
