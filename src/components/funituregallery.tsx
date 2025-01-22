import Image from "next/image";
 interface Furnitureitem{
    id:number;
    src:string;
    alt:string;
 }
 const FurnitureGallery: React.FC = () => {
    const furnitureItems: Furnitureitem[] = [
      { id: 1, src: '/pic1.png', alt: 'Chair 1' },
      { id: 2, src: '/pic2.png', alt: 'Chair 2' },
      { id: 3, src: '/pic3.png', alt: 'Table 1' },
      { id: 4, src: '/pic4.png', alt: 'Table 2' },
      // Add more items as needed
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Furniture Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {furnitureItems.map(item => (
            <div key={item.id} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.src}
                alt={item.alt}
                layout="responsive"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default FurnitureGallery
  
  