import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { navigate } from "gatsby";
import { Button } from "./shared/button";

const Wrap = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 12px 0;
  }
  // button {
  //   position: relative; /* Position relative for absolute positioning of loader */
  //   width: 120px;
  //   height: 48px;
  //   background: rgba(0, 0, 0, 0.95);
  //   padding: 6px 0px;
  //   color: rgb(248, 248, 248);
  //   font-size: 1em;
  //   font-weight: bold;
  // }

  button.loading:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  button.loading > * {
    display: inline-block;
  }
  button.loading > svg {
    animation: spin 0.6s linear infinite; /* Animation for spinner */
  }
  @keyframes spin {
    100% {
      transform: rotate(3 deg);
    }
  }
  textarea,
  input {
    font-size: 1em;
    font-weight: bold;
    font-family: monospace;
    border-radius: 0.2233rem;
    border: 1.5px solid black;
    transition: border-color 0.3s ease; /* Add transition for smoother effect */
    margin-bottom: 1rem;
    padding: 1.2rem;
  }
  input.error,
  textarea.error {
    border-color: red; /* Change border color to red for error state */
  }
`;

const EmailForm = (hash) => {
  const [emailData, setEmailData] = useState({
    from: "",
    subject: "",
    message: "",
  });
  const [errorFields, setErrorFields] = useState({});
  const [loading, setLoading] = useState(false); // State to track loading
  console.log(hash);
  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
    setErrorFields({ ...errorFields, [e.target.name]: false }); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!emailData.from) {
      errors.from = true;
    }
    if (!emailData.subject) {
      errors.subject = true;
    }
    if (!emailData.message) {
      errors.message = true;
    }
    if (Object.keys(errors).length > 0) {
      setErrorFields(errors);
      return; // Don't submit form if there are errors
    }
    try {
      setLoading(true); // Start loading
      await axios.post(
        "https://homepage-api.onrender.com/send-email",
        emailData
      );
      navigate("/thank-you");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (hash.hash === "research") {
      setEmailData({
        from: "",
        subject: "Ask for research: Research proposal",
        message: "",
      });
    }
  }, [hash]);

  return (
    <Wrap>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="from"
          value={emailData.from}
          onChange={handleChange}
          placeholder="Recipient email"
          className={errorFields.from ? "error" : ""}
          required
        />
        <input
          type="text"
          name="subject"
          value={emailData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className={errorFields.subject ? "error" : ""}
          required
        />
        <textarea
          name="message"
          value={emailData.message}
          onChange={handleChange}
          placeholder="Message"
          className={errorFields.message ? "error" : ""}
          required
        />
        <Button type="submit" className={loading ? "loading" : ""}>
          {loading ? "Loading" : "Send Email"}
        </Button>
      </form>
    </Wrap>
  );
};

export default EmailForm;
