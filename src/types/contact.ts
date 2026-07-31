export interface EnquiryFormData {
  project?: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}
