import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FormCon, } from './style';

// Define types for the form elements
interface FormElements extends HTMLFormElement {
  user_name: HTMLInputElement;
  user_email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

export const ContactUs: React.FC = () => {
  const form = useRef<FormElements>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_h8d26qv', 'template_14yu8sn', form.current, {
          publicKey: 'vQPE1NK62wGoG_Ohs',
        })
        .then(
          () => {
            form.current?.reset()
            alert("Message Successfully sent!")
          },
          // (error) => {
          //   const errorMessage = error.text || "Something went wrong";
          //   alert(errorMessage);
          // }
          () => {
            alert("Something went wrong");
          }
        );
    }
  };

  return (
    <FormCon ref={form} onSubmit={sendEmail}>
      <h1>Write To US</h1>
      <div className='FormWrap1'>
         <input type="text" name="user_name" placeholder='Your Name' />
         <input type="email" name="user_email" placeholder='Email Address'/>
      </div>

      <div className='FormWrap2'>
         <input type="text" name="subject" placeholder='Subject'/>
         <textarea name="message" placeholder='Write Message' />
         <p>*Your email address will not be published.</p>
         <input type="submit" value="Submit" className='button' />
      </div>
    </FormCon>
  );
};


