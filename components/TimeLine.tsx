import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { useTranslation } from 'react-i18next';

interface ITimeLine {
    readonly dates: string;
    readonly color: 'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    readonly label: string;
}

export default function TimeLine(): JSX.Element {
    const { t } = useTranslation();

    const timeLineObject: ITimeLine[] = [
        {
            color: "primary",
            dates: 'Start date - End Date',
            label: t("REGISTER"),
        },
        {
            color: "secondary",
            dates: 'Start date - End Date',
            label: t("SEND_ABSTRACT"),
        },
    ];

    return (
        <>
            <Timeline position="alternate">
                {timeLineObject.map(timelineItem => (
                    <TimelineItem key={timelineItem.label}>
                        <TimelineOppositeContent color="text.success">
                            {timelineItem.dates}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={timelineItem.color} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{timelineItem.label}</TimelineContent>
                    </TimelineItem>
                ))}
                <TimelineItem>
                    <TimelineOppositeContent color="text.success">
                        Start date - End Date
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="success" />
                    </TimelineSeparator>
                    <TimelineContent>Enjoy IFUSCO in Turku</TimelineContent>
                </TimelineItem>

            </Timeline>
        </>
    );
};
