import React, { useState } from "react";

const AppointmentList = ({ app,id }) => {
  const [pending, setPending] = useState(false);

  const handleApprove = () => { 
    const dataa={
      status:true,
    }

    fetch(`/appointments/${id}`,{
      method: 'PATCH',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(dataa)
    })
   
  }

  return (
    <>
      <tr>
        <td>{app.username}</td>
        <td>{app.email}</td>
        <td>
          <button onClick={handleApprove}>Approve</button>
        </td>
      </tr>
    </>
  );
};

export default AppointmentList;
