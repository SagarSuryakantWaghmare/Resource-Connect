import React from "react";

const Profile = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Profile Information</h2>
      
      {/* Profile Details */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Full Name:</h3>
          <p className="text-gray-700">Swapnil Salunke</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">Email Address:</h3>
          <p className="text-gray-700">swapnil.salunke@example.com</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">Phone Number:</h3>
          <p className="text-gray-700">+91 9876543210</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">Location:</h3>
          <p className="text-gray-700">Pune, Maharashtra, India</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">About Me:</h3>
          <p className="text-gray-700">
            Hi, I’m Swapnil, a software developer with a passion for UI/UX design and full stack development. I love creating impactful digital experiences.
          </p>
        </div>
      </div>

      {/* Optional Edit Button */}
      <div className="mt-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
