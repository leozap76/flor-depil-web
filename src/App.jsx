import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, CheckCircle2, Sparkles, User, Instagram, Menu, X, ChevronRight, MessageCircle, Star, ShieldCheck, Award } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pinkSoft = "#f3dcd4";
  const pinkDark = "#c49283";
  const bgNude = "#faf6f4";

  const whatsappNumber = "542657580106";
  const getWhatsAppLink = (servicio) => {
    const msg = encodeURIComponent(`¡Hola! Me gustaría consultar por un turno para el servicio de: ${servicio}`);
    return `https://wa.me/${whatsappNumber}?text=${msg}`;
  };

  const whatsappNumberrostro = "542657565356";
  const getWhatsAppLinkrostro = (servicio) => {
    const msg = encodeURIComponent(`¡Hola! Me gustaría consultar por un turno para el servicio de: ${servicio}`);
    return `https://wa.me/${whatsappNumberrostro}?text=${msg}`;
  };

  const treatments = {
    corporales: [
      { name: "Masaje reductor", link: getWhatsAppLink("Masaje reductor") },
      { name: "Drenaje Linfático", link: getWhatsAppLink("Drenaje Linfático") },
      { name: "Depilación láser", link: getWhatsAppLink("Depilación láser") },
      { name: "Aparatología", link: getWhatsAppLink("Aparatología") },
      { name: "Maderoterapia", link: getWhatsAppLink("Maderoterapia") },
      { name: "Masaje relajante", link: getWhatsAppLink("Masaje relajante") }
    ],
    faciales: [
      { name: "Limpieza Facial Profunda", link: getWhatsAppLinkrostro("Limpieza Facial Profunda") },
      { name: "Dermaplaning", link: getWhatsAppLinkrostro("Dermaplaning") },
      { name: "Peeling", link: getWhatsAppLinkrostro("Peeling") },
      { name: "Dermapen facial", link: getWhatsAppLinkrostro("Dermapen facial") },
      { name: "NCTF", link: getWhatsAppLinkrostro("NCTF") },
      { name: "Plasma Rico en Plaquetas", link: getWhatsAppLinkrostro("Plasma Rico en Plaquetas") },
      { name: "Tec. en Estética: RF - EMS", link: getWhatsAppLinkrostro("Tec. en Estética: RF - EMS") },
      { name: "Plasmapen", link: getWhatsAppLinkrostro("Plasmapen") },
      { name: "Ultrasonido", link: getWhatsAppLinkrostro("Ultrasonido") }
    ]
  };

  const staff = [
    { name: "Flor", schedule: "Lunes a Viernes", phone: "2657-565356" },
    { name: "Maricel", schedule: "Miércoles", phone: "266-5035505" },
    { name: "Sandra", schedule: "Martes a Jueves", phone: "2657-580106" }
  ];

  return (
    <div className="min-h-screen font-sans text-stone-800" style={{ backgroundColor: bgNude }}>
      
      {/* Botón Flotante de WhatsApp */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 text-white"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle size={28} />
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Reemplaza el bloque del logo en tu navegación por este código corregido */}
{(() => {
  // Definimos la variable de color localmente para evitar el ReferenceError
  const pinkDark = "#c49283";
  
  return (
    <div className="flex items-center gap-3">
      {/* Contenedor de la imagen del logo */}
      <div className="w-12 h-12 flex items-center justify-center">
        <img 
          src="/logo-marca.png" 
          alt="Logo Flor Depil" 
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback: si la imagen no carga, muestra un círculo con el color de la marca
            e.target.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = "w-10 h-10 rounded-full";
            fallback.style.backgroundColor = pinkDark;
            e.target.parentNode.appendChild(fallback);
          }}
        />
      </div>
      
      {/* Nombre de la marca con el color definido */}
      <span 
        className="text-xl font-serif font-bold tracking-tight" 
        style={{ color: pinkDark }}
      >
        FLOR DEPIL
      </span>
    </div>
  );
})()}
          
          <div className="hidden md:flex items-center gap-8 font-medium text-xs uppercase tracking-[0.2em]">
            <a href="#inicio" className="hover:opacity-60 transition-opacity">Inicio</a>
            <a href="#servicios" className="hover:opacity-60 transition-opacity">Servicios</a>
            <a href="#equipo" className="hover:opacity-60 transition-opacity">Staff</a>
            <a href="#contacto" className="px-6 py-2 rounded-full text-white transition-all hover:brightness-110 shadow-md" style={{ backgroundColor: pinkDark }}>Reservar</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-2xl font-serif">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="#equipo" onClick={() => setIsMenuOpen(false)}>Staff</a>
          <a href="#contacto" onClick={() => setIsMenuOpen(false)} style={{ color: pinkDark }}>Reservar</a>
          <button onClick={() => setIsMenuOpen(false)} className="mt-4 text-sm uppercase tracking-widest opacity-40">Cerrar</button>
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -z-10 hidden lg:block"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 mb-6 shadow-sm">
              <Star size={14} className="fill-stone-800" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Excelencia en Estética</span>
            </div>
            <h2 className="text-sm uppercase tracking-[0.3em] mb-4 font-bold" style={{ color: pinkDark }}>Sandra Romero Esteticista</h2>
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8 tracking-tighter">
              El arte de <br />
              <span className="italic font-light" style={{ color: pinkDark }}>cuidar de ti.</span>
            </h1>
            <p className="text-lg text-stone-600 mb-10 max-w-md leading-relaxed">
              Tratamientos personalizados en Villa Mercedes con tecnología de punta para resaltar tu resplandor natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#servicios" className="px-10 py-5 rounded-2xl text-white font-bold text-center shadow-xl transition-all hover:translate-y-[-4px]" style={{ backgroundColor: pinkDark }}>
                DESCUBRIR SERVICIOS
              </a>
              <a href="#equipo" className="px-10 py-5 rounded-2xl border-2 font-bold text-center transition-all hover:bg-white" style={{ borderColor: pinkDark, color: pinkDark }}>
                CONOCER EL STAFF
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" 
                alt="Estética relajación" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
              <p className="text-stone-400 text-[10px] uppercase font-bold tracking-widest mb-1">Resultados</p>
              <p className="text-2xl font-serif font-bold">100% Reales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white border-y border-stone-100">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <ShieldCheck size={32} />, title: "Seguridad", desc: "Equipos certificados y protocolos de higiene rigurosos." },
            { icon: <Award size={32} />, title: "Experiencia", desc: "Años transformando pieles en Villa Mercedes." },
            { icon: <Sparkles size={32} />, title: "Personalizado", desc: "Cada tratamiento se adapta a tus necesidades únicas." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="mb-4 text-stone-400 group-hover:scale-110 transition-transform" style={{ color: pinkDark }}>{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-widest">{item.title}</h3>
              <p className="text-stone-500 text-sm max-w-[250px] mx-auto leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section con Imágenes */}
      <section id="servicios" className="py-32">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.5em] mb-4 opacity-50 font-bold">Nuestro Catálogo</h2>
          <h3 className="text-5xl font-serif mb-6">Tratamientos Exclusivos</h3>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: pinkDark }}></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Corporales */}
          <div className="bg-white rounded-[3rem] shadow-sm overflow-hidden border border-stone-100 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" 
                alt="Tratamiento corporal" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/10"></div>
              <div className="absolute bottom-6 left-8">
                <h3 className="text-3xl font-serif text-white drop-shadow-md">Corporales</h3>
              </div>
            </div>
            <div className="p-10 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatments.corporales.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl flex items-center justify-between group transition-all hover:bg-stone-50 border border-stone-100 hover:border-[#f3dcd4] hover:shadow-sm"
                  >
                    <span className="font-bold text-sm tracking-tight">{item.name}</span>
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" style={{ color: pinkDark }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Faciales */}
          <div className="bg-white rounded-[3rem] shadow-sm overflow-hidden border border-stone-100 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" 
                alt="Tratamiento facial" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/10"></div>
              <div className="absolute bottom-6 left-8">
                <h3 className="text-3xl font-serif text-white drop-shadow-md">Faciales</h3>
              </div>
            </div>
            <div className="p-10 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatments.faciales.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl flex items-center justify-between group transition-all hover:bg-stone-50 border border-stone-100 hover:border-[#f3dcd4] hover:shadow-sm"
                  >
                    <span className="font-bold text-xs uppercase tracking-wider">{item.name}</span>
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" style={{ color: pinkDark }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section con estilo mejorado */}
      <section id="equipo" className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] mb-4 opacity-50 font-bold">Nuestro Equipo</h2>
              <h3 className="text-5xl font-serif mb-12">Expertas en tu Bienestar</h3>
              <div className="space-y-10">
                {staff.map((person, i) => (
                  <div key={i} className="flex items-center gap-8 group">
                    <div className="w-20 h-20 rounded-[2rem] flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6" style={{ backgroundColor: pinkDark }}>
                      <User className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">{person.name}</h4>
                      <p className="text-stone-400 text-sm mb-3 uppercase tracking-widest">{person.schedule}</p>
                      <div className="flex items-center gap-2 text-xl font-medium" style={{ color: pinkSoft }}>
                        <Phone size={18} />
                        <a href={`tel:${whatsappNumber}`} className="hover:underline transition-all decoration-1">{person.phone}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="contacto" className="bg-white text-stone-900 p-12 md:p-16 rounded-[4rem] shadow-2xl relative">
              <div className="absolute top-8 right-8 text-stone-100">
                <Sparkles size={80} />
              </div>
              <h3 className="text-3xl font-serif mb-4">¿Lista para tu momento?</h3>
              <p className="text-stone-500 mb-10 leading-relaxed font-medium">Te esperamos en nuestro exclusivo espacio en Villa Mercedes para brindarte una experiencia única.</p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50">
                  <MapPin className="text-stone-400" />
                  <p className="text-sm font-bold">Las Heras 412, Villa Mercedes</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 group hover:bg-stone-100 transition-colors">
                  <Instagram className="text-stone-400 group-hover:text-pink-600 transition-colors" size={20} />
                  <a 
                    href="https://www.instagram.com/sandraromero_estetica" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-bold hover:underline"
                  >
                    @sandraromero_estetica
                  </a>
                </div>
              </div>
              
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 rounded-3xl text-white font-black text-lg flex items-center justify-center gap-4 transition-all hover:scale-[1.02] shadow-xl"
                style={{ backgroundColor: pinkDark }}
              >
                <Calendar size={24} />
                SOLICITAR TURNO
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center bg-stone-950">
       <div className="mt-8 pt-8 border-t border-stone-200 flex flex-col items-center gap-2">
    <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em]">
      © 2024 Flor Depil • Sandra Romero
    </p>
    <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-stone-400">
      <span>Diseño y Desarrollo por</span>
      <a 
        href="https://digitallab-web.vercel.app/#" 
        target="_blank"
        rel="noopener noreferrer"
        translate="no"
        className="font-bold hover:text-[#c49283] transition-colors duration-300"
        style={{ color: '#8c8c8c' }}
      >
        DigitalLab
      </a>
    </div>
  </div>
        
      </footer>
    </div>
  );
};

export default App;