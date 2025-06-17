document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
                mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll down button
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector('#models').offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Load car models
    const modelsGrid = document.querySelector('.models-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    const carModels = [
        {
            id: 1,
            name: 'BMW 3 Series',
            price: '3 200 000 ₽',
            type: 'sedan',
            image: 'https://www.bmw.az/content/dam/bmw/common/all-models/3-series/sedan/2024/navigation/bmw-3-series-ice-lci-modelfinder.png',
            specs: {
                engine: '2.0L Turbo',
                power: '255 л.с.',
                acceleration: '5.8s',
                drive: 'RWD'
            }
        },
        {
            id: 2,
            name: 'BMW 5 Series',
            price: '4 500 000 ₽',
            type: 'sedan',
            image: 'https://www.bmw.ru/content/dam/bmw/common/all-models/5-series/sedan/2021/Navigation/bmw-5-series-sedan-POSI-modelfinder.png',
            specs: {
                engine: '3.0L Turbo',
                power: '335 л.с.',
                acceleration: '5.3s',
                drive: 'AWD'
            }
        },
        {
            id: 3,
            name: 'BMW X3',
            price: '4 100 000 ₽',
            type: 'suv',
            image: 'https://e-n-cars.ru/wp-content/uploads/2024/06/bmw-x300007.png',
            specs: {
                engine: '2.0L Turbo',
                power: '248 л.с.',
                acceleration: '6.3s',
                drive: 'AWD'
            }
        },
        {
            id: 4,
            name: 'BMW X5',
            price: '5 800 000 ₽',
            type: 'suv',
            image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfFdVw10tLhu1XzWVo7puMLWFmdkAj5DOP5tIxZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giASNF1VgxNJ0%25lI2oub5imC2yRCzXeTt%25ViPRKVZVYVb6Wh1DMSkph5uHUVAbnkMLZACtq2hJ0yLkItJG8WxABHvIL38BrEVRJdKX3IjEdw9hIBDS6j3a9Dx4ArdnMRajm4n1c5JDyk7mag%25ybfCunvLUgmlWv0PnvyXIslgpVXHN3Kv63iplZh6KomnXRjcZptARSFgR67aftZ8J7MulARUmP8tEBUkwa87sgNE89dsLxjQUilo9E4DiI1a0scpF49%25nc3bK5ifZu%254Wyfj06acPteW%25VvPaHIGfN8zVWhXNmK3%25PoEqhVA6ogSbGNF9OAhJRFlMgPou4TJAB7upk4ZFe%252BJdUeZL%25EuzWQdBDsztIAeeqVYDdniq83K4zOh5nDycOEjS1qTACynvfT9agyO2JGvyXP24u8zTQBrXv6NQ%25eT62Ydw6XRoYWzC4Q5DxR67F5Vd%259YCn17RUuChDm15GybU7seGAna6Crv0sUizrJyaBGwXHiscqwBvLmrx6KcifOxdXI%25w1RSfcPT1D7vkxb7MPfN2bnUX110UkNPoQ0ysIIbHsLoNFYHviaP0KiIFou5KXcPdHSc3uFeCS6fmlKMfjeuzGGVfu82aTjrlc2YI6lUJujnWqAwIrxlRYechZ7dyC5j',
            specs: {
                engine: '3.0L Turbo',
                power: '335 л.с.',
                acceleration: '5.5s',
                drive: 'AWD'
            }
        },
        {
            id: 5,
            name: 'BMW 8 Series Coupe',
            price: '7 900 000 ₽',
            type: 'coupe',
            image: 'https://www.bmw.kg/content/dam/bmw/common/all-models/8-series/coupe/2022/navigation/bmw-8series-coupe-modellfinder.png.asset.1643150005822.png',
            specs: {
                engine: '4.4L V8 Turbo',
                power: '523 л.с.',
                acceleration: '3.7s',
                drive: 'AWD'
            }
        },
        {
            id: 6,
            name: 'BMW i4',
            price: '4 300 000 ₽',
            type: 'electric',
            image: 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/51577/2023-BMW-i4-front_51577_032_2400x1800_300_nologo.png',
            specs: {
                engine: 'Electric',
                power: '340 л.с.',
                acceleration: '5.7s',
                range: '590 км'
            }
        },
        {
            id: 7,
            name: 'BMW M5 F90',
            price: '10 500 000 ₽',
            type: 'Petrol',
            image: 'https://avatars.mds.yandex.net/get-autoru-vos/2161408/2c97a1ad5d92b5603a30c4b51c6b42f9/456x342',
            specs: {
                engine: '4.4L V8 Twin-Turbo',
                power: '600 л.с.',
                acceleration: '3.4s',
                range: '650 км'
            }
        },
        {
            id: 8,
            name: 'BMW M8 Gran Coupé Competition',
            price: '15 500 000 ₽',
            type: 'Petrol',
            image: 'https://prod.cosy.bmw.cloud/ministorene/cosySec?COSY-EU-100-7331c9Nv2Z7d5yKlHS9P3AKWL2JeissqEgpn23HGfvQFz%25eJE47UAzLekjnW9ZThJPLZf1EoKGZdpkeGhNS4ctE6LVP2KVZb6989RkBzcSktaJJE47BdqfoUwWptvXhFUwkEaagdE7raFx6RCzIhtE6BmudhSId4k9VTCrm7AaCil6JTKGwgYXcjnWqVskbNDOBeagdIhceJnTNB9axOO2kOHUtWPfbYfy91y10t9gP050y0K2bHi4T4x29%25wc3cHziftxdTfMw178z3vqtECUkd1H7slGAzQdCrXpFhOalZQ6KownXRaYWHtLQ5nmP%257TagOybfXfnvIT91dcO2B3inPIIjedwObLBDMztIajeqhk7BrDMLoACe82hJHFlMgPou%25KXhPKHSfWQosC%25V1Pa7RSfNEbnCxb10s9Ol8DE4riIXULscZwBQGErxRteaEBZ857MjH0RUgChDYE5GvloqmKgp2XHLyPv6jQ%25J9k2YDafuJijmqn1ScFDyLOEVxBqTJIsNKNL3uBrK1VJdSeZWYYuzVMRPlFSkNh5bHOVA0og9%25lNF4HvifT0Kc%252cp84WxfjxLzcP81D8JlxbUEqU3889GsLGlIUiprJpS%25Gw6Zu6YJptYRSYwh67m5VmtCYCygNyIAmlTv0QheyXqQFJBpEWNRkr',
            specs: {
                engine: '4.4L V8 Twin-Turbo',
                power: '625 л.с.',
                acceleration: '3.2s',
                range: '600 км'
            }
        }
    ];

    function loadModels(filter = 'all') {
        modelsGrid.innerHTML = '';
        
        const filteredModels = filter === 'all' 
            ? carModels 
            : carModels.filter(model => model.type === filter);
        
        filteredModels.forEach(model => {
            const modelCard = document.createElement('div');
            modelCard.className = 'model-card';
            modelCard.innerHTML = `
                <div class="model-img">
                    <img src="${model.image}" alt="${model.name}">
                </div>
                <div class="model-info">
                    <div class="model-title">
                        <h3>${model.name}</h3>
                        <div class="model-price">${model.price}</div>
                    </div>
                    <div class="model-specs">
                        <div class="spec-item">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>${model.specs.engine}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-bolt"></i>
                            <span>${model.specs.power}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-stopwatch"></i>
                            <span>${model.specs.acceleration}</span>
                        </div>
                        ${model.specs.drive ? `
                        <div class="spec-item">
                            <i class="fas fa-car"></i>
                            <span>${model.specs.drive}</span>
                        </div>
                        ` : `
                        <div class="spec-item">
                            <i class="fas fa-battery-full"></i>
                            <span>${model.specs.range}</span>
                        </div>
                        `}
                    </div>
                    <div class="model-actions">
                        <a href="#test-drive" class="btn btn-small">Тест-драйв</a>
                        <a href="#" class="btn btn-small btn-secondary">Подробнее</a>
                    </div>
                </div>
            `;
            modelsGrid.appendChild(modelCard);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadModels(this.dataset.filter);
        });
    });

    loadModels();

    const testDriveForm = document.querySelector('.test-drive-form');
    if (testDriveForm) {
        testDriveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const model = document.getElementById('model').value;
            const date = document.getElementById('date').value;
            
            console.log('Test drive request:', { name, phone, email, model, date });
            
            alert('Спасибо! Ваша заявка на тест-драйв принята. Мы свяжемся с вами в ближайшее время для подтверждения.');
            
            this.reset();
        });
    }

    function initMap() {
        if (document.getElementById('map')) {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 55.7558, lng: 37.6173 }, // Moscow coordinates
                zoom: 12
            });
            
            // Add markers for dealers
            const dealers = [
                {
                    name: 'BMW Premium Москва',
                    location: { lat: 55.7558, lng: 37.6173 },
                    address: 'Ленинградский проспект, 39А'
                },
                {
                    name: 'BMW Premium Север',
                    location: { lat: 55.8407, lng: 37.4876 },
                    address: 'Дмитровское шоссе, 163'
                },
                {
                    name: 'BMW Premium Юг',
                    location: { lat: 55.6226, lng: 37.6045 },
                    address: 'Варшавское шоссе, 170Г'
                }
            ];
            
            dealers.forEach(dealer => {
                new google.maps.Marker({
                    position: dealer.location,
                    map: map,
                    title: dealer.name,
                    label: {
                        text: 'BMW',
                        color: '#0066b1',
                        fontWeight: 'bold'
                    }
                });
            });
        }
    }
    
    // Make initMap available globally
    window.initMap = initMap;
});