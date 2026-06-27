import { siteConfig } from "@/config/siteConfig";

export function FAQ() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Câu hỏi thường gặp</h2>
        <div className="surface-card mt-8 divide-y divide-slate-100 overflow-hidden">
          {siteConfig.faq.map((item) => (
            <details key={item.question} className="group p-5 open:bg-skySoft/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-navy">
                {item.question}
                <span className="text-xl leading-none text-orange-700 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
