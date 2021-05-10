import { AppBar, Button, CssBaseline, makeStyles, Switch, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import io from 'socket.io-client'
import VaccineCentreTable from '../components/vaccine-centre-table'
import { IVaccineCentre } from '../model/vaccine-centre.interface'
import { lightTheme } from '../src/theme/theme'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '32px auto',
    width: '100%',
    maxWidth: '70%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    }
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  }
}))

interface HomeProps {
  socketUrl: string;
  socketMsg: string;
}
const connectionOptions = {
  transports: ['websocket', 'polling', 'flashsocket']
};
export default function Home(props: HomeProps) {
  const socketRef = useMemo(() => io(props.socketUrl, connectionOptions), []);
  const styles = useStyles();

  const [centreList, setCentreList] = useState<IVaccineCentre[]>([]);

  const [availableCentreList, setAvailableCentreList] = useState<IVaccineCentre[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  const listenSocketEvent = () => {
    console.log('socket msg check', props.socketMsg);
    console.log('socket msg local', props.socketUrl);
    socketRef.on(props.socketMsg, (data: IVaccineCentre[]) => {
      console.log('Socket msg', data);
      setCentreList(data);
      setUpdateAvailable(true);
    })
    socketRef.on('CONNECTED', (data) => {
      console.log('Connected', data);
    })
  }

  const removeSSRMaterial = () => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  useEffect(() => {
    if (centreList && (updateAvailable === false || autoRefresh === true)) {
      setAvailableCentreList(centreList);
    }
  }, [centreList, updateAvailable, autoRefresh])

  useEffect(() => {
    // socketRef.connect();
    listenSocketEvent();
    removeSSRMaterial();
    return () => {
      socketRef.disconnect();
    }
  }, [])

  return (
    <>
      <Head>
        <title>Cowin Vaccine Tracker</title>
        <meta name="description" content="Track Vaccine Availability" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AppBar position="relative" className={styles.appBar}>
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6" color="inherit">Vaccine Availability Tracker</Typography>
            <div>
              <Button variant="contained" color="secondary" disabled={autoRefresh || !updateAvailable} onClick={() => setUpdateAvailable(false)}>
                {autoRefresh ? 'Auto Refresh' : 'Refresh'}
              </Button>
              <Switch color="secondary" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
            </div>
          </Toolbar>
        </AppBar>
        <main className="basic-vertical">
          <div className={`basic-vertical ${styles.container}`}>
            <VaccineCentreTable centreList={availableCentreList}></VaccineCentreTable>
          </div>
        </main>
      </ThemeProvider>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      socketUrl: process.env.SOCKET_URL || 'https://localhost:5000',
      socketMsg: process.env.SOCKET_MSG || 'AVAIL_DETAIL'
    }
  }
}

const sampleData: any = [
  {
    "center_id": 560766,
    "name": "Dr B L Kapur Hospital Site 2",
    "address": "PUSA ROAD RAJINDRA PLACE NEW DELHI 110005",
    "state_name": "Delhi",
    "district_name": "Central Delhi",
    "block_name": "Not Applicable",
    "pincode": 110005,
    "lat": 28,
    "long": 77,
    "from": "09:00:00",
    "to": "18:00:00",
    "fee_type": "Paid",
    "sessions": [
      {
        "session_id": "3cef609a-489a-4a44-b605-d3a6d2c6ff09",
        "date": "10-05-2021",
        "available_capacity": 1,
        "min_age_limit": 18,
        "vaccine": "COVISHIELD",
        "slots": [
          "09:00AM-11:00AM",
          "11:00AM-01:00PM",
          "01:00PM-03:00PM",
          "03:00PM-06:00PM"
        ]
      }
    ],
    "vaccine_fees": [
      {
        "vaccine": "COVISHIELD",
        "fee": "900"
      }
    ]
  },
  {
    "center_id": 696025,
    "name": "SKV Delhi Cantt Site - 2",
    "address": "Govt. Sarvodaya Kanya Vidyalaya Delhi Cantt - 110010",
    "state_name": "Delhi",
    "district_name": "New Delhi",
    "block_name": "Not Applicable",
    "pincode": 110010,
    "lat": 28,
    "long": 77,
    "from": "09:00:00",
    "to": "17:00:00",
    "fee_type": "Free",
    "sessions": [
      {
        "session_id": "3305a23a-99c5-40da-afa2-1f39e37b0566",
        "date": "10-05-2021",
        "available_capacity": 2,
        "min_age_limit": 18,
        "vaccine": "COVISHIELD",
        "slots": [
          "09:00AM-11:00AM",
          "11:00AM-01:00PM",
          "01:00PM-03:00PM",
          "03:00PM-05:00PM"
        ]
      }
    ]
  },
  {
    "center_id": 694227,
    "name": "GGSSS No.1 YAMUNA VIHAR S4",
    "address": "B-Block Yamuna Vihar Delhi",
    "state_name": "Delhi",
    "district_name": "North East Delhi",
    "block_name": "Not Applicable",
    "pincode": 110053,
    "lat": 28,
    "long": 77,
    "from": "09:00:00",
    "to": "17:00:00",
    "fee_type": "Free",
    "sessions": [
      {
        "session_id": "f2c617c7-13d0-4254-8d97-489f0cbc128c",
        "date": "10-05-2021",
        "available_capacity": 2,
        "min_age_limit": 18,
        "vaccine": "COVAXIN",
        "slots": [
          "09:00AM-11:00AM",
          "11:00AM-01:00PM",
          "01:00PM-03:00PM",
          "03:00PM-05:00PM"
        ]
      }
    ]
  },
  {
    "center_id": 693796,
    "name": "GBSSS JANAKPURI BLOCK-A 2",
    "address": "BLOCK-A JANAKPURI SCHOOL ID 1618065",
    "state_name": "Delhi",
    "district_name": "South West Delhi",
    "block_name": "Not Applicable",
    "pincode": 110059,
    "lat": 28,
    "long": 77,
    "from": "09:00:00",
    "to": "17:00:00",
    "fee_type": "Free",
    "sessions": [
      {
        "session_id": "6032e0ac-461a-4e53-81dc-1dd5fbfeb97f",
        "date": "10-05-2021",
        "available_capacity": 1,
        "min_age_limit": 18,
        "vaccine": "COVISHIELD",
        "slots": [
          "09:00AM-11:00AM",
          "11:00AM-01:00PM",
          "01:00PM-03:00PM",
          "03:00PM-05:00PM"
        ]
      }
    ]
  }
]