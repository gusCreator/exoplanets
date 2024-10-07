import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es',
});

export const {
  Link, redirect, usePathname, useRouter,
} = createSharedPathnamesNavigation(routing);
