import { useState } from "react";
import uploadIcon from "../assets/upload.png";

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <label className="w-full h-full cursor-pointer relative block overflow-hidden">
      
      {/* Image always fills the circle */}
      <img
        src={image || uploadIcon}
        alt="Profile"
        className={`w-full h-full rounded-full ${
          image
            ? "object-cover object-center"
            : "object-contain p-6"
        }`}
      />

      {/* Hover overlay for edit */}
      <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center transition">
        <span className="text-white text-sm font-medium">
          Edit
        </span>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </label>
  );
}

export default UploadImage;
