import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {Sarabun, Work_Sans} from 'next/font/google'

const fontSarabun = Sarabun({
  subsets: ['thai'],
  weight: ['400','500','700'],
  variable: '--font-sarabun',
  display: 'swap',
});

const fontWorkSans = Work_Sans({
  weight: ['400','500','700'],
  style: ['normal', 'italic'],
  variable: '--font-work-sans',
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata() {
    return {
      title: 'Nextjs13.5 Use next-intl',
      description: 'Next.js App Router ภาษาไทยไม่มี part /th ภาษาอังกฤษ มี /en',
    }
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${locale == 'en' ? fontWorkSans.className : fontSarabun.className} scroll-smooth antialiased min-h-screen overflow-x-hidden`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="w-100 relative">
                {children}
            </div>
          </NextIntlClientProvider>
      </body>
    </html>
  )
}
