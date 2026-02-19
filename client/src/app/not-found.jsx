// src/app/not-found.jsx

import Link from "next/link";
import { redirect } from "next/navigation";

// ⚠️ OPTIONAL: hard redirect (uncomment to force redirect)
// export default function NotFound() {
//   redirect("/chhatrapati-shivaji-maharaj");
// }

export default function NotFound() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>404 — Page Not Found</h1>

      <p>
        The page you are looking for does not exist or has been moved.
      </p>

      <p>
        You can visit our detailed page on{" "}
        <strong>Chhatrapati Shivaji Maharaj</strong>.
      </p>

      <p>
        <Link href="/chhatrapati-shivaji-maharaj">
          Go to Chhatrapati Shivaji Maharaj Page →
        </Link>
      </p>

      {/* Optional soft redirect */}
      <meta httpEquiv="refresh" content="5; url=/chhatrapati-shivaji-maharaj" />
    </main>
  );
}
