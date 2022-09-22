import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getUsers, userdelete } from '../../JS/userSlice/userSlice';

function Users({ el, ping, setping }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const users = useSelector((state) => state?.user?.users);
    const dispatch = useDispatch();
    useEffect(() => {
        setping(!ping)

        dispatch(getUsers());
    }
        , [ping]);
    return (
        <div style={{ width: "100%", height: "400px", marginTop: "200px", marginLeft: "-100px" }}>
            {/* <button style={{background:"#67bbe4c7",color: "white", padding: "5px 10px",textAlign: "center",marginTop:"140px" }}>Add New user</button> */}

            <div style={{
                marginTop: "100px",
                marginLeft: "473px"
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



                    </tr>
                    {users ? (
                        users?.map((el) => <tr><td >{el.name}</td><td>{el.lastName}</td><td>{el.email}</td><td>{el.telephone}</td>
                            <td> <button onClick={() => {
                                setTimeout(() => {
                                    dispatch(userdelete(el._id));
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

export default Users