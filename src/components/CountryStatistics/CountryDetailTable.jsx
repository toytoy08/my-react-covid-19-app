import { Button, TableBody, TableCell, TableRow } from '@mui/material'
import useFetch from '../../api/useFetch';

function CountryDetailTable({ country, handleDelete, refresh }) {

    //Get country by country name
    const data = useFetch({ options: 'statistics', params: country, refresh: refresh })

    return (
        <TableBody>
            {data.length > 0 &&
                <TableRow key={data[0].country}>
                    <TableCell component="th" scope="row">{data[0].continent}</TableCell>
                    <TableCell align="left">{data[0].country}</TableCell>
                    <TableCell align="left">{data[0].population}</TableCell>

                    <TableCell align="left">
                        {Object.entries(data[0].cases).map(([key, value]) => (
                            <div key={key}>{key}: {value}</div>
                        ))}
                    </TableCell>

                    <TableCell align="left">
                        {Object.entries(data[0].tests).map(([key, value]) => (
                            <div key={key}>{key}: {value}</div>
                        ))}
                    </TableCell>

                    <TableCell align="left">
                        {Object.entries(data[0].deaths).map(([key, value]) => (
                            <div key={key}>{key}: {value}</div>
                        ))}
                    </TableCell>

                    <TableCell align="left">{new Date(`${data[0].time}`).toLocaleTimeString()}</TableCell>

                    <TableCell>
                        <Button variant='outlined' size='small' color='error' onClick={() => handleDelete(data[0].country)}>Remove</Button>
                    </TableCell>

                </TableRow>
            }
        </TableBody>
    )
}

export default CountryDetailTable