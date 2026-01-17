import { useState } from "react";

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    github: "",
    instagram: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      socialLinks.linkedin.trim() &&
      socialLinks.github.trim() &&
      socialLinks.instagram.trim()
    ) {
      setSubmittedData(socialLinks);
    }
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-5 w-96 overflow-y-auto max-h-[70vh]">

        <h3 className="text-xl font-semibold mb-4 text-center">
          Social Links
        </h3>

        {!submittedData ? (
          <div className="flex flex-col gap-4">

            <input
              type="url"
              name="linkedin"
              placeholder="Enter LinkedIn Profile"
              value={socialLinks.linkedin}
              onChange={handleChange}
              className="border-b outline-none"
            />

            <input
              type="url"
              name="github"
              placeholder="Enter GitHub Profile"
              value={socialLinks.github}
              onChange={handleChange}
              className="border-b outline-none"
            />

            <input
              type="url"
              name="instagram"
              placeholder="Enter Instagram Profile"
              value={socialLinks.instagram}
              onChange={handleChange}
              className="border-b outline-none"
            />

            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>

          </div>
        ) : (
          <div className="flex flex-col gap-3 text-gray-700">

  <p>
    <strong>LinkedIn:</strong>{" "}
    <a
      href={submittedData.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      {submittedData.linkedin}
    </a>
  </p>

  <p>
    <strong>GitHub:</strong>{" "}
    <a
      href={submittedData.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      {submittedData.github}
    </a>
  </p>

  <p>
    <strong>Instagram:</strong>{" "}
    <a
      href={submittedData.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      {submittedData.instagram}
    </a>
  </p>

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
};

export default SocialLinks;
