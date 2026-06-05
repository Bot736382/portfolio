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
