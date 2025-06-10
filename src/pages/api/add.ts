import type { APIContext } from 'astro';
import Contatti, { type Contact } from '@/data/contacts';

export async function POST({ request, redirect }: APIContext) {
  const formData = await request.formData();
  const contact = Object.fromEntries(formData) as unknown as Contact;
  console.log(contact);

  if (!contact.email.toString().includes('@')) {
    return new Response(null, { status: 401, statusText: 'Email not valid' });
  }
  Contatti.create(contact);
  return redirect('/contacts');
}
