import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialItems } from "../features/itemsSlice";
import {
  markFetchDone,
  markFetchingFinished,
  markFetchingStarted,
} from "../features/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(markFetchDone());
        dispatch(markFetchingFinished());
        dispatch(addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return;
};

export default FetchItems;
