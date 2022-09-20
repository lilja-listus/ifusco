import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PersonalInfo from '../pages/user-info/PersonalInfo';
import Abstract from '../pages/abstract/[id]/Abstract';
import MySchedule from '../pages/my-schedule';

interface ITabPanelProps {
    readonly children?: React.ReactNode;
    readonly index: number;
    readonly value: number;
}

interface IAllProps {
    readonly [key: string]: string;
    readonly id: string
}

function TabPanel(props: ITabPanelProps): JSX.Element {
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

function a11yProps(index: number): IAllProps {
    return {
        'aria-controls': `simple-tabpanel-${index}`,
        id: `simple-tab-${index}`,
    };
}

const MyDashboardTabs: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue: number): void => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={(_event: React.SyntheticEvent<Element, Event>, value: any): void => handleChange(value)} aria-label="basic tabs example" variant="fullWidth">
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
};

// TODO: hide Abstract for not registered to the conference

export default MyDashboardTabs;
