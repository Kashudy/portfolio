"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Data:", name, email, message);
  };

  return (
    <section className=" flex flex-col ">
      <form onSubmit={onSubmit} className=" flex flex-col justify-evenly ">
        <h1 className="text-4xl font-bold pb-7 pt-5">Contact Me</h1>
        <div className=" pb-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="guest-name"
            id="guest-name"
            placeholder="Name"
            className=" border-2 rounded-sm w-full"
          />
        </div>
        <div className="pb-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="guest-email"
            id="guest-email"
            placeholder="Email"
            className=" border-2 rounded-sm w-full"
          />
        </div>
        <div className="pb-3">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="guest-message"
            id="guest-message"
            cols={35}
            rows={5}
            placeholder="Message"
            className=" resize-none  border-2 rounded-sm w-full"
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
