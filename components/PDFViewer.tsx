import { Button, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from "../pdf-worker";
import styles from '../styles/Home.module.scss';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface IProps {
    readonly file: string;
}

const PDFViewer: React.FC<IProps> = ({ file }): JSX.Element => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const { t } = useTranslation();

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
        <div style={{ alignContent: "center" }} >
            <div >
                <span>   {pageNumber > 1 &&
                    <Button onClick={changePageBack}>{t("PREVIOUS_PAGE")}</Button>
                }
                    {
                        pageNumber < numPages &&
                        <Button onClick={changePageNext}>{t("NEXT_PAGE")}</Button>
                    }
                </span>
                {t("PAGE")} <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={pageNumber}
                    label="Age"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event.target.value)}
                >
                    {dropDownValues.map(value => <MenuItem value={value + 1} key={value}>{value + 1}</MenuItem>)}
                </Select>
            </div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}  >
                <Page pageNumber={pageNumber} className={styles.Pdf} width={pageWidth} />
            </Document>
            {/** TODO: figure out this */}
            <p> {t("PAGE")} {pageNumber} of {numPages}</p>
        </div >
    );
};

export default PDFViewer;

