import React, { useState } from 'react';
import { Form, Formik, FieldProps, Field, FormikProps } from 'formik'
import { useRegisterParticipantMutation } from "../lib/graphql/registerparticipant.graphql"
import * as Yup from "yup";
import { TextField, Box, Typography, Button, Container, FormControl } from "@material-ui/core"
import { useRouter } from 'next/router';
import { CountriesAutoComplete } from './CountriesAutoComplete';
import { useAuth } from "../lib/useAuth"

interface IFormValues {
    email: string;
    nameFirst: string;
    nameLast: string;
    university: string;
    country: string;
}

const participationFields = [
    "email", "nameFirst", "nameLast", "university"
]

export const RegistrationForm: React.FC = (): JSX.Element => {
    const [registerParticipantMutation] = useRegisterParticipantMutation()
    const [errorMessage, setErrorMessage] = useState('')

    const router = useRouter();
    const { user } = useAuth()

    const updatedValue = (formikProps: FormikProps<IFormValues>): ((value: string) => void) => {
        return (value: string): void => {
            formikProps.setFieldTouched('country')
            formikProps.setFieldValue('country', value)
        }
    };

    return (
        <Formik<IFormValues>
            initialValues={{
                email: user?.email || "",
                nameFirst: "",
                nameLast: "",
                university: "",
                country: "",
            }}
            onSubmit={async (values): Promise<void> => {
                try {
                    const { data } = await registerParticipantMutation({ variables: { email: values.email, nameFirst: values.nameFirst, nameLast: values.nameLast, university: values.university, country: values.country } })
                    if (data.registerParticipant._id) {
                        router.push('/my-cabinet')
                    }

                } catch (e) {
                    console.log(e)
                    setErrorMessage(e.message)
                }
            }
            }
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Email not valid")
                    .required("Email is required"),
                nameFirst: Yup.string().required("First name is required"),
                nameLast: Yup.string().required("Last name is required"),
                country: Yup.string().required("Country is required"),
                university: Yup.string().required("University is required"),
            })}
        >
            {(formikProps): JSX.Element => {
                return (
                    <Form>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {participationFields.map(participationField => (
                                <Field name={participationField}>
                                    {({ field, form: { touched, errors, isSubmitting } }: FieldProps): JSX.Element => {
                                        return (
                                            <TextField
                                                label={field.name}
                                                id={field.name}
                                                name={field.name}
                                                type={participationField === 'email' && 'email'}
                                                onChange={formikProps.handleChange}
                                                onBlur={formikProps.handleBlur}
                                                value={formikProps.values[participationField]} size="small" helperText='eg. pekka.kaljanen@poro.com' style={{ width: '300px' }} />)
                                    }}
                                </Field>
                            ))}

                            <Field name='countries'>
                                {({ field, form: { touched, errors, isSubmitting } }: FieldProps): JSX.Element => {
                                    return (
                                        <CountriesAutoComplete updateValue={updatedValue(formikProps)} />
                                    )
                                }}
                            </Field>
                        </div>
                        <Button
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
                            Register
                        </Button>
                        {errorMessage && <Typography variant="h5" style={{ color: 'red' }}>{errorMessage}</Typography>}
                    </Form>
                )
            }}
        </Formik>
    )
}