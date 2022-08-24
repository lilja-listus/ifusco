import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalInfo from '../pages/user-info/PersonalInfo';
import Abstract from '../pages/abstract/[id]/Abstract';
import MySchedule from '../pages/my-schedule';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <>{children}</>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MyCabinetTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
                    <Tab label="My Schedule" {...a11yProps(0)} />
                    <Tab label="My Abstract" {...a11yProps(1)} />
                    <Tab label="My Info" {...a11yProps(2)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <MySchedule />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Abstract />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <PersonalInfo />
            </TabPanel>

        </Box>
    );
}

// TODO: hide Abstract for not registered to the conference
