"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err: any) {
      console.error("Err: ", err);
    }
  };

  return (
    <section className=" flex flex-col ">
      <form onSubmit={onSubmit} className=" flex flex-col justify-evenly ">
        <h1 className="text-4xl font-bold pb-7 pt-5">Contact Me</h1>
        <div className=" pb-3">
          <Label htmlFor="text">Name</Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            name="guest-name"
            type="text"
            id="guest-name"
            placeholder="Name"
          />
        </div>
        <div className="pb-3">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="guest-email"
            type="email"
            id="guest-email"
            placeholder="Email"
          />
        </div>
        <div className="pb-3">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            name="guest-message"
            id="guest-message"
            placeholder="Type your message here"
            cols={40}
            rows={8}
            className="resize-none"
          />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
}
