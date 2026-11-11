import json
def b(en, fr=None): return {"en": en, "fr": fr if fr is not None else en}
JF = "https://justfood.ca/community-gardening-network/"
PAGES = {
"about": {"ico": "🌱", "title": b("About the CGN", "À propos du RJC"),
 "sub": b("Ottawa’s community gardening network since 1997", "Le réseau de jardinage communautaire d’Ottawa depuis 1997"),
 "fr_url": "https://alimentationjuste.ca/reseau-de-jardinage-communautaire/a-propos-du-reseau-de-jardinage-communautaire/",
 "blocks": [
  {"t": "p", "en": "The Community Gardening Network (CGN), established in 1997 and moved to Just Food in 2006, is an information and resource-sharing network that supports the sustainable development of community gardening across Algonquin land/Ottawa. The name reflects our work in supporting gardeners everywhere — on a balcony or yard, in a community garden, or just looking to learn more.",
   "fr": "Le Réseau de jardinage communautaire (RJC), fondé en 1997 et hébergé par Just Food depuis 2006, est un réseau d’échange d’information et de ressources qui soutient le développement durable du jardinage communautaire sur le territoire algonquin/Ottawa. Nous soutenons les jardiniers partout : sur un balcon, dans une cour, dans un jardin communautaire, ou simplement pour apprendre."},
  {"t": "h", "en": "What we do", "fr": "Ce que nous faisons"},
  {"t": "ul", "en": ["Help start new community gardens, including through the How to Start a Community Garden workshop", "Support existing gardens and their coordinators", "Fund garden development through the Community Garden Development Fund (CGDF)", "Work with public and private landowners to increase access to land", "Offer beginner gardening and food-preservation workshops, newsletters and events"],
   "fr": ["Aider à créer de nouveaux jardins communautaires, notamment grâce à l’atelier « Comment démarrer un jardin communautaire »", "Soutenir les jardins existants et leurs coordonnateurs", "Financer le développement des jardins grâce au Fonds de développement des jardins communautaires (FDJC)", "Collaborer avec des propriétaires publics et privés pour élargir l’accès à des terrains", "Offrir des ateliers de jardinage et de conservation des aliments, des infolettres et des événements"]},
  {"t": "h", "en": "What counts as a community garden?", "fr": "Qu’est-ce qu’un jardin communautaire?"},
  {"t": "p", "en": "They come in many forms: balcony gardens in an apartment building, large plot gardens, communal donation gardens, front-yard gardens, food forests, children’s gardens, school gardens and pollinator gardens. They are used mainly to grow food for personal use or donation — not for for-profit market gardening.",
   "fr": "Ils prennent de nombreuses formes : jardins de balcon dans un immeuble, grands jardins à parcelles, jardins communautaires de dons, jardins en façade, forêts comestibles, jardins d’enfants, jardins scolaires et jardins de pollinisateurs. Ils servent surtout à produire des aliments pour usage personnel ou pour des dons, et non à des fins commerciales."},
  {"t": "h", "en": "Benefits of joining the CGN as a garden", "fr": "Avantages d’adhérer au RJC pour un jardin"},
  {"t": "ul", "en": ["It’s free", "Community Garden Development Fund (CGDF) grants, and help with the application", "Help starting up and looking for land; soil testing", "Newsletter for Coordinators and access to FoodChat, our online discussion platform", "Seeds, seedlings, soil and/or compost", "Problem-solving support when issues arise", "City of Ottawa insurance coverage; Trail Road mulch/wood chips as available", "Shared tools and CGN storage space; a free community bank account", "Gardening skills workshops and connections with other gardens"],
   "fr": ["C’est gratuit", "Subventions du FDJC et aide pour la demande", "Aide au démarrage et à la recherche de terrain; analyse du sol", "Infolettre pour les coordonnateurs et accès à FoodChat, notre plateforme de discussion", "Semences, plants, terre et/ou compost", "Soutien pour résoudre les problèmes", "Couverture d’assurance de la Ville d’Ottawa; copeaux de bois de Trail Road selon la disponibilité", "Outils partagés et espace d’entreposage du RJC; compte bancaire communautaire gratuit", "Ateliers de jardinage et liens avec d’autres jardins"]},
  {"t": "note", "en": "Have a community garden and want to join? Email communitygardening@justfood.ca. Content adapted from the Just Food website.", "fr": "Vous avez un jardin communautaire et souhaitez vous joindre au RJC? Écrivez à communitygardening@justfood.ca. Contenu adapté du site de Just Food."}
 ]},
"find": {"ico": "📍", "title": b("Find a Community Garden", "Trouver un jardin communautaire"),
 "sub": b("Look for a plot or a donation garden near you", "Cherchez une parcelle ou un jardin de dons près de chez vous"),
 "fr_url": "https://alimentationjuste.ca/reseau-de-jardinage-communautaire/",
 "blocks": [
  {"t": "steps", "items": [
   {"en": "Open the CGN Community Garden Map and find gardens near you.", "fr": "Ouvrez la carte des jardins communautaires du RJC et repérez les jardins près de chez vous.", "url": JF + "community-gardening-network-guide/", "link": b("Open the map ↗", "Ouvrir la carte ↗")},
   {"en": "Click a garden’s pin to find its coordinator’s contact details, and write to them directly to ask about a plot.", "fr": "Cliquez sur l’épingle d’un jardin pour trouver les coordonnées de son coordonnateur et écrivez-lui directement pour demander une parcelle."},
   {"en": "Many gardens have waitlists and prioritize neighbours close to the garden. Ask to join the list — and ask about donation or communal plots.", "fr": "Beaucoup de jardins ont une liste d’attente et priorisent les voisins. Demandez à vous inscrire — et renseignez-vous sur les parcelles de dons ou communes."},
   {"en": "No garden nearby, or all are full? Consider starting one.", "fr": "Aucun jardin à proximité, ou tous sont complets? Envisagez d’en démarrer un.", "page": "start", "link": b("How to start a garden →", "Comment démarrer un jardin →")}]},
  {"t": "cards", "items": [
   {"title": b("Community gardens", "Jardins communautaires"), "body": b("Plots for individual rental, plus donation plots and communal beds such as herb or tea gardens.", "Parcelles à louer, parcelles de dons et plates-bandes communes (herbes, thé).")},
   {"title": b("School gardens", "Jardins scolaires"), "body": b("Used by teachers and students as part of the curriculum; not open for individual plots.", "Utilisés par le personnel enseignant et les élèves; pas de parcelles individuelles.")},
   {"title": b("Plant-a-Row, Share-a-Row gardens", "Jardins Plantez une rangée, partagez une rangée"), "body": b("Grow produce for neighbourhood food cupboards. Volunteers welcome; contact the coordinator.", "Produisent des légumes pour les comptoirs alimentaires. Bénévoles bienvenus; contactez le coordonnateur.")},
   {"title": b("Children’s & communal gardens", "Jardins d’enfants et communs"), "body": b("Spaces for children’s learning and shared growing. Write to us to learn how they work.", "Espaces d’apprentissage pour les enfants et de culture partagée. Écrivez-nous pour en savoir plus.")}]},
  {"t": "links", "items": [
   {"en": "Community Garden Profiles", "fr": "Profils des jardins communautaires", "url": JF + "cgprofiles/"},
   {"en": "Find a Community Garden (Just Food)", "fr": "Trouver un jardin communautaire (Just Food)", "url": JF + "find-a-community-garden/"}]},
  {"t": "note", "en": "Is a garden’s contact on the map out of date? Let us know through the Contact page and we will update it.", "fr": "Les coordonnées d’un jardin sur la carte sont périmées? Dites-le-nous par la page Contact et nous les mettrons à jour."}
 ]},
"start": {"ico": "🚜", "title": b("Start a Community Garden", "Démarrer un jardin communautaire"),
 "sub": b("A step-by-step path, with support at every stage", "Un parcours étape par étape, avec du soutien à chaque étape"),
 "fr_url": "https://alimentationjuste.ca/reseau-de-jardinage-communautaire/creer-un-jardin-communautaire/",
 "blocks": [
  {"t": "p", "en": "Starting a community garden takes time and a dedicated team. The CGN can guide you from first idea to first harvest.", "fr": "Démarrer un jardin communautaire demande du temps et une équipe engagée. Le RJC peut vous accompagner de l’idée à la première récolte."},
  {"t": "steps", "items": [
   {"en": "Attend a How to Start a Community Garden workshop — the first step, and required for CGDF funding (at least one team member).", "fr": "Participez à un atelier « Comment démarrer un jardin communautaire » — première étape, obligatoire pour le financement du FDJC (au moins une personne de l’équipe).", "url": JF + "how-to-start-a-community-garden-workshop/", "link": b("About the workshop ↗", "À propos de l’atelier ↗")},
   {"en": "Find at least two other people to help coordinate the garden early on.", "fr": "Trouvez au moins deux autres personnes pour aider à coordonner le jardin au départ."},
   {"en": "Build community support: community associations, health and resource centres, your city councillor, schools, faith groups, BIAs, youth groups.", "fr": "Obtenez l’appui de la communauté : associations communautaires, centres de santé et de ressources, conseiller municipal, écoles, groupes confessionnels, ZAC, groupes de jeunes."},
   {"en": "Identify possible land. GeoOttawa shows whether a parcel is City, private, a hydro corridor, or slated for development.", "fr": "Repérez des terrains possibles. GéoOttawa indique si une parcelle appartient à la Ville, est privée, est un corridor d’hydro ou est destinée à un aménagement.", "url": "https://maps.ottawa.ca/geoottawa/", "link": b("GeoOttawa ↗", "GéoOttawa ↗")},
   {"en": "City land: since January 5, 2026, apply directly to the City’s team (ottawa.ca/gardens). NCC land: contact the CGN first — we are the NCC’s designated lead coordinator for community gardens. The CGN will still help with planning and your proposal.", "fr": "Terrain municipal : depuis le 5 janvier 2026, présentez une demande directement à l’équipe de la Ville (ottawa.ca/jardins). Terrain de la CCN : communiquez d’abord avec le RJC, coordonnateur désigné des jardins communautaires pour la CCN. Le RJC vous aide à planifier et à préparer votre proposition.", "url": "https://ottawa.ca/gardens", "link": b("Ottawa.ca/gardens ↗", "Ottawa.ca/jardins ↗")},
   {"en": "Apply to the Community Garden Development Fund (CGDF) — rolling applications, no deadline, for new and existing gardens.", "fr": "Présentez une demande au Fonds de développement des jardins communautaires (FDJC) — demandes en continu, sans date limite, pour jardins nouveaux et existants.", "url": JF + "community-garden-development-fund/", "link": b("About the CGDF ↗", "À propos du FDJC ↗")},
   {"en": "Test your soil. Professional testing is required for CGDF funding or a new garden on City land (the CGDF can fund it).", "fr": "Faites analyser votre sol. Une analyse professionnelle est requise pour le financement du FDJC ou un nouveau jardin sur un terrain municipal (le FDJC peut la financer).", "url": "https://justfood.ca/soil-testing-urban-impacted-soils/", "link": b("Soil testing guide ↗", "Guide d’analyse du sol ↗")}]},
  {"t": "note", "en": "Just Food’s stance on raised beds: if soil is viable and free of harmful contaminants, we endorse in-ground beds (except accessible raised beds). Already have a garden? Email communitygardening@justfood.ca to join the CGN. Content adapted from the Just Food website; dates and processes change, so confirm with the CGN.", "fr": "Position de Just Food sur les plates-bandes surélevées : si le sol est sain et exempt de contaminants nocifs, nous recommandons la culture en pleine terre (sauf plates-bandes surélevées accessibles). Vous avez déjà un jardin? Écrivez à communitygardening@justfood.ca. Contenu adapté du site de Just Food; les dates et processus changent, confirmez auprès du RJC."}
 ]},
"coordinators": {"ico": "🧑‍🌾", "title": b("For Coordinators", "Pour les coordonnateurs"),
 "sub": b("Tools, support and a place to learn from each other", "Outils, soutien et lieu d’apprentissage entre pairs"),
 "fr_url": "https://alimentationjuste.ca/reseau-de-jardinage-communautaire/",
 "blocks": [
  {"t": "p", "en": "Coordinating a garden is a big job. This page collects what the CGN offers and what we are building for you. New to coordinating? Start with Just Food’s guide for new coordinators.", "fr": "Coordonner un jardin est une grande tâche. Cette page rassemble ce que le RJC offre et ce que nous préparons pour vous. Nouveau coordonnateur? Commencez par le guide de Just Food."},
  {"t": "links", "items": [
   {"en": "Are you a new coordinator? (Just Food)", "fr": "Nouveau coordonnateur? (Just Food)", "url": JF + "cg-coordinators-resources/"},
   {"en": "Community Garden Development Fund", "fr": "Fonds de développement des jardins communautaires", "url": JF + "community-garden-development-fund/"},
   {"en": "Soil testing guide", "fr": "Guide d’analyse du sol", "url": "https://justfood.ca/soil-testing-urban-impacted-soils/"},
   {"en": "Accessible gardening", "fr": "Jardinage accessible", "url": JF + "accessible-gardening/"}]},
  {"t": "h", "en": "What the CGN offers your garden", "fr": "Ce que le RJC offre à votre jardin"},
  {"t": "ul", "en": ["Coordinator newsletter and the FoodChat discussion platform", "CGDF grants, application help and soil testing support", "Insurance through the City of Ottawa; tools, trailer and storage; free bank account; mulch and compost as available", "Garden signs, printed and bilingual (EN/FR)", "An annual garden evaluation that helps us understand your needs", "One-on-one support — write to the CGN to arrange a call or a visit"],
   "fr": ["Infolettre pour les coordonnateurs et plateforme de discussion FoodChat", "Subventions du FDJC, aide à la demande et à l’analyse du sol", "Assurance de la Ville d’Ottawa; outils, remorque et entreposage; compte bancaire gratuit; paillis et compost selon la disponibilité", "Panneaux de jardin imprimés et bilingues (FR/EN)", "Une évaluation annuelle des jardins pour comprendre vos besoins", "Soutien individuel — écrivez au RJC pour planifier un appel ou une visite"]},
  {"t": "h", "en": "In development — coming soon", "fr": "En préparation — bientôt"},
  {"t": "cards", "items": [
   {"title": b("Season-start checklist", "Liste de vérification de début de saison"), "body": b("Dates, work days, plot sign-up, waitlists, keys and tools.", "Dates, corvées, inscription aux parcelles, listes d’attente, clés et outils."), "status": b("Coming soon", "Bientôt")},
   {"title": b("Gardener agreement templates", "Modèles d’ententes pour jardiniers"), "body": b("Sample rules and agreements coordinators can adapt.", "Exemples de règles et d’ententes à adapter."), "status": b("Coming soon", "Bientôt")},
   {"title": b("Welcoming and keeping gardeners", "Accueillir et garder les jardiniers"), "body": b("Recruiting, onboarding and communicating with your gardeners.", "Recrutement, accueil et communication avec vos jardiniers."), "status": b("Coming soon", "Bientôt")},
   {"title": b("Tricky situations and who to call", "Situations délicates et qui appeler"), "body": b("Conflict, safety, vandalism and when to contact the CGN or the City.", "Conflits, sécurité, vandalisme et quand contacter le RJC ou la Ville."), "status": b("Coming soon", "Bientôt")},
   {"title": b("Accessibility and inclusion", "Accessibilité et inclusion"), "body": b("Making plots, paths and meetings welcoming for everyone.", "Rendre parcelles, sentiers et réunions accueillants pour tous."), "status": b("Coming soon", "Bientôt")},
   {"title": b("Funding and reporting", "Financement et rapports"), "body": b("CGDF walk-through and small-grant sources.", "Le FDJC pas à pas et sources de petites subventions."), "status": b("Coming soon", "Bientôt")}]}
 ]},
"guides": {"ico": "📖", "title": b("Gardening Guides", "Guides de jardinage"),
 "sub": b("Grow food in Ottawa — in your language", "Cultivez à Ottawa — dans votre langue"),
 "fr_url": "https://alimentationjuste.ca/reseau-de-jardinage-communautaire/ressources-de-jardinage/",
 "blocks": [
  {"t": "h", "en": "CGN Garden Guide (in five languages)", "fr": "Guide du jardinier du RJC (en cinq langues)"},
  {"t": "p", "en": "An easy beginner guide to gardening in the Ottawa region — from soil, composting and seeds to harvesting and preparing for winter.", "fr": "Un guide simple pour débuter le jardinage dans la région d’Ottawa — du sol, du compostage et des semences jusqu’à la récolte et la préparation à l’hiver."},
  {"t": "links", "items": [
   {"en": "English (PDF)", "fr": "Anglais (PDF)", "url": "http://justfood.ca/wp-content/uploads/2015/03/CGN_Garden_Guide_2015.pdf"},
   {"en": "Français (PDF)", "fr": "Français (PDF)", "url": "http://justfood.ca/wp-content/uploads/2015/03/CGN_Garden_Guide_2015_Francais.pdf"},
   {"en": "Español (PDF)", "fr": "Español (PDF)", "url": "http://justfood.ca/wp-content/uploads/2020/04/CGN-Garden-Guide-2015_SP2-1.pdf"},
   {"en": "العربية (PDF)", "fr": "العربية (PDF)", "url": "http://justfood.ca/wp-content/uploads/2020/04/CGN-Garden-Guide-2015-AR.pdf"},
   {"en": "中文 (PDF)", "fr": "中文 (PDF)", "url": "http://justfood.ca/wp-content/uploads/2020/04/CGN-Garden-Guide-2019-MA.pdf"}]},
  {"t": "h", "en": "More guides and free learning", "fr": "Autres guides et apprentissage gratuit"},
  {"t": "links", "items": [
   {"en": "Pre-recorded gardening workshops (container gardening, indoor seed starting, natural pest control)", "fr": "Ateliers de jardinage préenregistrés (jardinage en contenants, semis à l’intérieur, lutte antiparasitaire naturelle)", "url": JF + "gardeningworkshops/"},
   {"en": "Additional gardening guides (harvesting, seed collecting, soil testing, pest control, native plants)", "fr": "Autres guides (récolte, collecte de semences, analyse du sol, lutte antiparasitaire, plantes indigènes)", "url": JF + "gardening-resources/additional-gardening-guides/"},
   {"en": "Front yard edible gardening — benefits, rules in Ottawa, and cautions", "fr": "Jardins comestibles en façade — avantages, règles à Ottawa et précautions", "url": JF + "gardening-resources/front-yard-edible-gardens/"},
   {"en": "Pollinator gardening — Ecology Ottawa", "fr": "Jardins de pollinisateurs — Écologie Ottawa", "url": "https://www.ecologyottawa.ca/pollinator_garden_resources"},
   {"en": "Ottawa Wildflower Seed Library", "fr": "Bibliothèque de semences de fleurs sauvages d’Ottawa", "url": "https://wildflowerseedlibrary.ca"},
   {"en": "Gardening events across the region — GardeningCalendar.ca", "fr": "Événements de jardinage dans la région — GardeningCalendar.ca", "url": "https://gardeningcalendar.ca/events/ottawa/"}]},
  {"t": "h", "en": "Ottawa growing season at a glance", "fr": "La saison de culture à Ottawa en un coup d’œil"},
  {"t": "p", "en": "Ottawa is roughly hardiness zone 5. Published average last-frost dates range from about May 6 to May 13 (cautious gardeners wait until mid-May), and the first fall frost is usually in early October. These are averages — always check the forecast before planting tender crops.", "fr": "Ottawa se situe à peu près en zone de rusticité 5. Les dates moyennes du dernier gel printanier varient du 6 au 13 mai environ (les jardiniers prudents attendent la mi-mai) et le premier gel d’automne survient généralement début octobre. Ce sont des moyennes : consultez toujours les prévisions avant de planter des cultures sensibles."},
  {"t": "table", "head": [b("When", "Quand"), b("What to do", "Quoi faire")], "rows": [
   [b("Jan – Feb", "Janv. – févr."), b("Plan your garden, order seeds, go to seed swaps (Seedy Saturday).", "Planifiez, commandez vos semences, participez aux échanges de semences.")],
   [b("March", "Mars"), b("Start slow crops indoors — peppers about 8 weeks and cabbages 6–8 weeks before the last frost.", "Semez à l’intérieur les cultures lentes — poivrons environ 8 semaines et choux 6 à 8 semaines avant le dernier gel.")],
   [b("April", "Avril"), b("When soil is workable, sow hardy crops like peas, spinach, lettuce and radishes; prepare beds.", "Quand le sol est travaillable, semez des cultures rustiques (pois, épinards, laitue, radis); préparez les plates-bandes.")],
   [b("Mid-May", "Mi-mai"), b("After frost risk passes: beans, corn, then tomato and pepper transplants a week or two later.", "Après le risque de gel : haricots, maïs, puis plants de tomates et de poivrons une ou deux semaines plus tard.")],
   [b("June – August", "Juin – août"), b("Water, mulch, weed, succession-sow and harvest; share extra through Plant-a-Row, Share-a-Row.", "Arrosez, paillez, désherbez, faites des semis successifs et récoltez; partagez le surplus avec Plantez une rangée, partagez une rangée.")],
   [b("Sept – Oct", "Sept. – oct."), b("Harvest and preserve, save seed, plant garlic, cover or mulch beds before winter.", "Récoltez et conservez, gardez des semences, plantez l’ail, couvrez ou paillez les plates-bandes avant l’hiver.")],
   [b("Nov – Dec", "Nov. – déc."), b("Rest and review: what grew well? Join winter workshops and plan next year.", "Repos et bilan : qu’est-ce qui a bien poussé? Participez aux ateliers d’hiver et planifiez l’an prochain.")]]},
  {"t": "note", "en": "General guidance for Ottawa, based on published frost-date averages (Lawn by Season, The Old Farmer’s Almanac, TDC). The CGN Garden Guide has detailed advice.", "fr": "Conseils généraux pour Ottawa, fondés sur des moyennes publiées de dates de gel. Le guide du jardinier du RJC contient des conseils détaillés."}
 ]},
"faq": {"ico": "❓", "title": b("FAQs", "FAQ"),
 "sub": b("Quick answers to common questions", "Réponses rapides aux questions courantes"),
 "fr_url": "https://alimentationjuste.ca/reseau-de-jardinage-communautaire/",
 "blocks": [
  {"t": "faq", "items": [
   {"q": b("How do I get a plot in a community garden?", "Comment obtenir une parcelle dans un jardin communautaire?"), "a": b("Use the Community Garden Map, click a garden’s pin and contact its coordinator directly. Many gardens have waitlists and prioritize nearby residents.", "Utilisez la carte des jardins communautaires, cliquez sur l’épingle d’un jardin et contactez directement son coordonnateur. Beaucoup de jardins ont une liste d’attente et priorisent les résidents du voisinage.")},
   {"q": b("Is it free to join the CGN?", "L’adhésion au RJC est-elle gratuite?"), "a": b("Yes. Community gardens can join the CGN for free and receive support, resources and access to funding.", "Oui. Les jardins communautaires peuvent adhérer gratuitement au RJC et recevoir soutien, ressources et accès au financement.")},
   {"q": b("How do I start a community garden?", "Comment démarrer un jardin communautaire?"), "a": b("Begin by attending a How to Start a Community Garden workshop, then follow the steps on the Start a Garden page.", "Commencez par un atelier « Comment démarrer un jardin communautaire », puis suivez les étapes de la page Démarrer un jardin.")},
   {"q": b("Is there money to help build a garden?", "Y a-t-il du financement pour aménager un jardin?"), "a": b("Yes — the Community Garden Development Fund (CGDF) accepts applications year-round. At least one team member must have attended the workshop.", "Oui — le FDJC accepte des demandes toute l’année. Au moins une personne de l’équipe doit avoir suivi l’atelier.")},
   {"q": b("Do I need to test my soil?", "Dois-je faire analyser mon sol?"), "a": b("Yes if you are applying for CGDF funding or building on City land. We recommend testing for any garden in the city. See the soil testing guide.", "Oui, si vous demandez le financement du FDJC ou aménagez sur un terrain municipal. Nous recommandons l’analyse pour tout jardin en ville. Consultez le guide d’analyse du sol.")},
   {"q": b("Can I grow food in my front yard?", "Puis-je cultiver des aliments dans ma cour avant?"), "a": b("Often yes — see the front yard edible gardening page for Ottawa’s rules and cautions.", "Souvent oui — consultez la page sur les jardins comestibles en façade pour connaître les règles d’Ottawa et les précautions.")},
   {"q": b("Where can I find the slides from a workshop?", "Où trouver les diapositives d’un atelier?"), "a": b("On the Slides page under CGN Workshops. If a workshop’s slides aren’t there yet, write to us.", "Sur la page Diapositives sous Ateliers du RJC. Si elles n’y sont pas encore, écrivez-nous.")},
   {"q": b("How do I suggest a workshop topic or facilitator?", "Comment proposer un sujet d’atelier ou un animateur?"), "a": b("Use the Contact page — we love hearing ideas, and welcome people with growing experience who’d like to teach.", "Utilisez la page Contact — nous aimons les idées et accueillons les personnes expérimentées qui souhaitent enseigner.")}]}
 ]}
}
RES = [
 ("CGN Garden Guide — English (PDF)", "Guide du jardinier du RJC — anglais (PDF)", "http://justfood.ca/wp-content/uploads/2015/03/CGN_Garden_Guide_2015.pdf", ["guides", "beginner"]),
 ("Le guide du jardinier — français (PDF)", "Le guide du jardinier — français (PDF)", "http://justfood.ca/wp-content/uploads/2015/03/CGN_Garden_Guide_2015_Francais.pdf", ["guides", "beginner"]),
 ("Guía para huertos — español (PDF)", "Guía para huertos — espagnol (PDF)", "http://justfood.ca/wp-content/uploads/2020/04/CGN-Garden-Guide-2015_SP2-1.pdf", ["guides", "beginner"]),
 ("دليل البستنة — Arabic (PDF)", "دليل البستنة — arabe (PDF)", "http://justfood.ca/wp-content/uploads/2020/04/CGN-Garden-Guide-2015-AR.pdf", ["guides", "beginner"]),
 ("渥太华菜园指南 — Mandarin (PDF)", "渥太华菜园指南 — mandarin (PDF)", "http://justfood.ca/wp-content/uploads/2020/04/CGN-Garden-Guide-2019-MA.pdf", ["guides", "beginner"]),
 ("Guide for Soil Testing in Ottawa (PDF)", "Guide d’analyse du sol à Ottawa (PDF)", "https://justfood.ca/wp-content/uploads/2023/07/Guide-For-Soil-Testing-OTTAWA-FINAL-updated-07-2023-1.pdf", ["soil", "start a garden"]),
 ("Soil testing for urban-impacted soils", "Analyse des sols urbains", "https://justfood.ca/soil-testing-urban-impacted-soils/", ["soil", "start a garden"]),
 ("Pre-recorded gardening workshops", "Ateliers de jardinage préenregistrés", JF + "gardeningworkshops/", ["workshops", "beginner"]),
 ("Additional gardening guides", "Autres guides de jardinage", JF + "gardening-resources/additional-gardening-guides/", ["guides"]),
 ("Front yard edible gardening", "Jardins comestibles en façade", JF + "gardening-resources/front-yard-edible-gardens/", ["guides", "rules"]),
 ("Accessible gardening", "Jardinage accessible", JF + "accessible-gardening/", ["accessibility", "guides"]),
 ("Urban agriculture specifications in Ottawa", "Spécifications d’agriculture urbaine à Ottawa", "https://justfood.ca/urbanag/", ["rules"]),
 ("How to Start a Community Garden workshop", "Atelier « Comment démarrer un jardin communautaire »", JF + "how-to-start-a-community-garden-workshop/", ["start a garden", "workshops"]),
 ("Community Garden Development Fund (CGDF)", "Fonds de développement des jardins communautaires (FDJC)", JF + "community-garden-development-fund/", ["funding", "start a garden"]),
 ("Are you a new coordinator?", "Nouveau coordonnateur?", JF + "cg-coordinators-resources/", ["coordinators"]),
 ("Community Garden Map", "Carte des jardins communautaires", JF + "community-gardening-network-guide/", ["find a garden"]),
 ("Community Garden Profiles", "Profils des jardins communautaires", JF + "cgprofiles/", ["find a garden"]),
 ("City of Ottawa — community gardens on City land", "Ville d’Ottawa — jardins communautaires sur terrain municipal", "https://ottawa.ca/gardens", ["start a garden", "rules"]),
 ("GeoOttawa — property and land map", "GéoOttawa — carte des propriétés et terrains", "https://maps.ottawa.ca/geoottawa/", ["start a garden"]),
 ("Plant-a-Row, Share-a-Row", "Plantez une rangée, partagez une rangée", "https://justfood.ca/community-gardening-network/about-the-cgn/plant-a-row-grow-a-row-donate-a-row/", ["community", "donation"]),
 ("Ottawa Seed Library Network", "Réseau des bibliothèques de semences d’Ottawa", JF + "seed-saving-projects-and-events/ottawa-seed-library-network-2/", ["seeds"]),
 ("Seed and Soil Program", "Programme Semences et sol", "https://justfood.ca/seedandsoil/", ["seeds", "soil"]),
 ("Seedy Saturday West", "Seedy Saturday West", JF + "seed-saving-projects-and-events/seedysaturdayottawa/", ["seeds", "events"]),
 ("SeedLing Saturday", "SeedLing Saturday", JF + "seedlingsaturday/", ["seeds", "events"]),
 ("Ottawa Wildflower Seed Library", "Bibliothèque de semences de fleurs sauvages d’Ottawa", "https://wildflowerseedlibrary.ca", ["seeds", "pollinators"]),
 ("Pollinator garden resources — Ecology Ottawa", "Ressources sur les jardins de pollinisateurs — Écologie Ottawa", "https://www.ecologyottawa.ca/pollinator_garden_resources", ["pollinators"]),
 ("Gardening events across the region", "Événements de jardinage dans la région", "https://gardeningcalendar.ca/events/ottawa/", ["events"]),
 ("Upcoming Just Food workshops", "Prochains ateliers de Just Food", "https://justfood.ca/upcoming-workshops/", ["workshops"]),
 ("Just Food newsletter sign-up", "Abonnement à l’infolettre de Just Food", "https://mailchi.mp/justfood/newsletters", ["community"]),
]
resources = [{"title": a, "title_fr": bb, "url": c, "tags": d} for a, bb, c, d in RES]
import os
_out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "comm_pages.json")
with open(_out, "w", encoding="utf-8") as _f:
    json.dump({"pages": PAGES, "resources": resources}, _f, ensure_ascii=False)
print(len(PAGES), len(resources), "->", _out)
