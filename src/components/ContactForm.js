import React from 'react'
import useForm from '../hooks/useForm'

const ContactForm = () => {
  const stateSchema = {
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    company: { value: '', error: '' },
    title: { value: '', error: '' },
    message: { value: '', error: '' },
  }

  const validationSchema = {
    name: {
      required: true,
      validator: {
        regEx: /^[a-zA-ZåäöÅÄÖ\s]*$/,
        error: 'Invalid name format'
      }
    },
    email: {
      required: true,
      validator: {
        regEx: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        error: 'Invalid email format'
      }
    },
    company: {
      required: true,
      validator: {
        regEx: /./,
        error: 'Invalid',
      }
    },
    title: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z\s]*$/,
        error: 'Invalid title format'
      }
    },
    message: {
      required: true,
      validator: {
        regEx: /./,
        error: 'Invalid message format'
      }
    }
  }

  const onSubmitForm = (state) => {
    alert(JSON.stringify(state, null, 2))
  }

  const { state, handleOnChange, handleOnSubmit, handleOnBlur, disable } = useForm(
    stateSchema,
    validationSchema,
    onSubmitForm,
  )

  return (
    <>
      <form className="contact-us-form"
        onSubmit={handleOnSubmit}>
        <input
          className={state.name.error && 'error-input'}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          name="name"
          value={state.name.value}
          type="text"
          placeholder="Name"
        />
        <small className="error-msg">{state.name.error && state.name.error}</small>
        <input
          className={state.email.error && 'error-input'}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          name="email"
          value={state.email.value}
          type="text"
          placeholder="Email Adress"
        />
        <small className="error-msg">{state.email.error && state.email.error}</small>
        <input
          className={state.company.error && 'error-input'}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          name="company"
          value={state.company.value}
          type="text"
          placeholder="Company Name"
        />
        <small className="error-msg">{state.company.error && state.company.error}</small>
        <input
          className={state.title.error && 'error-input'}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          name="title"
          value={state.title.value}
          type="text"
          placeholder="Title"
        />
        <small className="error-msg">{state.title.error && state.title.error}</small>
        <textarea
          className={state.message.error && 'error-input'}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          name="message"
          value={state.message.value}
          type="text"
          placeholder="Message"
        />
        <small className="error-msg">{state.message.error && state.message.error}</small>
        <button
          className="btn-primary-dark"
          disabled={disable}
          name="submit"
        >submit</button>
      </form>
    </>
  )
}

export default ContactForm