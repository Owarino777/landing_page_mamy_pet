export default function Features() {
    const features = [
        {
            id: 1,
            title: "Créez votre profil gratuitement",
            description:
                "Décrivez votre animal et ses besoins spécifiques en quelques clics. Indiquez les soins médicaux nécessaires pour trouver les bons pet‑sitters.",
        },
        {
            id: 2,
            title: "Trouvez votre pet-sitter certifié",
            description:
                "Parcourez les profils vérifiés selon vos critères : localisation, compétences médicales, expérience. Comparez les avis et les tarifs.",
        },
        {
            id: 3,
            title: "Réservez en toute sérénité",
            description:
                "Échangez directement avec votre pet‑sitter, confirmez la réservation et recevez des nouvelles régulières sur les soins de votre animal.",
        },
    ];

    return (
        <section className="section-padding features">
            <div className="container-lg features-inner">
                <div className="features-grid">
                    {features.map((feature) => (
                        <article key={feature.id} className="feature-card">
                            <div className="feature-image-placeholder" />
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-divider" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}