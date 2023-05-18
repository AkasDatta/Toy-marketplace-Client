import galleryImage from '../../../assets/gallery.png'
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80', alt: 'Image 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1621311628158-9f9d5b4c2239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Image 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1622403718261-bd0e7dd01216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Image 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80', alt: 'Image 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1598931247655-fe06b102b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', alt: 'Image 5' },
    { id: 6, src: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80 ', alt: 'Image 6' },
    { id: 7, src: 'https://images.unsplash.com/photo-1567169866456-a0759b6bb0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80', alt: 'Image 7' },
    { id: 8, src: 'https://images.unsplash.com/photo-1615486363973-f79d875780cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80', alt: 'Image 8' },
    { id: 9, src: 'https://images.unsplash.com/photo-1549501602-52168bb8f653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', alt: 'Image 9' },
    { id: 10, src: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Image 10' },
    { id: 11, src: 'https://images.unsplash.com/photo-1548016193-b9381233058c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80', alt: 'Image 11' },
    { id: 12, src: 'https://images.unsplash.com/photo-1605287977617-ddd865d5f696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Image 12' },
  ];

  return (
    <div className="gallery container">
        <div className='text-center'>
            <img className='img-fluid w-25' src={galleryImage} alt="" />
        </div>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-4">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
