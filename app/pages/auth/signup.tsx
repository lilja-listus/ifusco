import React, { useState } from 'react';
import { Form, Formik, FieldProps, Field, ErrorMessage } from 'formik'
import { useAuth } from 'lib/useAuth'
import * as Yup from "yup";
import { TextField, Typography, Button, Container, makeStyles } from "@material-ui/core"
import { useRouter } from 'next/router';

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
        value: 'email',
        label: 'Email',
        type: 'email'
    },
    {
        value: 'nameFirst',
        label: 'First Name',

    },
    {
        value: 'password',
        label: 'Password',
        type: 'password'

    },
    {
        value: 'passwordConfirm',
        label: 'Confirm Password',
        type: 'password'
    },
]

const RegisterNewUser: React.FC = (): JSX.Element => {
    const { error, signUp } = useAuth()

    const router = useRouter();

    const classes = useStyles()

    return (
        <Formik<IFormValues>
            initialValues={{
                email: "",
                nameFirst: "",
                password: "",
                passwordConfirm: "",
            }}
            onSubmit={async (values): Promise<void> => {
                try {
                    const { data } = await signUp(values.email, values.password, values.nameFirst)
                    if (data.user._id) {
                        router.push('/my-dashboard')
                    }
                } catch (e) {
                    console.log(e)
                }
            }
            }
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Email not valid")
                    .required("Email is required"),
                password: Yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum.'),
                passwordConfirm: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                nameFirst: Yup.string().required("Name is required"),
            })}
        >
            {(formikProps): JSX.Element => {
                return (
                    <Container align="center" >
                        <div className={classes.containerBox}>
                            <Typography variant="h5" component="h1" className={classes.headerText} gutterBottom>Register me for the conference</Typography>

                            <Form>
                                <div className={classes.participationFieldsContainer}>
                                    {participationFieldsObject.map(({ value, label, type }) => (
                                        <Field name={value}>
                                            {({ field, form: { touched, errors, isSubmitting } }: FieldProps): JSX.Element => {
                                                return (<>
                                                    <TextField
                                                        label={label}
                                                        id={field.name}
                                                        name={field.name}
                                                        type={type}
                                                        onChange={formikProps.handleChange}
                                                        onBlur={formikProps.handleBlur}
                                                        value={formikProps.values[value]} size="small" className={classes.fieldValue} />
                                                    {errors[value] && touched[value] ? (
                                                        <div className={classes.errorMessage}>{errors[value]}</div>
                                                    ) : null}

                                                </>)

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
                                {console.log(formikProps.errors)}
                            </Form>
                        </div>
                    </Container >
                )
            }}
        </Formik >

    )
}

export default RegisterNewUser;

const useStyles = makeStyles(() => ({
    containerBox: { width: '400px', backgroundColor: '#F0F8FF', padding: '10px 60px 30px 50px', borderRadius: '25px', marginBottom: '150px' },
    headerText: { marginBottom: '10px' },
    participationFieldsContainer: { display: 'flex', flexDirection: 'column', marginBottom: '10px' },
    fieldValue: { width: '300px' },
    errorMessage: { color: 'red', alignSelf: 'left' }
})) 