import { useEffect, useState } from "react";
import { useAppDispatch } from "./useRedux";
import axios from "axios";
import toast from "react-hot-toast";
import { setDiseases } from "@/features/diseases/diseases-slice";

function useDiseases() {
  const [loading, setloading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const loadTherapist = async () => {
      axios
        .get("/diseases?page=1&limit=200")
        .then((res) => {
          const diseases = res.data.data;
          dispatch(setDiseases(diseases));
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

export default useDiseases;
