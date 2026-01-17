import { useState } from "react";

function NameInput() {
  const [tempName, setTempName] = useState("");
  const [finalName, setFinalName] = useState("");

  const handleSubmit = () => {
    if (tempName.trim() !== "") {
      setFinalName(tempName);
      setTempName("");
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-3">

      {/* If name NOT submitted yet */}
      {!finalName ? (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            className="text-xl text-center outline-none border-b border-gray-400 bg-transparent"
          />

          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </>
      ) : (
        /* After submit → show name only */
        <h2
          className="text-2xl font-semibold text-gray-800 cursor-pointer"
          onClick={() => setFinalName("")}
        >
          {finalName}
        </h2>
      )}

    </div>
  );
}

export default NameInput;
