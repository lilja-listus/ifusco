import styles from '../styles/Home.module.scss';
import React, { useState } from 'react';
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
import { useRegisterParticipantMutation } from "../lib/graphql/registerparticipant.graphql";
import * as Yup from "yup";
import { Box, Button, CardMedia, Container, TextField, Typography } from "@material-ui/core";
import { useRouter, NextRouter } from 'next/router';
import { CountriesAutoComplete } from '../components/CountriesAutoComplete';
import { useAuth } from "../lib/useAuth";
import { participationFieldsList } from '../components/data/participationFieldsList';
import { useTranslation } from 'react-i18next';

interface IFormValues {
    email: string;
    nameFirst: string;
    nameLast: string;
    university: string;
    country: string;
}

const RegisterNewParticipant: React.FC = (): JSX.Element => {
    const [registerParticipantMutation] = useRegisterParticipantMutation();
    const [errorMessage, setErrorMessage] = useState('');

    const router: NextRouter = useRouter();
    const { user } = useAuth();
    const { t } = useTranslation();

    const updatedValue = (formikProps: FormikProps<IFormValues>): ((value: string) => void) => {
        return (value: string): void => {
            formikProps.setFieldTouched('country');
            formikProps.setFieldValue('country', value);
        };
    };

    return (
        <div className={styles.registerNewParticipant}>
            <Formik<IFormValues>
                initialValues={{
                    country: "",
                    email: user?.email || "",
                    nameFirst: "",
                    nameLast: "",
                    university: "",
                }}
                onSubmit={async (values): Promise<void> => {
                    try {
                        const { data } = await registerParticipantMutation({ variables: { country: values.country, email: values.email, nameFirst: values.nameFirst, nameLast: values.nameLast, university: values.university } });
                        if (data.registerParticipant._id) {
                            router.push('/congrats-you-are-registered');
                        }

                    } catch (e) {
                        console.log(e);
                        setErrorMessage(e.message);
                    }
                }
                }
                validationSchema={Yup.object().shape({
                    country: Yup.string().required(t("COUNTRY_IS_REQUIRED")),
                    email: Yup.string()
                        .email(t("EMAIL_NOT_VALID"))
                        .required(t("EMAIL_IS_REQUIRED")),
                    nameFirst: Yup.string().required(t("FIRST_NAME_REQUIRED")),
                    nameLast: Yup.string().required(t("LAST_NAME_REQUIRED")),
                    university: Yup.string().required(t("UNIVERSITY_REQUIRED")),
                })}
            >
                {(formikProps): JSX.Element => {
                    return (
                        <Container >
                            <Box>
                                <div className={styles.registerNewParticipant__container}>
                                    <Typography color="secondary" variant="h5" component="h1" className={styles.registerNewParticipant__title} gutterBottom >{t("REGISTER_ME")}</Typography>
                                    <Form>
                                        <div className={styles.registerNewParticipant__participationFieldsContainer}>
                                            {participationFieldsList.map(({ value, label, helperText }) => (
                                                <Field name={value} key={label} >
                                                    {({ field, form: { touched, errors, isSubmitting } }: FieldProps): JSX.Element => {
                                                        return (
                                                            <TextField
                                                                label={label}
                                                                id={field.name}
                                                                name={field.name}
                                                                type={field.name === 'email' && 'email'}
                                                                onChange={formikProps.handleChange}
                                                                onBlur={formikProps.handleBlur}
                                                                value={formikProps.values[value]} size="small" helperText={helperText} className={styles.registerNewParticipant__textFieldValue} />);
                                                    }}
                                                </Field>
                                            ))}


                                        </div>
                                        <Field name='countries'>
                                            {({ field, form: { touched, errors, isSubmitting } }: FieldProps): JSX.Element => {
                                                return (
                                                    <CountriesAutoComplete updateValue={updatedValue(formikProps)} />
                                                );
                                            }}
                                        </Field>

                                        <Button
                                            color="secondary"
                                            type="submit"
                                            disabled={
                                                formikProps.isSubmitting ||
                                                (!!(formikProps.errors.email && formikProps.touched.email)
                                                    || !!(formikProps.errors.nameFirst && formikProps.touched.nameFirst)
                                                    || !!(formikProps.errors.nameLast && formikProps.touched.nameLast)
                                                    || !!(formikProps.errors.university && formikProps.touched.university)
                                                    || !!(formikProps.errors.country && formikProps.touched.country))
                                            }
                                        >
                                            {t("REGISTER")}
                                        </Button>
                                        {errorMessage && <Typography variant="h5" className={styles.registerNewParticipant__errorMessage}>{errorMessage}</Typography>}
                                    </Form>
                                </div>
                            </Box>
                        </Container>
                    );
                }}
            </Formik>

            <CardMedia
                height="510"
                image='/dom.jpg'
                title="???????????? ?????????????? ?????????????? ?????? ..."
                component="img"
            />
        </div >

    );
};

export default RegisterNewParticipant;

