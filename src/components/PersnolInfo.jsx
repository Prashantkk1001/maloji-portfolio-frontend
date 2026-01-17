import { useState } from "react";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    age: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // basic validation
    if (
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.age.trim() &&
      formData.address.trim()
    ) {
      setSubmittedData(formData);
    }
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-96 overflow-y-auto max-h-[70vh]">

        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Personal Information
        </h3>

        {/* BEFORE SUBMIT */}
        {!submittedData ? (
          <div className="flex flex-col gap-4">

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border-b outline-none p-1"
            />

            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="border-b outline-none p-1"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="border-b outline-none p-1"
            />

            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded p-2 resize-none"
              rows="3"
            />

            <button
              onClick={handleSubmit}
              className="mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>

          </div>
        ) : (
          /* AFTER SUBMIT */
          <div className="flex flex-col gap-3 text-gray-700">

            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>

            <button
              onClick={() => setSubmittedData(null)}
              className="mt-4 bg-gray-600 text-white py-1 rounded hover:bg-gray-700"
            >
              Edit
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default PersonalInfo;
