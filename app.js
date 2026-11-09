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

const extraCards = {
  skeletal: [
    ['Cranium','What is the part of the skull that encloses the brain?','The cranium protects the brain and includes several bones joined by immovable sutures.'],
    ['Frontal bone','Which bone forms the forehead and roof of the eye sockets?','The frontal bone forms the anterior skull and contributes to the orbital cavities.'],
    ['Parietal bones','Which paired bones form much of the upper sides of the skull?','The right and left parietal bones meet at the sagittal suture.'],
    ['Temporal bones','Which skull bones house structures of hearing and balance?','The temporal bones sit near the ears and contain the middle and inner ear structures.'],
    ['Occipital bone','Which bone forms the back and base of the skull?','The foramen magnum in the occipital bone allows the brainstem to continue as the spinal cord.'],
    ['Mandible','What is the lower jaw bone called?','The mandible is the skull’s only freely movable bone and articulates with the temporal bones.'],
    ['Maxilla','Which bone forms the upper jaw and part of the hard palate?','The paired maxillae hold the upper teeth and contribute to the nose and eye sockets.'],
    ['Clavicle','Which slender bone connects the sternum to the shoulder?','The clavicle braces the shoulder and transfers forces from the arm to the axial skeleton.'],
    ['Scapula','What is the anatomical name for the shoulder blade?','The scapula provides broad attachment sites for muscles that move the shoulder and arm.'],
    ['Sternum','What is the flat bone at the front of the rib cage?','The sternum includes the manubrium, body, and xiphoid process; ribs attach to it through cartilage.'],
    ['True ribs','Which ribs connect directly to the sternum through their own cartilage?','Ribs 1 through 7 are called true ribs because each has a direct cartilaginous attachment.'],
    ['Humerus','Which bone extends from the shoulder to the elbow?','The humerus is the long bone of the upper arm.'],
    ['Radius','Which forearm bone lies on the thumb side in anatomical position?','The radius rotates around the ulna during pronation and supination of the forearm.'],
    ['Ulna','Which forearm bone forms the prominent point of the elbow?','The olecranon process of the ulna forms the tip of the elbow.'],
    ['Carpals','What are the small bones of the wrist called?','Eight carpal bones form the wrist and connect the forearm to the metacarpals.'],
    ['Metacarpals','Which bones form the palm of the hand?','Five metacarpals lie between the wrist bones and the finger bones.'],
    ['Ilium','What is the broad, upper part of each hip bone called?','The ilium forms the flared upper region of the pelvis.'],
    ['Ischium','Which part of the hip bone bears much of the body’s weight when sitting?','The ischial tuberosity is the roughened sitting surface of the ischium.'],
    ['Pubis','Which paired bones meet at the front of the pelvis?','The left and right pubic bones meet at the pubic symphysis.'],
    ['Tibia','Which lower-leg bone bears most of the weight between knee and ankle?','The tibia is the larger, medial bone of the lower leg.'],
    ['Fibula','Which slender lower-leg bone lies lateral to the tibia?','The fibula stabilizes the ankle and provides muscle attachment, bearing little body weight.'],
    ['Calcaneus','What is the anatomical name for the heel bone?','The calcaneus is the largest tarsal and anchors the Achilles tendon.']
  ],
  muscular: [
    ['Smooth muscle','Which muscle tissue lines many hollow organs and blood vessels?','Smooth muscle is involuntary and moves materials through organs or adjusts vessel diameter.'],
    ['Sarcoplasm','What is the cytoplasm of a muscle cell called?','Sarcoplasm contains the organelles and stored materials that support muscle contraction.'],
    ['Sarcolemma','What is the membrane surrounding a muscle fiber called?','The sarcolemma conducts electrical signals along the muscle cell.'],
    ['Myofibrils','What long structures inside muscle fibers contain repeating contractile units?','Myofibrils are made of sarcomeres arranged end to end.'],
    ['Sarcomere','What is the smallest functional contractile unit of skeletal muscle?','A sarcomere extends between two Z discs and contains overlapping actin and myosin filaments.'],
    ['Actin','Which thin filament slides past myosin during muscle contraction?','Actin interacts with myosin heads to generate force within a sarcomere.'],
    ['Myosin','Which thick filament uses ATP to pull on actin?','Myosin heads bind actin and pivot during the cross-bridge cycle.'],
    ['Neuromuscular junction','Where does a motor neuron communicate with a skeletal muscle fiber?','At this synapse, the motor neuron releases acetylcholine to trigger a muscle action potential.'],
    ['Acetylcholine','Which neurotransmitter triggers skeletal muscle fiber activation at the motor end plate?','Acetylcholine binds receptors on the muscle membrane and initiates electrical excitation.'],
    ['Motor unit','What includes one motor neuron and all the muscle fibers it controls?','A motor unit is the basic unit of neural control for skeletal muscle.'],
    ['Origin','In muscle anatomy, what is usually the less movable attachment called?','The origin is commonly the attachment that moves less during a given action.'],
    ['Insertion','In muscle anatomy, what is usually the more movable attachment called?','The insertion commonly moves toward the origin when the muscle contracts.'],
    ['Agonist','What do we call the muscle primarily responsible for a specific movement?','The agonist, or prime mover, produces most of the force for that action.'],
    ['Antagonist','What do we call a muscle that opposes a particular movement?','Antagonists control or reverse the action of the agonist.'],
    ['Biceps brachii','Which anterior upper-arm muscle flexes the elbow and supinates the forearm?','The biceps brachii crosses the shoulder and elbow and has two proximal heads.'],
    ['Triceps brachii','Which posterior upper-arm muscle extends the elbow?','The triceps brachii is the principal elbow extensor.'],
    ['Deltoid','Which shoulder muscle is a major abductor of the arm?','The deltoid covers the shoulder and helps flex, extend, and rotate the arm.'],
    ['Pectoralis major','Which large chest muscle helps flex and adduct the arm?','Pectoralis major acts on the humerus and forms much of the anterior chest wall.'],
    ['Latissimus dorsi','Which broad back muscle extends and adducts the arm?','Latissimus dorsi draws the arm down and back, as in a climbing motion.'],
    ['Gluteus maximus','Which powerful muscle is a major extensor of the hip?','Gluteus maximus helps extend and laterally rotate the thigh.'],
    ['Quadriceps femoris','Which anterior thigh muscle group extends the knee?','The quadriceps group includes four muscles that converge on the patella and patellar ligament.'],
    ['Hamstrings','Which posterior thigh muscle group flexes the knee and extends the hip?','The hamstrings include biceps femoris, semitendinosus, and semimembranosus.']
  ],
  nervous: [
    ['Cerebrum','What is the largest major region of the brain?','The cerebrum supports conscious perception, voluntary movement, language, and higher cognition.'],
    ['Frontal lobe','Which cerebral lobe is strongly involved in planning and voluntary movement?','The frontal lobe includes motor areas and regions involved in decision making and speech production.'],
    ['Parietal lobe','Which cerebral lobe processes much of the body’s touch and spatial information?','The parietal lobe contains the primary somatosensory cortex.'],
    ['Temporal lobe','Which cerebral lobe is important for hearing and aspects of memory?','The temporal lobe contains auditory areas and structures involved in memory and language comprehension.'],
    ['Occipital lobe','Which cerebral lobe is the main cortical region for visual processing?','The occipital lobe receives and processes visual information.'],
    ['Brainstem','Which brain region connects the cerebrum with the spinal cord?','The midbrain, pons, and medulla make up the brainstem and support essential functions.'],
    ['Medulla oblongata','Which brainstem region helps regulate breathing and heart rate?','The medulla contains centers that help control vital autonomic functions.'],
    ['Pons','Which brainstem region helps relay signals and regulate breathing?','The pons links parts of the brain and contributes to sleep and respiratory control.'],
    ['Meninges','What three membranes surround and protect the brain and spinal cord?','The dura mater, arachnoid mater, and pia mater are the three meninges.'],
    ['Cerebrospinal fluid','What clear fluid cushions the brain and spinal cord?','Cerebrospinal fluid circulates through ventricles and around the central nervous system.'],
    ['Gray matter','Which nervous tissue is rich in neuron cell bodies and synapses?','Gray matter is where much neural information processing takes place.'],
    ['White matter','Which nervous tissue is rich in myelinated axons?','White matter carries signals between regions of gray matter.'],
    ['Dendrites','Which neuron extensions usually receive incoming signals?','Dendrites carry graded input toward a neuron’s cell body.'],
    ['Axon','Which neuron extension carries signals away from the cell body?','An axon conducts action potentials toward other neurons, muscles, or glands.'],
    ['Myelin sheath','What insulating covering can speed signal conduction along an axon?','Myelin is produced by glial cells and allows rapid saltatory conduction.'],
    ['Synapse','What is the junction where one neuron communicates with another cell?','At a chemical synapse, neurotransmitters cross a small gap to affect the target cell.'],
    ['Sensory neuron','Which neuron carries information from receptors toward the central nervous system?','Sensory, or afferent, neurons report information such as touch, pain, and temperature.'],
    ['Motor neuron','Which neuron carries commands from the central nervous system to an effector?','Motor, or efferent, neurons activate muscles or influence glands.'],
    ['Reflex arc','What is the neural pathway that produces a rapid, automatic response?','A reflex arc can route sensory input through the spinal cord for a quick response.'],
    ['Sympathetic division','Which autonomic branch prepares the body for increased activity?','The sympathetic division shifts body functions toward alertness and action.'],
    ['Parasympathetic division','Which autonomic branch supports routine maintenance and digestion?','The parasympathetic division promotes functions often summarized as rest and digest.'],
    ['Glial cells','What support cells maintain and protect nervous tissue?','Glia support neurons, regulate their environment, and in some cases form myelin.']
  ],
  cardiovascular: [
    ['Right atrium','Which heart chamber receives blood returning from the body?','The right atrium receives systemic venous blood through the venae cavae.'],
    ['Right ventricle','Which heart chamber pumps blood toward the lungs?','The right ventricle sends blood through the pulmonary valve into the pulmonary trunk.'],
    ['Left atrium','Which heart chamber receives oxygenated blood from the lungs?','The left atrium receives pulmonary venous blood and passes it to the left ventricle.'],
    ['Aorta','What is the largest artery in the body?','The aorta carries oxygenated blood from the left ventricle to systemic arteries.'],
    ['Superior vena cava','Which large vein returns blood from the upper body to the heart?','The superior vena cava empties into the right atrium.'],
    ['Inferior vena cava','Which large vein returns blood from below the diaphragm to the heart?','The inferior vena cava delivers systemic venous blood to the right atrium.'],
    ['Pulmonary arteries','Which arteries carry blood from the heart to the lungs?','Pulmonary arteries carry relatively oxygen-poor blood from the right ventricle to the lungs.'],
    ['Pulmonary veins','Which vessels return oxygenated blood from the lungs to the heart?','Pulmonary veins empty into the left atrium.'],
    ['Tricuspid valve','Which valve lies between the right atrium and right ventricle?','The tricuspid valve helps prevent backflow into the right atrium during ventricular contraction.'],
    ['Mitral valve','Which valve lies between the left atrium and left ventricle?','The mitral, or bicuspid, valve prevents backflow into the left atrium.'],
    ['Aortic valve','Which valve guards the exit from the left ventricle into the aorta?','The aortic semilunar valve limits backflow from the aorta into the left ventricle.'],
    ['Pulmonary valve','Which valve guards the exit from the right ventricle?','The pulmonary semilunar valve lies between the right ventricle and pulmonary trunk.'],
    ['Septum','What wall separates the right and left sides of the heart?','The septa help keep oxygen-poor and oxygen-rich blood on their respective sides.'],
    ['Myocardium','What is the muscular middle layer of the heart wall?','The myocardium contracts to propel blood through the pulmonary and systemic circuits.'],
    ['Endocardium','What smooth lining covers the heart chambers and valves?','The endocardium forms the inner surface of the heart.'],
    ['Pericardium','What sac surrounds and protects the heart?','The pericardium anchors the heart and reduces friction as it beats.'],
    ['Sinoatrial node','What is the heart’s usual natural pacemaker?','The sinoatrial node initiates electrical impulses that normally set the heart rhythm.'],
    ['Atrioventricular node','Which node briefly delays electrical signaling between atria and ventricles?','The AV node helps coordinate atrial contraction before ventricular contraction.'],
    ['Platelets','Which blood components help form clots?','Platelets gather at damaged vessels and participate in hemostasis.'],
    ['Plasma','What is the liquid component of blood called?','Plasma carries cells, proteins, nutrients, hormones, and dissolved wastes.'],
    ['Leukocytes','What is another name for white blood cells?','Leukocytes are immune cells that help defend the body against infection and other threats.'],
    ['Diastole','What is the relaxation and filling phase of the cardiac cycle called?','During diastole, heart chambers relax and fill with blood.']
  ],
  respiratory: [
    ['Nasal cavity','Where is incoming air warmed, humidified, and filtered?','The nasal cavity’s hairs, mucus, and vascular lining condition inhaled air.'],
    ['Pharynx','What shared passage carries air and food behind the nose and mouth?','The pharynx connects the nasal and oral cavities to the larynx and esophagus.'],
    ['Larynx','What structure houses the vocal folds and connects the pharynx to the trachea?','The larynx helps protect the airway and produces sound.'],
    ['Epiglottis','What flap helps cover the laryngeal opening during swallowing?','The epiglottis helps direct food and liquid away from the airway.'],
    ['Bronchi','What are the two main branches that carry air from the trachea into the lungs?','The right and left main bronchi branch repeatedly into smaller airways.'],
    ['Bronchioles','What small airways conduct air toward the alveoli?','Bronchioles have smooth muscle that can change airway diameter.'],
    ['Type I alveolar cells','Which thin lung cells form most of the gas exchange surface?','Type I pneumocytes create a thin barrier for diffusion of gases.'],
    ['Type II alveolar cells','Which lung cells secrete surfactant?','Surfactant lowers surface tension and helps keep alveoli from collapsing.'],
    ['Surfactant','What substance reduces surface tension inside the alveoli?','Pulmonary surfactant makes lung expansion easier and stabilizes alveoli.'],
    ['External respiration','What is gas exchange between alveoli and pulmonary blood called?','Oxygen and carbon dioxide diffuse between alveolar air and capillary blood.'],
    ['Internal respiration','What is gas exchange between systemic blood and body tissues called?','Oxygen moves into tissues while carbon dioxide enters the blood.'],
    ['Inhalation','What happens to thoracic volume during normal inspiration?','The diaphragm contracts, expanding the thoracic cavity and drawing air into the lungs.'],
    ['Exhalation','What happens during quiet expiration when breathing muscles relax?','Elastic recoil reduces lung volume and pushes air out.'],
    ['Tidal volume','What is the amount of air moved in or out during a normal quiet breath?','Tidal volume describes the air exchanged in one ordinary respiratory cycle.'],
    ['Lung lobes','How many lobes are in the right and left lungs?','The right lung has three lobes; the left has two to make room for the heart.'],
    ['Hilum','What is the medial area where major structures enter and leave a lung?','The lung hilum is the gateway for bronchi, vessels, lymphatics, and nerves.'],
    ['Diaphragmatic breathing','Which muscle separates the thoracic and abdominal cavities?','The diaphragm is skeletal muscle and the primary driver of quiet inspiration.'],
    ['Cilia','What tiny airway structures help move mucus toward the throat?','Cilia beat in coordinated waves to clear trapped particles from conducting airways.'],
    ['Mucociliary escalator','How do the airways help clear inhaled particles?','Mucus traps particles while cilia move the mucus toward the pharynx.'],
    ['Respiratory membrane','Across what thin barrier do oxygen and carbon dioxide diffuse in the lungs?','The respiratory membrane separates alveolar air from blood in pulmonary capillaries.']
  ],
  digestive: [
    ['Oral cavity','Where does digestion begin?','Chewing mechanically breaks food down, while saliva begins carbohydrate digestion.'],
    ['Salivary glands','Which glands make saliva?','The parotid, submandibular, and sublingual glands release saliva into the mouth.'],
    ['Amylase','Which enzyme in saliva begins starch digestion?','Salivary amylase breaks some starch into smaller carbohydrate molecules.'],
    ['Esophagus','What muscular tube carries swallowed food to the stomach?','Peristaltic waves move a bolus through the esophagus.'],
    ['Peristalsis','What coordinated waves of smooth muscle move food through the digestive tract?','Peristalsis pushes contents forward through the esophagus, stomach, and intestines.'],
    ['Stomach','Where is food mixed with acid and digestive enzymes before entering the small intestine?','The stomach stores and churns food, beginning substantial protein digestion.'],
    ['Pepsin','Which stomach enzyme begins protein digestion?','Pepsin works in the acidic environment of the stomach.'],
    ['Gastric mucosa','What tissue layer lines the inside of the stomach?','The gastric mucosa includes cells that secrete mucus, acid, and digestive substances.'],
    ['Pyloric sphincter','What muscular valve controls stomach emptying into the duodenum?','The pyloric sphincter regulates passage of stomach contents into the small intestine.'],
    ['Duodenum','What is the first segment of the small intestine?','The duodenum receives chyme, bile, and pancreatic secretions.'],
    ['Jejunum','Which middle segment of the small intestine absorbs many nutrients?','The jejunum has extensive folds and villi that support nutrient absorption.'],
    ['Ileum','What final segment of the small intestine joins the large intestine?','The ileum absorbs remaining nutrients, including vitamin B12 and bile salts.'],
    ['Villi','What fingerlike projections increase the small intestine’s absorptive area?','Villi are lined by epithelial cells and contain blood capillaries and a lymphatic lacteal.'],
    ['Gallbladder','Which small organ stores and concentrates bile?','The gallbladder releases bile into the small intestine when needed for digestion.'],
    ['Bile','What liver-produced fluid helps emulsify dietary fats?','Bile salts disperse fats into smaller droplets to aid digestion and absorption.'],
    ['Common bile duct','What duct carries bile toward the duodenum?','The common bile duct delivers bile from the liver and gallbladder to the small intestine.'],
    ['Appendix','What narrow pouch is attached to the cecum?','The vermiform appendix contains lymphoid tissue and is attached to the large intestine.'],
    ['Rectum','What terminal digestive structure stores feces before elimination?','The rectum holds stool before it passes through the anal canal.'],
    ['Anal canal','What is the final passage through which feces leave the body?','Internal and external sphincters help control defecation through the anal canal.'],
    ['Mesentery','What fold of peritoneum supports and anchors many abdominal organs?','The mesentery carries vessels, nerves, and lymphatics to parts of the intestine.'],
    ['Hepatic portal vein','Which vessel carries nutrient-rich blood from digestive organs to the liver?','The hepatic portal system lets the liver process many absorbed substances before they reach general circulation.'],
    ['Pancreatic duct','What duct carries pancreatic secretions to the duodenum?','The pancreatic duct delivers digestive enzymes and bicarbonate to the small intestine.']
  ],
  urinary: [
    ['Kidney','Which paired organ filters blood and produces urine?','The kidneys regulate fluid balance, electrolytes, and acid-base balance as they form urine.'],
    ['Renal cortex','What is the outer region of the kidney called?','The renal cortex contains renal corpuscles and parts of the kidney tubules.'],
    ['Renal medulla','What is the inner region of the kidney called?','The renal medulla contains renal pyramids that help concentrate urine.'],
    ['Renal pelvis','What funnel-shaped area collects urine before it enters the ureter?','The renal pelvis drains urine from the kidney into the ureter.'],
    ['Nephron','What is the kidney’s basic urine-forming functional unit?','Each nephron filters blood and adjusts the filtrate through reabsorption and secretion.'],
    ['Glomerulus','What capillary tuft filters fluid into the nephron?','The glomerulus is part of the renal corpuscle and filters plasma while retaining most cells and proteins.'],
    ['Bowman’s capsule','What cup-shaped structure surrounds the glomerulus?','Bowman’s capsule collects the filtrate produced by glomerular filtration.'],
    ['Proximal tubule','Where is much of the filtered water and solute reabsorbed?','The proximal convoluted tubule reclaims many useful substances from the filtrate.'],
    ['Loop of Henle','Which nephron segment helps establish the kidney’s concentration gradient?','The loop of Henle contributes to the medullary osmotic gradient used to concentrate urine.'],
    ['Distal tubule','Which nephron segment fine-tunes electrolytes after the loop of Henle?','The distal convoluted tubule adjusts ions under hormonal control.'],
    ['Collecting duct','Which kidney tubule carries urine toward the renal pelvis?','Collecting ducts receive fluid from nephrons and help regulate final urine concentration.'],
    ['Ureter','What muscular tube carries urine from a kidney to the bladder?','Peristaltic contractions move urine through each ureter.'],
    ['Urinary bladder','Which hollow organ stores urine before urination?','The bladder expands as it fills and contracts during micturition.'],
    ['Urethra','What passage carries urine from the bladder to the outside?','The urethra conducts urine out of the body.'],
    ['Micturition','What is the process of emptying the urinary bladder called?','Micturition is coordinated by bladder muscle contraction and sphincter relaxation.'],
    ['Filtration','What is the first major process in urine formation?','Filtration moves water and small solutes from glomerular blood into the nephron.'],
    ['Reabsorption','What process returns useful substances from nephron fluid to the blood?','Tubular reabsorption conserves water and valuable solutes.'],
    ['Secretion','What process moves selected substances from blood into the nephron tubule?','Tubular secretion helps remove wastes and regulate pH and potassium.'],
    ['Renal artery','What vessel brings blood to each kidney?','The renal arteries branch from the abdominal aorta and supply the kidneys.'],
    ['Renal vein','What vessel carries blood away from each kidney?','The renal veins drain into the inferior vena cava.']
  ],
  endocrine: [
    ['Pituitary gland','Which small gland at the brain’s base releases several regulatory hormones?','The pituitary communicates with other endocrine glands and is connected to the hypothalamus.'],
    ['Hypothalamus','Which brain region links nervous and endocrine regulation?','The hypothalamus controls pituitary activity and helps maintain internal balance.'],
    ['Thyroid gland','Which neck gland produces hormones that influence metabolic rate?','The thyroid produces T3 and T4 and also makes calcitonin.'],
    ['Parathyroid glands','Which small glands help regulate blood calcium using parathyroid hormone?','Usually four parathyroid glands sit on the back of the thyroid.'],
    ['Adrenal glands','Which paired glands sit above the kidneys?','Each adrenal gland has an outer cortex and inner medulla with distinct hormone outputs.'],
    ['Adrenal cortex','What is the outer hormone-producing region of an adrenal gland?','The adrenal cortex produces steroid hormones, including cortisol and aldosterone.'],
    ['Adrenal medulla','What is the inner region of an adrenal gland that releases catecholamines?','The adrenal medulla releases epinephrine and norepinephrine during sympathetic activation.'],
    ['Pancreatic islets','What clusters of cells in the pancreas release insulin and glucagon?','Islets of Langerhans contain endocrine cells that help regulate blood glucose.'],
    ['Insulin','Which hormone generally lowers blood glucose by promoting uptake and storage?','Insulin is released by pancreatic beta cells when blood glucose rises.'],
    ['Glucagon','Which hormone generally raises blood glucose between meals?','Glucagon is released by pancreatic alpha cells and promotes glucose release by the liver.'],
    ['Cortisol','Which adrenal cortex hormone helps coordinate longer-term stress responses?','Cortisol influences metabolism, immune activity, and the response to stress.'],
    ['Aldosterone','Which hormone helps the kidneys retain sodium and excrete potassium?','Aldosterone is a mineralocorticoid that supports fluid and electrolyte balance.'],
    ['Epinephrine','Which adrenal hormone rapidly supports the fight-or-flight response?','Epinephrine increases readiness for action, including effects on heart and airway function.'],
    ['Melatonin','Which hormone from the pineal gland helps regulate sleep timing?','Melatonin secretion varies with the light-dark cycle and supports circadian timing.'],
    ['Pineal gland','Which small brain gland secretes melatonin?','The pineal gland contributes to the regulation of circadian rhythms.'],
    ['Thymus','Which organ is involved in T-cell maturation, especially early in life?','The thymus is a lymphatic and endocrine organ in the upper chest.'],
    ['Oxytocin','Which hormone supports uterine contractions and milk ejection?','Oxytocin is made in the hypothalamus and released from the posterior pituitary.'],
    ['Antidiuretic hormone','Which hormone helps the kidneys conserve water?','ADH, also called vasopressin, increases water reabsorption in the collecting ducts.'],
    ['Growth hormone','Which anterior pituitary hormone supports body growth and metabolism?','Growth hormone acts directly and through insulin-like growth factors.'],
    ['Negative feedback','What mechanism reduces a response as a regulated variable approaches its set range?','Negative feedback stabilizes many body variables, such as blood glucose and hormone levels.']
  ],
  integumentary: [
    ['Epidermis','What is the outermost layer of the skin?','The epidermis is a keratinized epithelial barrier and contains no blood vessels.'],
    ['Dermis','What connective tissue layer lies beneath the epidermis?','The dermis contains blood vessels, nerves, glands, and hair follicles.'],
    ['Hypodermis','What layer beneath the skin contains much of the body’s subcutaneous fat?','The hypodermis anchors skin to deeper tissues and provides insulation and cushioning.'],
    ['Keratinocytes','What cells make up most of the epidermis?','Keratinocytes produce keratin, which strengthens and waterproofs the skin surface.'],
    ['Melanocytes','Which epidermal cells produce the pigment melanin?','Melanocytes transfer melanin to keratinocytes, helping protect cell DNA from ultraviolet radiation.'],
    ['Melanin','What pigment contributes to skin, hair, and eye color?','Melanin absorbs some ultraviolet radiation and is produced by melanocytes.'],
    ['Stratum corneum','What is the outermost layer of the epidermis?','The stratum corneum consists of flattened, dead, keratin-filled cells that continually shed.'],
    ['Sebaceous glands','Which skin glands secrete oily sebum?','Sebaceous glands usually empty into hair follicles and help lubricate skin and hair.'],
    ['Sweat glands','Which glands produce sweat for cooling and excretion?','Eccrine sweat glands release watery sweat onto the skin surface for thermoregulation.'],
    ['Hair follicle','Where does a hair strand grow from within the skin?','The hair follicle is an epidermal structure that extends into the dermis.'],
    ['Arrector pili','What tiny smooth muscles can make hairs stand up?','Arrector pili muscles attach to hair follicles and contract in response to cold or emotion.'],
    ['Nails','What protein-rich structures protect the tips of fingers and toes?','Nails are plates of hard keratin produced by cells in the nail matrix.'],
    ['Langerhans cells','Which epidermal immune cells help detect foreign material?','Langerhans cells, also called epidermal dendritic cells, participate in immune defense.'],
    ['Merkel cells','Which epidermal cells contribute to light-touch sensation?','Merkel cells associate with sensory nerve endings near the basal epidermis.'],
    ['Vitamin D synthesis','What important process begins in skin exposed to ultraviolet B light?','UVB light helps the skin start the production pathway for vitamin D.'],
    ['Thermoregulation','How does skin help stabilize body temperature?','Sweating and changes in skin blood flow help release or conserve heat.'],
    ['Sebum','What oily substance helps lubricate skin and hair?','Sebum is produced by sebaceous glands and helps limit skin dryness.'],
    ['Callus','What is a localized thickening of the outer epidermis from repeated friction?','A callus is a protective buildup of keratinized cells.']
  ],
  lymphatic: [
    ['Lymph','What fluid travels through lymphatic vessels?','Lymph is tissue fluid collected from spaces between cells and returned to the bloodstream.'],
    ['Lymphatic capillaries','Where does excess tissue fluid first enter the lymphatic vessels?','Tiny, blind-ended lymphatic capillaries collect interstitial fluid.'],
    ['Lymph nodes','Where is lymph filtered and immune cells encounter material from tissues?','Lymph nodes filter lymph and contain lymphocytes and macrophages.'],
    ['Thoracic duct','What is the body’s largest lymphatic vessel?','The thoracic duct returns lymph from most of the body to the venous circulation.'],
    ['Right lymphatic duct','Which duct drains lymph from the right upper region of the body?','The right lymphatic duct empties into veins near the right side of the neck.'],
    ['Spleen','Which organ filters blood and supports immune responses?','The spleen removes old blood cells and helps mount responses to blood-borne antigens.'],
    ['Tonsils','What lymphatic tissues help monitor material entering through the mouth and nose?','The tonsils contain immune tissue at the entrance to the respiratory and digestive tracts.'],
    ['Lymphocytes','Which white blood cells include B cells and T cells?','Lymphocytes are central to adaptive immunity and include B, T, and natural killer cells.'],
    ['B cells','Which lymphocytes can mature into antibody-secreting plasma cells?','B lymphocytes recognize antigens and can form plasma cells and memory cells.'],
    ['T cells','Which lymphocytes mature in the thymus?','T lymphocytes coordinate immune responses or directly kill infected and abnormal cells.'],
    ['Macrophages','Which immune cells engulf pathogens and cellular debris?','Macrophages are phagocytes that also help present antigens to other immune cells.'],
    ['Antibodies','What proteins bind specific antigens as part of adaptive immunity?','Antibodies are immunoglobulins produced by plasma cells.'],
    ['Bone marrow','Where are blood cells formed and B cells mature?','Red bone marrow is the main site of hematopoiesis and B-cell development.'],
    ['Antigen','What is a molecule or structure that can be recognized by the immune system?','Antigens can trigger or be targeted by an immune response.'],
    ['Innate immunity','What is the body’s rapid, broad first line of immune defense?','Innate defenses include barriers, inflammation, phagocytes, and natural killer cells.'],
    ['Adaptive immunity','What immune defense develops targeted responses and memory?','Adaptive immunity uses B and T lymphocytes to recognize specific antigens.'],
    ['Lacteal','What lymphatic vessel inside an intestinal villus absorbs dietary fats?','Lacteals transport absorbed fats through lymph as chyle.'],
    ['Edema','What is an abnormal accumulation of fluid in body tissues called?','Edema can occur when fluid balance or lymphatic drainage is disrupted.']
  ],
  reproductive: [
    ['Ovaries','Which organs produce oocytes and hormones such as estrogen?','The ovaries are the female gonads and release oocytes during ovulation.'],
    ['Uterine tubes','Where does fertilization most commonly occur?','Fertilization most often occurs in an uterine tube, also called a fallopian tube.'],
    ['Uterus','Which muscular organ supports implantation and fetal development?','The uterus has a muscular wall and an inner lining called the endometrium.'],
    ['Endometrium','What is the inner lining of the uterus called?','The endometrium changes during the menstrual cycle and is the usual site of implantation.'],
    ['Cervix','What is the lower, narrow portion of the uterus called?','The cervix opens into the vagina and produces cervical mucus.'],
    ['Vagina','What muscular canal connects the cervix to the exterior?','The vagina receives the penis during intercourse and serves as the birth canal.'],
    ['Vulva','What is the collective name for the external female genital structures?','The vulva includes structures such as the labia, clitoris, and vestibule.'],
    ['Clitoris','Which external organ is highly sensitive and involved in sexual sensation?','The clitoris contains erectile tissue and a dense supply of sensory nerves.'],
    ['Ovulation','What is the release of an oocyte from an ovary called?','Ovulation usually occurs around the midpoint of a typical menstrual cycle.'],
    ['Corpus luteum','What temporary ovarian structure forms after ovulation?','The corpus luteum secretes progesterone and, to a lesser degree, estrogen.'],
    ['Testes','Which organs produce sperm and testosterone?','The testes are the male gonads and are located in the scrotum.'],
    ['Seminiferous tubules','Where are sperm produced in the testes?','Spermatogenesis occurs in the seminiferous tubules.'],
    ['Epididymis','Where do sperm mature and become stored after leaving the testes?','The epididymis is a coiled duct on the posterior testis where sperm mature.'],
    ['Vas deferens','Which duct transports sperm from the epididymis toward the ejaculatory duct?','The vas deferens carries sperm through the pelvic cavity.'],
    ['Seminal vesicles','Which glands contribute fructose-rich fluid to semen?','The seminal vesicles add much of the volume of semen and provide nutrients for sperm.'],
    ['Prostate gland','Which gland surrounds part of the urethra and adds fluid to semen?','Prostatic secretions contribute to semen and support sperm function.'],
    ['Bulbourethral glands','Which small glands release lubricating mucus into the urethra?','Bulbourethral, or Cowper’s, glands produce a small amount of pre-ejaculatory fluid.'],
    ['Penis','Which external organ delivers semen and also conducts urine?','The urethra passes through the penis, although urination and ejaculation occur at different times.'],
    ['Scrotum','What external pouch helps keep the testes at a suitable temperature?','The scrotum’s position and muscles help regulate testicular temperature.'],
    ['Spermatic cord','What structure suspends each testis and contains vessels and the vas deferens?','The spermatic cord supports the testis and carries its blood vessels, nerves, and duct.']
  ]
};

const systemLabels = {skeletal:'SKELETAL SYSTEM',muscular:'MUSCULAR SYSTEM',nervous:'NERVOUS SYSTEM',cardiovascular:'CARDIOVASCULAR SYSTEM',respiratory:'RESPIRATORY SYSTEM',digestive:'DIGESTIVE SYSTEM',urinary:'URINARY SYSTEM',endocrine:'ENDOCRINE SYSTEM',integumentary:'INTEGUMENTARY SYSTEM',lymphatic:'LYMPHATIC & IMMUNE SYSTEM',reproductive:'REPRODUCTIVE SYSTEM'};
for (const [system, entries] of Object.entries(extraCards)) {
  cards.push(...entries.map(([term, prompt, detail]) => ({system, term, prompt, summary:systemLabels[system].toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()), detail, type:systemLabels[system]})));
}

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
