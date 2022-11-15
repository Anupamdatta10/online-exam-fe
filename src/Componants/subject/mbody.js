import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import './mbody.css'
import Mdal1 from './modal1'
class Mbody extends React.Component {
    state = {
        data: [
            {
                "name": "Mathematics",
                "description": "Here you will play with numbers",
                "quantity": 1,
                "imgurl": "https://images.theconversation.com/files/207820/original/file-20180226-140213-yox11e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
            }
            ,
            {
                "name": "Physics",
                "description": "Here you will play with numbers",
                "quantity": 1,
                "imgurl": "https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg"
            }
            ,
            {
                "name": "Chemistry",
                "description": "Here you will play with numbers",
                "quantity": 1,
                "imgurl": "https://img.jagranjosh.com/imported/images/E/Articles/chemistry_2018_640.jpg"
            }
            ,
            {
                "name": "Biology",
                "description": "Here you will play with numbers",
                "quantity": 1,
                "imgurl": "https://classnstudy.com/wp-content/uploads/2021/04/Biology-.jpg"
            }
            ,
            {
                "name": "English",
                "description": "Here you will play with numbers",
                "quantity": 1,
                "imgurl": "https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg"
            }

        ]

        , total: 0
    }
    render() {
        return (
            <>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {this.state.data.map((item, index) => (

                        <div className='card  px-3 p-3 mb-4 mx-3  rounded' border="primary" >
                            <Card.Img variant="top" src={item.imgurl} height="200" width="300" />
                            <Card.Body className="text-center">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Button variant="primary" size="lg">Enter Test</Button>
                            </Card.Body>

                        </div>



                    ))}
                    <div className='card px-3 p-3 mb-4 mx-3  rounded' border="primary"  >
                        <Card.Img variant="top" border='' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"} height="300" width="300" />
                        <Card.Body className="text-center">

                            <Button variant="primary" size="lg" style={{align:'center'}}><Mdal1/></Button>
                        </Card.Body>

                    </div>
                </div>
            </>
        );
    }

}
export default Mbody;