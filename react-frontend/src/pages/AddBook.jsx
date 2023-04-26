import { useState, useRef } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
const AddBook = () => {
  const intialValues = {
    title: "",
    author: "",
    published: "",
    editions: "",
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const [image, setImage] = useState(null);
  const [values, setValues] = useState(intialValues);
  const formRef = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image)
      .then(() => {
        console.log("image uploaded!");
        getDownloadURL(imageRef).then((imageUrl) => {
          const formData = new URLSearchParams();
          formData.append("title", values.title);
          formData.append("author", values.author);
          formData.append("published", values.published);
          formData.append("editions", values.editions);
          formData.append("imageUrl", imageUrl);
          axios
            .post("http://localhost:5000/upload", formData.toString(), {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            })
            .then((res) => {
              console.log(res);
              setValues(intialValues);
              formRef.current.reset();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-[50vh] max-w-[1100px] mx-auto mt-4">
      <div className="w-[700px] mx-auto bg-white p-3 rounded-md">
        <h1 className="text-2xl text-center font-light">
          Add book to the library
        </h1>
        <form ref={formRef} className="flex flex-col">
          <div>
            <input
              className="border border-gray-200 px-3 py-2 rounded-md outline-none w-80 my-3 mr-2"
              type="text"
              placeholder="Book title"
              name="title"
              value={values.title}
              onChange={handleInputChange}
            />
            <input
              className="border border-gray-200 px-3 py-2 rounded-md outline-none w-80 my-3"
              type="text"
              placeholder="Book author"
              name="author"
              value={values.author}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className="border border-gray-200 px-3 py-2 rounded-md outline-none w-80 my-3"
              type="text"
              placeholder="Year of publish"
              name="published"
              value={values.published}
              onChange={handleInputChange}
            />
            <input
              className="border border-gray-200 ml-2 px-3 py-2 rounded-md outline-none w-80 my-3"
              type="text"
              placeholder="Total editions"
              name="editions"
              value={values.editions}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between">
            <input
              type="file"
              name="image"
              id="bookImg"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              single="true"
            />
            <button
              onClick={handleFormSubmit}
              className="px-3 py-2 bg-[#64ab03] rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
