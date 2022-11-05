import DoughnutChart from 'components/DoughnutChart';
import ParticipantsTable from 'components/ParticipantsTable';
import Statistics from 'components/Statistics';
import React from 'react';

const Dashboard: React.FC = (): JSX.Element => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ParticipantsTable />
            <div style={{ display: 'block', marginLeft: "10px" }} >
                <DoughnutChart />
                <Statistics />
            </div>
        </div>
    );
};

export default Dashboard;

//todo: 
// add admin role verification
