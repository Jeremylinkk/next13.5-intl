/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
const nextConfig = {}
module.exports = withNextIntl(nextConfig);