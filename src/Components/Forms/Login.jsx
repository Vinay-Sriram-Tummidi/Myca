import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  UserId: z.string().min(1, "UserID is required"),
  Password: z.string().min(1, "Password is required"),
  subscribe: z.boolean().optional(),
  Type: z.enum(
    ["Card-My Account", "Merchant Account", "American Express @ Work"],
    {
      message: "Account Type is required",
    }
  ),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      UserId: "",
      Password: "",
      Type: "",
      subscribe: false,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    const showNextSlide = () => {
      items[currentIndex].classList.remove("active");
      items[currentIndex].classList.add("opacity-0");
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add("active");
      items[currentIndex].classList.remove("opacity-0");
    };

    document.getElementById("next")?.addEventListener("click", showNextSlide);
    document.getElementById("prev")?.addEventListener("click", () => {
      items[currentIndex].classList.remove("active");
      items[currentIndex].classList.add("opacity-0");
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      items[currentIndex].classList.add("active");
      items[currentIndex].classList.remove("opacity-0");
    });

    const autoSlide = setInterval(showNextSlide, 3000);

    return () => {
      clearInterval(autoSlide);
      document
        .getElementById("next")
        ?.removeEventListener("click", showNextSlide);
      document
        .getElementById("prev")
        ?.removeEventListener("click", showNextSlide);
    };
  }, []);

  return (
    <div className="container bg-gray-200">
      <div className="min-h-screen grid grid-cols-3 gap-4 content-center ml-80 bg-gray-200">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: 5 }}
        >
          <h4 className="font-sans text-center font-medium">
            Log In to My Account
          </h4>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              UserID
            </label>
            <input
              className="border rounded w-full py-2 px-3 font-sans"
              {...register("UserId")}
            />
            {errors.UserId && (
              <p className="text-red-500 text-xs">{errors.UserId.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 font-sans leading-tight"
              type="password"
              {...register("Password")}
            />
            {errors.Password && (
              <p className="text-red-500 text-xs">{errors.Password.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Account Type
            </label>
            <select
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              {...register("Type")}
            >
              <option value="">Select Account Type</option>
              <option value="Card-My Account">Card-My Account</option>
              <option value="Merchant Account">Merchant Account</option>
              <option value="American Express @ Work">
                American Express @ Work
              </option>
            </select>
            {errors.Type && (
              <p className="text-red-500 text-xs">{errors.Type.message}</p>
            )}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sub"
              {...register("subscribe")}
              className="mr-2 mt-3"
            />
            <label
              className="text-gray-700 text-sm font-bold mt-3"
              htmlFor="sub"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="py-3 px-4 items-center font-sans text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Log In"}
          </button>
          <a className="font-sans text-[#016FD0]">
            Forgot your UserID or Password?
          </a>
          <a className="font-sans text-[#016FD0]">
            Register For Online Services
          </a>
          <a className="font-sans text-[#016FD0]">View All Cards</a>
        </form>
        {/* Carousel */}
        <div className="container relative w-full max-w-lg mx-auto">
          <div className="carousel-inner relative overflow-hidden w-full">
            <div className="carousel-item active block relative">
              <img
                src="https://www.designyourway.net/blog/wp-content/uploads/2023/07/12-13.jpg"
                className="w-full h-auto"
                alt="Image 1"
              />
            </div>
            <div className="carousel-item block relative">
              <img
                src="https://www.designyourway.net/blog/wp-content/uploads/2023/07/10-14.jpg"
                className="w-full h-auto"
                alt="Image 2"
              />
            </div>
            <div className="carousel-item block relative">
              <img
                src="https://www.designyourway.net/blog/wp-content/uploads/2023/07/17-9.jpg"
                className="w-full h-auto"
                alt="Image 3"
              />
            </div>
          </div>
          <button
            id="prev"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden px-4 py-2 bg-gray-800 text-white opacity-1 hover:opacity-100"
          >
            &#10094;
          </button>
          <button
            id="next"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 hidden py-2 bg-gray-800 text-white opacity-1 hover:opacity-100"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
