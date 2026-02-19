/** @type {import('next').NextConfig} */
const nextConfig = {
  // keep your existing options here (don’t remove anything)

  async redirects() {
    return [
      {
        source: "/",
        destination: "/chhatrapati-shivaji-maharaj",
        permanent: true,
      },
      {
        source: "/shivaji",
        destination: "/chhatrapati-shivaji-maharaj",
        permanent: true,
      },
      {
        source: "/shivaji-maharaj",
        destination: "/chhatrapati-shivaji-maharaj",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
