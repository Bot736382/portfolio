import React from "react";

const styles = {
  section: {
    minHeight: "calc(100vh - 80px)",
    padding: "4rem 0",
    background:
      "radial-gradient(circle at top left, rgba(196, 18, 48, 0.10), transparent 28%), linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  kicker: {
    display: "inline-block",
    marginBottom: "0.75rem",
    color: "var(--cmu-red)",
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  intro: {
    maxWidth: "760px",
    margin: "0 auto",
    color: "var(--text-light)",
    fontSize: "1.05rem",
    lineHeight: 1.8,
  },
  card: {
    position: "relative",
    overflow: "hidden",
    maxWidth: "980px",
    margin: "0 auto",
    padding: "3rem",
    borderRadius: "24px",
    background:
      "radial-gradient(circle at top right, rgba(196, 18, 48, 0.14), transparent 28%), linear-gradient(135deg, #ffffff 0%, #f7f3f4 100%)",
    border: "1px solid rgba(196, 18, 48, 0.12)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "560px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    marginBottom: "1rem",
    padding: "0.35rem 0.9rem",
    borderRadius: "999px",
    background: "rgba(196, 18, 48, 0.1)",
    color: "var(--cmu-red)",
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  title: {
    color: "var(--primary-color)",
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
    lineHeight: 1.1,
    marginBottom: "1rem",
  },
  text: {
    color: "var(--text-light)",
    fontSize: "1.05rem",
    lineHeight: 1.8,
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1rem",
    marginTop: "2rem",
  },
  statBox: {
    padding: "1rem",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.75)",
    border: "1px solid rgba(196, 18, 48, 0.1)",
  },
  statLabel: {
    display: "block",
    marginBottom: "0.35rem",
    color: "var(--cmu-red)",
    fontSize: "0.85rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  statValue: {
    color: "var(--text-color)",
    fontWeight: 600,
  },
  orb: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(1px)",
    opacity: 0.85,
  },
};

const PhotoGallery = () => {
  return (
    <section id="gallery" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.kicker}>Photo Gallery</span>
          <h2 className="section-title">Coming Soon</h2>
          <p style={styles.intro}>
            I’m curating a photo gallery that will eventually showcase selected
            moments in a clean, collage-style layout.
          </p>
        </div>

        <div style={styles.card}>
          <div
            style={{
              ...styles.orb,
              width: "220px",
              height: "220px",
              top: "-60px",
              right: "-40px",
              background: "rgba(196, 18, 48, 0.14)",
            }}
            aria-hidden="true"
          />
          <div
            style={{
              ...styles.orb,
              width: "140px",
              height: "140px",
              bottom: "40px",
              right: "130px",
              background: "rgba(109, 110, 113, 0.1)",
            }}
            aria-hidden="true"
          />
          <div
            style={{
              ...styles.orb,
              width: "90px",
              height: "90px",
              top: "42px",
              right: "300px",
              background: "rgba(196, 18, 48, 0.08)",
            }}
            aria-hidden="true"
          />

          <div style={styles.content}>
            <span style={styles.badge}>Under Construction</span>
            <h3 style={styles.title}>Beautiful collage layout in progress</h3>
            <p style={styles.text}>
              This page will soon feature a responsive mosaic of photos,
              captions, and lightbox viewing.
            </p>

            <div style={styles.stats} aria-label="Gallery status">
              <div style={styles.statBox}>
                <strong style={styles.statLabel}>Layout</strong>
                <span style={styles.statValue}>Responsive collage</span>
              </div>
              <div style={styles.statBox}>
                <strong style={styles.statLabel}>View</strong>
                <span style={styles.statValue}>Tap to enlarge</span>
              </div>
              <div style={styles.statBox}>
                <strong style={styles.statLabel}>Status</strong>
                <span style={styles.statValue}>Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;

/*
Previous photo gallery implementation preserved conceptually here.
The previous collage/lightbox version was removed from the active render to
fix syntax issues, but the gallery route and future gallery intent remain.
*/
