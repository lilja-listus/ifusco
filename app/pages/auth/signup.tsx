import styles from '../../styles/Home.module.scss';
import React from 'react';
import { Field, FieldProps, Form, Formik } from 'formik';
import { useAuth } from 'lib/useAuth';
import * as Yup from "yup";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import Image from 'next/image';
import Perse from '../../img/perse.jpg';

interface IFormValues {
    email: string;
    nameFirst: string;
    password: string;
    passwordConfirm: string;
}

interface IFormField {
    readonly value: string;
    readonly label: string;
    readonly type?: string;
}

const participationFieldsObject: IFormField[] = [
    {
        label: 'Email',
        type: 'email',
        value: 'email',
    },
    {
        label: 'First Name',
        value: 'nameFirst',
    },
    {
        label: 'Password',
        type: 'password',
        value: 'password',
    },
    {
        label: 'Confirm Password',
        type: 'password',
        value: 'passwordConfirm',
    },
];

const RegisterNewUser: React.FC = (): JSX.Element => {
    const { signUp } = useAuth();

    return (
        <div style={{ display: 'flex', alignItems: 'start' }}>
            <Formik<IFormValues>
                initialValues={{
                    email: "",
                    nameFirst: "",
                    password: "",
                    passwordConfirm: "",
                }}

                onSubmit={async (values): Promise<void> => {
                    try {
                        await signUp(values.email, values.password, values.nameFirst);
                    } catch (e) {
                        console.log(e);
                    }
                }
                }

                validationSchema={
                    Yup.object().shape({
                        email: Yup.string()
                            .email("Email not valid")
                            .required("Email is required"),
                        nameFirst: Yup.string().required("Name is required"),
                        password: Yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum.'),
                        passwordConfirm: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                    })
                }
            >
                {(formikProps): JSX.Element => {
                    return (
                        <Container >
                            <div className={styles.signupPage__container} >
                                <Typography variant="h5" component="h1" className={styles.signupPage__headerText} gutterBottom>Register</Typography>
                                <Form>
                                    <>
                                        <div className={styles.signupPage__participationFieldsContainer}>
                                            {participationFieldsObject.map(({ value, label, type }) => (
                                                <Field name={value} key={value}>
                                                    {({ field, form: { touched, errors, isSubmitting } }: FieldProps): JSX.Element => {
                                                        return (<>
                                                            <TextField
                                                                label={label}
                                                                id={field.name}
                                                                name={field.name}
                                                                type={type}
                                                                onChange={formikProps.handleChange}
                                                                onBlur={formikProps.handleBlur}
                                                                value={formikProps.values[value]} size="small" className={styles.signupPage__fieldValue} />
                                                            {errors[value] && touched[value] ? (
                                                                <div className={styles.signupPage__errorMessage}>{errors[value]}</div>
                                                            ) : null}
                                                        </>);
                                                    }}
                                                </Field>
                                            ))}
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={
                                                formikProps.isSubmitting ||
                                                (!!(formikProps.errors.email && formikProps.touched.email)
                                                    || !!(formikProps.errors.nameFirst && formikProps.touched.nameFirst)
                                                    || !!(formikProps.errors.password && formikProps.touched.password))
                                            }
                                        >
                                            Register
                                        </Button>
                                    </>
                                </Form >
                            </div >
                        </Container >
                    );
                }}
            </Formik >
            <Image src={Perse} />
        </div>

    );
};

export default RegisterNewUser;
