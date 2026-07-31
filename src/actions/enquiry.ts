import { contactService } from '../services/contact.service';
import { EnquiryFormData } from '../types';

export async function submitEnquiryAction(formData: EnquiryFormData) {
  return await contactService.sendEnquiry(formData);
}
