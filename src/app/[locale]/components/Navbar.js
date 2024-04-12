'use client';
import {useLocale, useTranslations} from 'next-intl';
import { Link, usePathname } from '@/navigation';
export default function Navbar() {
    const t = useTranslations('Menu')
    const pathname = usePathname()
    const locale = useLocale()
    const language = {th: 'ไทย', en:'English'}
    return (
        <nav className="relative px-2 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1>LOGO</h1>
                <ul className="md:flex space-x-6">
                <li><a href="#">{t('home')}</a></li>
                <li><a href="#">{t('news')}</a></li>
                <li><a href="#">{t('about')}</a></li>
                <li><a href="#">{t('contact')}</a></li>
                <li className="flex relative group">
                    <a href="#" className="mr-1">{locale == "en" ? language["en"] : language["th"]}</a> 
                    <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
                    <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                        <li className="text-sm hover:bg-slate-100 leading-8">
                            <Link href={pathname} locale={locale == "en" ? 'th' : 'en'}>
                                <span className="ml-2 text-[1rem] cursor-pointer">{locale == "en" ? language["th"] : language["en"]}</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                </ul>
            </div>
      </nav>
    )
}