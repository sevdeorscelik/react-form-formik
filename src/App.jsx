import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
import './App.css'

function App() {

/*
  return(
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: 'jared' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values);
         // alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

*/
  return (
    <div className="Container">
      <div className='brand-box'>
        <h1>Magic Form</h1>
        <p>Bauen Sie Formulare in React ohne Tränen.</p>

      </div>
      <div className='magic-form'>
        <Formik
          initialValues={{
            name:"",
            email:"",
            agree: false,
            favoriteColor:""
          }}
          validationSchema={
            Yup.object({
              name: Yup.string().required('Bitte geben Sie Ihren Namen ein'),
              email: Yup.string().email().required('Bitte geben Sie Ihre E-Mail Adresse ein'),
              agree: Yup.boolean().required('Bitte akzeptieren Sie die Nutzungsbedingungen'),
              favoriteColor: Yup.string().required('Bitte wählen Sie Ihre Lieblingsfarbe')
                .oneOf(['rosa', 'blau', 'gelb'])
            })
          }

          //burda tam oalrak ne yaptik

          onSubmit={(values, actions) => {
            console.log(values);
            setTimeout(()=>{
              //resetForm()
              actions.setSubmitting(false)
            },1000)
          }}
        >
          {
            ({ values, errors, handleSubmit, handleReset, handleChange, dirty, isSubmitting}) => ( //bunlar propslarimiz
              <form onSubmit={handleSubmit} >
                <h3>Registrieren</h3>
                <label htmlFor="name" className='labelName'>Fullname : </label>
                <input
                  id='name'
                  className='input'
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  placeholder='Max Mustermann...'
                />
                
                <br />

                <label htmlFor="email" className='top-margin' className='labelMail'>E-mail : </label>
                <input
                  id='email'
                  className='input'
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  placeholder='maxmustermann@hotmail.com...'
                />
                

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
                </div>
               
                <br />

                <button type='submit' disabled={!dirty || isSubmitting}>Send</button>
              </form>
            )
          }

        </Formik>

      </div>
    </div>
  )
  
}

export default App
