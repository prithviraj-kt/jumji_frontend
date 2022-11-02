import React from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function Signup() {
  const navigate = useNavigate()
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await axios
          .post("http://localhost:8000/signup", values)
          .then((succ) => {
            alert(succ.data.msg);
            navigate("/login")
          })
          .catch((err) => {
            alert("Error occured");
            window.location.reload();
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 mx-auto">
            <div class="lg:w-full mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://dummyimage.com/400x400"
              />
              <form
                className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 items-center"
                onSubmit={handleSubmit}
              >
                <div class="">
                  <h3 class="text-gray-900 text-lg font-medium title-font mb-5">
                    Jumji
                  </h3>
                  <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                    Sign Up
                  </h2>
                  <div class=" relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <p className="error text-red-500">
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>
                  <div class=" relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <p className="error text-red-500">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div class="relative mb-4">
                    <label
                      for="full-name"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <p className="error text-red-500">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>

                  <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}

export default Signup;
