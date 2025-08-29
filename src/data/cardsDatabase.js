// Banco de dados de cartas do Duelo Metabólico
export const cardsDatabase = [
  {
    id: "1",
    categoria: "Glicólise",
    resposta: "Glicose",
    dicas: [
      { nivel: 1, texto: "É o principal combustível celular e tem 6 átomos de carbono", pontos: 15 },
      { nivel: 2, texto: "Sua concentração no sangue é regulada pela insulina e glucagon", pontos: 10 },
      { nivel: 3, texto: "É quebrada na glicólise para formar 2 moléculas de piruvato", pontos: 5 }
    ],
    explicacao: "A glicose é o monossacarídeo mais importante para o metabolismo energético. Na glicólise, ela é quebrada em duas moléculas de piruvato, gerando ATP e NADH."
  },
  {
    id: "2",
    categoria: "Ciclo de Krebs",
    resposta: "Acetil-CoA",
    dicas: [
      { nivel: 1, texto: "É formado pela descarboxilação oxidativa do piruvato", pontos: 15 },
      { nivel: 2, texto: "Contém 2 átomos de carbono ligados à coenzima A", pontos: 10 },
      { nivel: 3, texto: "É o substrato inicial do ciclo do ácido cítrico", pontos: 5 }
    ],
    explicacao: "O Acetil-CoA é a molécula que conecta a glicólise ao ciclo de Krebs. É formado quando o piruvato perde um carbono como CO2 e se liga à coenzima A."
  },
  {
    id: "3",
    categoria: "Cadeia Respiratória",
    resposta: "ATP",
    dicas: [
      { nivel: 1, texto: "É a 'moeda energética' universal das células", pontos: 15 },
      { nivel: 2, texto: "Contém três grupos fosfato ligados à adenosina", pontos: 10 },
      { nivel: 3, texto: "É produzido pela ATP sintase na fosforilação oxidativa", pontos: 5 }
    ],
    explicacao: "O ATP (adenosina trifosfato) armazena energia nas ligações fosfato. Quando hidrolisado, libera energia para processos celulares."
  },
  {
    id: "4",
    categoria: "Gliconeogênese",
    resposta: "Lactato",
    dicas: [
      { nivel: 1, texto: "É produzido quando há falta de oxigênio nos músculos", pontos: 15 },
      { nivel: 2, texto: "Pode ser convertido de volta em glicose no fígado", pontos: 10 },
      { nivel: 3, texto: "É formado pela redução do piruvato pela lactato desidrogenase", pontos: 5 }
    ],
    explicacao: "O lactato é produzido durante a fermentação láctica quando o oxigênio é limitado. O ciclo de Cori permite sua conversão em glicose no fígado."
  },
  {
    id: "5",
    categoria: "Metabolismo Lipídico",
    resposta: "Beta-oxidação",
    dicas: [
      { nivel: 1, texto: "É o processo de quebra dos ácidos graxos", pontos: 15 },
      { nivel: 2, texto: "Ocorre na matriz mitocondrial", pontos: 10 },
      { nivel: 3, texto: "Produz acetil-CoA, NADH e FADH2", pontos: 5 }
    ],
    explicacao: "A beta-oxidação é o processo catabólico que quebra ácidos graxos em unidades de acetil-CoA, que podem entrar no ciclo de Krebs."
  },
  {
    id: "6",
    categoria: "Glicólise",
    resposta: "Piruvato",
    dicas: [
      { nivel: 1, texto: "É o produto final da glicólise", pontos: 15 },
      { nivel: 2, texto: "Tem 3 átomos de carbono", pontos: 10 },
      { nivel: 3, texto: "Pode ser convertido em lactato ou acetil-CoA", pontos: 5 }
    ],
    explicacao: "O piruvato é o produto final da glicólise. Dependendo das condições celulares, pode seguir para fermentação ou respiração celular."
  },
  {
    id: "7",
    categoria: "Ciclo de Krebs",
    resposta: "Citrato",
    dicas: [
      { nivel: 1, texto: "É o primeiro produto do ciclo de Krebs", pontos: 15 },
      { nivel: 2, texto: "É formado pela condensação do acetil-CoA com oxaloacetato", pontos: 10 },
      { nivel: 3, texto: "Tem 6 átomos de carbono", pontos: 5 }
    ],
    explicacao: "O citrato é formado quando o acetil-CoA se condensa com o oxaloacetato, iniciando o ciclo de Krebs."
  },
  {
    id: "8",
    categoria: "Cadeia Respiratória",
    resposta: "NADH",
    dicas: [
      { nivel: 1, texto: "É um transportador de elétrons reduzido", pontos: 15 },
      { nivel: 2, texto: "É produzido na glicólise e ciclo de Krebs", pontos: 10 },
      { nivel: 3, texto: "Doa elétrons para o complexo I da cadeia respiratória", pontos: 5 }
    ],
    explicacao: "O NADH é a forma reduzida do NAD+, carregando elétrons de alta energia para a cadeia respiratória."
  },
  {
    id: "9",
    categoria: "Gliconeogênese",
    resposta: "Glicogênio",
    dicas: [
      { nivel: 1, texto: "É a forma de armazenamento da glicose", pontos: 15 },
      { nivel: 2, texto: "É encontrado principalmente no fígado e músculos", pontos: 10 },
      { nivel: 3, texto: "É quebrado pela glicogenólise", pontos: 5 }
    ],
    explicacao: "O glicogênio é um polissacarídeo que serve como reserva energética, sendo quebrado quando há necessidade de glicose."
  },
  {
    id: "10",
    categoria: "Metabolismo Lipídico",
    resposta: "Colesterol",
    dicas: [
      { nivel: 1, texto: "É um lipídio importante para membranas celulares", pontos: 15 },
      { nivel: 2, texto: "É precursor de hormônios esteroides", pontos: 10 },
      { nivel: 3, texto: "É sintetizado principalmente no fígado", pontos: 5 }
    ],
    explicacao: "O colesterol é essencial para a fluidez das membranas e síntese de hormônios como testosterona e cortisol."
  },
  {
    id: "11",
    categoria: "Glicólise",
    resposta: "Hexoquinase",
    dicas: [
      { nivel: 1, texto: "É a primeira enzima da glicólise", pontos: 15 },
      { nivel: 2, texto: "Fosforila a glicose usando ATP", pontos: 10 },
      { nivel: 3, texto: "É inibida pelo seu produto, glicose-6-fosfato", pontos: 5 }
    ],
    explicacao: "A hexoquinase catalisa a primeira reação da glicólise, convertendo glicose em glicose-6-fosfato."
  },
  {
    id: "12",
    categoria: "Ciclo de Krebs",
    resposta: "Oxaloacetato",
    dicas: [
      { nivel: 1, texto: "É regenerado ao final do ciclo de Krebs", pontos: 15 },
      { nivel: 2, texto: "Tem 4 átomos de carbono", pontos: 10 },
      { nivel: 3, texto: "Combina com acetil-CoA para formar citrato", pontos: 5 }
    ],
    explicacao: "O oxaloacetato é regenerado ao final do ciclo de Krebs, permitindo que o ciclo continue."
  },
  {
    id: "13",
    categoria: "Cadeia Respiratória",
    resposta: "Complexo IV",
    dicas: [
      { nivel: 1, texto: "É o último complexo da cadeia respiratória", pontos: 15 },
      { nivel: 2, texto: "Também é chamado de citocromo c oxidase", pontos: 10 },
      { nivel: 3, texto: "Reduz o oxigênio a água", pontos: 5 }
    ],
    explicacao: "O Complexo IV é responsável pela redução final do oxigênio a água, completando a cadeia respiratória."
  },
  {
    id: "14",
    categoria: "Gliconeogênese",
    resposta: "Frutose-1,6-bifosfatase",
    dicas: [
      { nivel: 1, texto: "É uma enzima chave da gliconeogênese", pontos: 15 },
      { nivel: 2, texto: "É inibida pelo AMP", pontos: 10 },
      { nivel: 3, texto: "Catalisa a reação oposta à fosfofrutoquinase", pontos: 5 }
    ],
    explicacao: "Esta enzima é crucial para a síntese de glicose, sendo regulada de forma oposta à glicólise."
  },
  {
    id: "15",
    categoria: "Metabolismo Lipídico",
    resposta: "Acetil-CoA carboxilase",
    dicas: [
      { nivel: 1, texto: "É a primeira enzima da síntese de ácidos graxos", pontos: 15 },
      { nivel: 2, texto: "Converte acetil-CoA em malonil-CoA", pontos: 10 },
      { nivel: 3, texto: "É ativada pela insulina", pontos: 5 }
    ],
    explicacao: "Esta enzima inicia a síntese de ácidos graxos, sendo um ponto de controle importante do metabolismo lipídico."
  },
  {
    id: "16",
    categoria: "Glicólise",
    resposta: "Fosfofrutoquinase",
    dicas: [
      { nivel: 1, texto: "É a enzima regulatória mais importante da glicólise", pontos: 15 },
      { nivel: 2, texto: "É inibida pelo ATP e citrato", pontos: 10 },
      { nivel: 3, texto: "É ativada pelo AMP e ADP", pontos: 5 }
    ],
    explicacao: "A fosfofrutoquinase é o principal ponto de controle da glicólise, respondendo ao estado energético celular."
  },
  {
    id: "17",
    categoria: "Ciclo de Krebs",
    resposta: "Isocitrato desidrogenase",
    dicas: [
      { nivel: 1, texto: "É uma enzima regulatória do ciclo de Krebs", pontos: 15 },
      { nivel: 2, texto: "Produz NADH e CO2", pontos: 10 },
      { nivel: 3, texto: "É inibida pelo ATP e NADH", pontos: 5 }
    ],
    explicacao: "Esta enzima controla a velocidade do ciclo de Krebs, sendo inibida quando há abundância energética."
  },
  {
    id: "18",
    categoria: "Cadeia Respiratória",
    resposta: "Coenzima Q",
    dicas: [
      { nivel: 1, texto: "É um transportador de elétrons lipofílico", pontos: 15 },
      { nivel: 2, texto: "Também é chamada de ubiquinona", pontos: 10 },
      { nivel: 3, texto: "Transfere elétrons entre os complexos I/II e III", pontos: 5 }
    ],
    explicacao: "A coenzima Q é móvel na membrana mitocondrial, transportando elétrons entre os complexos."
  },
  {
    id: "19",
    categoria: "Gliconeogênese",
    resposta: "PEPCK",
    dicas: [
      { nivel: 1, texto: "É uma enzima chave da gliconeogênese", pontos: 15 },
      { nivel: 2, texto: "Converte oxaloacetato em fosfoenolpiruvato", pontos: 10 },
      { nivel: 3, texto: "Sua expressão é induzida pelo glucagon", pontos: 5 }
    ],
    explicacao: "A PEPCK (fosfoenolpiruvato carboxiquinase) é essencial para contornar a reação irreversível da piruvato quinase."
  },
  {
    id: "20",
    categoria: "Metabolismo Lipídico",
    resposta: "Carnitina",
    dicas: [
      { nivel: 1, texto: "É necessária para o transporte de ácidos graxos", pontos: 15 },
      { nivel: 2, texto: "Permite a entrada de ácidos graxos na mitocôndria", pontos: 10 },
      { nivel: 3, texto: "Forma acil-carnitina com ácidos graxos", pontos: 5 }
    ],
    explicacao: "A carnitina é essencial para a beta-oxidação, transportando ácidos graxos através da membrana mitocondrial."
  },
  {
    id: "21",
    categoria: "Glicólise",
    resposta: "Lactato desidrogenase",
    dicas: [
      { nivel: 1, texto: "Converte piruvato em lactato", pontos: 15 },
      { nivel: 2, texto: "Funciona em condições anaeróbicas", pontos: 10 },
      { nivel: 3, texto: "Regenera NAD+ para continuar a glicólise", pontos: 5 }
    ],
    explicacao: "Esta enzima permite que a glicólise continue em condições de baixo oxigênio, regenerando NAD+."
  },
  {
    id: "22",
    categoria: "Ciclo de Krebs",
    resposta: "Succinil-CoA",
    dicas: [
      { nivel: 1, texto: "É um intermediário do ciclo de Krebs", pontos: 15 },
      { nivel: 2, texto: "Sua conversão produz GTP", pontos: 10 },
      { nivel: 3, texto: "É precursor da síntese de heme", pontos: 5 }
    ],
    explicacao: "O succinil-CoA é único no ciclo por produzir GTP diretamente e servir como precursor de outras moléculas."
  },
  {
    id: "23",
    categoria: "Cadeia Respiratória",
    resposta: "Citocromo c",
    dicas: [
      { nivel: 1, texto: "É um transportador de elétrons móvel", pontos: 15 },
      { nivel: 2, texto: "Transfere elétrons entre os complexos III e IV", pontos: 10 },
      { nivel: 3, texto: "Está localizado no espaço intermembranar", pontos: 5 }
    ],
    explicacao: "O citocromo c é uma proteína pequena e móvel que transporta elétrons na cadeia respiratória."
  },
  {
    id: "24",
    categoria: "Gliconeogênese",
    resposta: "Glicose-6-fosfatase",
    dicas: [
      { nivel: 1, texto: "É a última enzima da gliconeogênese", pontos: 15 },
      { nivel: 2, texto: "Converte glicose-6-fosfato em glicose livre", pontos: 10 },
      { nivel: 3, texto: "Está presente apenas no fígado e rins", pontos: 5 }
    ],
    explicacao: "Esta enzima permite que apenas certos tecidos liberem glicose livre na circulação."
  },
  {
    id: "25",
    categoria: "Metabolismo Lipídico",
    resposta: "HMG-CoA redutase",
    dicas: [
      { nivel: 1, texto: "É a enzima limitante da síntese de colesterol", pontos: 15 },
      { nivel: 2, texto: "É inibida pelas estatinas", pontos: 10 },
      { nivel: 3, texto: "Converte HMG-CoA em mevalonato", pontos: 5 }
    ],
    explicacao: "Esta enzima é o principal alvo terapêutico para reduzir a síntese de colesterol."
  },
  {
    id: "26",
    categoria: "Glicólise",
    resposta: "Aldolase",
    dicas: [
      { nivel: 1, texto: "Quebra frutose-1,6-bifosfato", pontos: 15 },
      { nivel: 2, texto: "Produz duas trioses fosfato", pontos: 10 },
      { nivel: 3, texto: "Forma DHAP e gliceraldeído-3-fosfato", pontos: 5 }
    ],
    explicacao: "A aldolase divide a molécula de 6 carbonos em duas de 3 carbonos na glicólise."
  },
  {
    id: "27",
    categoria: "Ciclo de Krebs",
    resposta: "Fumarato",
    dicas: [
      { nivel: 1, texto: "É um intermediário do ciclo de Krebs", pontos: 15 },
      { nivel: 2, texto: "É formado pela succinato desidrogenase", pontos: 10 },
      { nivel: 3, texto: "É hidratado para formar malato", pontos: 5 }
    ],
    explicacao: "O fumarato é formado quando o succinato é oxidado, produzindo FADH2."
  },
  {
    id: "28",
    categoria: "Cadeia Respiratória",
    resposta: "ATP sintase",
    dicas: [
      { nivel: 1, texto: "Produz ATP usando o gradiente de prótons", pontos: 15 },
      { nivel: 2, texto: "Também é chamada de Complexo V", pontos: 10 },
      { nivel: 3, texto: "Tem uma parte rotatória (F0) e catalítica (F1)", pontos: 5 }
    ],
    explicacao: "A ATP sintase converte a energia do gradiente eletroquímico em ligações fosfato de alta energia."
  },
  {
    id: "29",
    categoria: "Gliconeogênese",
    resposta: "Piruvato carboxilase",
    dicas: [
      { nivel: 1, texto: "Converte piruvato em oxaloacetato", pontos: 15 },
      { nivel: 2, texto: "Requer biotina como cofator", pontos: 10 },
      { nivel: 3, texto: "É ativada pelo acetil-CoA", pontos: 5 }
    ],
    explicacao: "Esta enzima inicia a gliconeogênese a partir do piruvato, sendo ativada quando há abundância de acetil-CoA."
  },
  {
    id: "30",
    categoria: "Metabolismo Lipídico",
    resposta: "Lipase hormônio-sensível",
    dicas: [
      { nivel: 1, texto: "Quebra triglicerídeos no tecido adiposo", pontos: 15 },
      { nivel: 2, texto: "É ativada pelo glucagon e adrenalina", pontos: 10 },
      { nivel: 3, texto: "É inibida pela insulina", pontos: 5 }
    ],
    explicacao: "Esta enzima mobiliza ácidos graxos dos adipócitos durante o jejum ou exercício."
  },
  {
    id: "31",
    categoria: "Glicólise",
    resposta: "Enolase",
    dicas: [
      { nivel: 1, texto: "Catalisa a penúltima reação da glicólise", pontos: 15 },
      { nivel: 2, texto: "Converte 2-fosfoglicerato em fosfoenolpiruvato", pontos: 10 },
      { nivel: 3, texto: "Requer Mg2+ como cofator", pontos: 5 }
    ],
    explicacao: "A enolase forma fosfoenolpiruvato, que tem uma ligação fosfato de alta energia."
  },
  {
    id: "32",
    categoria: "Ciclo de Krebs",
    resposta: "Malato desidrogenase",
    dicas: [
      { nivel: 1, texto: "É a última enzima do ciclo de Krebs", pontos: 15 },
      { nivel: 2, texto: "Converte malato em oxaloacetato", pontos: 10 },
      { nivel: 3, texto: "Produz NADH", pontos: 5 }
    ],
    explicacao: "Esta enzima completa o ciclo de Krebs, regenerando oxaloacetato e produzindo NADH."
  },
  {
    id: "33",
    categoria: "Cadeia Respiratória",
    resposta: "Complexo III",
    dicas: [
      { nivel: 1, texto: "Também é chamado de complexo citocromo bc1", pontos: 15 },
      { nivel: 2, texto: "Transfere elétrons da coenzima Q para o citocromo c", pontos: 10 },
      { nivel: 3, texto: "Bombeia prótons através do ciclo Q", pontos: 5 }
    ],
    explicacao: "O Complexo III é crucial para manter o gradiente de prótons através de um mecanismo complexo."
  },
  {
    id: "34",
    categoria: "Gliconeogênese",
    resposta: "Alanina",
    dicas: [
      { nivel: 1, texto: "É um aminoácido glicogênico", pontos: 15 },
      { nivel: 2, texto: "É convertida em piruvato", pontos: 10 },
      { nivel: 3, texto: "É transportada do músculo para o fígado", pontos: 5 }
    ],
    explicacao: "A alanina é um importante precursor gliconeogênico, especialmente durante o exercício."
  },
  {
    id: "35",
    categoria: "Metabolismo Lipídico",
    resposta: "Malonil-CoA",
    dicas: [
      { nivel: 1, texto: "É o substrato para síntese de ácidos graxos", pontos: 15 },
      { nivel: 2, texto: "É formado pela acetil-CoA carboxilase", pontos: 10 },
      { nivel: 3, texto: "Inibe a carnitina palmitoil transferase I", pontos: 5 }
    ],
    explicacao: "O malonil-CoA coordena a síntese e oxidação de ácidos graxos, inibindo a beta-oxidação."
  },
  {
    id: "36",
    categoria: "Glicólise",
    resposta: "Gliceraldeído-3-fosfato desidrogenase",
    dicas: [
      { nivel: 1, texto: "Produz NADH na glicólise", pontos: 15 },
      { nivel: 2, texto: "Acopla oxidação com fosforilação", pontos: 10 },
      { nivel: 3, texto: "Forma 1,3-bifosfoglicerato", pontos: 5 }
    ],
    explicacao: "Esta enzima realiza a única reação oxidativa da glicólise, produzindo NADH."
  },
  {
    id: "37",
    categoria: "Ciclo de Krebs",
    resposta: "α-cetoglutarato desidrogenase",
    dicas: [
      { nivel: 1, texto: "É um complexo enzimático do ciclo de Krebs", pontos: 15 },
      { nivel: 2, texto: "Produz succinil-CoA, NADH e CO2", pontos: 10 },
      { nivel: 3, texto: "É inibida pelo succinil-CoA e GTP", pontos: 5 }
    ],
    explicacao: "Este complexo é similar ao da piruvato desidrogenase, sendo um ponto de controle do ciclo."
  },
  {
    id: "38",
    categoria: "Cadeia Respiratória",
    resposta: "FADH2",
    dicas: [
      { nivel: 1, texto: "É um transportador de elétrons reduzido", pontos: 15 },
      { nivel: 2, texto: "É produzido no ciclo de Krebs", pontos: 10 },
      { nivel: 3, texto: "Doa elétrons para o complexo II", pontos: 5 }
    ],
    explicacao: "O FADH2 carrega menos energia que o NADH, produzindo menos ATP na cadeia respiratória."
  },
  {
    id: "39",
    categoria: "Gliconeogênese",
    resposta: "Glicerol",
    dicas: [
      { nivel: 1, texto: "É um precursor gliconeogênico", pontos: 15 },
      { nivel: 2, texto: "Vem da quebra de triglicerídeos", pontos: 10 },
      { nivel: 3, texto: "É convertido em dihidroxiacetona fosfato", pontos: 5 }
    ],
    explicacao: "O glicerol dos triglicerídeos pode ser convertido em glicose através da gliconeogênese."
  },
  {
    id: "40",
    categoria: "Metabolismo Lipídico",
    resposta: "Ácido palmítico",
    dicas: [
      { nivel: 1, texto: "É o principal produto da síntese de ácidos graxos", pontos: 15 },
      { nivel: 2, texto: "Tem 16 átomos de carbono", pontos: 10 },
      { nivel: 3, texto: "É um ácido graxo saturado", pontos: 5 }
    ],
    explicacao: "O ácido palmítico é o primeiro ácido graxo sintetizado, servindo como precursor para outros."
  },
  {
    id: "41",
    categoria: "Glicólise",
    resposta: "Piruvato quinase",
    dicas: [
      { nivel: 1, texto: "Catalisa a última reação da glicólise", pontos: 15 },
      { nivel: 2, texto: "Produz ATP por fosforilação ao nível do substrato", pontos: 10 },
      { nivel: 3, texto: "É ativada pela frutose-1,6-bifosfato", pontos: 5 }
    ],
    explicacao: "A piruvato quinase completa a glicólise, sendo regulada por feedforward."
  },
  {
    id: "42",
    categoria: "Ciclo de Krebs",
    resposta: "Succinato desidrogenase",
    dicas: [
      { nivel: 1, texto: "É a única enzima do ciclo ligada à membrana", pontos: 15 },
      { nivel: 2, texto: "Também é o Complexo II da cadeia respiratória", pontos: 10 },
      { nivel: 3, texto: "Produz FADH2", pontos: 5 }
    ],
    explicacao: "Esta enzima conecta diretamente o ciclo de Krebs à cadeia respiratória."
  },
  {
    id: "43",
    categoria: "Cadeia Respiratória",
    resposta: "Complexo I",
    dicas: [
      { nivel: 1, texto: "É o maior complexo da cadeia respiratória", pontos: 15 },
      { nivel: 2, texto: "Também é chamado de NADH desidrogenase", pontos: 10 },
      { nivel: 3, texto: "Bombeia 4 prótons por NADH oxidado", pontos: 5 }
    ],
    explicacao: "O Complexo I inicia a cadeia respiratória, oxidando NADH e bombeando prótons."
  },
  {
    id: "44",
    categoria: "Gliconeogênese",
    resposta: "Ciclo de Cori",
    dicas: [
      { nivel: 1, texto: "Recicla lactato entre músculo e fígado", pontos: 15 },
      { nivel: 2, texto: "O músculo produz lactato, o fígado produz glicose", pontos: 10 },
      { nivel: 3, texto: "É importante durante o exercício", pontos: 5 }
    ],
    explicacao: "O ciclo de Cori permite que o lactato muscular seja convertido em glicose hepática."
  },
  {
    id: "45",
    categoria: "Metabolismo Lipídico",
    resposta: "Cetogênese",
    dicas: [
      { nivel: 1, texto: "É a síntese de corpos cetônicos", pontos: 15 },
      { nivel: 2, texto: "Ocorre principalmente no fígado", pontos: 10 },
      { nivel: 3, texto: "É ativada durante o jejum prolongado", pontos: 5 }
    ],
    explicacao: "A cetogênese produz combustíveis alternativos quando a glicose é escassa."
  },
  {
    id: "46",
    categoria: "Glicólise",
    resposta: "Fosfoglicerato quinase",
    dicas: [
      { nivel: 1, texto: "Produz ATP na glicólise", pontos: 15 },
      { nivel: 2, texto: "Converte 1,3-bifosfoglicerato em 3-fosfoglicerato", pontos: 10 },
      { nivel: 3, texto: "É uma reação de fosforilação ao nível do substrato", pontos: 5 }
    ],
    explicacao: "Esta enzima realiza a primeira síntese de ATP na glicólise."
  },
  {
    id: "47",
    categoria: "Ciclo de Krebs",
    resposta: "Aconitase",
    dicas: [
      { nivel: 1, texto: "Converte citrato em isocitrato", pontos: 15 },
      { nivel: 2, texto: "Catalisa uma reação de isomerização", pontos: 10 },
      { nivel: 3, texto: "Passa pelo intermediário cis-aconitato", pontos: 5 }
    ],
    explicacao: "A aconitase reorganiza a molécula de citrato para formar isocitrato."
  },
  {
    id: "48",
    categoria: "Cadeia Respiratória",
    resposta: "Desacopladores",
    dicas: [
      { nivel: 1, texto: "Dissipam o gradiente de prótons sem produzir ATP", pontos: 15 },
      { nivel: 2, texto: "Convertem energia em calor", pontos: 10 },
      { nivel: 3, texto: "Exemplo: DNP (dinitrofenol)", pontos: 5 }
    ],
    explicacao: "Os desacopladores permitem que a energia seja liberada como calor em vez de ATP."
  },
  {
    id: "49",
    categoria: "Gliconeogênese",
    resposta: "Substrato de Cori",
    dicas: [
      { nivel: 1, texto: "É o lactato produzido pelos músculos", pontos: 15 },
      { nivel: 2, texto: "É convertido em glicose no fígado", pontos: 10 },
      { nivel: 3, texto: "Permite reciclagem de carbono entre tecidos", pontos: 5 }
    ],
    explicacao: "O lactato muscular serve como substrato para gliconeogênese hepática."
  },
  {
    id: "50",
    categoria: "Metabolismo Lipídico",
    resposta: "Acetoacetato",
    dicas: [
      { nivel: 1, texto: "É um corpo cetônico", pontos: 15 },
      { nivel: 2, texto: "É formado a partir de acetil-CoA", pontos: 10 },
      { nivel: 3, texto: "Pode ser usado como combustível pelo cérebro", pontos: 5 }
    ],
    explicacao: "O acetoacetato é um dos principais corpos cetônicos, servindo como combustível alternativo."
  }
];

// Função para embaralhar cartas
export const shuffleCards = (cards) => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Função para obter cartas por categoria
export const getCardsByCategory = (category) => {
  return cardsDatabase.filter(card => card.categoria === category);
};

// Função para obter categorias únicas
export const getCategories = () => {
  return [...new Set(cardsDatabase.map(card => card.categoria))];
};

// Função para normalizar resposta (remover acentos e converter para minúsculo)
export const normalizeAnswer = (answer) => {
  return answer
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

// Função para validar resposta
export const validateAnswer = (userAnswer, correctAnswer) => {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  return normalizedUser === normalizedCorrect;
};