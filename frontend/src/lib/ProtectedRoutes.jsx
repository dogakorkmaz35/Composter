import { useEffect, useState } from "react";
import { authClient } from "./auth-client.ts";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await authClient.getSession();

      if (!data) {
        navigate("/");     // redirect to landing
        return;
      }

      setAllowed(true);     // allow component to render
    })();
  }, [navigate]);

  if (allowed === null) return null; // or loader

  return children;
}
