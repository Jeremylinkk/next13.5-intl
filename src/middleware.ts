import createIntlMiddleware from "next-intl/middleware"
import { locales, localePrefix } from './navigation';

export default createIntlMiddleware({
  locales,
	localePrefix,
  defaultLocale: 'th',
})

export const config = {
  matcher: ['/', '/(th|en)/:path*']
}