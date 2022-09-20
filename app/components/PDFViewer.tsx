import { Button, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from "../pdf-worker";
import styles from '../styles/Home.module.scss';
import { isMobile } from 'react-device-detect';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface IProps {
    readonly file: string;
}

const PDFViewer: React.FC<IProps> = ({ file }): JSX.Element => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }): void => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const changePage = (offSet): void => {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    };

    const changePageBack = (): void => {
        changePage(-1);
    };

    const changePageNext = (): void => {
        changePage(+1);
    };

    const handleChange = (value): void => setPageNumber(value);

    const dropDownValues: number[] = Array.from(Array(numPages + 1).keys());

    const pageWidth: string = isMobile ? "300" : "600";

    return (
        <div align="center">
            <div >
                <span>   {pageNumber > 1 &&
                    <Button onClick={changePageBack}>Previous Page</Button>
                }
                    {
                        pageNumber < numPages &&
                        <Button onClick={changePageNext}>Next Page</Button>
                    }
                </span>
                Page <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={pageNumber}
                    label="Age"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event.target.value)}
                >
                    {dropDownValues.map(value => <MenuItem value={value + 1}>{value + 1}</MenuItem>)}
                </Select>
            </div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}  >
                <Page pageNumber={pageNumber} className={styles.Pdf} width={pageWidth} />
            </Document>
            <p> Page {pageNumber} of {numPages}</p>
        </div >
    );
};

export default PDFViewer;

