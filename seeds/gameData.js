const { Game } = require('../models');

const gameData = [
    {
        id: '115063',
        title: 'Hearts of Iron IV: Man the Guns',
        // 71512 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1j6g.jpg',
        summary: 'From the convoy attacks in the Battle of the Atlantic to the fierce carrier battles on the Pacific front, the Second World War saw naval innovation in both tactics and technology. The war at sea takes center stage in Hearts of Iron IV: Man the Guns, a new expansion to Paradox Development Studio’s popular strategy wargame.\n\nMan the Guns also introduces new alternate history paths for the major democracies of the war and gives the freedom loving nations of the world more freedom to act before the war forces their hand.',
        rating: '75.52618541077726'
    },
    {
        id: '18866',
        title: 'Dead by Daylight',
        // 209243 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co4hgb.jpg',
        summary: 'Dead by Daylight is an asymmetrical multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.',
        rating: '69.90185293142676'
    },
    {
        id: '27441',
        title: 'Wargroove',
        // 279394 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co5zky.jpg',
        summary: 'Wargroove is a turn-based strategy game for up to 4 players, in which each player takes control of an army and its commander unit to wage war on their enemies! Wargroove is extremely easy to pickup, with accessibility at the forefront of its design, and very difficult to master, with deep gameplay mechanics that complement strategic play.',
        rating: '79.57053786092393'
    },
    {
        id: '7046',
        title: 'Factorio',
        // 84814 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1tfy.jpg',
        summary: 'You will be mining resources, researching technologies, building infrastructure, automating production and fighting enemies. Use your imagination to design your factory, combine simple elements into ingenious structures, apply management skills to keep it working and finally protect it from the creatures who dont really like you.',
        rating: '85.04488412802755'
    },
    {
        id: '18088',
        title: 'Insurgency: Sandstorm',
        // 68026 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/ctb8vglbekapcmjpjv7z.jpg',
        summary: 'Sandstorm is powered by Unreal Engine 4 and will be a major visual and technological upgrade to Insurgency. Although the game is being developed for console, it will stay true to its PC roots by ensuring our dedicated audience has a seamless transition to the new game. Sandstorm retains what makes Insurgency unique and challenging, bringing this experience to a new console audience.',
        rating: '75.95890320455746'
    },
    {
        id: '24815',
        title: 'Cold Waters',
        // 183856 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co3xv4.jpg',
        summary: 'Spiritual Successor to the Microprose Classic “Red Storm Rising”\n\nAfter tracking a Soviet landing force bound for Iceland it is time to plan your attack. Do you silently close in to torpedo the landing ships and escape during the resulting chaos? Or strike with long-range missiles but risk counterattack from the enemy escorts? Have you detected them all, could another submarine be out there listening for you? Has the hunter become the hunted? Will you survive the Cold Waters?\n\nInspired by the 1988 classic “Red Storm Rising”, take command a nuclear submarine in a desperate attempt to prevent “mutually assured destruction” when the Cold War gets hot and WWIII begins.\n\nYou will be tasked with intercepting convoys, amphibious landings, insertion missions and battling it out with enemy warships, submarines and aircraft. Thankfully, an arsenal of wire-guided torpedoes, anti-ship and cruise missiles and the occasional SEAL team are on board to keep the Iron Curtain at bay.\n\nMajor Features:\n- Real-time naval combat\n- Over 40 classes of ships and submarines all meticulously researched\n- Dynamic Campaign where your performance matters\n- Realistic sonar model\n- Authentic Soviet combat tactics',
        rating: '80.0'
    },
    {
        id: '36718',
        title: 'Tannenberg',
        // 109141 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co2c7p.jpg',
        summary: 'Tannenberg takes the 1914-1918 WW1 Game Series to the Eastern Front. Warfare on the border of the Russian Empire is a tense battle for survival - can your squad weather the storm of battle?',
        rating: '72.875'
    },
    {
        id: '36929',
        title: 'Pathfinder: Kingmaker',
        // 105567 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co29gf.jpg',
        summary: 'Pathfinder: Kingmaker is the first isometric party-based computer RPG set in the Pathfinder fantasy universe. Enjoy a classic RPG experience inspired by games like Baldurs Gate, Fallout 1 and 2 and Arcanum. Explore and conquer the Stolen Lands and make them your kingdom!',
        rating: '76.48087736760169'
    },
    {
        id: '36926',
        title: 'Monster Hunter: World',
        // 82685 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1rst.jpg',
        summary: 'Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!',
        rating: '88.46601058874211'
    },
    {
        id: '11198',
        title: 'Rocket League',
        // 274784 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co5w0w.jpg',
        summary: 'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special “Mutators” that let you change the rules entirely, hockey and basketball-inspired Extra Modes, and more than 500 trillion possible cosmetic customization combinations.',
        rating: '85.56180255399642'
    },
    {
        id: '239064',
        title: 'Grand Theft Auto V',
        // 288676 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co66qs.jpg',
        summary: 'This bundle contains the original version of Grand Theft Auto V, the standalone game Grand Theft Auto Online and the story mode add-on of Grand Theft Auto V.',
        rating: '94.95574105404467'
    },
    {
        id: '9789',
        title: 'RimWorld',
        // 71529 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1j6x.jpg',
        summary: 'A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.',
        rating: '79.32962868212724'
    },
    {
        id: '103218',
        title: 'NBA 2K19',
        // 182014 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co3wfy.jpg',
        summary: 'NBA 2K celebrates 20 years of redefining what sports gaming can be, from best in class gameplay to ground breaking game modes and an immersive open-world \"Neighborhood.\" NBA 2K19 continues to push limits as it brings gaming one step closer to real-life basketball excitement and culture.',
        rating: '69.02010626713576'
    },
    {
        id: '19686',
        title: 'Resident Evil 2',
        // 70959 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1ir3.jpg',
        summary: 'Resident Evil 2 is a remake of 1998s Resident Evil 2. The game was not developed with the intent of improving the original, but rather a reimagining of the original story with redesigned maps, characters and story elements. Gameplay mechanics are more similar to Resident Evil 7: Biohazard though with the use of an over-the-shoulder camera.',
        rating: '90.50298353664479'
    },
    {
        id: '40477',
        title: 'Slay the Spire',
        // 71223 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1iyf.jpg',
        summary: 'We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!',
        rating: '88.78132313456098'
    },
    {
        id: '43165',
        title: 'My Time at Portia',
        // 61034 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/fkgei0bjlkkv8psmcrb1.jpg',
        summary: 'Start a new life in the enchanting town of Portia! Restore your Pas neglected workshop to its former glory by fulfilling commissions, growing crops, raising animals, and befriending the quirky inhabitants of this charming post-apocalyptic land!',
        rating: '75.92548885726893'
    },
    {
        id: '88392',
        title: 'Foundation',
        // 81474 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1qv6.jpg',
        summary: 'Setting to redefine the city-building genre, Foundation puts the emphasis on the organic aspects of urbanism in the cities of old, powered by Polymorph Games’ proprietary game engine, Hurricane, which allows for full mod support and is optimized for the thousands of moving parts that come with building humongous cities.\n\nThe game features in-depth resource management akin to the Anno (Dawn of Discovery) series, expertly mixed with classic city-building elements from Settlers, SimCity, and Pharaoh all topped with narrative encounters inspired by Crusader Kings II to create the ultimate medieval ant-farm simulation.\n\nGrow your untapped land into a great sprawling kingdom as you appease different factions of your area, all while listening to a beautiful original soundtrack by the veteran composers who’ve created music for Paradox Interactive titles such as Crusader Kings II and Europa Universalis IV.',
        rating: '64.07992196430145'
    },
    {
        id: '83731',
        title: 'Beat Saber',
        // 94425 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co20ux.jpg',
        summary: 'Beat Saber is an immersive rhythm experience you have never seen before! Enjoy tons of handcrafted levels and swing your way through the pulsing music beats, surrounded by a futuristic world. Use your sabers to slash the beats as they come flying at you – every beat indicates which saber you need to use and the direction you need to match. With Beat Saber you become a dancing superhero!',
        rating: '84.92017262515469'
    },
    {
        id: '113374',
        title: `Sid Meier's Civilization VI: Gathering Storm`,
        // 172390 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co3p0m.jpg',
        summary: 'In Gathering Storm, the second expansion to Civilization VI, the world around you is more alive than ever before.\n\nChart a path to victory for your people by developing new advanced technologies and engineering projects and negotiating with the global community in the World Congress on critical issues. The choices you make in the game will influence the world ecosystem and could impact the future of the entire planet. Natural disasters like floods, storms, and volcanoes can pillage or destroy your Improvements and Districts – but they may also refresh and enrich the lands after they pass. In addition to these new systems, Civilization VI: Gathering Storm introduces eight new civilizations and nine new leaders. Seven new world wonders can be constructed, as well as a variety of new units, districts, buildings, and improvements.',
        rating: '84.01318887224767'
    },
    {
        id: '17000',
        title: `Stardew Valley`,
        // 14012 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/xrpmydnu9rpxvxfjkiu7.jpg',
        summary: `Stardew Valley is an open-ended country-life RPG! You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!`,
        rating: '88.74370439582408'
    },
    {
        id: '87210',
        title: `Farming Simulator 19`,
        // 94422 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co20uu.jpg',
        summary: `Farming Simulator 19 takes the biggest step forward yet with the franchise’s most extensive vehicle roster ever! You’ll take control of vehicles and machines faithfully recreated from all the leading brands in the industry, including for the first time John Deere, the largest agriculture machinery company in the world, Case IH, New Holland, Challenger, Fendt, Massey Ferguson, Valtra, Krone, Deutz-Fahr and many more.`,
        rating: '74.08738233187847'
    },
    {
        id: '129869',
        title: `PlayerUnknown's Battlegrounds: Season 4`,
        // 92079 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1z1r.jpg',
        summary: `PUBG Season 4 unveils a stunning new visual update for Erangel and reaches back into the undiscovered history of the infamous island that captured the world’s attention with Battle Royale. Erangel, which has a special home in the hearts of many of us, now features refreshed buildings, upgraded graphics, and some revelations as to the island’s combat-scarred history.`,
        rating: '0'
    },
    {
        id: '3277',
        title: `Rust`,
        // 309436 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co6mrg.jpg',
        summary: `The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.`,
        rating: '74.24362080434223'
    },
    {
        id: '9254',
        title: `Subnautica`,
        // 70952 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1iqw.jpg',
        summary: `Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more, all while trying to survive.`,
        rating: '84.11446241882884'
    },
    {
        id: '14758',
        title: `Ace Combat 7: Skies Unknown`,
        // 70760 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1ilk.jpg',
        summary: `Leveraging the trueSKYTM technology and developed utilizing Unreal Engine 4, Ace Combat 7 will astound players with beautifully rendered skies and highly detailed cityscapes but also set the stage for the most engaging aerial battles in the franchise’s storied 20 year history accompanied with an immersive soundtrack. Ace Combat 7 will take the elements that the series is known for to a whole new level! Aces who have proven their combat prowess in Ace Combat 7’s campaign mode can take their dogfighting skills further with furious online multiplayer battles.\n\nPlayStation4 players will also be able to get immersed in ACE COMBAT 7’s realism through exclusive features developed specifically for PlayStationVR.`,
        rating: '81.1104599488275'
    },
    {
        id: '124',
        title: `Left 4 Dead 2`,
        // 90807 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1y2f.jpg',
        summary: `Left 4 Dead 2 is a cooperative first-person shooter video game, the sequel to Valve Corporation's Left 4 Dead. The Game builds upon cooperatively focused gameplay and Valve's proprietary Source engine, the same game engine used in the original Left 4 Dead. Set during the aftermath of an apocalyptic pandemic, Left 4 Dead 2 focuses on four new Survivors, fighting against hordes of the Infected, who develop severe psychosis and exhibit zombie-like tendencies. The Survivors must fight their way through five campaigns, interspersed with safe houses that act as checkpoints, with the goal of escape at each campaign's finale.`,
        rating: '85.31356450499925'
    },
    {
        id: '10239',
        title: `Ark: Survival Evolved`,
        // 198416 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co493k.jpg',
        summary: `Ark: Survival Evolved takes on the survival genre with a unique blend of emergent multiplayer cooperation and competition. Players awake naked and starving on the beach of a mysterious island among a herd of other confused humans. On ARK, they must then hunt, harvest, craft, research technology, and build shelters to protect against scorching days, freezing nights, volatile weather systems, dangerous wildlife, and potential enemies.\n\nUse cunning strategy and tactics to tame and ride the many dinosaurs and other primeval creatures roaming the dynamic, persistent ecosystems across land, sea, air, and even underground. Build your character’s strengths and gain items, skills, and pet creatures using in-depth role-playing systems. Start a tribe with hundreds of other players to survive and dominate competing tribes...and ultimately discover the ARK’s true purpose.`,
        rating: '68.78099306271521'
    },
    {
        id: '83844',
        title: `Battlefleet Gothic: Armada 2`,
        // 126395 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co2piz.jpg',
        summary: `Greatly expanding on the groundwork laid out by the first game, Battlefleet Gothic: Armada 2 is a full-blown sequel: bigger, richer, and more ambitious than the original game. At launch, it will include all 12 factions from the original tabletop game and its expansion Armada it is based on: the Imperial Navy, Space Marines, Adeptus Mechanicus, Necrons, Chaos, Aeldari Corsairs, Aeldari Craftworld, Drukhari, the T’au Merchant and Protector Fleets, Orks, and finally, the Tyranids. \n \nThe latest dramatic story development in the Warhammer 40,000 universe, the Gathering Storm and the 13th Black Crusade, will serve as the canvas for several extensive and dynamic campaigns. \n \nWith bigger battles, refined gameplay, improved multiplayer modes and features for a better and more balanced online experience, and even more customization options for fleets and ships, Battlefleet Gothic: Armada 2 promises to be the ultimate Warhammer 40,000 space battle experience.`,
        rating: '70.6699327917368'
    },
    {
        id: '472',
        title: `The Elder Scrolls V: Skyrim`,
        // 85100 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co1tnw.jpg',
        summary: `Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before.`,
        rating: '91.97350229438457'
    },
    {
        id: '16992',
        title: `Human: Fall Flat`,
        // 137530 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co2y4a.jpg',
        summary: `Human: Fall Flat is an open-ended physics based puzzle game in which you take control of builder Bob helping him resolve the mysteries behind his recurring dreams of falling. Your goal is to escape those dreams full of puzzles, dangers and surprises using everything you find in the levels. The world of Bob dreams is built on his daily experiences, hopes, fears and memories interweaved in a net so sticky and hard to escape. All this mess is actually a carefully crafted work of… wait! You are the one to find it out! Bob is a human. Just a human. No hero. Zero superpowers. Period.`,
        rating: '71.14974836185026'
    },
    {
        id: '203258',
        title: `Warhammer 40,000`,
        // 304774 < look up img file
        image_file: '//images.igdb.com/igdb/image/upload/t_thumb/co6j5y.jpg',
        summary: `Load up your Boltgun and unleash the awesome Space Marine arsenal to blast your way through an explosion of sprites, pixels and blood in a perfect blend of Warhammer 40,000, frenetic gameplay and the stylish visuals of 90’s retro shooters.`,
        rating: '76.50996015936255'
    },
    {
        id: '0',
        title: `Wallpaper Engine`,
        // NO IMG / placeholder image
        image_file: 'https://st4.depositphotos.com/2381417/26959/i/1600/depositphotos_269592716-stock-photo-thumbnail-images-placeholder-forums-blogs.jpg',
        summary: `Steam app for wallpapers.`,
        rating: '0'
    }
];

const seedGame = () => Game.bulkCreate(gameData);

module.exports = seedGame;
