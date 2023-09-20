"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Github from "@/components/_icons/github";
import Linkedin from "@/components/_icons/linkedin";

export default function ContactForm() {
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
    <section className=" flex flex-col " id="contact">
      <form onSubmit={onSubmit} className=" flex flex-col justify-evenly ">
        <h1 className="text-4xl font-bold pb-7 pt-5">Contact Me</h1>
        <div className=" pb-3">
          <Label htmlFor="text">Name</Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            name="guest-name"
            type="text"
            id="guest-name"
            placeholder="Jim"
          />
        </div>
        <div className="pb-3">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="guest-email"
            type="email"
            id="guest-email"
            placeholder="m_scott@dunder.com"
          />
        </div>
        <div className="pb-3">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            name="guest-message"
            id="guest-message"
            placeholder="Love your work!"
            cols={40}
            rows={1}
            className="resize-none"
          />
        </div>
        <Button type="submit">Send</Button>
      </form>

      <div className="flex justify-evenly p-3 mt-4">
        <Github link="https://github.com/Kashudy" width={85} height={85} />
        <Linkedin
          link="https://linkedin.com/in/esteban-bejar-a43b06260"
          height={85}
          width={85}
        />
      </div>
    </section>
  );
}
