import { contactService } from '../services/contact.service';
import { ContactFormData } from '../types';

export async function submitContactAction(formData: ContactFormData) {
  return await contactService.sendContact(formData);
}
