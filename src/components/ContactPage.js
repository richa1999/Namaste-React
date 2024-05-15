const ContactPage = () => {
  return (
    <div className="contact text-center p-5">
      <h1 className="font-bold text-3xl p-10">Contact Us</h1>
      <form className="p-8">
        <input type="name" placeholder="Name" className="p-2 m-2 border border-solid border-black rounded-xl" />
        <input type="email" placeholder="Email" className="p-2 m-2 border border-solid border-black rounded-xl" />
        <input type="text" placeholder="Message" className="p-2 m-2 border border-solid border-black rounded-xl" />
        <button className="p-2 m-2 bg-black text-white rounded-xl">Submit</button>
      </form>
      <p className="p-4 text-lg ">For more information, please contact us at 123-456-7890.</p>
    </div>
  );
};

export default ContactPage;
