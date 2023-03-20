import { useState } from "react";
import { useForm } from "react-hook-form";
import appConfig from "../../../Services  & Utils/MailConfig";
import emailjs from "@emailjs/browser";
import notifyService from "../../../Services  & Utils/NotifyService";
import "./Contact.css";
import MailModel from "../../../Models/MailModel";

function Contact(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<MailModel>();
  const [ nameValue, setNameValue] = useState<string>("");
  const [ companyValue, setCompanyValue] = useState<string>("");
  const [ messageValue, setMessageValue] = useState<string>("");
  const [ emailValue, setEmailValue] = useState<string>("");
  async function send(mail: MailModel) {
    try {
      emailjs.send(appConfig.emailServiceId, appConfig.emailTemplateId, {
        from_name: mail.from_name,
        message: mail.message,
        company_name: mail.company_name,
        email: mail.email,
      });
      
      notifyService.success("Message Sent Successfully! \n We will contact you back shortly");
      const inputs = document.querySelectorAll('#name, #company, email, message');
      console.log(inputs);
      const nameBox = document.getElementById("name");
      setNameValue("");
      setCompanyValue("");
      setMessageValue("");
      setEmailValue("");

    } catch (err: any) {
      notifyService.error(err);
    }
  }

  return (
    <div className="Contact">
      <div className="formBox">
        <h2>Contact Me!</h2>
        <form onSubmit={handleSubmit(send)} id="contactForm">
          <label>Name: </label>
          <input
            type="text"
            {...register("from_name", MailModel.from_nameValidation)}
          value={nameValue} onChange={(e:any)=>{
            setNameValue(e.target.value);
          }}/>
          <span className="Error">{formState.errors.from_name?.message}</span>

          <label>Company: </label>
          <input
            type="text"
            {...register("company_name", MailModel.company_nameValidation)}
           value={companyValue} onChange={(e:any)=>{
            setCompanyValue(e.target.value);
          }}/>
          <span className="Error">
            {formState.errors.company_name?.message}
          </span>

          <label>Email: </label>
          <input
            type="email"
            {...register("email", MailModel.emailValidation)}
          value={emailValue} onChange={(e:any)=>{
            setEmailValue(e.target.value);
          }}/>
          <span className="Error">{formState.errors.email?.message}</span>

          <label>Message: </label>
          <textarea {...register("message", MailModel.messageValidation)} 
          value={messageValue} onChange={(e:any)=>{
            setMessageValue(e.target.value);
          }}/>
          <span className="Error">{formState.errors.message?.message}</span>

          <button className="btn btn-light btn-lg btn-outline-dark rounded-5">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
