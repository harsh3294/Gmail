import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeHolder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">Required...</p>}
        <input
          name="subject"
          placeHolder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && <p className="sendMail__error">Required...</p>}

        <input
          name="message"
          placeHolder="Message..."
          className="sendMail__message"
          type="text"
          ref={register({ required: true })}
        />
        {errors.message && <p className="sendMail__error">Required...</p>}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            type="submit"
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
