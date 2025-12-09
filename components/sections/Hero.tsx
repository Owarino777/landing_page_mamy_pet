import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-logo">Logo</div>

                    <h1 className="hero-title">
                        Partir sans angoisser
                        <br />
                        pour votre
                        <br />
                        animal
                    </h1>

                    <p className="hero-text">
                        Des pet-sitters formés aux soins médicaux pour
                        <br />
                        que vous partiez l&apos;esprit tranquille. Compétences
                        <br />
                        vérifiées + assurance incluse.
                    </p>

                    <div className="hero-actions">
                        <button className="hero-primary-btn">
                            Trouvez votre pet-sitter
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* Image ou illustration*/}
                    <Image
                        src="/next.svg"
                        alt="Illustration d'un pet-sitter avec un chien et un chat"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
}