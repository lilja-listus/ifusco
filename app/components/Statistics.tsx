import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

interface IStatiscticsData {
    readonly country: string;
    readonly numberOfParticipants: number;
    readonly university: string;
}

interface IColumn {
    readonly field: string;
    readonly headerName?: string;
    readonly width?: number;
    readonly hide?: boolean;
}

interface IRow {
    readonly country: string;
    readonly id: string;
    readonly quanitity: number;
}


const Statistics: React.FC = (): JSX.Element => {
    const statisticsData: IStatiscticsData[] = [
        { country: 'Blah', numberOfParticipants: 1, university: 'BlahUni' },
        { country: 'Blah', numberOfParticipants: 1, university: 'Blah' },
        { country: 'Blah', numberOfParticipants: 1, university: 'Blah' },
        { country: 'Blah', numberOfParticipants: 1, university: 'Blah' },
        { country: 'Blah', numberOfParticipants: 1, university: 'Blah' },
        { country: 'Blah', numberOfParticipants: 1, university: 'Blah' },
    ];

    const columns: IColumn[] = [{
        "field": "id",
        "hide": true
    },
    {
        "field": "country",
        "headerName": "Country",
        "width": 100
    },
    {
        "field": "quanitity",
        "headerName": "Amount of Participants",
        "width": 160,
    }];

    const rows: IRow[] = [];

    statisticsData.forEach(item => (
        rows.push({
            "country": item.country,
            "id": item.country,
            "quanitity": item.numberOfParticipants
        })
    ));

    return (
        <div style={{ height: 200, width: '20%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid columns={columns} rows={rows} />
                </div>
            </div>
        </div>
    );
};

export default Statistics;

