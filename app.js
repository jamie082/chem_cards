const cards = [
  {system:'skeletal',term:'Femur',prompt:'What is the longest bone in the body?',summary:'Thigh bone · supports body weight',detail:'The femur runs from the hip to the knee. It is also the body’s strongest bone.',type:'SKELETAL SYSTEM'},
  {system:'skeletal',term:'Patella',prompt:'Which bone protects the front of the knee?',summary:'Kneecap · a sesamoid bone',detail:'Embedded in the quadriceps tendon, the patella improves the leverage of the knee extensors.',type:'SKELETAL SYSTEM'},
  {system:'skeletal',term:'206',prompt:'About how many bones are in an adult skeleton?',summary:'Bones in the adult body',detail:'Babies have around 270 bones. Many fuse during growth, leaving about 206 in most adults.',type:'SKELETAL SYSTEM'},
  {system:'skeletal',term:'Vertebral column',prompt:'What protects the spinal cord and supports the trunk?',summary:'A flexible column of vertebrae',detail:'The  vertebral column includes cervical, thoracic, lumbar, sacral, and coccygeal regions.',type:'SKELETAL SYSTEM'},
  {system:'muscular',term:'Skeletal muscle',prompt:'Which muscle type is usually under voluntary control?',summary:'Striated · attached to bones',detail:'Skeletal muscles contract to move the skeleton, maintain posture, and produce heat.',type:'MUSCULAR SYSTEM'},
  {system:'muscular',term:'Tendon',prompt:'What connects a muscle to a bone?',summary:'Tough connective tissue',detail:'Tendons transmit the pulling force of contracting muscles to bones.',type:'MUSCULAR SYSTEM'},
  {system:'muscular',term:'Diaphragm',prompt:'What is the primary muscle of quiet breathing?',summary:'Dome-shaped muscle below the lungs',detail:'When it contracts, the diaphragm flattens and increases the volume of the thoracic cavity.',type:'MUSCULAR SYSTEM'},
  {system:'muscular',term:'Cardiac muscle',prompt:'What specialized muscle tissue makes up the heart?',summary:'Involuntary · striated · self-rhythmic',detail:'Cardiac muscle cells are connected by intercalated discs, helping the heart contract as a coordinated pump.',type:'MUSCULAR SYSTEM'},
  {system:'nervous',term:'Neuron',prompt:'What is the basic signaling cell of the nervous system?',summary:'A cell specialized to transmit information',detail:'Neurons receive and send signals using electrical changes and chemical neurotransmitters.',type:'NERVOUS SYSTEM'},
  {system:'nervous',term:'Cerebellum',prompt:'Which brain region helps coordinate balance and movement?',summary:'Located at the back of the brain',detail:'The cerebellum fine-tunes movement and supports balance, posture, and motor learning.',type:'NERVOUS SYSTEM'},
  {system:'nervous',term:'Spinal cord',prompt:'What carries signals between the brain and much of the body?',summary:'A major pathway of the central nervous system',detail:'Protected by the vertebral column, the spinal cord also coordinates many reflexes.',type:'NERVOUS SYSTEM'},
  {system:'nervous',term:'Autonomic nervous system',prompt:'Which nervous system division regulates many automatic body functions?',summary:'Controls involuntary activity',detail:'Its sympathetic and parasympathetic branches help regulate functions such as heart rate and digestion.',type:'NERVOUS SYSTEM'},
  {system:'cardiovascular',term:'Left ventricle',prompt:'Which heart chamber pumps blood into systemic circulation?',summary:'The heart’s thick-walled lower left chamber',detail:'It sends oxygen-rich blood through the aortic valve into the aorta and around the body.',type:'CARDIOVASCULAR SYSTEM'},
  {system:'cardiovascular',term:'Arteries',prompt:'Which vessels carry blood away from the heart?',summary:'Thick, elastic vessel walls',detail:'Arteries carry blood away from the heart. Most carry oxygen-rich blood, with pulmonary arteries as a key exception.',type:'CARDIOVASCULAR SYSTEM'},
  {system:'cardiovascular',term:'Capillaries',prompt:'Where do gases and nutrients exchange between blood and tissues?',summary:'The smallest blood vessels',detail:'Their thin walls allow oxygen, nutrients, and waste products to move between blood and surrounding tissues.',type:'CARDIOVASCULAR SYSTEM'},
  {system:'cardiovascular',term:'Red blood cells',prompt:'Which blood cells carry most of the body’s oxygen?',summary:'Cells rich in hemoglobin',detail:'Hemoglobin binds oxygen in the lungs and releases it to tissues throughout the body.',type:'CARDIOVASCULAR SYSTEM'},
  {system:'respiratory',term:'Alveoli',prompt:'Where does gas exchange happen in the lungs?',summary:'Tiny air sacs surrounded by capillaries',detail:'Oxygen diffuses into the blood and carbon dioxide diffuses into the air in these delicate sacs.',type:'RESPIRATORY SYSTEM'},
  {system:'respiratory',term:'Trachea',prompt:'What airway carries air from the larynx toward the bronchi?',summary:'The windpipe',detail:'The trachea is supported by cartilage rings and branches into the right and left main bronchi.',type:'RESPIRATORY SYSTEM'},
  {system:'respiratory',term:'Pleura',prompt:'What double-layered membrane surrounds each lung?',summary:'A lubricated protective membrane',detail:'Pleural fluid between its layers reduces friction as the lungs expand and recoil.',type:'RESPIRATORY SYSTEM'},
  {system:'respiratory',term:'Pulmonary circulation',prompt:'What route carries blood from the heart to the lungs and back?',summary:'Right heart → lungs → left heart',detail:'Blood releases carbon dioxide and picks up oxygen in the pulmonary capillaries.',type:'RESPIRATORY SYSTEM'},
  {system:'digestive',term:'Small intestine',prompt:'Where does most nutrient absorption take place?',summary:'A long, folded digestive organ',detail:'Villi and microvilli greatly increase its surface area for absorbing digested nutrients.',type:'DIGESTIVE SYSTEM'},
  {system:'digestive',term:'Liver',prompt:'Which organ produces bile and processes absorbed nutrients?',summary:'A large organ in the upper right abdomen',detail:'The liver also stores nutrients, processes chemicals, and makes important blood proteins.',type:'DIGESTIVE SYSTEM'},
  {system:'digestive',term:'Pancreas',prompt:'Which organ releases digestive enzymes and blood-glucose hormones?',summary:'Both digestive and endocrine roles',detail:'It sends enzymes to the small intestine and releases insulin and glucagon into the blood.',type:'DIGESTIVE SYSTEM'},
  {system:'digestive',term:'Large intestine',prompt:'Which organ absorbs water and forms solid waste?',summary:'The final major section of the digestive tract',detail:'It absorbs water and electrolytes; its resident microbes also produce some vitamins.',type:'DIGESTIVE SYSTEM'}
];

const $ = id => document.getElementById(id);
let deck = cards.slice(), index = 0, flipped = false;
const readSet = key => { try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); } catch { return new Set(); } };
let known = readSet('anatomy-study-known'), review = readSet('anatomy-study-review');
const pad = n => String(n).padStart(2,'0');

function render(){
  if (!deck.length) return;
  const card = deck[index];
  $('counterCurrent').textContent = pad(index+1); $('counterTotal').textContent = pad(deck.length);
  $('progressText').innerHTML = `${pad(index+1)} <i>/</i> ${pad(deck.length)}`;
  $('progressFill').style.width = `${((index+1)/deck.length)*100}%`;
  $('cardCategory').textContent = card.type; $('cardPrompt').textContent = card.prompt;
  $('cardAnswer').textContent = card.term; $('cardName').textContent = card.summary; $('cardDetail').textContent = card.detail;
  $('cardId').textContent = pad(index+1); $('flashcard').classList.toggle('is-flipped', flipped);
  $('cardPrompt').hidden = flipped;
  for (const id of ['cardAnswer','cardName','cardDetail']) $(id).setAttribute('aria-hidden', String(!flipped));
  $('flipHint').textContent = flipped ? 'TAP TO SEE QUESTION' : 'TAP TO REVEAL'; $('confidence').hidden = !flipped;
  $('knownCount').textContent = known.size; $('reviewCount').textContent = review.size;
  $('flashcard').setAttribute('aria-label', flipped ? `${card.prompt} Answer: ${card.term}. Press enter or space to hide answer` : `${card.prompt} Press enter or space to reveal answer`);
}
function flip(){ flipped = !flipped; render(); }
function move(delta){ index = (index + delta + deck.length) % deck.length; flipped = false; render(); }
function selectDeck(value){ deck = value === 'all' ? cards.slice() : cards.filter(card => card.system === value); index=0; flipped=false; render(); }
function rate(value){ const key=deck[index].term; known.delete(key); review.delete(key); (value === 'got' ? known : review).add(key); localStorage.setItem('anatomy-study-known',JSON.stringify([...known])); localStorage.setItem('anatomy-study-review',JSON.stringify([...review])); move(1); }

$('flashcard').addEventListener('click',flip); $('nextButton').addEventListener('click',()=>move(1)); $('prevButton').addEventListener('click',()=>move(-1));
$('deckSelect').addEventListener('change',e=>selectDeck(e.target.value));
document.querySelectorAll('.rating').forEach(button=>button.addEventListener('click',()=>rate(button.dataset.rating)));
$('resetButton').addEventListener('click',()=>{ known.clear(); review.clear(); localStorage.removeItem('anatomy-study-known'); localStorage.removeItem('anatomy-study-review'); index=0; flipped=false; render(); });
document.addEventListener('keydown',e=>{ if(e.target.matches('select,button') && e.target !== $('flashcard')) return; if(e.key==='ArrowRight'){e.preventDefault();move(1);} else if(e.key==='ArrowLeft'){e.preventDefault();move(-1);} else if(e.code==='Space'||e.key==='Enter'){if(e.target===document.body||e.target===$('flashcard')){e.preventDefault();flip();}} });
render();
