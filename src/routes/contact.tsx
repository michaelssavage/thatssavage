import { createFileRoute } from "@tanstack/react-router";
import { Form } from "components/Form";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { FormSubmission, FormValueTypes } from "types/form";

const WEB3FORMS_ACCESS_KEY = "8e8b9196-c2f9-4ad6-87c0-21740fb2e4f7";

const title = "Contact | That's Savage";
const description =
  "Ask for a quote or send a question. That's Savage in Monaghan will get back to you.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const [loading, setLoading] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);

  const submitForm: SubmitHandler<FormValueTypes> = async (
    data: FormValueTypes,
  ) => {
    setLoading(true);
    const { check: _check, ...formData }: FormSubmission = data;
    if (!formData.phone) delete formData.phone;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Thanks for your message!");
        setFormIsSent(true);
      } else {
        toast.error(result.body.message);
      }
    } catch {
      toast.error("Something went wrong! Refresh the page or give us a call.");
    }
    setLoading(false);
  };

  return (
    <main className="sheet grid gap-8 py-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h1>Contact us</h1>
        <p className="max-w-prose text-xl italic">
          Got a question? Want a quote? Got some feedback? Don&apos;t hesitate
          to get in contact and we will be happy to help.
        </p>
      </div>

      <div className="relative border-4 border-dashed border-ink bg-lemon-yellow p-8 lg:col-span-7">
        <span
          aria-hidden="true"
          className="absolute -top-4 left-8 bg-paper px-2 text-2xl leading-none"
        >
          ✂
        </span>
        <Form
          loading={loading}
          submitForm={submitForm}
          formIsSent={formIsSent}
        />
      </div>
    </main>
  );
}
