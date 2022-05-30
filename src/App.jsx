import { useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import './App.css'
import validations from './components/validations'
import InfoPage from './components/infoPage'

const App = () => {


  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      email: "",
      agree: false,
      favoriteColor: ""
    },

    onSubmit: (values) => {
      console.log(values);

    },

    validationSchema: validations

  })

  return (
    <div className="App">

      {
        isSubmitting
          ? (
            < InfoPage values={values} />
          )
          : (


            <div className='container'>

              <div className='brand-box'>
                <h1>Magic Form</h1>
                <p>Bauen Sie Formulare in React ohne Tränen.</p>
              </div>

              <form onSubmit={handleSubmit} className='magic-form'>
                <h3>Registrieren</h3>
                <label htmlFor="name" className='labelName'>Fullname : </label>
                <input
                  id='name'
                  className='input'
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  placeholder='Max Mustermann...'
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <div className='errors'>{errors.name}</div>
                )}

                <br />

                <label htmlFor="email" className='top-margin' className='labelMail'>E-mail : </label>
                <input
                  id='email'
                  className='input'
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  placeholder='maxmustermann@hotmail.com...'
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className='errors'>{errors.email}</div>
                )}

                <br />

                <label htmlFor="favoriteColor" className='labelColor'>Lieblingsfarbe : </label>
                <select
                  id="favoriteColor"
                  value={values.favoriteColor}
                  onChange={handleChange}
                >
                  <option value="" label='Wähle eine Farbe' />
                  <option value="pink" label='Rosa' />
                  <option value="blue" label='Blau' />
                  <option value="yellow" label='Gelb' />
                </select>
                {errors.favoriteColor && touched.favoriteColor && (
                  <div className='errors'>{errors.favoriteColor}</div>
                )}

                <br />

                <div className="checkbox">
                  <input
                    id='agree'
                    type="checkbox"
                    value={values.agree}
                    onChange={handleChange}

                  />
                  <label htmlFor='agree' className='checkbox-label'>
                    Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.
                  </label>
                  {errors.agree && touched.agree && (
                    <div className='errors'>{errors.agree}</div>
                  )}
                </div>

                <br />

                <button type='submit'>Send</button>
              </form>
            </div>
          )
      }


    </div>

  )

}

export default App
