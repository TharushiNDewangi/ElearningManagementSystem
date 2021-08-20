import React from 'react';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';
//part13
const Layout = (props) => {
    return (
        <>
            <Header />
            {props.sidebar ? (
                <Container fluid>
                    <Row>
                        <Col md={2} className="sidebar">
                            <ul>
                                <li>
                                    <NavLink exact to={'/'}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/addstudenttoInstitute'}>
                                        AddStudent to Institute Mangement
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/viewstudentininstitute'}>
                                        Student mangement in institute
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/products'}>Classes Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/orders'}>Admin Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/classfees'}>Classfees Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/addclassfees'}>AddClassfees Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/addschedule'}>Create New Schedule</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/allschedule'}>Schedule Management</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
                            {props.children}
                        </Col>
                    </Row>
                </Container>
            ) : (
                props.children
            )}
        </>
    );
};

<<<<<<< HEAD
          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink exact to={'/'}>Home</NavLink></li>
                  <li><NavLink to={'/addstudenttoInstitute'}>AddStudent to Institute Mangement</NavLink></li>
                  <li><NavLink to={'/viewstudentininstitute'}>Student mangement in institute</NavLink></li>
                  <li><NavLink to={'/salary'}>Salary Management</NavLink></li>
                  <li><NavLink to={'/addsalary'}>Add salary Management</NavLink></li>
                  <li><NavLink to={'/classfees'}>Classfees Management</NavLink></li>
                  <li><NavLink to={'/addclassfees'}>AddClassfees Management</NavLink></li>
                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: 'auto' ,paddingTop:'60px'  }}>
              {props.children}
                </Col>
            </Row>
          </Container>
          :
          props.children
        }
    

    </>
  )
}

export default Layout;
=======
export default Layout;
>>>>>>> 3db4a0fa7ffce65c065cbec944a4aa2d07f39493
