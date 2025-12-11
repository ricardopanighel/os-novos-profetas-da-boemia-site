export interface BandMember {
  slug: string
  name: string
  alias: string
  role: string
  bounty: string
  crime: string
  bio: string
  image: string
}

export const bandMembers: BandMember[] = [
  {
    slug: "leyser",
    name: "Osama Bin Leyser",
    alias: "EDUARDO LEYSER",
    role: "Vocal e Guitarra Solo",
    crime: "Estelionato",
    bounty: "$6.767",
    bio: "Muambeiro, ex-bicheiro, pai de santo esotérico e membro fundador dos Novos Profetas. É um dos principais compositores da banda e um dos maiores cachaceiros, assumindo a guitarra solo e os vocais nas canções e apresentações. Foi preso em 2013 por usar gato na luz.",
    image: "/images/leyser_procurado.jpg",
  },
  {
    slug: "samuca",
    name: "Samuel Peres",
    alias: "SAMUEL PERES",
    role: "Vocal e Guitarra Rítmica",
    crime: "Não divulgado.",
    bounty: "$6.000.000",
    bio: "Samuel Peres, o Oráculo: Fã número 1 do vídeo \"Dame tu cosita\", conhecido por sua capacidade misteriosa de completar frases inacabadas e membro fundador dos Novos Profetas da Boêmia. Sua origem pode ser traçada até o interior da República Soviética do Turcomenistão, aonde tem uma casa de praia. Seu paradeiro é desconhecido depois do incidente.",
    image: "/images/samuca_procurado.jpg",
  },
  {
    slug: "ricardo",
    name: "რიკარდო ლაზარინი",
    alias: "RICARDO LAZARINI",
    role: "Vocal e Baixo",
    crime: "Falsidade ideológica",
    bounty: "$1.500",
    bio: "Último membro vivo da original Profetas da Boêmia, Ricardo participou de pelo menos quinze projetos musicais fracassados e afirma \"არ ვიცი რაზე საუბრობ\". Nascido em 1993, atua na música há mais de 35 anos, colecionando sucessos por onde passa. Se afirma compositor não reconhecido de hits internacionais como: \"Eine kleine Nachtmusik\", \"Bohemian Rhapsody\" e \"Resenha do Arrocha\". É investigado por possível assossiação com a morte de Jhon Lennon e MC Daleste.",
    image: "/images/ricardo_procurado.jpg",
  },
  {
    slug: "matheus",
    name: "Mathhew Van Der Linde",
    alias: "MATHEUS MENEZES",
    role: "Bateria",
    crime: "Formação de Quadrilha",
    bounty: "$66.666",
    bio: "Nascido a 4 bilhões de anos atrás, na Sagrada Teia Cósmica Metafisica de Mahavishnu, Mathhew Van Der Linde encarna em forma de humano. Inspirado por lendas da música como: The People Communist Party of China, Mc Felipe Boladão, Hyperemesis, Cidade Negra, Charles Bronson, Leno Brega e Nick Drake, ele decide se envolver com o mundo boêmio da música, podendo mostrar sua percursão profética, concluindo então, sua profecia.",
    image: "/images/matheus_procurado.jpg",
  },
]

export const songs = [
  {
    title: "Os Profetas da Boêmia",
    year: 2025,
    description: "E assim nasceram os Novos Profetas da Boêmia",
    spotifyUrl: "https://open.spotify.com/album/6HEpDgmrRiBE0sZTjS8ckO",
    youtubeUrl: "https://www.youtube.com/watch?v=YMM5_Bu9kZc&t=18s",
  },
]

export const latestSingleUrl = "https://open.spotify.com/album/6HEpDgmrRiBE0sZTjS8ckO"
