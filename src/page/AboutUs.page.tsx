import historyImg from '../assets/history.webp';
import commitmentImg from '../assets/commitment.webp';
import informationImg from '../assets/announce.webp';
const AboutUs = () => {
  return (
    <section>
      <div className='about-header mb-16'>
        <div className='text-center w-[60%] mx-auto p-12 bg-[rgba(0,0,0,0.55)] text-base-300'>
          <h2 className='text-4xl font-bold text-[#e9ecef] tracking-widest mb-10'>
            ABOUT TechHub
          </h2>
          <p className='text-xl text-[#ced4da]'>
            Our mission is to provide you with the best products. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Perferendis, eligendi!
          </p>
        </div>
      </div>
      <div className='text-center'>
        <h3 className='text-4xl tracking-widest pb-12 font-semibold border-b'>
          WHO WE ARE
        </h3>

        {/* Card */}
        <div className='grid gap-8 lg:grid-cols-2 xl:grid-cols-3 place-items-center mt-12'>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img src={historyImg} alt='history image' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Histoty of TechHub</h2>
              <p className='text-justify'>
                Nulla aliquet porttitor lacus luctus. Viverra maecenas accumsan
                lacus vel facilisis volutpat. Arcu cursus vitae congue mauris
                rhoncus aenean vel. Aenean pharetra magna ac placerat vestibulum
                lectus mauris ultrices eros. Sit amet dictum sit amet justo
                donec. Quam id leo in vitae...
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Know More</button>
              </div>
            </div>
          </div>

          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img src={commitmentImg} alt='commitment image' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Our commitment</h2>
              <p className='text-justify'>
                Nulla aliquet porttitor lacus luctus. Viverra maecenas accumsan
                lacus vel facilisis volutpat. Arcu cursus vitae congue mauris
                rhoncus aenean vel. Aenean pharetra magna ac placerat vestibulum
                lectus mauris ultrices eros. Sit amet dictum sit amet justo
                donec. Quam id leo in vitae...
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Know More</button>
              </div>
            </div>
          </div>

          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img src={informationImg} alt='history image' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Access to information</h2>
              <p className='text-justify'>
                Nulla aliquet porttitor lacus luctus. Viverra maecenas accumsan
                lacus vel facilisis volutpat. Arcu cursus vitae congue mauris
                rhoncus aenean vel. Aenean pharetra magna ac placerat vestibulum
                lectus mauris ultrices eros. Sit amet dictum sit amet justo
                donec. Quam id leo in vitae...
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>More Information</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
