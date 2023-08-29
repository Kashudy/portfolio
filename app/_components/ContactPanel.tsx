export default function ContactPanel() {
  return (
    <section className=" flex flex-col ">
      <h1 className="text-4xl font-bold pb-7 pt-5">Contact Me</h1>
      <form action="" method="post" className=" flex flex-col justify-evenly ">
        <div className=" pb-3">
          <input
            type="text"
            name="guest-name"
            id="guest-name"
            placeholder="Name"
            className=" border-2 rounded-sm w-full"
          />
        </div>
        <div className="pb-3">
          <input
            type="email"
            name="guest-email"
            id="guest-email"
            placeholder="Email"
            className=" border-2 rounded-sm w-full"
          />
        </div>
        <div className="pb-3">
          <textarea
            name="guest-message"
            id="guest-message"
            cols={35}
            rows={5}
            placeholder="Message"
            className=" border-2 rounded-sm w-full"
          ></textarea>
        </div>
      </form>
    </section>
  );
}
