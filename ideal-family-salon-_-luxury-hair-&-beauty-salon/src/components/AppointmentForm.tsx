import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Share2,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import { SERVICES_DATA, SALON_INFO, ServiceItem } from '../data/salonData';
import {
  BookingFormData,
  validateBookingForm,
  getAvailableTimeSlots,
  generateBookingReference,
  buildWhatsAppBookingUrl,
} from '../utils/booking';

interface AppointmentFormProps {
  initialServiceId?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialServiceId }) => {
  // Default to tomorrow's date formatted as YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceId: initialServiceId || '',
    serviceName: '',
    preferredDate: defaultDateStr,
    preferredTime: '11:30 AM',
    stylistPreference: 'Any Senior Stylist',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    refId: string;
    data: BookingFormData;
    whatsAppUrl: string;
  } | null>(null);

  // Sync initialServiceId when provided
  useEffect(() => {
    if (initialServiceId) {
      const found = SERVICES_DATA.find((s) => s.id === initialServiceId);
      if (found) {
        setFormData((prev) => ({
          ...prev,
          serviceId: found.id,
          serviceName: found.name,
        }));
      }
    }
  }, [initialServiceId]);

  const availableSlots = getAvailableTimeSlots(formData.preferredDate);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'serviceId') {
      const selected = SERVICES_DATA.find((s) => s.id === value);
      setFormData((prev) => ({
        ...prev,
        serviceId: value,
        serviceName: selected ? selected.name : '',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for that field
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Find service name if not set
    let finalFormData = { ...formData };
    if (!finalFormData.serviceName && finalFormData.serviceId) {
      const s = SERVICES_DATA.find((item) => item.id === finalFormData.serviceId);
      if (s) finalFormData.serviceName = s.name;
    }

    const validation = validateBookingForm(finalFormData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate immediate, reliable submission state
    setTimeout(() => {
      const refId = generateBookingReference();
      const whatsAppUrl = buildWhatsAppBookingUrl(finalFormData, refId);

      setBookingConfirmation({
        refId,
        data: finalFormData,
        whatsAppUrl,
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setBookingConfirmation(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      serviceId: '',
      serviceName: '',
      preferredDate: defaultDateStr,
      preferredTime: '11:30 AM',
      stylistPreference: 'Any Senior Stylist',
      notes: '',
    });
    setErrors({});
  };

  // Today min date
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="book-appointment" className="py-20 lg:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8F6D43] font-semibold mb-2 block">
            Online Reservations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight mb-4 text-balance">
            Reserve Your <span className="italic text-[#8F6D43]">Appointment</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed max-w-xl mx-auto">
            Book your customized consultation or treatment with our stylists. We will contact you shortly to confirm your scheduled time.
          </p>
        </div>

        {/* Confirmation Modal State */}
        {bookingConfirmation ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-[0_20px_50px_-10px_rgba(184,147,104,0.2)] text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#FAF5EE] border border-[#E8DEC8] text-[#8F6D43] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#8F6D43] font-semibold mb-1 block">
              Reservation Requested
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#23201D] mb-3">
              Thank you for your appointment request!
            </h3>
            <p className="text-sm sm:text-base text-[#5C5349] max-w-lg mx-auto mb-6">
              Our team will contact you shortly. Please save your reservation details below:
            </p>

            {/* Recap Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 text-left border border-[#EFE8DE] max-w-lg mx-auto mb-8 space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[#E8DEC8]">
                <span className="text-xs text-[#8F6D43] uppercase tracking-wider font-semibold">
                  Reference Code
                </span>
                <span className="font-mono text-base font-bold text-[#23201D] tracking-wider">
                  {bookingConfirmation.refId}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#6B655D]">Guest:</span>
                <span className="font-medium text-[#23201D]">{bookingConfirmation.data.fullName}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#6B655D]">Service:</span>
                <span className="font-medium text-[#23201D]">{bookingConfirmation.data.serviceName}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#6B655D]">Date & Time:</span>
                <span className="font-medium text-[#23201D]">
                  {bookingConfirmation.data.preferredDate} at {bookingConfirmation.data.preferredTime}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#6B655D]">Location:</span>
                <span className="font-medium text-[#23201D]">E-5 Arera Colony, Bhopal</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={bookingConfirmation.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold shadow-md transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#D9CEBE] text-[#4A453F] hover:bg-[#F7F3EC] text-sm font-medium transition-colors cursor-pointer"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        ) : (
          /* The Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-[0_16px_40px_-10px_rgba(184,147,104,0.12)] space-y-6"
            noValidate
          >
            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8F6D43]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Pooja Sharma"
                    className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E8DEC8]'
                    } focus:outline-none focus:ring-2 focus:ring-[#8F6D43]/30 focus:border-[#8F6D43] transition-colors`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8F6D43]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="10-digit Mobile Number"
                    className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${
                      errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-[#E8DEC8]'
                    } focus:outline-none focus:ring-2 focus:ring-[#8F6D43]/30 focus:border-[#8F6D43] transition-colors`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Email & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8F6D43]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E8DEC8]'
                    } focus:outline-none focus:ring-2 focus:ring-[#8F6D43]/30 focus:border-[#8F6D43] transition-colors`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="serviceId"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5"
                >
                  Select Service <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8F6D43]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <select
                    id="serviceId"
                    name="serviceId"
                    required
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${
                      errors.serviceId ? 'border-red-400 bg-red-50/20' : 'border-[#E8DEC8]'
                    } focus:outline-none focus:ring-2 focus:ring-[#8F6D43]/30 focus:border-[#8F6D43] bg-white transition-colors cursor-pointer`}
                  >
                    <option value="">-- Choose a Luxury Service --</option>
                    <optgroup label="Hair & Styling">
                      {SERVICES_DATA.filter((s) => s.category === 'hair').map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Skin & Beauty">
                      {SERVICES_DATA.filter((s) => s.category === 'beauty').map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Bridal & Makeup">
                      {SERVICES_DATA.filter((s) => s.category === 'makeup').map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Spa & Nails">
                      {SERVICES_DATA.filter((s) => s.category === 'spa').map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.duration})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
                {errors.serviceId && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.serviceId}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Date, Time & Stylist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5"
                >
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    min={todayStr}
                    required
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-3 text-sm rounded-xl border ${
                      errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-[#E8DEC8]'
                    } focus:outline-none focus:ring-2 focus:ring-[#8F6D43]/30 focus:border-[#8F6D43] transition-colors`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5"
                >
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-3 text-sm rounded-xl border ${
                      errors.preferredTime ? 'border-red-400 bg-red-50/20' : 'border-[#E8DEC8]'
                    } focus:outline-none focus:ring-2 focus:ring-[#8F6D43]/30 focus:border-[#8F6D43] bg-white transition-colors cursor-pointer`}
                  >
                    {availableSlots.length > 0 ? (
                      availableSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))
                    ) : (
                      <option value="">No more slots today</option>
                    )}
                  </select>
                </div>
                {errors.preferredTime && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredTime}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="stylistPreference"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5"
                >
                  Stylist Preference
                </label>
                <div className="relative">
                  <select
                    id="stylistPreference"
                    name="stylistPreference"
                    value={formData.stylistPreference}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-3 text-sm rounded-xl border border-[#E8DEC8] focus:outline-none focus:ring-2 focus:ring-[#8F6D43]/30 focus:border-[#8F6D43] bg-white transition-colors cursor-pointer"
                  >
                    <option value="Any Senior Stylist">Any Senior Stylist</option>
                    <option value="Master Hair Colorist">Master Hair Colorist</option>
                    <option value="Bridal Specialist">Bridal Specialist</option>
                    <option value="Senior Aesthetician">Senior Aesthetician</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 4: Notes / Message */}
            <div>
              <label
                htmlFor="notes"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5"
              >
                Special Requests or Notes (Optional)
              </label>
              <div className="relative">
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Mention any hair history, allergies, or specific event timing requirements..."
                  className="w-full p-3.5 text-sm rounded-xl border border-[#E8DEC8] focus:outline-none focus:ring-2 focus:ring-[#8F6D43]/30 focus:border-[#8F6D43] transition-colors"
                />
              </div>
            </div>

            {/* Large Confirm Appointment Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#B89368] to-[#9C7A4E] hover:from-[#A88358] hover:to-[#8C6A3E] text-white font-medium text-base sm:text-lg shadow-[0_8px_25px_rgba(184,147,104,0.3)] hover:shadow-[0_12px_30px_rgba(184,147,104,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing Reservation...</span>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>Confirm Appointment</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-[11px] text-[#8F6D43] font-medium pt-2">
              Free cancellation up to 4 hours prior &bull; No upfront deposit required
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
