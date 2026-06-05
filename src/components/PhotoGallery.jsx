import React from "react";

const comingSoonStyles = {
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
		Previous photo gallery code preserved below.
		It remains commented out so the future gallery implementation is still
		available in this file without affecting the active UI.

		import React, { useEffect, useMemo, useState } from "react";

		const galleryPhotos = [
			{
				id: 1,
				title: "Workshop Focus",
				category: "Research",
				caption: "Snapshots from hands-on work and late-night problem solving.",
				src: "/gallery/workshop-01.jpg",
				alt: "Workshop scene with tools and equipment",
				size: "feature",
			},
			{
				id: 2,
				title: "Field Notes",
				category: "Travel",
				caption: "A quieter frame that balances the grid with a wider crop.",
				src: "/gallery/field-notes-01.jpg",
				alt: "Landscape or field photograph",
				size: "wide",
			},
			{
				id: 3,
				title: "Team Day",
				category: "People",
				caption: "Group moments that add structure and warmth to the collage.",
				src: "/gallery/team-day-01.jpg",
				alt: "Group photo with collaborators or friends",
				size: "normal",
			},
			{
				id: 4,
				title: "Lab Detail",
				category: "Research",
				caption: "Close-up details work well as tall tiles in a masonry layout.",
				src: "/gallery/lab-detail-01.jpg",
				alt: "Close-up of lab equipment or experiment detail",
				size: "tall",
			},
			{
				id: 5,
				title: "Walks and Light",
				category: "Travel",
				caption: "Use images like this to create visual breathing room.",
				src: "/gallery/walks-and-light-01.jpg",
				alt: "Outdoor photo with light and shadows",
				size: "normal",
			},
			{
				id: 6,
				title: "Off Hours",
				category: "People",
				caption: "A smaller tile keeps the layout varied and organic.",
				src: "/gallery/off-hours-01.jpg",
				alt: "Candid photo in an everyday setting",
				size: "normal",
			},
		];

		const sizeClassMap = {
			normal: "gallery-card--normal",
			wide: "gallery-card--wide",
			tall: "gallery-card--tall",
			feature: "gallery-card--feature",
		};

		function PhotoTile({ photo, onOpen }) {
			const [hasImageError, setHasImageError] = useState(false);

			return (
				<button
					type="button"
					className={`gallery-card ${sizeClassMap[photo.size] || sizeClassMap.normal}`}
					onClick={() => onOpen(photo)}
					aria-label={`Open ${photo.title}`}
				>
					{!hasImageError ? (
						<img
							className="gallery-image"
							src={photo.src}
							alt={photo.alt}
							loading="lazy"
							onError={() => setHasImageError(true)}
						/>
					) : (
						<div className="gallery-placeholder" aria-hidden="true">
							<span>{photo.title}</span>
						</div>
					)}

					<div className="gallery-card-overlay">
						<span className="gallery-card-category">{photo.category}</span>
						<h3>{photo.title}</h3>
						<p>{photo.caption}</p>
					</div>
				</button>
			);
		}

		const PhotoGallery = () => {
			const [activeCategory, setActiveCategory] = useState("All");
			const [selectedPhoto, setSelectedPhoto] = useState(null);

			const categories = useMemo(
				() => ["All", ...new Set(galleryPhotos.map((photo) => photo.category))],
				[]
			);

			const filteredPhotos = useMemo(() => {
				if (activeCategory === "All") {
					return galleryPhotos;
				}

				return galleryPhotos.filter((photo) => photo.category === activeCategory);
			}, [activeCategory]);

			useEffect(() => {
				const handleKeyDown = (event) => {
					if (event.key === "Escape") {
						setSelectedPhoto(null);
					}
				};

				window.addEventListener("keydown", handleKeyDown);
				return () => window.removeEventListener("keydown", handleKeyDown);
			}, []);

			useEffect(() => {
				if (selectedPhoto) {
					document.body.style.overflow = "hidden";
				} else {
					document.body.style.overflow = "";
				}

				return () => {
					document.body.style.overflow = "";
				};
			}, [selectedPhoto]);

			return (
				<section id="gallery" className="photo-gallery">
					<div className="container">
						<div className="gallery-header">
							<span className="gallery-kicker">Selected moments</span>
							<h2 className="section-title">Photo Gallery</h2>
							<p className="gallery-intro">
								A living collage of research, travel, and everyday moments. Add a
								new photo by dropping it into the data list, and the grid will pack
								it into place automatically.
							</p>
						</div>

						<div className="gallery-filters" role="tablist" aria-label="Gallery categories">
							{categories.map((category) => (
								<button
									key={category}
									type="button"
									className={`gallery-filter-button ${
										activeCategory === category ? "active" : ""
									}`}
									onClick={() => setActiveCategory(category)}
								>
									{category}
								</button>
							))}
						</div>

						<div className="gallery-grid">
							{filteredPhotos.map((photo) => (
								<PhotoTile key={photo.id} photo={photo} onOpen={setSelectedPhoto} />
							))}
						</div>
					</div>

					{selectedPhoto && (
						<div
							className="gallery-lightbox"
							role="dialog"
							aria-modal="true"
							aria-label={selectedPhoto.title}
							onClick={() => setSelectedPhoto(null)}
						>
							<div
								className="gallery-lightbox-content"
								onClick={(event) => event.stopPropagation()}
							>
								<button
									type="button"
									className="gallery-lightbox-close"
									onClick={() => setSelectedPhoto(null)}
									aria-label="Close photo"
								>
									×
								</button>

								<img
									className="gallery-lightbox-image"
									src={selectedPhoto.src}
									alt={selectedPhoto.alt}
								/>

								<div className="gallery-lightbox-caption">
									<span>{selectedPhoto.category}</span>
									<h3>{selectedPhoto.title}</h3>
									<p>{selectedPhoto.caption}</p>
								</div>
							</div>
						</div>
					)}
				</section>
			);
		};

		export default PhotoGallery;
		*/
