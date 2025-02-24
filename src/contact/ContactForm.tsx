import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mvgzwrgr");
  const [messageShown, setMessageShown] = useState(false);

  useEffect(() => {
    if (state.succeeded && !messageShown) {
      toast.success("Message sent successfully");
      setMessageShown(true);
    }
  }, [state.succeeded, messageShown]);


  // Réinitialiser les champs après la soumission
  useEffect(() => {
    if (state.succeeded) {
      // Vérification que les éléments existent avant de les réinitialiser
      const nameField = document.getElementById("name") as HTMLInputElement;
      const emailField = document.getElementById("email")as HTMLInputElement;
      const messageField = document.getElementById("message") as HTMLInputElement;

      if (nameField && emailField && messageField) {
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";
      }
    }
  }, [state.succeeded]);

  return (
    <div className="lg:w-1/2 w-full p-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Name Field */}
        <label htmlFor="name" className="dark:text-gray-300 text-sm min-[400px]:text-base text-start">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="p-1 min-[400px]:p-3 rounded-md bg-gray-50 dark:bg-[#1F2937] dark:text-white border border-gray-300 dark:border-gray-600"
        />

        {/* Email Field */}
        <label htmlFor="email" className="dark:text-gray-300 text-sm min-[400px]:text-base text-start">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="p-1 min-[400px]:p-3 rounded-md bg-gray-50 dark:bg-[#1F2937] dark:text-white border border-gray-300 dark:border-gray-600"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Message Field */}
        <label htmlFor="message" className="dark:text-gray-300 text-sm min-[400px]:text-base text-start">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="p-1 min-[400px]:p-3 rounded-md bg-gray-50 dark:bg-[#1F2937] dark:text-white border border-gray-300 dark:border-gray-600"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-gray-400 dark:bg-blue-500 dark:text-white py-2 px-4 text-sm min-[400px]:text-base rounded-md font-medium dark:hover:bg-blue-700 transition disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
