import { setTherapist } from "@/features/therapist/therapist-slice";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAppDispatch } from "./useRedux";
import toast from "react-hot-toast";
function useLoadTherapist() {
  const [loading, setloading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const loadTherapist = async () => {
      axios
        .get("/users/getAllTherapist")
        .then((res) => {
          const therapist = res.data.data;
          dispatch(setTherapist(therapist));
        })
        .catch((err) => {
          toast.error("حدث خطأ ما");
        })
        .finally(() => {
          setloading(false);
        });
    };

    loadTherapist();
  }, []);

  return { loading };
}

export default useLoadTherapist;
