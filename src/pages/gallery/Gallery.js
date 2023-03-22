
import './gallery.css'
import Header  from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'






const Gallery = () => {

  const gallerylengh=15;
  const images=[]

  for(let i=1; i<= gallerylengh;i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
     <Header title="OUR GALLERY" image={HeaderImage}>
       
      </Header> 

      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((images ,index) => {
              return <article key={index}>
                <img src={images} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}
export default Gallery
