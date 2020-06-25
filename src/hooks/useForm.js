import { useState, useEffect, useCallback } from 'react'

const useForm = (stateSchema, validationSchema = {}, callback) => {
  const [state, setState] = useState(stateSchema)
  const [disable, setDisable] = useState(true)
  const [isDirty, setIsDirty] = useState(false)

  //
  useEffect(() => {
    setDisable(true)
  }, [])

  //
  useEffect(() => {
    if (isDirty) {
      setDisable(validationState())
    }
  }, [state, isDirty])

  //
  const validationState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some(key => {
      const isInputFieldRequired = validationSchema[key].required
      const stateValue = state[key].value
      const stateError = state[key].error

      return (isInputFieldRequired && !stateValue) || stateError
    })

    return hasErrorInState
  })

  //
  const handleOnChange = useCallback(e => {
    setIsDirty(true)

    const name = e.target.name
    const value = e.target.value

    let error = ''

    if (validationSchema[name].required) {
      if (!value) {
        error = 'This field is required'
      }
    }

    if (
      validationSchema[name].validator !== null &&
      typeof validationSchema[name].validator === 'object'
    ) {
      if (value && !validationSchema[name].validator.regEx.test(value)) {
        error = validationSchema[name].validator.error
      }
    }

    setState(prevState => ({
      ...prevState,
      [name]: { value, error }
    }))
  },
    [validationSchema]
  )//

  const handleOnSubmit = useCallback(
    e => {
      e.preventDefault()

      if (!validationState()) {
        callback(state)
      }
    },
    [state]
  )

  return { state, disable, handleOnChange, handleOnSubmit }
}//

export default useForm