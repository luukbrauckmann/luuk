export const prerender = false;

import { site } from "@data";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, redirect }) => {
  const acceptLanguage = request.headers.get('accept-language');
  const userLocales = acceptLanguage ? acceptLanguage.split(',').map(lang => lang.trim()) : [];
  // const redirectPath = site.locales(
  //   userLocale => site.locales.some(
  //     locale => userLocale.startsWith(locale)
  //   )
  // ) || 'en';

  return redirect('/en/', 302);
};
