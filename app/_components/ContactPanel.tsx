export default function ContactPanel() {
  return (
    <section className=" flex flex-col">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <input type="text" name="guest-name" id="guest-name" placeholder="Name" />
      <input
        type="email"
        name="guest-email"
        id="guest-email"
        placeholder="Email"
      />
      <textarea
        name="guest-message"
        id="guest-message"
        cols={30}
        rows={10}
        placeholder="Message"
      ></textarea>
    </section>
  );
}
