import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedLinkPrepared, setSubmittedLinkPrepared] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedLinkPrepared(true);

    // Formulate a proper mailto URI with prefilled fields
    const subjectEncoded = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Abhijay,\n\n${formData.message}\n\nFrom:\n${formData.name} (${formData.email})`
    );
    const mailtoUrl = `mailto:${portfolioData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Trigger email client directly
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div id="contact-page-container" className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono text-[var(--accent)] border border-[var(--border)] bg-[var(--surface-hover)] mb-4">
          <Mail className="w-4 h-4" />
          <span>COMMUNICATION CHANNELS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
          GET IN TOUCH
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-[var(--accent)] leading-relaxed">
          Let&apos;s connect.
        </p>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-3 max-w-2xl leading-relaxed">
          Reach out directly regarding academic inquiries, data analytics opportunities, or project discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left Col: Direct Verified Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-6 shadow-lg">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] border-b border-[var(--border)] pb-3">
              Direct Contact Details
            </h2>

            {/* Email Card */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase">
                EMAIL ADDRESS
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-[var(--accent)] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[var(--text-primary)] font-medium truncate">
                    {portfolioData.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-[var(--surface-hover)] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                id="contact-send-email-btn"
                href={`mailto:${portfolioData.email}`}
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-all font-mono"
              >
                <Mail className="w-4 h-4" />
                <span>SEND EMAIL</span>
              </a>
            </div>

            {/* Phone Card */}
            <div className="space-y-3 pt-4 border-t border-[var(--border)]">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase">
                TELEPHONE NUMBER
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <Phone className="w-5 h-5 text-[var(--accent)] shrink-0" />
                <span className="font-mono text-sm text-[var(--text-primary)] font-medium">
                  {portfolioData.phone}
                </span>
              </div>

              <a
                id="contact-call-btn"
                href={`tel:${portfolioData.phone}`}
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[var(--surface-hover)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-all font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>CALL</span>
              </a>
            </div>
          </div>

          {/* Academic Affiliation Note */}
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 text-xs font-mono text-[var(--text-muted)] space-y-2">
            <div className="text-[var(--text-primary)] font-semibold">Location &amp; Academic Base:</div>
            <p>Hyderabad, Telangana, India</p>
            <p>{portfolioData.education.institution} (B.Sc. 2024–2027)</p>
          </div>
        </div>

        {/* Right Col: Client-Side Validated Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                Send a Message
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                Fill in the details below to dispatch a message directly via your email client.
              </p>
            </div>

            {/* Notice regarding transparent client-side dispatch without fake backend */}
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xs font-mono text-[var(--text-muted)] flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
              <span>
                Note: This form validates your message client-side and opens your default mail application pre-filled to <strong className="text-[var(--text-primary)]">{portfolioData.email}</strong>, ensuring direct and authentic communication.
              </span>
            </div>

            {submittedLinkPrepared && (
              <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-mono flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Email draft initiated!</p>
                  <p className="mt-0.5 text-emerald-400/80">
                    If your email client did not launch automatically, click the &ldquo;Send Email&rdquo; button on the left or compose directly to {portfolioData.email}.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                />
                {errors.name && (
                  <p className="text-xs text-rose-400 font-mono">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="e.g. name@domain.com"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                />
                {errors.email && (
                  <p className="text-xs text-rose-400 font-mono">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="e.g. Inquiring about academic projects / data analytics"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                />
                {errors.subject && (
                  <p className="text-xs text-rose-400 font-mono">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-y"
                />
                {errors.message && (
                  <p className="text-xs text-rose-400 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                id="contact-form-submit-btn"
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-sm font-bold bg-[var(--accent)] text-[#080c14] hover:bg-[var(--accent-hover)] transition-all shadow-lg shadow-[var(--accent)]/15 font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
