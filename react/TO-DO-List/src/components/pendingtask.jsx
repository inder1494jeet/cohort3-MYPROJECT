import React, { useContext, useState } from "react";
import { Myshop } from "../context/Mycontext";

const PendingTask = ({ ptask }) => {
  const { pending, setPending, setTaskdata, taskdata } =
    useContext(Myshop);

  const [showCall, setShowCall] = useState(true);

  const onComplete = () => {
    const pendingAns = pending.filter(
      (elem) => elem.id !== ptask.id
    );

    const taskAns = taskdata.filter(
      (elem) => elem.id !== ptask.id
    );

    setPending(pendingAns);
    setTaskdata(taskAns);

    localStorage.setItem(
      "pending",
      JSON.stringify(pendingAns)
    );

    localStorage.setItem(
      "data",
      JSON.stringify(taskAns)
    );
  };

  const minusClick = () => {
    if (ptask.call === 1) {
      setShowCall(true);
      return;
    }

    const updated = pending.map((elem) =>
      elem.id === ptask.id
        ? { ...elem, call: elem.call - 1 }
        : elem
    );

    setPending(updated);
    localStorage.setItem(
      "pending",
      JSON.stringify(updated)
    );
  };

  const plusClick = () => {
    const updated = pending.map((elem) =>
      elem.id === ptask.id
        ? { ...elem, call: elem.call + 1 }
        : elem
    );

    setPending(updated);
    localStorage.setItem(
      "pending",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          {/* Left */}
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              {ptask.task}
            </h2>

            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
              Pending
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-3">

            <button
              onClick={onComplete}
              className="rounded-xl bg-green-500 px-4 py-2 text-white font-medium hover:bg-green-600 transition"
            >
              ✓ Complete
            </button>

            {showCall ? (
              <button
                onClick={() => setShowCall(false)}
                className="rounded-xl bg-red-500 px-4 py-2 text-white font-medium hover:bg-red-600 transition"
              >
                📞 Call
              </button>
            ) : (
              <div className="flex items-center overflow-hidden rounded-xl border border-gray-300">

                <button
                  onClick={minusClick}
                  className="bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
                >
                  −
                </button>

                <div className="bg-gray-50 px-5 py-2 font-semibold text-gray-700">
                  {ptask.call}
                </div>

                <button
                  onClick={plusClick}
                  className="bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition"
                >
                  +
                </button>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default PendingTask;