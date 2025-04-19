import React, { useRef, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { FormCon } from './style';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

interface FormElements extends HTMLFormElement {
  firstName: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}

export const ContactUs: React.FC = () => {
  const form = useRef<FormElements>(null);
  const [user, setUser] = useState<{ firstName: string; email: string } | null>(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user') || 'null');

    if (loggedInUser && loggedInUser.role !== 'admin') {
      setUser(loggedInUser);
    } else {
      setUser(null); 
    }
  }, []);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const formData = {
        name: form.current.firstName.value,
        email: form.current.email.value,
        subject: form.current.subject.value,
        message: form.current.message.value,
      };

      try {
        const response = await axios.post(
          'http://localhost:5050/dev-api/messages/sendMessage',
          formData
        );

        if (response.data.message) {
          form.current.reset();
          toast.success('Message sent successfully!');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        toast.error('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <>
      <FormCon ref={form} onSubmit={sendMessage}>
        <h1>Write To Us</h1>
        <div className="FormWrap1">
          <input
            type="text"
            name="firstName" 
            placeholder="Your Name"
            defaultValue={user?.firstName || ''}  
            required
          />
          <input
            type="email"
            name="email" 
            placeholder="Email Address"
            defaultValue={user?.email || ''} 
            required
          />
        </div>

        <div className="FormWrap2">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            placeholder="Write Message"
            required
          />
          <p>*Your email address will not be published.</p>
          <input type="submit" value="Submit" className="button" />
        </div>
      </FormCon>
    </>
  );
};
