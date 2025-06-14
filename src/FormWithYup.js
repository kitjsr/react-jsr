import React from 'react'
import * as Yup from 'yup';


let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

export const FormWithYup = () => {
  return (
    <div>FormWithYup</div>
  )
}
