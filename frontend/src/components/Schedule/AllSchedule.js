import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import MuiTableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Layout from '../../components/Layout/index';

import { Row, Col } from 'react-bootstrap';
// import Select from 'react-select';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        headerStyle: { backgroundColor: 'red' },
    },
});
const TableHead = withStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(32, 31, 31)',
    },
}))(MuiTableHead);

const TableHeaderCell = withStyles((theme) => ({
    root: {
        color: 'white',
    },
}))(TableCell);
export default function AllSchedule() {
    const [allSchedules, setAllSchedules] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8065/api/classschedule/viewall')
            .then((res) => {
                setAllSchedules(res.data.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);
    const classes = useStyles();

    function createData(ClassId, hall, teacher, batch, day, start, end) {
        return { ClassId, hall, teacher, batch, day, start, end };
    }

    const rows = allSchedules.map((schedule) => {
        return createData(
            schedule.ClassId,
            schedule.hall,
            schedule.teachername,
            schedule.Studentbatch,
            schedule.day,
            schedule.starttime,
            schedule.endtime
        );
    });

    return (
        <Layout sidebar>
            <h2>All Schedule</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Class ID</TableHeaderCell>
                            <TableHeaderCell align="right">Batch ID</TableHeaderCell>
                            <TableHeaderCell align="right">Teacher&nbsp;</TableHeaderCell>
                            <TableHeaderCell align="right">Hall&nbsp;</TableHeaderCell>
                            <TableHeaderCell align="right">Day&nbsp;</TableHeaderCell>
                            <TableHeaderCell align="right">Start&nbsp;</TableHeaderCell>
                            <TableHeaderCell align="right">End&nbsp;</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.ClassId}>
                                <TableCell component="th" scope="row">
                                    {row.ClassId}
                                </TableCell>
                                <TableCell align="right">{row.batch}</TableCell>
                                <TableCell align="right">{row.teacher}</TableCell>
                                <TableCell align="right">{row.hall}</TableCell>
                                <TableCell align="right">{row.day}</TableCell>
                                <TableCell align="right">{row.start}</TableCell>
                                <TableCell align="right">{row.end}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <form>
                <Row>
                    <Col xs="6" className="text-left">
                        <Link to="/addschedule" color="link" className="px-0">
                            Create New Schedule
                        </Link>
                    </Col>
                    <Col xs="6" className="text-right">
                        <button type="button" className="btn btn-primary">
                            Download
                        </button>
                    </Col>
                </Row>
            </form>
        </Layout>
    );
}
