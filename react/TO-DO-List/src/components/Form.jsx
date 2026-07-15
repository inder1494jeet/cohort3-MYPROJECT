import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Myshop } from "../context/Mycontext";
import { nanoid } from "nanoid";

const Form = () => {
  const { taskdata, setTaskdata, setToogle } = useContext(Myshop);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onsubmit = (data) => {
    const formdata = [...taskdata, { ...data, id: nanoid(), call: 0 }];

    localStorage.setItem("data", JSON.stringify(formdata));
    setTaskdata(formdata);

    reset();
    setToogle(true);
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-8">

        <h1 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
          Create New Task
        </h1>

        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-4 sm:flex-row sm:items-start"
        >
          {/* Input */}
          <div className="flex-1">
            <input
              {...register("task", {
                required: "Task is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
              type="text"
              placeholder="Enter your task..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            {errors.task && (
              <p className="mt-2 text-sm text-red-500">
                {errors.task.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;