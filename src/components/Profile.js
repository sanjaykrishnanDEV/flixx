import { auth, database } from "../utils/firebase";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { child, push, update } from "firebase/database";

const Profile = () => {
  const [showform, setshowform] = useState(false);
  const [email, setemail] = useState("");
  const [usernameval, setusernameval] = useState("");
  const [gender, setgender] = useState("");
  const [mob, setmob] = useState("");
  const [userData, setuserData] = useState({
    email: "",
    username: "",
    gender: "",
    mobileNumber: "",
  });
  const navigate = useNavigate();
  const id = useParams();
  const db = getDatabase();
  const userDetail = ref(db, "/userDetails/" + id.uid);
  //  console.log(userDetail)
  useEffect(() => {
    onValue(userDetail, (snapshot) => {
      const data = snapshot.val();
      setemail(localStorage.getItem("email"));
      setusernameval(data?.username);
      setgender(data?.gender);
      setmob(data?.mobileNumber);
      setuserData({
        email: localStorage.getItem("email"),
        username: data?.username,
        gender: data?.gender,
        mobileNumber: data?.mobileNumber,
      });
    });
  }, []);
  function handletoggles() {
    setshowform(!showform);
  }
  function handleback() {
    navigate("/browse");
  }
  function handlechanges(e) {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  }
  function handlesave() {
    const userRef = ref(db, "userDetails/" + id.uid);
    update(userRef, userData);
    setuserData({
      email: localStorage.getItem("email"),
      username: "",
      gender: "",
      mobileNumber: "",
    });
    navigate("/browse");
  }
  return (
    <div>
      <div>
        <p className="font-bold text-4xl text-red-600 text-center">CINIFY</p>
      </div>
      <div>
        {showform ? (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-3 border-2 flex flex-col justify-center items-center"
          >
            <label>Email</label>
            <input
              type="text"
              className=" border-2 p-2"
              placeholder={email}
              disabled
            />
            <label>Username</label>
            <input
              name="username"
              type="text"
              className=" border-2 "
              placeholder={userData?.username}
              value={userData.username}
              onChange={handlechanges}
            />
            <label>Gender</label>
            <select
              className="border-2"
              onChange={handlechanges}
              name="gender"
              value={userData.gender}
            >
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>prefer not to say</option>
            </select>
            <label>Mobile number</label>
            <input
              type="text"
              className="border-2"
              value={userData.mobileNumber}
              onChange={handlechanges}
              name="mobileNumber"
            />
            <div className="">
              <button
                className=" bg-slate-700 m-4 text-white p-1 rounded-xl"
                onClick={handlesave}
              >
                Add details
              </button>
              <button
                className=" bg-slate-700 m-4 text-white p-1 rounded-xl"
                onClick={handleback}
              >
                cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="p-5  m-10 flex flex-col justify-center items-center border-2 border-slate-800">
            <span className=" underline bg-red-500 w-full text-center text-xl">
              Current user details
            </span>
            <div className="flex mb-2">
              <h2>Email:</h2>
              <h2>{email}</h2>
            </div>
            <div className="flex mb-2">
              <p>username:</p>
              <p>{usernameval}</p>
            </div>
            <div className="flex mb-2">
              <p>Gender:</p>
              <p>{gender}</p>
            </div>
            <div className="flex mb-2">
              <p>MobileNumber:</p>
              <p>{mob}</p>
            </div>
            <div>
              <button
                onClick={handletoggles}
                className=" bg-slate-600 me-3 text-slate-100 p-1"
              >
                Add details
              </button>
              <button
                className=" bg-slate-600 text-slate-100 p-1"
                onClick={() => navigate("/browse")}
              >
                Back to home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
