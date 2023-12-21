/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // アクセスがあった際に、どのページに飛ばすかを設定する
  async rewrites() {
    return [
      {
        source: "/personal",
        destination: "/08_multipage?step=1",
      },
      {
        source: "/confirm",
        destination: "/08_multipage?step=2",
      },
    ];
  }
}

module.exports = nextConfig
