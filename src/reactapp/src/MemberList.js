import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper, Button } from '@mui/material';
import { LinearProgress, CircularProgress, Typography } from '@mui/material';

function MemberList() {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('/api/member'); // Use Axios to make the request
            const data = response.data; // Axios response has a data property
            setMembers(data);
            setIsLoading(false);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div>
                <LinearProgress />
                <p>Loading...</p>
                <CircularProgress disableShrink />
            </div>
        );
    }

    const handleRefresh = () => {
        fetchData();
    }

    const handleRowClick = (id) => {
            navigate(`api/member/${id}`);
        };



    return (
        <div>
            <Typography variant="h4" component="div" gutterBottom>
                Member List
            </Typography>
            <Button variant="contained" color="primary" onClick={handleRefresh}>
                Refresh
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Date of Creation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member) => (
                            <TableRow key={member.id} onClick={() => handleRowClick(member.id)}>
                                <TableCell>{member.id}</TableCell>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.dateOfCreation}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MemberList;
