import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mvgzwrgr");
  const [hasSubmitted, setHasSubmitted] = useState(false); // Nouveau state

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await handleSubmit(e);
      if (state.succeeded && !hasSubmitted) { // Vérifiez hasSubmitted
        toast.success("Message sent successfully");
        setHasSubmitted(true); // Mettez hasSubmitted à true
      } else if (!state.succeeded) {
        toast.error("Failed to send message."); // Toast en cas d'erreur
      }
    } catch {
      toast.error("Failed to send message."); // Toast en cas d'erreur
    }
  };


  return (
    <div className=" lg:w-1/2 w-full p-6">
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        {/* Name Field */}
        <label htmlFor="name" className="dark:text-gray-300 text-start">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="p-3 rounded-md bg-gray-50 dark:bg-[#1F2937] dark:text-white border border-gray-300 dark:border-gray-600"
        />

        {/* Email Field */}
        <label htmlFor="email" className="dark:text-gray-300 text-start">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="p-3 rounded-md bg-gray-50 dark:bg-[#1F2937] dark:text-white border border-gray-300 dark:border-gray-600"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Message Field */}
        <label htmlFor="message" className="dark:text-gray-300 text-start">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="p-3 rounded-md bg-gray-50 dark:bg-[#1F2937] dark:text-white border border-gray-300 dark:border-gray-600"
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
          className="bg-gray-400 dark:bg-blue-600 dark:text-white py-2 px-4 rounded-md font-medium dark:hover:bg-blue-700 transition disabled:opacity-50"
        >
          Submit
          {/* {state.submitting ? "Sending..." : "Submit"} */}
        </button>
      </form>
    </div>
  );
}
