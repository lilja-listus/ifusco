import styles from '../../styles/Home.module.scss';
import React from 'react';
import { Field, FieldProps, Form, Formik } from 'formik';
import { useAuth } from 'lib/useAuth';
import * as Yup from "yup";
import { Button, CardMedia, Container, TextField, Typography } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';

interface IFormValues {
    readonly email: string;
    readonly nameFirst: string;
    readonly password: string;
    readonly passwordConfirm: string;

}

interface IFormField {
    readonly value: string;
    readonly label: string;
    readonly type?: string;
}

const RegisterNewUser: React.FC = (): JSX.Element => {
    const { signUp, error } = useAuth();
    const { t } = useTranslation();

    const participationFieldsObject: IFormField[] = [
        {
            label: t("EMAIL"),
            type: 'email',
            value: 'email',
        },
        {
            label: t("FIRST_NAME"),
            value: 'nameFirst',
        },
        {
            label: t("PASSWORD"),
            type: 'password',
            value: 'password',
        },
        {
            label: t("CONFIRM_PASSWORD"),
            type: 'password',
            value: 'passwordConfirm',
        },
    ];


    return (
        <div className={styles.signupPage}>
            <CardMedia
                height="510"
                image='/registration.jpg'
                title="ПТН ПНХ"
                component="img"
            />
            <Formik<IFormValues>
                initialValues={{
                    email: "",
                    nameFirst: "",
                    password: "",
                    passwordConfirm: "",
                }}

                onSubmit={async (values): Promise<void> => {
                    await signUp(values.email, values.password, values.nameFirst);
                }
                }

                validationSchema={
                    Yup.object().shape({
                        email: Yup.string()
                            .email(t("EMAIL_NOT_VALID"))
                            .required(t("EMAIL_IS_REQUIRED")),
                        nameFirst: Yup.string().required(t("FIRST_NAME_REQUIRED")),
                        password: Yup.string().required(t("PASSWORD_REQUIRED")).min(8, t("PASSWORD_TOO_SHORT")),
                        passwordConfirm: Yup.string()
                            .oneOf([Yup.ref('password'), null], t("PASSWORDS_DONT_MATCH")),
                    })
                }
            >
                {(formikProps): JSX.Element => {
                    return (
                        <Container>
                            <div className={styles.signupPage__container} >
                                <Typography variant="h5" component="h1" className={styles.signupPage__headerText} gutterBottom>{t("REGISTER")}</Typography>
                                <Form>
                                    <>
                                        <div className={styles.signupPage__participationFieldsContainer}>
                                            {participationFieldsObject.map(({ value, label, type }) => (
                                                <Field name={value} key={value}>
                                                    {({ field, form: { touched, errors, isSubmitting } }: FieldProps): JSX.Element => {
                                                        const error: string = errors[value] as string;
                                                        return (
                                                            <>
                                                                <TextField
                                                                    label={label}
                                                                    id={field.name}
                                                                    name={field.name}
                                                                    type={type}
                                                                    onChange={formikProps.handleChange}
                                                                    onBlur={formikProps.handleBlur}
                                                                    value={formikProps.values[value]} size="small" className={styles.signupPage__fieldValue} />
                                                                {error && touched[value] && <div style={{ color: 'red' }}>{error}</div>}
                                                            </>);
                                                    }}
                                                </Field>
                                            ))}
                                        </div>

                                        {error && <Alert severity="error">{error}</Alert>}

                                        <Button
                                            type="submit"
                                            disabled={
                                                formikProps.isSubmitting ||
                                                (!!(formikProps.errors.email && formikProps.touched.email)
                                                    || !!(formikProps.errors.nameFirst && formikProps.touched.nameFirst)
                                                    || !!(formikProps.errors.password && formikProps.touched.password))
                                            }
                                        >
                                            {t("SIGN_UP")}
                                        </Button>
                                    </>
                                </Form >
                            </div >
                        </Container >
                    );
                }}

            </Formik >
        </div >

    );
};

export default RegisterNewUser;
