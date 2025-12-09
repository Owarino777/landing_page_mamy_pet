"use client";

import { useState } from "react";

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            question: "Comment puis-je faire confiance aux gardiens ?",
            answer: "Tous nos gardiens sont vérifiés et évalués par d'autres propriétaires. Consultez leurs avis et profils.",
        },
        {
            id: 2,
            question: "Que se passe-t-il en cas de problème ?",
            answer: "Notre équipe de support est disponible 24/7 pour gérer tout problème ou urgence.",
        },
        {
            id: 3,
            question: "Quel est le prix du service ?",
            answer: "Les tarifs varient selon le type d'animal et la durée. Consultez nos offres pour plus de détails.",
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-lg max-w-3xl">
                <h2 className="heading-md text-center mb-12">Questions fréquentes</h2>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="border border-gray-200 rounded-lg">
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full p-6 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
                            >
                                {faq.question}
                                <span className="text-xl">{openId === faq.id ? "−" : "+"}</span>
                            </button>
                            {openId === faq.id && (
                                <div className="p-6 border-t border-gray-200 text-body">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}