// app/User/Contact/page.tsx
import ContactForm from '@/app/Components/ContactForm';
import Contact from '@/app/Components/ContactForm'; // ✅ સાચું નામ

export default function ContactPage() {
  return (
    <div>
      <ContactForm/> {/* ✅ સાચું નામ */}
    </div>
  );
}