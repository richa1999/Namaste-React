const ContactPage = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="font-extrabold text-4xl mb-8 text-center text-gray-800">Contact Us</h1>
      <form className="flex flex-col space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Submit
        </button>
      </form>
      <p className="mt-8 text-center text-gray-600 text-sm">
        For more information, please contact us at{' '}
        <a href="tel:123-456-7890" className="text-green-600 hover:underline">
          123-456-7890
        </a>
        .
      </p>
    </div>
  );
};

export default ContactPage;
