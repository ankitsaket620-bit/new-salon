/**
 * Booking validation and WhatsApp link generator for Ideal Family Salon
 */

export interface BookingData {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
  fullName?: string;
  phoneNumber?: string;
  serviceId?: string;
  serviceName?: string;
  preferredDate?: string;
  preferredTime?: string;
  stylistPreference?: string;
  notes?: string;
}

export type BookingFormData = BookingData;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  valid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(data: Partial<BookingData>): ValidationResult {
  const errors: Record<string, string> = {};

  const nameVal = (data.name || data.fullName || '').trim();
  if (nameVal.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
    errors.fullName = errors.name;
  }

  const rawPhone = (data.phone || data.phoneNumber || '').trim();
  const phoneDigits = rawPhone.replace(/\D/g, '');
  if (phoneDigits.length < 8) {
    errors.phone = 'Please enter a valid phone number (at least 8 digits).';
    errors.phoneNumber = errors.phone;
  }

  const rawEmail = (data.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!rawEmail || !emailRegex.test(rawEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  const serviceVal = (data.service || data.serviceName || data.serviceId || '').trim();
  if (!serviceVal) {
    errors.service = 'Please select a service from our menu.';
    errors.serviceId = errors.service;
  }

  const dateVal = (data.date || data.preferredDate || '').trim();
  if (!dateVal) {
    errors.date = 'Please choose your preferred appointment date.';
    errors.preferredDate = errors.date;
  }

  const timeVal = (data.time || data.preferredTime || '').trim();
  if (!timeVal) {
    errors.time = 'Please choose your preferred appointment time.';
    errors.preferredTime = errors.time;
  }

  const firstError = Object.values(errors)[0];
  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    valid: isValid,
    error: firstError,
    errors,
  };
}

export function generateBookingReference(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = 'IDL-';
  for (let i = 0; i < 5; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
}

export function getAvailableTimeSlots(_dateString?: string): string[] {
  return [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '04:30 PM',
    '06:00 PM',
    '07:30 PM',
  ];
}

export function buildWhatsAppUrl(
  phoneOrData: string | BookingData,
  dataOrRef?: BookingData | string,
  salonName = 'Ideal Family Salon'
): string {
  let targetPhone = '919179767000';
  let data: BookingData;
  let refCode = '';

  if (typeof phoneOrData === 'string') {
    targetPhone = phoneOrData.replace(/\D/g, '') || '919179767000';
    data = (dataOrRef as BookingData) || {};
  } else {
    data = phoneOrData;
    if (typeof dataOrRef === 'string') {
      refCode = dataOrRef;
    }
  }

  const name = (data.name || data.fullName || '').trim();
  const userPhone = (data.phone || data.phoneNumber || '').trim();
  const email = (data.email || '').trim();
  const service = (data.service || data.serviceName || '').trim();
  const date = (data.date || data.preferredDate || '').trim();
  const time = (data.time || data.preferredTime || '').trim();
  const stylist = (data.stylistPreference || '').trim();
  const note = (data.message || data.notes || '').trim();

  const lines = [
    `Hello ${salonName}, I would like to book an appointment:`,
  ];

  if (refCode) {
    lines.push(`• Booking Reference: ${refCode}`);
  }
  if (name) lines.push(`• Name: ${name}`);
  if (userPhone) lines.push(`• Phone: ${userPhone}`);
  if (email) lines.push(`• Email: ${email}`);
  if (service) lines.push(`• Service: ${service}`);
  if (date) lines.push(`• Preferred Date: ${date}`);
  if (time) lines.push(`• Preferred Time: ${time}`);
  if (stylist) lines.push(`• Stylist: ${stylist}`);
  if (note) lines.push(`• Notes: ${note}`);

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${targetPhone}?text=${text}`;
}

export const buildWhatsAppBookingUrl = (
  phoneOrData: string | BookingData,
  dataOrRef?: BookingData | string,
  salonName?: string
) => buildWhatsAppUrl(phoneOrData, dataOrRef, salonName);
