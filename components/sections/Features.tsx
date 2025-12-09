export default function Features() {
    const features = [
        {
            id: 1,
            title: "Créez votre profil",
            description: "Inscrivez-vous en quelques minutes et décrivez votre animal.",
            icon: "📋",
        },
        {
            id: 2,
            title: "Trouvez votre gardien",
            description: "Parcourez les profils vérifiés des gardiens de confiance.",
            icon: "🔍",
        },
        {
            id: 3,
            title: "Réservez en toute sérénité",
            description: "Planifiez vos séjours en toute tranquillité d'esprit.",
            icon: "✓",
        },
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-lg">
                <h2 className="heading-md text-center mb-12">Comment ça marche</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="text-center p-8">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                            <p className="text-body">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}