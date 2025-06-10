import type { APIContext } from 'astro';
import Contatti, { type Contact } from '@/data/contacts';

export async function POST({ request }: APIContext) {
  try {
    const formData = await request.formData();
    const contact = Object.fromEntries(formData) as unknown as Contact;

    if (!contact.email.toString().includes('@')) {
      return new Response(null, { status: 401, statusText: 'Email not valid' });
    }
    Contatti.create(contact);
    return new Response(null, {
      status: 204,
      statusText: 'Contact added successfully',
      headers: {
        'HX-Location': '/contacts',
      },
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
