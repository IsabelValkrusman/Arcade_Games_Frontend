import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import '../assets/styles/shrift/shrift1.ttf'; // Impordime stiilifaili

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider-container">
            <button onClick={prevSlide} className="slider-button">◀</button>
            <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`} 
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
            />
            <button onClick={nextSlide} className="slider-button">▶</button>
        </div>
    );
};

const HomeScreen = () => {
    const [language, setLanguage] = useState('ee');

    const changeLanguage = (lang) => {
        if (language !== lang) {
            setLanguage(lang);
        }
    };

    const texts = {
        ee: {
            welcome: "Tere tulemast Halinga Restorani!",
            description: "Halinga Restoran värav Pärnusse. Asume Via Baltica ääres, mis on suurepärane asukoht nii kohalikule külastajale kui ka turismigruppidele. Saate mängida arcade mänguaparaate, mis olid Eestis 90ndatel, nüüd on nad kogutud ühte kohta ,see on üle 100 aparaati. Žetoonid kingitusena ostu korral.            Pakume järgmisi mugavusi: tasuta WiFi, parkimine sõiduautodele, bussidele ja veokitele ,väligalerii, väliterrass, laste mänguväljak, 100 meetri kaugusel asub Halinga Motell ja Halinga Automuuseum. Meie restoran on loodud pakkuma mugavust ja naudingut kõigile külastajatele.",
            arcade: "",
            tripAdvisor: "Vaadake meie [Google'i arvustusi](https://www.google.com/search?q=Halinga+Restoran%2C+Halinga+Pizza+&sca_esv=5cd8ca07d431f45d&hl=ru-EE&biw=1280&bih=585&tbm=lcl&ei=Lq8bZ4XkPLOp2roPiJ__wAc&ved=0ahUKEwiFs9vu4qmJAxWzlFYBHYjPH3gQ4dUDCAk&uact=5&oq=Halinga+Restoran%2C+Halinga+Pizza+&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIiBIYWxpbmdhIFJlc3RvcmFuLCBIYWxpbmdhIFBpenphIDIHEAAYgAQYEzIIEAAYExgWGB4yCBAAGBMYFhgeMggQABgTGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIESKoFUNECWNECcAB4AJABAJgBvgGgAcQCqgEDMC4yuAEDyAEA-AEBmAICoALcAsICBRAhGKABmAMAiAYBkgcFMC4xLjGgB7MK&sclient=gws-wiz-local), kus inimesed on jätnud oma hinnangu.",
            facilities: "",
            openingHours: "", // Lahtiolekuajad
        },
        en: {
            welcome: "Welcome to Halinga Restaurant!",
            description: "Halinga Restaurant — Gateway to Pärnu. We are located along the Via Baltica highway, making it an ideal spot for both local visitors and tourist groups. Additionally, you can enjoy arcade machines popular in Estonia during the 90s, now collected in one place with over 100 machines. Tokens are gifted with each purchase.We offer the following amenities: free WiFi, parking for cars, bus and trucks, an outdoor gallery, a terrace, a children's playground, Halinga Motel is located 100 meters away and Halinga Car Museum. Our restaurant is designed to provide comfort and enjoyment for all visitors.",
            arcade: "",
            tripAdvisor: "Check out our [Google reviews](https://www.google.com/search?q=Halinga+Restoran%2C+Halinga+Pizza+&sca_esv=5cd8ca07d431f45d&hl=ru-EE&biw=1280&bih=585&tbm=lcl&ei=Lq8bZ4XkPLOp2roPiJ__wAc&ved=0ahUKEwiFs9vu4qmJAxWzlFYBHYjPH3gQ4dUDCAk&uact=5&oq=Halinga+Restoran%2C+Halinga+Pizza+&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIiBIYWxpbmdhIFJlc3RvcmFuLCBIYWxpbmdhIFBpenphIDIHEAAYgAQYEzIIEAAYExgWGB4yCBAAGBMYFhgeMggQABgTGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIESKoFUNECWNECcAB4AJABAJgBvgGgAcQCqgEDMC4yuAEDyAEA-AEBmAICoALcAsICBRAhGKABmAMAiAYBkgcFMC4xLjGgB7MK&sclient=gws-wiz-local), where people have left their feedback.",
            facilities: "",
            openingHours: "", // Opening hours
        },
        ru: {
            welcome: "Добро пожаловать в ресторан Халинги!",
            description: "Ресторан Halinga — ворота в Пярну. Мы находимся рядом с шоссе Виа Балтика, что делает нас отличным местом как для местных гостей, так и для туристических групп. Также вы можете играть на аркадных игровых автоматах, которые были популярны в Эстонии в 90-х годах. Теперь они собраны в одном месте — более 100 аппаратов. При покупке — жетоны в подарок. Мы предлагаем следующие удобства: бесплатный WiFi, парковку для легковых автомобилей, автобусов и грузовиков, открытую галерею, террасу, детскую площадку, в 100 метрах находится мотель Халина и Автомобильный музей Халинга. Наш ресторан создан для того, чтобы обеспечить комфорт и удовольствие всем нашим посетителям.",
            arcade: "",
            tripAdvisor: "Посмотрите наши [отзывы в Google](https://www.google.com/search?q=Halinga+Restoran%2C+Halinga+Pizza+&sca_esv=5cd8ca07d431f45d&hl=ru-EE&biw=1280&bih=585&tbm=lcl&ei=Lq8bZ4XkPLOp2roPiJ__wAc&ved=0ahUKEwiFs9vu4qmJAxWzlFYBHYjPH3gQ4dUDCAk&uact=5&oq=Halinga+Restoran%2C+Halinga+Pizza+&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIiBIYWxpbmdhIFJlc3RvcmFuLCBIYWxpbmdhIFBpenphIDIHEAAYgAQYEzIIEAAYExgWGB4yCBAAGBMYFhgeMggQABgTGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIESKoFUNECWNECcAB4AJABAJgBvgGgAcQCqgEDMC4yuAEDyAEA-AEBmAICoALcAsICBRAhGKABmAMAiAYBkgcFMC4xLjGgB7MK&sclient=gws-wiz-local), где люди оставили свои отзывы.",
            facilities: "",
            openingHours: "", // Время работы"
        }
    };

    return (
        <>
            <div className="language-select">
                <img 
                    src="/images/flag-en.svg" 
                    alt="English" 
                    className={`flag-icon ${language === 'en' ? 'active' : ''}`}
                    onClick={() => changeLanguage('en')}
                />
                <img 
                    src="/images/flag-ru.svg" 
                    alt="Russian" 
                    className={`flag-icon ${language === 'ru' ? 'active' : ''}`}
                    onClick={() => changeLanguage('ru')}
                />
                <img 
                    src="/images/flag-ee.svg" 
                    alt="Estonian" 
                    className={`flag-icon ${language === 'ee' ? 'active' : ''}`}
                    onClick={() => changeLanguage('ee')}
                />
            </div>

           
                <div className="container text-center">
                    <Row className="justify-content-center mt-4">
                        <Col md={6}>
                            <ImageSlider images={['/images/8041.jpg', '/images/8039.jpg']} />
                        </Col>
                        <Col md={6}>
                            <ImageSlider images={['/images/8203.jpg', '/images/8183.jpg']} />
                        </Col>
                       
                    </Row>

                    <Row className="justify-content-center mt-4">
                        <Col md={8}>
                            <div className="info-container">
                                <div style={{ width: '100%' }}>
                                    <h3 style={{ fontSize: '50px', color: '#542010', fontFamily: 'Courier New, sans-serif', textAlign: 'center', fontWeight: 'bold' }}>
                                        {texts[language].welcome}
                                    </h3>
                                    <p style={{ fontSize: '20px', color: '#000000', fontFamily: 'system-ui', lineHeight: '1.6' , fontWeight: 'bold'}}>
                                        {texts[language].description}<br />
                                    </p>
                                    <p style={{ fontSize: '20px', color: '#000000', fontFamily: 'system-ui', lineHeight: '1.6' , fontWeight: 'bold'}}>
                                        {texts[language].facilities}
                                    </p>
                                    <p style={{ fontSize: '20px', color: '#000000', fontFamily: 'system-ui', lineHeight: '1.6', fontWeight: 'bold' }}>
                                        <strong>   </strong> {texts[language].openingHours} {/* Display opening hours */}
                                    </p>

                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-4">
                        <Col md={6}>
                            <ImageSlider images={['/images/8217.jpg', '/images/8206.jpg']} />
                        </Col>
                       
                        <Col md={6}>
                            <ImageSlider images={['/images/8239.jpg', '/images/8030.jpg']} />
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-4">
                        <Col md={8}>
                            <div className="info-container">
                                <div style={{ width: '100%' }}>
                                    <p style={{ fontSize: '20px', color: '#000000', fontFamily: 'system-ui', lineHeight: '1.6', fontWeight: 'bold' }}>
                                        {texts[language].arcade}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Google Maps */}
                    <Row className="justify-content-center mt-4">
                        <Col md={7} className="d-flex justify-content-center">
                            <div className="map-container" style={{ height: '400px', width: '100%' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.7545703095464!2d24.5075976!3d58.5952269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed1f5bbfd86747%3A0xf230a82199f76583!2sHalinga%20Restoran%2C%20Halinga%20Pizza!5e0!3m2!1sen!2see!4v1634937754832!5m2!1sen!2see"
                                    width="100%"
                                    height="400"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                    title="Google Maps"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            
        </>
    );
};

export default HomeScreen;
