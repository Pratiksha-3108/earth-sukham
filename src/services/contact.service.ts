import { EnquiryFormData, ContactFormData } from '../types';

export const contactService = {
  async sendEnquiry(formData: EnquiryFormData) {
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    return res.json();
  },

  async sendContact(formData: ContactFormData) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    return res.json();
  },
};
