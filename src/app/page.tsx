import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C9A227] font-semibold mb-4 tracking-widest uppercase">@jleobotti</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Sou o <span className="text-gradient">FERA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Criador de conteúdo, empreendedor e influenciador digital. 
                Compartilhando lifestyle, moda masculina e empreendedorismo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://instagram.com/jleobotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  📸 Seguir no Instagram
                </a>
                <a 
                  href="https://tiktok.com/@jleobotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  🎵 TikTok
                </a>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 mt-12">
                {[
                  { number: "50K+", label: "Seguidores" },
                  { number: "10M+", label: "Views" },
                  { number: "100+", label: "Parcerias" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-[#C9A227] to-[#D4B94A] rounded-3xl flex items-center justify-center">
                  <span className="text-9xl">👤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section id="redes" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Minhas Redes</h2>
            <p className="text-white/60">Acompanhe meu conteúdo diariamente</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Instagram */}
            <a 
              href="https://instagram.com/jleobotti"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 rounded-2xl flex items-center gap-6 hover:scale-105 transition-transform"
            >
              <div className="text-6xl">📸</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Instagram</h3>
                <p className="text-white/60">@jleobotti</p>
                <p className="text-[#C9A227] font-semibold mt-2">Moda Masculina & Lifestyle</p>
              </div>
            </a>
            
            {/* TikTok */}
            <a 
              href="https://tiktok.com/@jleobotti"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 rounded-2xl flex items-center gap-6 hover:scale-105 transition-transform"
            >
              <div className="text-6xl">🎵</div>
              <div>
                <h3 className="text-2xl font-bold text-white">TikTok</h3>
                <p className="text-white/60">@jleobotti</p>
                <p className="text-[#C9A227] font-semibold mt-2">Empreendedorismo & Dicas</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Quem é o FERA?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Sou <strong>José Leonardo</strong>, conhecido como <strong>FERA</strong> no mundo digital. 
            Trabalho com criação de conteúdo sobre <strong>moda masculina</strong>, 
            <strong>empreendedorismo</strong> e <strong>lifestyle</strong>.
          </p>
          <p className="text-lg text-gray-500">
            Já fechei parcerias com mais de 100 marcas e continuo crescendo diariamente 
            com conteúdo autêntico e de qualidade.
          </p>
        </div>
      </section>

      {/* Parcerias / Serviços */}
      <section id="parcerias" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Serviços e Parcerias</h2>
            <p className="text-gray-600">Conteúdo autêntico para sua marca</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <a 
                  href={getWhatsAppLink(service.title)}
                  className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#C9A227] transition-colors"
                >
                  Contrate o FERA
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section id="marcas" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Marcas que já trabalhamos</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Marca {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato CTA */}
      <section id="contato" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Quer fazer uma parceria?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Entre em contato e vamos criar algo incrível juntos!
          </p>
          <a 
            href={getWhatsAppLink("parceria")}
            className="inline-block bg-[#C9A227] text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Falar no WhatsApp 📱
          </a>
        </div>
      </section>
    </div>
  );
}

function getWhatsAppLink(context: string) {
  const baseUrl = "https://wa.me/5544998862409";
  let message = "Olá! Vim pelo site do JLeonardo (FERA). Gostaria de saber mais sobre suas parcerias.";
  
  if (context) {
    message = `Olá! Vim pelo site do JLeonardo (FERA). Gostaria de saber mais sobre ${context}.`;
  }
  
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

const services = [
  {
    icon: "📸",
    title: "Posts",
    description: "Divulgação da sua marca em posts profissionais no Instagram."
  },
  {
    icon: "🎬",
    title: "Reels & Vídeos",
    description: "Vídeos engajados para TikTok e Reels do Instagram."
  },
  {
    icon: "📢",
    title: "Campanhas",
    description: "Campanhas completas para marcas com alta taxa de engajamento."
  }
];
