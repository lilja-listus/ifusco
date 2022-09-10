import styles from '../styles/Home.module.scss'
import React from 'react';
import { Form, Formik, FieldProps, Field } from 'formik'
import { useAuth } from 'lib/useAuth'
import * as Yup from "yup";
import { TextField, Typography, Button, Container } from "@material-ui/core"
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
                        <div className={styles.signupPage__container} >
                            <Typography variant="h5" component="h1" className={styles.signupPage__headerText} gutterBottom>Register me for the conference</Typography>

                            <Form>
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
                            </Form >
                        </div >
                    </Container >
                )
            }}
        </Formik >

    )
}

export default RegisterNewUser;
