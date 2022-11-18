import React from "react";
import Enav from "./enav"
import Table from 'react-bootstrap/Table';
class Exampage extends React.Component {

    render() {
        return (
            <>
                <Enav />
                <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                       
                    </tbody>
                </Table>
                </div>
            </>
        )
    }


}

export default Exampage;