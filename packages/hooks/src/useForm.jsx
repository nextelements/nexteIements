'use client'

import { useState } from 'react'

export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target

    if (type === 'checkbox') {
      setValues({
        ...values,
        [name]: checked
          ? [...values[name], value]
          : values[name].filter((item) => item !== value),
      })
    } else if (type === 'radio') {
      setValues({
        ...values,
        [name]: value,
      })
    } else {
      setValues({
        ...values,
        [name]: value,
      })
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    if (validate) {
      const validationErrors = validate(values)
      setErrors(validationErrors)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    if (validate) {
      const validationErrors = validate(values)
      setErrors(validationErrors)
    }

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', values)
    }
    setIsSubmitting(false)
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
  }
}

/*

  import React from 'react';
import { useForm } from './useForm';

// Validierungsfunktion
const validate = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (values.acceptTerms !== true) {
    errors.acceptTerms = 'You must accept the terms and conditions';
  }

  return errors;
};

export function SignupForm() {
  const { values, errors, handleChange, handleSubmit, handleBlur } = useForm(
    {
      username: '',
      email: '',
      acceptTerms: false,
      gender: '',
      interests: [],
    },
    validate
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="acceptTerms">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={values.acceptTerms}
            onChange={handleChange}
          />
          I accept the terms and conditions
        </label>
        {errors.acceptTerms && <span>{errors.acceptTerms}</span>}
      </div>

      <div>
        <label>Gender</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        {errors.gender && <span>{errors.gender}</span>}
      </div>

      <div>
        <label>Interests</label>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="sports"
            checked={values.interests.includes('sports')}
            onChange={handleChange}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="music"
            checked={values.interests.includes('music')}
            onChange={handleChange}
          />
          Music
        </label>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="reading"
            checked={values.interests.includes('reading')}
            onChange={handleChange}
          />
          Reading
        </label>
      </div>

      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
}

*/