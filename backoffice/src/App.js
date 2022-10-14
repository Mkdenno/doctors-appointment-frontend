import { useEffect, useState } from "react";
import AdminNav from "./components/AdminNav";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Admin from "./components/Admin";

function App() {
  const [appointment, setAppointment] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/mea").then((r) => {
      if (r.ok) {
        r.json().then((admin) => setAdmin(admin));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/appointments")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);

  // const appointmentsdata=appointment.map((data)=>(
  //   <AppointmentList

  //   />
  // ))



  return (
    <div className="App">
      <AdminNav admin={admin} setAdmin={setAdmin} />
      <Routes>
        {
          admin ? (
            <Route path="/" element={<Admin appointment={appointment} />} />

          )
          :
          (
            <Route path="/adminlogin" element={<AdminLogin  setAdmin={setAdmin}/>} />

          )

        }
      </Routes>
    </div>
  );
}

export default App;
