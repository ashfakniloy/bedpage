import { useFormikContext } from "formik";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

function ImageUpload() {
  const [imagesPreview, setImagesPreview] = useState([]);
  const fileRef = useRef();

  const [image, setImage] = useState("");

  // console.log(image?.target?.value);

  const formik = useFormikContext();

  const handleImageChange = (e) => {
    // e.preventDefault();
    // setSelectedFiles(e.target.files);
    setImagesPreview(e.target.files);

    let formData = new FormData();
    // formData.append("category", category);
    Array.from(e.target.files).forEach((item) =>
      formData.append("image", item)
    );
    formik.setFieldValue("images", formData);
    // formik.setFieldValue("images", e.target.files);

    console.log([...formData.entries()]);
    // console.log([...formData]);
  };

  // console.log("fileref", fileRef?.current?.files);

  const handleImageDelete = (i) => {
    // image.target.value[i] = null;
    const updatedImages = Array.from(formik.values.images).filter(
      (item, index) => index !== i
    );
    // formData.append("category", category);
    // setSelectedFiles(updatedImages);
    let formData = new FormData();
    Array.from(updatedImages).forEach((item) => formData.append("image", item));
    formik.setFieldValue("images", formData);

    // fileRef?.current?.files[i] === null;

    const updatedPreview = Array.from(imagesPreview).filter(
      (item, index) => index !== i
    );
    setImagesPreview(updatedPreview);

    // formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="text-black font-normal">
      <div className="flex items-center gap-2 bg-white rounded py-1 px-1">
        <input
          ref={fileRef}
          type="file"
          name="images"
          className=""
          onChange={handleImageChange}
          accept="image/*"
          multiple={true}
          onClick={(e) => setImage(e)}
        />
        <div className="">
          <button
            type="button"
            className="px-2 bg-[#E5E5E5] border border-black text-sm"
            onClick={() => {
              // fileRef.current.files = null;
              image.target.value = null;
              formik.setFieldValue("images", "");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        {Array.from(imagesPreview).map((image, i) => (
          <div key={i} className="relative">
            <Image
              alt="image"
              className="p-2"
              src={image ? URL.createObjectURL(image) : null}
              width={100}
              height={100}
            />
            {/* <span
              className="absolute top-1 right-1 bg-white border border-slate-700 p-[2px] rounded-full text-slate-700 shadow-lg text-[15px]"
              onClick={() => handleImageDelete(i)}
            >
              <FaTimes />
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
