import type { APIContext } from 'astro';

import Contatti from '@/data/contacts';

export async function DELETE(ctx: APIContext) {
  const id = Number(ctx.params.id);

  if (isNaN(id)) {
    return new Response(null, { status: 400, statusText: 'Bad Request' });
  }

  try {
    Contatti.delete(id);
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
