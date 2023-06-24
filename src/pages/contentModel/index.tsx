import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// import Navbar from '@/components/Navbar';

function createData(
    name: string,
    fields: number,
    lastUpdatedBy: string,
    updated: string,
) {
    return { name, fields, lastUpdatedBy, updated };
}
const rows = [
    createData('Abstract Content A', 8, 'Anas', 'a year ago'),
    createData('Abstract Content B', 9, 'Sumanta', 'a year ago'),
    createData('Abstract Content C', 10, 'Sudhanshu', 'a year ago'),
    createData('Abstract Content D', 11, 'Swapnil', 'a year ago'),
    createData('Abstract Content A', 8, 'Anas', 'a year ago'),
    createData('Abstract Content B', 9, 'Sumanta', 'a year ago'),
    createData('Abstract Content C', 10, 'Sudhanshu', 'a year ago'),
    createData('Abstract Content D', 11, 'Swapnil', 'a year ago'),
    createData('Abstract Content A', 8, 'Anas', 'a year ago'),
    createData('Abstract Content B', 9, 'Sumanta', 'a year ago'),
    createData('Abstract Content C', 10, 'Sudhanshu', 'a year ago'),
    createData('Abstract Content D', 11, 'Swapnil', 'a year ago'),
    createData('Abstract Content A', 8, 'Anas', 'a year ago'),
    createData('Abstract Content B', 9, 'Sumanta', 'a year ago'),
    createData('Abstract Content C', 10, 'Sudhanshu', 'a year ago'),
    createData('Abstract Content D', 11, 'Swapnil', 'a year ago'),
];
const ContentModel = () => {
    return (
        <Main
            meta={
                <Meta
                    title="In house content full"
                    description="in house content full description"
                />
            }
        >
            {/* <Navbar /> */}
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Fields</TableCell>
                            <TableCell align="right">Last Updated By</TableCell>
                            <TableCell align="right">Updated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.fields}
                                </TableCell>
                                <TableCell align="right">
                                    {row.lastUpdatedBy}
                                </TableCell>
                                <TableCell align="right">
                                    {row.updated}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Main>
    );
};
export default ContentModel;
