export const prerender = false;

import { site } from '@data';
import { pick } from 'accept-language-parser';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ cookies, request, redirect }) => {
	let redirectPath = site.locales[0];

	const acceptLanguage = pick(site.locales, request.headers.get('accept-language') as string);
	if (acceptLanguage) {
		redirectPath = `/${acceptLanguage}/`;
	}

	const userLocale = cookies.get('locale')?.value;
	if (userLocale && site.locales.includes(userLocale)) {
		redirectPath = `/${userLocale}/`;
	}

	return redirect(redirectPath, 302);
};
