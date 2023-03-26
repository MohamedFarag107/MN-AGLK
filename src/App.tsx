import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import Landing from "@pages/Landing";
import Main from "@pages/Main";
import Page404 from "@pages/Page404";
import Books from "./pages/Books";
import Diseases from "./pages/Diseases";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import BookConsultation from "./pages/BookConsultation";
import BookIt from "./pages/BookIt";
import Admin from "./pages/admin/Admin";
import AddBook from "./pages/admin/AddBook";
import AddDiseases from "./pages/admin/AddDiseases";
import User from "./pages/user/User";
import UpdateInfo from "./pages/user/UpdateInfo";
import MyConsultation from "./pages/user/MyConsultation";
import UpdateTherapistInfo from "./pages/therapist/UpdateTherapistInfo";
import Therapist from "./pages/therapist/Therapist";
import ShowConsultation from "./pages/therapist/ShowConsultation";
import { useAppDispatch } from "./hooks/useRedux";
import { loadUser } from "./features/user/user-slice";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function App() {
  const params = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.key])



  const dispatch = useAppDispatch()

  // load user from local storage
  useEffect(() => {
    const user = localStorage.getItem('user')
    const altUser = {
      type: ""
    }
    if (user) {
      const token = JSON.parse(user).token
      axios.get('/users/getMe', {
        headers: {
          "Authorization": "Bearer " + token
        }
      }).then(res => {
        const { data } = res.data
        const allData = { ...JSON.parse(user), ...data }
        dispatch(loadUser(allData))
      }).catch(err => {
        toast.error('حدث خطأ ما')
        dispatch(loadUser(altUser))
      })
    }
  }, [])


  return (
    <>
      {/* tost */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        {/* public */}
        <Route path="/" element={<Main />} >
          <Route index element={<Landing />} />
          <Route path="/books" element={<Books />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/book-Consultation" element={<BookConsultation />} />
          <Route path="/book-it/:id" element={<BookIt />} />
        </Route>
        {/* admin */}
        <Route path="/admin" element={<Admin />} >
          <Route path="add-book" element={<AddBook />} />
          <Route path="add-diseases" element={<AddDiseases />} />
        </Route>
        {/* user */}
        <Route path="/user" element={<User />} >
          <Route path="update" element={<UpdateInfo />} />
          <Route path="my-consultation" element={<MyConsultation />} />
        </Route>
        <Route path="/therapist" element={<Therapist />} >
          <Route path="show-consultation" element={<ShowConsultation />} />
          <Route path="update" element={<UpdateTherapistInfo />} />
        </Route>
        {/* auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

