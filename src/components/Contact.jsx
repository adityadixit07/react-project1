import React from "react";
import "../styles/contact.scss"
import "../styles/mediaQuery.scss"
const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Enter name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Enter Email" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="email"
              required
              placeholder="Tell us about your query.."
            />
          </div>
          <div>
            <label>Phone</label>
            <input type="number" required placeholder="Enter Phone Number" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
