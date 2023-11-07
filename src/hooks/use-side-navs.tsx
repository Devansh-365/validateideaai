"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getSideNav(id: string) {
  const res = await axios.get(
    `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/responsebyuser/${id}`
  );
  const data = await res.data.data;
  return data;
}

export default function useSideNavs(id: string) {
  return useQuery({
    queryKey: ["side-navs", id],
    queryFn: () => getSideNav(id),
  });
}
