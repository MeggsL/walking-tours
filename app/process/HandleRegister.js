"use server";
import { neon } from "@neondatabase/serverless";
import RegistrationForm from "./RegisterForm";
import Typography from "@mui/material/Typography";

//the parent component of the form process
// receives registration data input and puts to db

export default function HandleRegistration({ onSubmit }) {
 
   const [state] = useState({}); // State for form data

  const handleFormSubmit = async (formData) => {
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    await PutUser(formData);
  };

  async function PutUser(formData) {
    const firstname = String(formData.get("fname") || "");
    const lastname = String(formData.get("lname") || "");
    const hometown = String(formData.get("hometown") || "");
    //const email = String(formData.get("email") || "");
    //const user_pw = String(formData.get("pw") || "");

    const sql = neon(process.env.DATABASE_URL);
    try {
      await sql(
        "INSERT INTO users (user_fname, user_lname, user_city) VALUES ($1, $2, $2)",
        [firstname, lastname, hometown],
      );
      return (
        <Typography variant="h6" gutterBottom align="center">
          Congratulations! You are now registered.
        </Typography>
      );
    } catch (error) {
      console.error("Database error:", error);
      throw new Error("Failed to fetch revenue data.");
    }
  };

  // Call form data / state from child component and process it to determine which tour to send the user to.
  return <RegistrationForm formData={state} onSubmit={handleFormSubmit} />;
}
