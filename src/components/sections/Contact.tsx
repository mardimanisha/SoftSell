import ContactForm from "../ContactForm";


export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Ready to Sell or Have Questions?
        </h2>
        <p className="text-lg text-[var(--color-muted)] text-center mb-12 max-w-xl mx-auto">
          Fill out the form below, and one of our specialists will get back to you shortly.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
