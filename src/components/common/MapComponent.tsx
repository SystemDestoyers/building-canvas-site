
export function MapComponent() {
  return (
    <div className="h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <iframe
        title="SBC Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910506!2d-74.25986773739224!3d40.69714942211161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1704999360324!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '300px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
