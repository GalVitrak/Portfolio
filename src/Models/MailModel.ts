class MailModel {
   public from_name: string;
   public company_name: string;
   public message: string;
   public email: string;

   public static from_nameValidation = {
    required: {value: true, message: "Missing Sender's Name"},
    maxLength: {value: 20, message: "Name To Long"},
    pattern: {value: /^[a-zA-Z]{2,}( {1,2}[a-zA-Z]{2,}){0,}$/, message: "Not a valid name"}
   }

   public static company_nameValidation = {
    required: {value: true, message: "Missing Company Name"},
    maxLength: {value: 25, message: "Name To Long"},
   }

   public static messageValidation = {
    required: {value: true, message: "Missing Message"},
    maxLength: {value: 250, message: "Message To Long"},
   }
   
   public static emailValidation = {
    required: {value: true, message: "Missing Email"},
    pattern: {value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "Not a valid Email Address"},
   }
}

export default MailModel;