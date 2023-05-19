import galleryImage from '../../../assets/gallery.png'
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80', alt: 'WhizBang Bots' },
    { id: 2, src: 'https://images.unsplash.com/photo-1621311628158-9f9d5b4c2239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'TurboTwist Racers'},
    { id: 3, src: 'https://images.unsplash.com/photo-1622403718261-bd0e7dd01216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Plushie Pals'},
    { id: 4, src: 'https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80', alt: 'Blastoff Blasters'},
    { id: 5, src: 'https://images.unsplash.com/photo-1598931247655-fe06b102b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', alt: 'Enchanted Pixie Pets '},
    { id: 6, src: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80 ', alt: 'DinoSquad Adventures' },
    { id: 7, src: 'https://images.unsplash.com/photo-1567169866456-a0759b6bb0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80', alt: 'PuzzleQuest Kingdom' },
    { id: 8, src: 'https://images.unsplash.com/photo-1615486363973-f79d875780cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80', alt: 'AquaAdventurers' },
    { id: 9, src: 'https://images.unsplash.com/photo-1549501602-52168bb8f653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', alt: 'Sparkle Unicorn Land' },
    { id: 10, src: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Ninja Warrior Training Set' },
    { id: 11, src: 'https://images.unsplash.com/photo-1548016193-b9381233058c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80', alt: 'Magic Science Lab' },
    { id: 12, src: 'https://images.unsplash.com/photo-1605287977617-ddd865d5f696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Super Builder Blocks' },
  ];

  return (
    <div className="gallery container">
        <div className='text-center' data-aos="zoom-in-up">
            <img className='img-fluid w-25' src={galleryImage} alt="" />
        </div>
        <div className="row" data-aos="fade-down-left">
        {images.map((image) => (
            <div key={image.id} className="col-md-6 col-lg-4">
            <div className="gallery-item">
                <img src={image.src} alt={image.alt} className="gallery-image" />
                <div className="overlay">
                <div className="overlay-content">
                    <h4>{image.alt}</h4>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
  </div> 
  );
};

export default Gallery;
