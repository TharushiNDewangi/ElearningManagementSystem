
import React, { useState ,useEffect} from 'react'
import Layout from '../../components/Layout'
import { DeleteOutline } from "@material-ui/icons";
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,deleteproductbyid,updateproductbyid } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';
import axios from "axios";
//import './style.css';
//create products function
const AddStudentToInstitute = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [studentId, setstudentId] = useState('');
    const [Studentclass, setStudentclass] = useState('');
    const [subject, setsubject] = useState('');
    
   
    //const [paperDetailModal, setProductDetails] = useState(null);

    // const token = localStorage.getItem('token');
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };

    //console.log('user token'+config);
    function sendData(e){
        e.preventDefault();
       
   

        let data = {
            name:name,
            email:email,
            studentId:studentId,
            Studentclass:Studentclass,
            subject:subject,

        }
        axios.post( 
            'http://localhost:8065/api/studentInstitute/create',
            data,
           
          ).then(
              alert("successfully added"),
              console.log).catch(console.log)
              .catch(function (error) {
                console.log(error);

            });
          }
       
    //    return (
    //         <Modal
    //             show={paperDetailModal}
    //             handleClose={handleCloseProductDetailsModal}
    //             modalTitle={'Workshop Details'}
    //             size="lg"

    //         >
    //             {/* <Row>
    //                 <Col md="6">
    //                     <label className="key">Topic</label>
    //                     <p className="key">{paperDetailModal.topic}</p>
    //                 </Col>
    //                 <Col md="6">
    //                     <label className="key">Description</label>
    //                     <p className="key">{paperDetailModal.description}</p>
    //                 </Col>
    //             </Row>
    //             <Row>
    //                 <Col md="6">
    //                     <label className="key">Date</label>
    //                     <p className="key">{paperDetailModal.date}</p>
    //                 </Col>
    //                 <Col md="6">
    //                     <label className="key">Email</label>
    //                     <p className="key">{paperDetailModal.email}</p>
    //                 </Col>
                    
    //             </Row> */}
               
                

    //         </Modal>
    //     );
    // }

    return (
        <Layout sidebar>
            <Container>
            <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Add Student to Institute</span>
      </div>
      
    </div>


        <div className ="container">
            <form onSubmit ={sendData}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name"  placeholder="Enter Name"  onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                    
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email"  placeholder="Enter email"onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
              
                    
                </div>
                <div className="form-group">
                    <label for="studentId">StudentId</label>
                    <input type="text" className="form-control" id="studentId"  placeholder="Enter StudentId" onChange={(e)=>{
                        setstudentId(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="Studentclass">Student class</label>
                    <input type="number" className="form-control" id="Studentclass"  placeholder="Enter Student class" onChange={(e)=>{
                        setStudentclass(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="subject">Subject</label>
                    <input type="subject" className="form-control" id="subject"  placeholder="Enter Subject" onChange={(e)=>{
                        setsubject(e.target.value);
                     }} />
                    
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
            </Container>
           
            

        </Layout>
    )
}

export default AddStudentToInstitute