export const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-20 md:py-32 scroll-mt-16 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-100 flex items-center">
          <span className="w-8 h-1 bg-sky-500 mr-4 rounded-full"></span>
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);
