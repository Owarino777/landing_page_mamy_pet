// filepath: c:\Users\malik\M1_DFS_2025_2026\landing_page_mamy_pet\components\sections\HappyCustomers.tsx
import Image from "next/image";

export default function HappyCustomers() {
    return (
        <section className="section-padding happy">
            <div className="container-lg happy-inner">
                <header className="happy-header">
                    <h2 className="happy-title">Happy Customers</h2>
                    <p className="happy-subtitle">
                        Rejoignez les propriétaires qui partent l&apos;esprit tranquille grâce à nos pet-sitters formés aux soins médicaux.
                        Parce que votre animal mérite le meilleur, même en votre absence.
                    </p>
                    <div className="happy-stars">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                </header>

                <div className="happy-main">
                    <p className="happy-main-text">
                        Mon chat diabétique a besoin d&apos;injections d&apos;insuline deux fois par jour.
                        J&apos;étais terrifiée à l&apos;idée de partir en vacances. Grâce à Mamipet, j&apos;ai
                        trouvé Laura, une pet-sitter formée aux soins médicaux. Elle m&apos;envoyait
                        des photos après chaque injection, et je suis partie l&apos;esprit tranquille
                        pour la première fois depuis 3 ans !
                    </p>

                    <div className="happy-meta">
                        <div className="happy-avatar" />

                        <div className="happy-author">
                            <p className="happy-author-name">Marie D.</p>
                            <p className="happy-author-role">
                                Propriétaire de Milo, chat diabétique
                                <br />
                                Pet-sitter certifiée soins médicaux
                            </p>
                        </div>

                        {/* Barre verticale */}
                        <div className="happy-divider" />

                        {/* Logo Boltshift */}
                        <div className="happy-brand">
                            <Image
                                src="/Fictional company logo.svg" // mets exactement le nom dans /public
                                alt="Logo Boltshift"
                                width={140}
                                height={40}
                            />
                        </div>
                    </div>

                    <div className="happy-nav">
                        <button className="happy-nav-btn" aria-label="Témoignage précédent">
                            ◀
                        </button>
                        <button
                            className="happy-nav-btn happy-nav-btn--primary"
                            aria-label="Témoignage suivant"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}