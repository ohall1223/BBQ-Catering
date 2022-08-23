import React, {useState} from "react";
import {validateEmail} from '../utils/helpers'

function ContactForm() {

   const [formState, setFormState ] = useState({ name: "", email: "", message: "" });

   const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(event) {
        if(event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);

            if(!isValid) {
                setErrorMessage('please enter a valid email')
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value})
        }
    }
    function handleSubmit(event) {
        event.preventDefault()
    }
    return (
        <section className="container">
            <h2 data-testid='h1tag' className='top-title'>Contact Information</h2>
            <hr></hr>
            <form class='justify-content-center' id='contact-form'>
                <div class='mt-5'>
                    <label htmlFor="name">Name:</label>
                    <input class= 'form-control' type='text' name='name' defaultValue = {name} onBlur={handleChange}></input>
                </div>
                <div class='mt-5'>
                    <label htmlFor="email">Email address:</label>
                    <input class= 'form-control' type='email' name='email' defaultValue = {email} onBlur={handleChange}></input>
                </div>
                <div class='mt-5'>
                    <label htmlFor="message">Message:</label>
                    <input class= 'form-control' type='text' name='message' defaultValue = {message} onBlur={handleChange} rows="7"></input>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <div class="mt-5 mb-5">
                    <button fata-testid='button' class='btn btn-outline-dark' type='submit' onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;