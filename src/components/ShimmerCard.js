import React from "react";

const Shimmer = () => {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
          .shimmer-bg {
            background: linear-gradient(
              90deg,
              #f0f0f0 25%,
              #e0e0e0 37%,
              #f0f0f0 63%
            );
            background-size: 400% 100%;
            animation: shimmer 1.4s ease infinite;
          }
        `}
      </style>
      <div className="max-w-[1200px] mx-auto p-8">
        {/* Heading shimmer */}
        <div
          className="shimmer-bg rounded-md mb-6"
          style={{ width: "200px", height: "32px" }}
        ></div>

        {/* Cards shimmer */}
        <div className="flex flex-wrap justify-center gap-6">
          {Array(15)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className="shimmer-bg rounded-xl"
                style={{ width: "260px", height: "320px" }}
              ></div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Shimmer;
