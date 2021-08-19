
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
import './style.css';
//create products function
const Workshop = (props) => {
    const [feesId, setFeesId] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [workshops, setWorkshops] = useState([]);
   
    const [paperDetailModal, setProductDetails] = useState(null);

    // const token = localStorage.getItem('token');
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };

    //console.log('user token'+config);
    function sendData(e){
        e.preventDefault();
       
        const form = new FormData();
        form.append('feesId', feesId);
        form.append('email',email);
        form.append('amount', amount);
        form.append('year',year);
        form.append('month',month);
        //console.log(researchpaper)
        console.log('form' +form);

        console.log('calling');
        axios.post("http://localhost:8065/api/classfees/create",
        form).then(
            console.log(form),
            alert("Successfully Added"),
            console.log).catch(e)(
               
                console.log(e));
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
        <span className="headerTitleLg">Add ResearchPapers</span>
      </div>
      
    </div>


        <div className ="container">
            <form onSubmit ={sendData}>
                <div className="form-group">
                    <label for="name">ID</label>
                    <input type="number" className="form-control" id="title"  placeholder="Enter Title"  onChange={(e)=>{
                        setFeesId(e.target.value)
                    }}/>
                    
                </div>
                <div className="form-group">
                    <label for="phnum">Year</label>
                    <input type="number" className="form-control" id="description"  placeholder="Enter description"onChange={(e)=>{
                        setYear(e.target.value);
                    }}/>
              
                    
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email"  placeholder="Enter email" onChange={(e)=>{
                        setEmail(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="email">Month</label>
                    <input type="text" className="form-control" id="email"  placeholder="Enter email" onChange={(e)=>{
                        setMonth(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="email">Amount</label>
                    <input type="number" className="form-control" id="email"  placeholder="Enter email" onChange={(e)=>{
                        setAmount(e.target.value);
                     }} />
                    
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
            </Container>
           
            

        </Layout>
    )
}

export default Workshop