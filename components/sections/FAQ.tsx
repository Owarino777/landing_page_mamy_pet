"use client";

import { useState } from "react";

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            question: "Question 1 : Mon animal nécessite des soins médicaux, puis-je utiliser Mamipet ?",
            answer:
                "Absolument ! C’est même notre spécialité. Tous nos pet‑sitters passent un questionnaire de compétences détaillé sur le type de soins, voies de prises, types de gestes et besoins chroniques avant de valider leur profil. Tout cela est vérifié par notre équipe interne, puis notre assurance couvre chaque prestation au domicile du patient.",
        },
        {
            id: 2,
            question: "Question 2 : Comment vérifiez-vous les compétences des pet‑sitters ?",
            answer:
                "Chaque pet‑sitter doit soumettre des preuves de formation et d’expérience spécifiques pour les soins médicaux des animaux. Nous analysons les documents fournis et nous réalisons des entretiens individuels. De plus, les propriétaires laissent des avis détaillés après chaque garde.",
        },
        {
            id: 3,
            question: "Question 3 : Que se passe‑t‑il en cas de problème pendant la garde ?",
            answer:
                "Notre assurance inclut un accompagnement médical d’urgence et une couverture soigneur unique par mission. En cas de souci, nous contactons immédiatement votre vétérinaire référent, puis nous vous informons en direct de chaque décision prise. Tous les incidents sont documentés et pris en charge.",
        },
    ];

    return (
        <section className="section-padding faq">
            <div className="container-lg faq-inner">
                <header className="faq-header">
                    <h2 className="faq-title">FAQ</h2>
                    <p className="faq-subtitle">
                        Toutes les réponses à vos questions sur la garde de votre animal avec
                        Mamipet. De la vérification de nos pet‑sitters à leurs compétences
                        médicales, en passant par notre assurance incluse.
                    </p>
                </header>

                <div className="faq-list">
                    {faqs.map((faq) => (
                        <article
                            key={faq.id}
                            className={`faq-item ${openId === faq.id ? "faq-item--open" : ""}`}
                        >
                            <button
                                type="button"
                                className="faq-question"
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                            >
                                <span className="faq-question-text">{faq.question}</span>
                                <span className="faq-question-icon">
                                    {openId === faq.id ? "▾" : "▸"}
                                </span>
                            </button>

                            {openId === faq.id && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}