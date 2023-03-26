import { useEffect, useState } from "react";
import { useAppDispatch } from "./useRedux";
import axios from "axios";
import toast from "react-hot-toast";
import { setDiseases } from "@/features/diseases/diseases-slice";
import { setBook } from "@/features/books/books-slice";

function useBooks() {
  const [loading, setloading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const load = async () => {
      axios
        .get("/books?page=1&limit=200")
        .then((res) => {
          const diseases = res.data.data;
          dispatch(setBook(diseases));
        })
        .catch((err) => {
          toast.error("حدث خطأ ما");
        })
        .finally(() => {
          setloading(false);
        });
    };

    load();
  }, []);

  return { loading };
}

export default useBooks;
