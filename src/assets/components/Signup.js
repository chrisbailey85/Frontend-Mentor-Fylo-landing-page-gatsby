import React, { useState } from "react"
import { container, error, btn, form__group } from "../css/signup.module.css"

const Signup = () => {
  const [email, updateEmail] = useState("")
  const [emailError, updateEmailError] = useState(false)

  const handleClick = e => {
    const regexPatten =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!email.match(regexPatten)) {
      updateEmailError(true)
    } else {
      updateEmailError(false)
    }
    e.preventDefault()
  }
  return (
    <section aria-labelledby="heading">
      <div className={container}>
        <h2 id="heading">Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form>
          <div className={form__group}>
            <label htmlFor="email" className="sr-only">
              Enter email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="email@example.com"
              onChange={e => updateEmail(e.target.value)}
            />
            {emailError && (
              <p className={error}>Please enter a valid email address</p>
            )}
          </div>
          <button type="submit" className={btn} onClick={handleClick}>
            Get Started For Free
          </button>
        </form>
      </div>
    </section>
  )
}

export default Signup
