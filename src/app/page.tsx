function getWhatsAppLink(pacote: string = "") {
  const baseUrl = "https://wa.me/5544998862409";
  let message = "Olá! Vim pelo site do FERA. Gostaria de saber mais sobre as parcerias.";
  
  if (pacote) {
    message = `Olá! Vim pelo site do FERA. Gostaria de saber mais sobre o pacote ${pacote}.`;
  }
  
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

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
                Criador de conteúdo sobre <strong>moda masculina</strong>, <strong>lifestyle</strong> e <strong>empreendedorismo</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://instagram.com/jleobotti" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
                  📸 Seguir no Instagram
                </a>
                <a href="https://tiktok.com/@jleobotti" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
                  🎵 TikTok
                </a>
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

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Quem é o FERA?</h2>
          <p className="text-xl text-white/70 leading-relaxed mb-6">
            Sou <strong>José Leonardo</strong>, conhecido como <strong>FERA</strong>. 
            Crio conteúdo sobre <strong>moda masculina</strong>, <strong>lifestyle</strong> e <strong>empreendedorismo</strong>.
          </p>
          <p className="text-lg text-white/50">
            Já fechei parcerias com +100 marcas e continuo crescendo com conteúdo autêntico e de qualidade.
          </p>
        </div>
      </section>

      {/* Números */}
      <section id="números" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">AUDIÊNCIA</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {numeros.map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">{item.valor}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {demograficos.map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-lg font-bold mb-2">{item.titulo}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes */}
      <section id="pacotes" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">PACOTES</h2>
            <p className="text-gray-600">Escolha o pacote ideal para sua marca</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pacotes.map((pacote, i) => (
              <div key={i} className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{pacote.icone}</div>
                <h3 className="text-2xl font-bold mb-2">{pacote.nome}</h3>
                <p className="text-gray-500 mb-6">{pacote.desc}</p>
                <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                  {pacote.inclui.map((item, j) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
                <a href={getWhatsAppLink(pacote.nome)} className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C9A227] transition-colors">
                  Contrate o FERA
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que inclui */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Inclui em todos os pacotes:</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {inclui.map((item, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Marcas que já trabalhamos</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Marca {i}</span>
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
          <a href={getWhatsAppLink("parceria")} className="inline-block bg-[#C9A227] text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Falar no WhatsApp 📱
          </a>
        </div>
      </section>
    </div>
  );
}

const numeros = [
  { valor: "54.4K", label: "Audiência" },
  { valor: "92%", label: "Homens" },
  { valor: "75%", label: "18-34 anos" },
  { valor: "SP, RJ, MG, PR", label: "Principais Estados" },
];

const demograficos = [
  { titulo: "Gênero", desc: "92% Masculino | 8% Feminino" },
  { titulo: "Faixa Etária", desc: "18-24 (35%) | 25-34 (40%) | 35-44 (15%)" },
  { titulo: "Localização", desc: "SP, RJ, MG, PR, SC, RS" },
];

const pacotes = [
  {
    icone: "📸",
    nome: "POST + REELS",
    desc: "Post + Reels completo",
    inclui: ["1 Post no feed", "1 Reels", "Copywriting", "Fotos e Vídeos", "Direitos: Redes próprias + 30 dias Ads"]
  },
  {
    icone: "🎬",
    nome: "1 REELS",
    desc: "1 Reels",
    inclui: ["1 Reels", "Copywriting", "Fotos e Vídeo", "Direitos: Redes próprias + 30 dias Ads"]
  },
  {
    icone: "📄",
    nome: "POST",
    desc: "1 Post",
    inclui: ["1 Post no feed", "Copywriting", "Fotos profissionais", "Direitos: Redes próprias + 30 dias Ads"]
  },
  {
    icone: "⏱️",
    nome: "STORY",
    desc: "1 Story",
    inclui: ["1 Story com link", "Copywriting", "Direitos: Redes próprias"]
  },
  {
    icone: "📢",
    nome: "BAKLI",
    desc: "Shoutout/Banner",
    inclui: ["Banner no meu Story", "Menção", "Direitos: Redes próprias"]
  },
  {
    icone: "💼",
    nome: "CAMPAÑA",
    desc: "Campanha completa",
    inclui: ["Múltiplos Posts", "Múltiplos Reels", "Copywriting", "Fotos e Vídeos", "Direitos + Ads customizados"]
  },
];

const inclui = [
  "Copywriting",
  "Fotos e Vídeos",
  "Direitos: Redes próprias",
  "+30 dias Ads",
];
