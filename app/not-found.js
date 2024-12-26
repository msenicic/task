"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/site/Header";

export default function CustomErrorPage() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <>
      <Header color="dark" />
      <div className="content position-relative flex-fill">
        <div
          className="page-content text-center"
          style={{ marginTop: "140px" }}
        >
          <h1>Page Not Found</h1>
          <p>Redirecting to the home page...</p>
        </div>
      </div>
    </>
  );
}
