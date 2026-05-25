/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com', // Gagamit tayo ng Unsplash para sa sample direct links
      },

      {
        protocol: 'https',
        hostname: 'www.magnific.com', // Gagamit tayo ng Unsplash para sa sample direct links
      },

      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Gagamit tayo ng Unsplash para sa sample direct links
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Gagamit tayo ng Unsplash para sa sample direct links
      },
    ],
  },
};

export default nextConfig;
