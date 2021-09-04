import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Form, Row, Col } from 'react-bootstrap';
// import Select from 'react-select';
import TimePicker from 'react-time-picker';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './style.css';
const AddSchedule = (props) => {
    const [hall, setHall] = useState('');
    const [teacher, setTeacher] = useState('');
    const [batch, setBatch] = useState('');
    const [day, setDay] = useState('');
    const [start, setStart] = useState('00:00');
    const [end, setEnd] = useState('00:00');

    const [allTeachers, setAllTeachers] = useState([{ value: 'None', label: 'None' }]);

    useEffect(() => {
        axios.get('http://localhost:8065/api/classschedule/teachers').then((res) => {
            setAllTeachers([
                ...allTeachers,
                ...res.data.Teachers.map((teacher) => {
                    return { value: teacher._id, label: teacher.name };
                }),
            ]);
        });
    }, []);

    function tConv24(time24) {
        var ts = time24;
        var H = +ts.substr(0, 2);
        var h = H % 12 || 12;
        h = h < 10 ? '0' + h : h; // leading 0 at the left for 1 digit hours
        var ampm = H < 12 ? ' AM' : ' PM';
        ts = h + ts.substr(2, 3) + ampm;
        return ts;
    }
    function sendData(e) {
        e.preventDefault();

        let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';

        result +=
            randomChars.charAt(Math.floor(Math.random() * randomChars.length)) +
            Math.floor(Math.random() * 100);

        let data = {
            ClassId: result,
            hall: hall,
            teachername: teacher,
            Studentbatch: batch,
            day: day,
            starttime: tConv24(start),
            endtime: tConv24(end),
        };
        console.log(data);
        axios
            .post('http://localhost:8065/api/classschedule/create', data)
            .then((res) => {
                alert('data successfully inserted');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <Layout sidebar>
            <h2>Add New Schedule</h2>

            <div className="container-form">
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="hall">Hall</label>
                        <Form.Control
                            as="select"
                            value={hall}
                            id="hall"
                            onChange={(e) => {
                                setHall(e.target.value);
                            }}
                        >
                            <option value="none">None</option>
                            <option value="100A">100A</option>
                            <option value="200A">200A</option>
                            <option value="400A">400A</option>
                            <option value="400B">400B</option>
                            <option value="500A">500A</option>
                        </Form.Control>
                    </div>
                    <div className="form-group">
                        <label for="teacher">Teacher's Name</label>
                        <Form.Control
                            as="select"
                            value={teacher}
                            id="teacher"
                            onChange={(e) => {
                                setTeacher(e.target.value);
                            }}
                        >
                            {allTeachers.map((teacher) => {
                                return <option value={teacher.label}> {teacher.label} </option>;
                            })}
                        </Form.Control>
                    </div>
                    <div className="form-group">
                        <label for="studentBatch">Student Batch</label>
                        <Form.Control
                            as="select"
                            value={batch}
                            id="studentBatch"
                            onChange={(e) => {
                                setBatch(e.target.value);
                            }}
                        >
                            <option value="none">None</option>
                            <option value="G-10">G-10</option>
                            <option value="G-11">G-11</option>
                            <option value="G-12">G-12</option>
                            <option value="G-13">G-13</option>
                        </Form.Control>
                    </div>
                    <div className="form-group">
                        <label for="day">Day</label>
                        <Form.Control
                            as="select"
                            value={day}
                            id="day"
                            onChange={(e) => {
                                setDay(e.target.value);
                            }}
                        >
                            <option value="none">None</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday ">Saturday </option>
                            <option value="Sunday">Sunday</option>
                        </Form.Control>
                    </div>
                    <div className="form-group">
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <label for="start">Start Time</label>
                                <br />
                                <TimePicker
                                    className="clockClassName"
                                    amPmAriaLabel="Select AM/PM"
                                    value={start}
                                    onChange={(value) => {
                                        setStart(value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <label for="end">End Time</label>
                                <br />
                                <TimePicker
                                    amPmAriaLabel="AM/PM"
                                    value={end}
                                    onChange={(value) => {
                                        setEnd(value);
                                    }}
                                />
                            </Form.Group>
                        </Row>
                    </div>
                    <Row>
                        <Col xs="6">
                            <button type="submit" className="btn btn-primary">
                                Create Schedule
                            </button>
                        </Col>
                        <Col xs="6" className="text-right">
                            <Link to="/allschedule" color="link" className="px-0">
                                View Schedules
                            </Link>
                        </Col>
                    </Row>
                </form>
            </div>
        </Layout>
    );
};

export default AddSchedule;
