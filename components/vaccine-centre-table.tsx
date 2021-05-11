import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody, TablePagination, Button, Chip, CardContent, Card, CardMedia, makeStyles, Typography, Select, Input, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { IVaccineCentre } from "../model/vaccine-centre.interface";

interface IVaccineCentreTableProps {
    centreList: IVaccineCentre[];
}

interface ITableRow {
    available_capacity: number;
    vaccine: string;
    district_name: string;
    address: string;
    blockName: string;
    pincode: string;
    date: string;
    fee_type: string;
}

const ROW_PER_PAGE = 10;

const useStyles = makeStyles((theme) => ({
    flexCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pad16: {
        padding: 16
    },
    emptyBox: {
        padding: 32,
        minWidth: 300,
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '95%'
        }
    },
    filterBox: {
        width: '100%',
        marginBottom: 24
    },
    mr16: {
        marginRight: 16
    }
}))

const VaccineCentreTable: React.FC<IVaccineCentreTableProps> = ({ centreList }) => {

    const styles = useStyles();
    const [tableRows, setTableRows] = useState<ITableRow[]>([]);
    const [rowsToRender, setRowsToRender] = useState<ITableRow[]>([]);
    const [page, setPage] = useState(0);
    const [selectedRegion] = useState(['DELHI', 'GGN']);
    const [selectedAge, setSelectedAge] = useState(18);
    const regionList = [{ name: 'Delhi', value: 'DELHI' }, { name: 'Gurugram', value: 'GGN' }];
    const ageLimitList = [{ name: '18+', value: 18 }, { name: '45+', value: 45 }];
    const headerList = ['available_capacity', 'vaccine', 'district_name', 'address', 'date', 'fee_type'];

    const headerMap = {
        available_capacity: { displayName: 'Available', type: 'chip', width: 100 },
        district_name: { displayName: 'District', type: 'text', width: 'auto' },
        address: { displayName: 'Address', type: 'text', width: 'auto' },
        date: { displayName: 'Date', type: 'text', width: 'auto' },
        pincode: { displayName: 'Pincode', type: 'text', width: 'auto' },
        fee_type: { displayName: 'Type', type: 'text', width: 100 },
        vaccine: { displayName: 'Vaccine', type: 'text', width: 'auto' },
        s_no: { displayName: 'Serial No', type: 'text', width: 'auto' }
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    }

    const prepareRows = () => {
        let cnt = 0;
        const preparedRowList = centreList.reduce((current, data) => {
            const rowList: ITableRow[] = data.sessions
                .filter(({ min_age_limit }) => min_age_limit <= selectedAge)
                .map(({ available_capacity, vaccine, date }) => {
                    cnt++;
                    return {
                        s_no: cnt,
                        available_capacity,
                        vaccine,
                        date,
                        fee_type: data.fee_type,
                        address: data.address,
                        blockName: data.block_name,
                        pincode: data.pincode,
                        district_name: data.district_name
                    }
                })
            return current.concat(rowList);
        }, []);
        console.log(preparedRowList)
        setTableRows(preparedRowList);
        setPage(0);
    }

    useEffect(() => {
        const currentRow = (page * ROW_PER_PAGE);
        const rows = tableRows.slice(currentRow, currentRow + ROW_PER_PAGE);
        setRowsToRender(rows);
    }, [tableRows, page])

    useEffect(() => {
        if (centreList) {
            prepareRows();
        }
    }, [centreList, selectedAge])

    return (
        <div className={`${styles.flexCenter} ${styles.pad16}`}>
            {
                centreList.length === 0 ?
                    <Paper elevation={3} className={`${styles.emptyBox} ${styles.flexCenter}`}>
                        <img src="/covid-data.svg" alt="empty" width="300" height="300" />
                        <Typography variant="h6" color="textPrimary">No Vaccine Found</Typography>
                        <Typography variant="subtitle1">Keep Patience. We'll update as soon as vaccine are available</Typography>
                    </Paper>
                    :
                    <>
                        <div className={styles.filterBox}>
                            <Select
                                multiple
                                className={styles.mr16}
                                value={selectedRegion}
                                input={<Input />}
                                disabled={true}
                            >
                                {regionList.map((region, index) => (
                                    <MenuItem key={index} value={region.value}>
                                        {region.name}
                                    </MenuItem>
                                ))}
                            </Select>

                            <Select
                                value={selectedAge}
                                className={styles.mr16}
                                input={<Input />}
                                onChange={(e: React.ChangeEvent<{ name: string; value: number }>) => setSelectedAge(e.target.value)}
                            >
                                {ageLimitList.map((age, index) => (
                                    <MenuItem key={index} value={age.value}>
                                        {age.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                        <TableContainer component={Paper}>
                            <Table aria-label="Available Vaccine Table">
                                <TableHead>
                                    <TableRow>
                                        {
                                            headerList.map((value, index) => <TableCell key={index} style={{ width: headerMap[value]?.width, minWidth: 100 }}>
                                                {headerMap[value]?.displayName}
                                            </TableCell>)
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        rowsToRender.map((value, rowIndex) => (
                                            <TableRow key={rowIndex}>
                                                {
                                                    headerList.map((col, index) => <TableCell key={index} style={{ width: headerMap[col]?.width, minWidth: 100 }}>
                                                        {
                                                            col === 'available_capacity' &&
                                                            <Chip label={value[col]} style={{ backgroundColor: value[col] > 10 ? '#a9d18e' : '#ffbf00' }} />
                                                        }
                                                        {
                                                            col === 'fee_type' && <>
                                                                {
                                                                    value[col].toUpperCase() === 'FREE' ? value[col] :
                                                                        <Chip style={{ backgroundColor: '#e96565', color: '#ffffff' }} label={value[col]} />
                                                                }
                                                            </>
                                                        }
                                                        {['fee_type', 'available_capacity'].indexOf(col) === -1 &&
                                                            <>
                                                                {
                                                                    headerMap[col].type === 'chip' ?
                                                                        <Chip label={value[col]} /> :
                                                                        value[col]
                                                                }
                                                            </>
                                                        }
                                                    </TableCell>)
                                                }
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                            <TablePagination
                                component="div"
                                count={tableRows.length}
                                rowsPerPage={ROW_PER_PAGE}
                                page={page}
                                rowsPerPageOptions={[]}
                                onChangePage={handleChangePage}
                            />
                        </TableContainer>
                    </>
            }
        </div>
    )
}

export default VaccineCentreTable;