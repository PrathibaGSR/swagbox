import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LogTraffic() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const { source } = router.query;

    if (source) {
      fetch(`/api/log-source?source=${encodeURIComponent(source)}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Log API response:", data);
        })
        .catch((err) => console.error("Error logging source:", err));
    }
  }, [router.isReady, router.query]);

  return null; // No UI needed
}
