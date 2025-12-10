import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-logo">Logo</div>

                    <h1 className="hero-title">
                        <span className="hero-line1">
                            Partir sans&nbsp;
                            <span className="hero-word-angoisser">angoisser</span>
                        </span>
                        <br />
                        pour votre
                        <br />
                        animal
                    </h1>

                    <p className="hero-text">
                        Des pet-sitters formés aux soins médicaux pour
                        que vous partiez l&apos;esprit tranquille. Compétences
                        vérifiées + assurance incluse.
                    </p>

                    <div className="hero-actions">
                        <button className="hero-primary-btn">
                            Trouvez votre pet-sitter
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* Colonne gauche */}
                    <div className="hero-column hero-column--left">
                        <div className="hero-item hero-item--l1">
                            <Image
                                className="hero-image"
                                src="/image_hero_1.webp"
                                alt="Illustration d'un pet-sitter avec un chien et un chat"
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className="hero-item hero-item--l2">
                            <Image
                                className="hero-image"
                                src="/image_hero_2.webp"
                                alt="Illustration d'un pet-sitter avec un chien et un chat"
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className="hero-item hero-item--l3">
                            <Image
                                className="hero-image"
                                src="/image_hero_3.webp"
                                alt="Illustration d'un pet-sitter avec un chien et un chat"
                                width={500}
                                height={400}
                            />
                        </div>
                    </div>

                    {/* Colonne droite */}
                    <div className="hero-column hero-column--right">
                        <div className="hero-item hero-item--r1">
                            <Image
                                className="hero-image"
                                src="/image_hero_4.webp"
                                alt="Illustration d'un pet-sitter avec un chien et un chat"
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className="hero-item hero-item--r2">
                            <Image
                                className="hero-image"
                                src="/image_hero_5.webp"
                                alt="Illustration d'un pet-sitter avec un chien et un chat"
                                width={500}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}