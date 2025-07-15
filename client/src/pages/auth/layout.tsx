import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex justify-center md:w-1/2 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 items-end p-12">
        <div className="text-gray-800 text-center">
          <h2 className="text-2xl font-medium leading-relaxed">
            Let's build something incredible —together.
          </h2>
        </div>
      </div>

      <div className="flex-1 flex items-start justify-center p-8 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
