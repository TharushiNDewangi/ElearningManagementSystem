import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Link } from 'react-router-dom';
import './style.css';
const AllSchedule = (props) => {
    const [allSchedules, setAllSchedules] = useState([]);
    ///////////////////
    const [studentsininstitute, setstudentininstitute] = useState([]);
    const [studentDetailModal, setStudentDetails] = useState(null);
    const [searchresult, setSearchresult] = useState(null);
    const [updateDetailModal, setupdateDetails] = useState(null);
    const [deleteDetailModal, setDeleteDetails] = useState(null);
    const [searchDetailModal, setSearchDetails] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [Studentclass, setStudentclass] = useState('');
    const [subject, setSubject] = useState('');
    const [searchid, setSearchid] = useState('');
    //////////////////////////////////

    useEffect(() => {
        axios
            .get('http://localhost:8065/api/classschedule/viewall')
            .then((res) => {
                setAllSchedules(res.data.data);
                console.log(allSchedules);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, [deleteDetailModal]);

    const submitStudentForm = (id) => {
        let data = {
            name: name,
            email: email,

            Studentclass: Studentclass,
            subject: subject,
        };

        console.log(id);
        axios.put(`http://localhost:8065/api/studentInstitute/edit/${id}`, data).then((res) => {
            alert('approved');
        });
    };
    const Searchresult = (id) => {
        let data = {
            studentId: id,
        };

        axios.post(`http://localhost:8065/api/studentInstitute/sech`, data).then((res) => {
            console.log(res.data.data);
            setSearchresult(res.data.data);
        });
    };

    const handleCloseStudentDetailsModal = () => {
        setStudentDetails(null);
    };

    const handleCloseUpdateDetailsModal = () => {
        setupdateDetails(null);
    };
    const handleCloseDeleteDetailsModal = () => {
        setDeleteDetails(null);
    };
    const handleCloseSearchDetailsModal = () => {
        setSearchresult(null);
    };

    const showStudentDetailModal = (student) => {
        setStudentDetails(student);
    };
    const UpdateDetailModal = (student) => {
        setupdateDetails(student);
    };
    const DeleteDetailModal = (schedule) => {
        setDeleteDetails(schedule);
    };
    const SearchDetailModal = (student) => {
        setSearchDetails(student);
    };
    const renderStudentDetailsModal = () => {
        if (!studentDetailModal) {
            return null;
        }

        return (
            <Modal
                show={studentDetailModal}
                handleClose={handleCloseStudentDetailsModal}
                modalTitle={'Workshop Details'}
                size="lg"
            >
                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="key">{studentDetailModal.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{studentDetailModal.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Date</label>
                        <p className="key">{studentDetailModal.studentId}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{studentDetailModal.Studentclass}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{studentDetailModal.subject}</p>
                    </Col>
                </Row>
            </Modal>
        );
    };
    const renderDeleteDetailsModal = () => {
        if (!deleteDetailModal) {
            return null;
        }
        return (
            <Modal
                show={deleteDetailModal}
                handleClose={handleCloseDeleteDetailsModal}
                modalTitle={'Delete Schedule'}
                size="sm"
            >
                <Row>
                    <Col md="6">
                        <label className="key">Class ID:</label>
                        <p className="key">{deleteDetailModal.ClassId}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Batch ID:</label>
                        <p className="key">{deleteDetailModal.Studentbatch}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Teacher:</label>
                        <p className="key">{deleteDetailModal.teachername}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Hall:</label>
                        <p className="key">{deleteDetailModal.hall}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Day:</label>
                        <p className="key">{deleteDetailModal.day}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <button
                            className="userListDel"
                            onClick={(e) =>
                                axios
                                    .delete(
                                        `http://localhost:8065/api/classschedule/del/${deleteDetailModal._id}`
                                    )
                                    .then((res) => {
                                        setDeleteDetails(null);
                                    })
                            }
                        >
                            Delete
                        </button>
                    </Col>
                </Row>
            </Modal>
        );
    };
    const renderUpdateDetailsModal = () => {
        if (!updateDetailModal) {
            return null;
        }

        return (
            <Modal
                show={updateDetailModal}
                handleClose={handleCloseUpdateDetailsModal}
                modalTitle={'Workshop Details'}
                size="lg"
            >
                <Row>
                    <Input
                        label="Name"
                        value={name}
                        placeholder={updateDetailModal.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Email"
                        value={email}
                        placeholder={updateDetailModal.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="student class"
                        value={Studentclass}
                        placeholder={updateDetailModal.Studentclass}
                        onChange={(e) => setStudentclass(e.target.value)}
                    />
                    <Input
                        label="Subject"
                        value={subject}
                        placeholder={updateDetailModal.subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <Col md="6">
                        <button className="userListDel">Delete</button>
                        <button
                            className="userListEdit"
                            onClick={(e) => submitStudentForm(updateDetailModal._id)}
                        >
                            Edit
                        </button>
                    </Col>
                    <Col md="6"></Col>
                </Row>
            </Modal>
        );
    };
    const renderSearchDetailsModal = () => {
        if (!searchresult) {
            return null;
        }

        return (
            <Modal
                show={searchresult}
                handleClose={handleCloseSearchDetailsModal}
                modalTitle={'Your Seach Result'}
                size="lg"
            >
                <Row>
                    <Input
                        label="Name"
                        value={name}
                        placeholder={searchresult.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Name"
                        value={email}
                        placeholder={searchresult.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Name"
                        value={Studentclass}
                        placeholder={searchresult.Studentclass}
                        onChange={(e) => setStudentclass(e.target.value)}
                    />
                    <Input
                        label="Name"
                        value={subject}
                        placeholder={searchresult.subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <Col md="6">
                        <button className="userListDel">Delete</button>
                        <button
                            className="userListEdit"
                            // onClick={e => submitProductForm(updateDetailModal._id)
                            // }
                        >
                            Edit
                        </button>
                    </Col>
                    <Col md="6"></Col>
                </Row>
            </Modal>
        );
    };

    const exportPDF = () => {
        const unit = 'pt';
        const size = 'A4'; // Use A1, A2, A3 or A4
        const orientation = 'portrait'; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = 'All Scheduls';
        const headers = [['Class ID', 'Batch ID', 'Teacher', 'Hall', 'Day', 'From', 'To']];

        const data = allSchedules.map((schedule) => [
            schedule.ClassId,
            schedule.hall,
            schedule.teachername,
            schedule.Studentbatch,
            schedule.day,
            schedule.starttime,
            schedule.endtime,
        ]);

        let content = {
            startY: 50,
            head: headers,
            body: data,
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save('Schedule report.pdf');
    };
    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>All Schedules</h2>
                            <dv>
                                <input
                                    type="text"
                                    id="header-search"
                                    placeholder="Search Class"
                                    name="s"
                                    onChange={(e) => setSearchid(e.target.value)}
                                />
                                <button
                                    className="userListSearch"
                                    type="submit"
                                    onClick={() => Searchresult(searchid)}
                                >
                                    Search
                                </button>
                            </dv>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table style={{ fontsize: 12 }} responsive="sm">
                            <thead>
                                <tr>
                                    <th>Class ID</th>
                                    <th>Batch ID</th>
                                    <th>Teacher</th>
                                    <th>Hall</th>
                                    <th>Day</th>
                                    <th>From</th>
                                    <th>To</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allSchedules.map((schedule, index) => (
                                    <tr>
                                        <td
                                            onClick={() => showStudentDetailModal(studentsininstitute)}
                                            key={schedule.ClassId}
                                        >
                                            {schedule.ClassId}
                                        </td>
                                        <td>{schedule.Studentbatch}</td>
                                        <td>{schedule.teachername}</td>
                                        <td>{schedule.hall}</td>
                                        <td>{schedule.day}</td>
                                        <td>{schedule.starttime}</td>
                                        <td>{schedule.endtime}</td>
                                        <td>
                                            <button
                                                className="userListDel"
                                                onClick={() => DeleteDetailModal(schedule)}
                                            >
                                                Delete
                                            </button>

                                            <button
                                                className="userListEdit"
                                                onClick={() => UpdateDetailModal(studentsininstitute)}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs="6" className="text-left">
                        <Link to="/addschedule" color="link" className="px-0">
                            Create New Schedule
                        </Link>
                    </Col>
                    <Col xs="6" className="text-right">
                        <button type="button" className="btn btn-primary" onClick={() => exportPDF()}>
                            Download
                        </button>
                    </Col>
                </Row>
            </Container>

            {renderStudentDetailsModal()}
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal}
        </Layout>
    );
};

export default AllSchedule;
