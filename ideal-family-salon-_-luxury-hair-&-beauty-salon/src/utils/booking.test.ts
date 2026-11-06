import test from 'node:test';
import assert from 'node:assert/strict';
import { validateBookingForm, buildWhatsAppUrl, BookingData } from './booking.ts';

test('validateBookingForm rejects missing or empty fields', () => {
  const result = validateBookingForm({});
  assert.strictEqual(result.isValid, false);
  assert.match(result.error || '', /name/i);
});

test('validateBookingForm rejects invalid phone numbers', () => {
  const result = validateBookingForm({
    name: 'Ananya Sharma',
    phone: '123',
    email: 'ananya@example.com',
    service: 'The Signature Cut',
    date: '2026-11-10',
    time: '14:00',
  });
  assert.strictEqual(result.isValid, false);
  assert.match(result.error || '', /phone/i);
});

test('validateBookingForm rejects invalid email', () => {
  const result = validateBookingForm({
    name: 'Ananya Sharma',
    phone: '9876543210',
    email: 'invalid-email',
    service: 'The Signature Cut',
    date: '2026-11-10',
    time: '14:00',
  });
  assert.strictEqual(result.isValid, false);
  assert.match(result.error || '', /email/i);
});

test('validateBookingForm approves complete valid submission', () => {
  const result = validateBookingForm({
    name: 'Ananya Sharma',
    phone: '9876543210',
    email: 'ananya@example.com',
    service: 'Ritual Colour',
    date: '2026-11-10',
    time: '15:30',
  });
  assert.strictEqual(result.isValid, true);
  assert.strictEqual(result.error, undefined);
});

test('buildWhatsAppUrl formats link correctly with encoded text', () => {
  const data: BookingData = {
    name: 'Avni Jaiswal',
    phone: '+91 98765 43210',
    email: 'avni@example.com',
    service: 'Occasion Atelier',
    date: '2026-12-05',
    time: '11:00',
    message: 'Bridal consultation',
  };

  const url = buildWhatsAppUrl('919179767000', data);
  assert.ok(url.startsWith('https://wa.me/919179767000?text='));
  assert.ok(url.includes(encodeURIComponent('Avni Jaiswal')));
  assert.ok(url.includes(encodeURIComponent('Occasion Atelier')));
  assert.ok(url.includes(encodeURIComponent('Bridal consultation')));
});
