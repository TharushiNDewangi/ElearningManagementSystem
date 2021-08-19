//part13
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,deleteproductbyid,updateproductbyid } from '../../actions/';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';

const Classfees = (props) => {

    const [feesId, setFeesId] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    //const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const category = useSelector(state => state.category);
    const classfees = useSelector(state => state.classfees);

    const dispatch = useDispatch();


    const handleForm= () => {
        const form = new FormData();
        form.append('feesId', feesId);
        form.append('email', email);
        form.append('amount', amount);
        form.append('year', year);
        form.append('month', month);

        // for (let pic of productPictures) {
        //     form.append('productpicture', pic);
        // }

        dispatch(addProduct(form));


        setShow(false);
    }
    const handleShow = () => setShow(true);

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    // const handleProductPictures = (e) => {

    //     setProductPictures([
    //         ...productPictures,
    //         e.target.files[0]

    //     ]);
    // }
    // console.log(productPictures);

    const renderProducts = () => {
        return (
            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        {/* <th>Description</th> */}
                        <th>Category</th>

                    </tr>
                </thead>
                <tbody>{

                    classfees.products.length > 0 ?
                    classfees.products.map(classfees =>
                            <tr onClick={() => showProductDetailModal(classfees)}
                                key={classfees._id}>
                                <td>2</td>
                                <td>{classfees.email}</td>
                                <td>{classfees.amount}</td>
                                <td>{classfees.yaer}</td>
                                <td>{classfees.month}</td>
                                <td>{classfees.category.name}</td>
                                <td>
                                    {/* <button  onClick={()=>{
                                        const payload={
                                            productId:classfees._id,
                                        };
                                        dispatch(updateproductbyid(payload))
                                    }}>UPDATE
                                    </button>
                                    <button
                                    onClick={()=>{
                                        const payload={
                                            productId:product._id,
                                        };
                                        dispatch(deleteproductbyid(payload))
                                    }}>
                                    DELETE
                                    </button> */}
                                </td>

                            </tr>) : null
                }
                </tbody>
            </Table>
        );
    }
    // const renderAddProductModal = () => {
    //     return (
    //         <Modal
    //             show={show}
    //             handleClose={handleForm}
    //             modalTitle={'Add New Product'}>
    //             <Input
    //                 label="Name"
    //                 value={name}
    //                 placeholder={`Product Name`}
    //                 onChange={(e) => setFeesId(e.target.value)}
    //             />
    //             <Input
    //                 label="Quantity"
    //                 value={quantity}
    //                 placeholder={`Quantity`}
    //                 onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <Input
    //                 label="Price"
    //                 value={price}
    //                 placeholder={`Price`}
    //                 onChange={(e) => setAmount(e.target.value)}
    //             />
    //             <Input
    //                 label="Description"
    //                 value={description}
    //                 placeholder={`Description`}
    //                 onChange={(e) => setYear(e.target.value)}
    //             />
    //             <select className="form-control"
    //                 value={categoryId}
    //                 onChange={(e) => setMonth(e.target.value)}>
    //                 <option>select category</option>
    //                 {
    //                     createCategoryList(category.categories).map(option =>
    //                         <option key={option.value} value={option.value}>{option.name}</option>)
    //                 }
    //             </select>

    //             {/* {
    //                 productPictures.length > 0 ?
    //                     productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
    //             } */}


    //             {/* <input type="file" name="ProductPicture" onChange={handleProductPictures} /> */}
    //         </Modal>


    //     );
    // }
    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false);
    }
    //part17
    const showProductDetailModal = (product) => {

        setProductDetails(product);
        setProductDetailModal(true);
        console.log(product);

    }
    const renderProductDetailsModal = () => {

        if (!productDetails) {
            return null;
        }
        
        return (
            <Modal
                show={productDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'product details'}
                size="lg"

            >
                {/* <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="key">{productDetails.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Price</label>
                        <p className="key">{productDetails.price}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{productDetails.quantity}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Category</label>
                        <p className="key">{productDetails.category.name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="key">Description</label>
                        <p className="key">{productDetails.description}</p>
                    </Col>

                </Row>
                <Row>
                    <Col >
                        <label className="key"> product Pictures</label>
                        <div style={{ display: 'flex' }}>
                            {productDetails.productPictures.map(picture =>
                                <div className="productImgContainer">
                                    <img src={generatePublicUrl(picture.img)} />
                                </div>

                            )}
                        </div>

                    </Col>
                </Row> */}


            </Modal>
        );
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Products</h3>
                            <button onClick={handleShow} >ADD</button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>

                </Row>
            </Container>
            {/* {renderAddProductModal()} */}
            {renderProductDetailsModal()}
           

        </Layout>
    )
}

export default Products