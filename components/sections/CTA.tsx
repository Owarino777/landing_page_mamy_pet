import Image from "next/image";

export default function CTA() {
    return (
        <section className="section-padding cta">
            <div className="container-lg cta-inner">
                <div className="cta-content">
                    <h2 className="cta-title">Partez l&apos;esprit tranquille dès maintenant</h2>
                    <p className="cta-text">
                        Rejoignez les propriétaires qui confient sereinement leur animal à des
                        pet‑sitters certifiés. Inscription gratuite, sans engagement, en moins de
                        2 minutes.
                    </p>

                    <div className="cta-actions">
                        <button className="cta-btn cta-btn--primary">
                            Trouver mon pet‑sitter
                        </button>
                    </div>
                </div>

                <div className="cta-visual-wrap">
                    <div className="cta-visual">
                        <Image
                            className="cta-visual-image"
                            src="/Image_CTA_1.jpg"
                            alt="Image de la section CTA"
                            width={980}
                            height={1259}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}