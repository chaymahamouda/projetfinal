import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deletereservation, getreservations } from '../../JS/Reservationslice/ReservationSlice';


function ReservationV({ el, ping, setping }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const reservation = useSelector((state) => state?.reservation?.reservations);
    
    const dispatch = useDispatch();
    useEffect(() => {
        setping(!ping)

        dispatch(getreservations());
    }
        , [ping]);
    return (
        <div style={{ width: "100%", height: "300px", marginTop: "150px", marginLeft: "-100px" }}>
            {/* <button style={{background:"#67bbe4c7",color: "white", padding: "5px 10px",textAlign: "center",marginTop:"140px" }}>Add New user</button> */}

            <div style={{
                marginTop: "200px",
                marginLeft: "473px",
                
            }}>
                <Link to = "/dashboard"><Button variant="danger" onClick={handleClose} style={{marginLeft:"790px",marginBottom:"20px"}} >
Close
</Button></Link>
                <table border="2px" style={{ border: "2px solid grey", width: "100%", marginLeft: "-100px",backgroundColor:"rgba(103, 186, 228, 0.731)" }}>
                    <tr>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Date of trip</th>




                    </tr>
                    {reservation ? (
                        reservation?.map((el) =>
                        <tr><td >{el.Name}</td><td>{el.LastName}</td><td>{el.email}</td><td>{el.PhoneNumber}</td>
                        <td>{el.DateV}</td>
                            <td> <button onClick={() => {
                                setTimeout(() => {
                                    dispatch(deletereservation(el._id));
                                    setping(!ping)

                                }, 2000);
                            }}
                                style={{ backgroundColor: "#dc3545", width: "30px", height: "30px" }}>x</button></td></tr>)) :
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWo6TRfI5lrw1cD6PNztCeEQx_dwBtp7sbK2USAF7H7y0D8_LkNNp_I9dion8KHIb11s&usqp=CAU" />
                    }



                </table>
            </div>
        </div>
    )
}

export default ReservationV