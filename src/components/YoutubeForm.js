import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function YoutubeForm() {

    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }

    const onSubmit = values => {
        console.log('Form data', values)
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is Required."),
        email: Yup.string().email("Invalid email format.").required("Email is required."),
        channel: Yup.string().required("Channel is requied.")
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        name="channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel ? (<div className='error'>{formik.errors.channel}</div>) : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
