import type { APIContext } from 'astro';

import Contatti, { type Contact } from '@/data/contacts';

export async function PUT(ctx: APIContext) {
  try {
    const id = Number(ctx.params.id);
    const formData = await ctx.request.formData();
    const contact = Object.fromEntries(formData) as unknown as Contact;

    if (isNaN(id)) {
      return new Response(null, { status: 400, statusText: 'Bad Request' });
    }

    Contatti.update(id, contact);
    return new Response(null, {
      status: 204,
      statusText: 'No Content',
      headers: {
        'HX-Location': '/contacts',
      },
    });

    // return new Response();
  } catch (error: any) {
    console.log('Something went wrong!', error.message);
    return new Response(null, { status: 500, statusText: error.message });
  }
}
