import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { 
    register,
    handleSubmit, 
    setError, 
    formState: { errors, isSubmitting },
   } = useForm();

   const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 2000);
    })
   }

   const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    let res = await r.text()
    console.log(data, res)
    // await delay(2);
    // console.log(data);
    // if (data.username !== "arii") {
    //   setError("myForm", {message: "Username is incorrect"} )
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading.....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", {required: true, minLength: {value: 3, message: "Min Length is 3"}, maxLength: {value: 8, message: "Max Length is 8"}})} type="text" placeholder='Username' />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <input {...register("password",{minLength: {value: 8, message: "Min Length is 8"}} )} type="password" placeholder='Password' />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myForm && <div className="red">{errors.myForm.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
