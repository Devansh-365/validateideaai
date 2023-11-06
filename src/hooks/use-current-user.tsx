import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getCurrentUser() {
  const res = await axios.get(
    "https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/currentuser",
    {
      withCredentials: true,
    }
  );
  const data = await res.data;
  return data;
}

export function useCurrentUser() {
  const { data } = useQuery({
    queryKey: ["current-user"],
    queryFn: () => getCurrentUser(),
  });

  return data;
}
