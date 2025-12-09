export default function HappyCustomers() {
    const testimonials = [
        {
            id: 1,
            text: "Mamy Pet m'a permis de partir en vacances l'esprit tranquille. Mon chat a été très bien traité !",
            author: "Sarah D.",
            rating: 5,
        },
        {
            id: 2,
            text: "Service rapide et fiable. Je recommande vivement !",
            author: "David P.",
            rating: 5,
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-lg">
                <h2 className="heading-md text-center mb-12">Clients heureux</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="p-8 border border-gray-200 rounded-lg">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">★</span>
                                ))}
                            </div>
                            <p className="text-body mb-4">{testimonial.text}</p>
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}