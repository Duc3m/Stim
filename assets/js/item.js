import game from "./game.js";

const localGameList = localStorage.getItem("gameList");

let gameList = [];

if (localGameList == null) {
  gameList.push(
    new game(
      `Ghostrunner 2`,
      `/assets/img/thumb/Ghostrunner_2.webp`,
      [
        `/assets/img/preview/Ghostrunner_2/pic_1.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_2.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_3.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_4.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_5.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_6.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_7.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_8.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_9.jpg`,
        `/assets/img/preview/Ghostrunner_2/pic_10.jpg`,
      ],
      `/assets/img/game-banner/Ghostrunner2_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Blood will run in the highly anticipated hardcore FPP slasher set one year after the events of Ghostrunner. Adventure through a post-apocalyptic cyberpunk future that takes place after the fall of the Keymaster, a tyrant who ruled over Dharma Tower, the last refuge of mankind. Jack is back to take on the violent AI cult that has assembled outside Dharma Tower and shape the future of humanity.

Featuring incredible katana combat mechanics, a deeper exploration of the world beyond Dharma Tower, nonlinear levels with complex motorbike sections, exciting new modes, and all the action you loved about Ghostrunner. Plus, boss fights are more interactive, giving players freedom to choose how to survive battles against the toughest opponents.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/2144740/extras/GR2_Katana-02-Crop.gif?t=1698853372" alt="">
<span class="green-bold-text">Become The Ultimate Cyber Ninja</span>
Ghostrunner 2 introduces new skills, allowing players to be more creative and take on even the most demanding encounters with greater accessibility. However, enemies in Ghostrunner 2 behave uniquely dependent on the skills used against them, providing a fresh challenge with each encounter. The player progression system has been completely redone, providing opportunities to experiment and customize gameplay.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/2144740/extras/GR2_Motorbike-02-Crop.gif?t=1698853372" alt="">
<span class="green-bold-text">Immersive, Mind-Bending Features</span>
Master the Cybervoid if you hope to survive. Take on challenging, new enemies as you traverse interactive environments including exploding barrels, destructible walls, helpful neutral entities, and countless improvements that keep combat exciting and fresh. Can’t get enough? Dive even deeper into the lore and plot with the new dialogue system.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/2144740/extras/GR2_Shuriken-02-Crop.gif?t=1698853372" alt="">      
<span class="green-bold-text">Sounds of the Cybervoid</span>
Save humanity in style as you decimate your opponents while listening to the captivating synthwave soundtrack featuring new music from Daniel Deluxe, We Are Magonia, Gost, Dan Terminus, and Arek Reikowski.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
<span class="bold-text">OS</span>: Windows 10 x64
<span class="bold-text">Processor</span>: Intel Core i5-4590 (4 * 3300) or equivalent / AMD FX-8350 (4 * 4000) or equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: GeForce GTX 960 (4096 MB) / Radeon RX 480 (8192 MB) or Intel Arc A380 (8192 MB)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 65 GB available space
<span class="bold-text">Additional Notes</span>: SSD Required

<span class="green-bold-text">Recommended:</span>
<span class="bold-text">OS</span>: Windows 10 x64
<span class="bold-text">Processor</span>: Intel Core i9-9900k (8 * 3600) / AMD Ryzen 5 5600X (6 * 3700 ) or equivalent
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: GeForce RTX 2070 Super (8192 MB) / Radeon RX 6800 XT (16384 MB) or Intel Arc A770 (16384 MB)
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 65 GB available space
<span class="bold-text">Additional Notes</span>: SSD Required

<span class="blue-bold-text">Languages Supported:</span> <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese, Ukrainian
</span>
      `,
      784000,
      ["Action", "First-Person", "Singleplayer", "Adventure", "Fighting"]
    )
  );

  gameList.push(
    new game(
      `ARMORED CORE™ VI FIRES OF RUBICON™`,
      `/assets/img/thumb/Armored_Core_VI_Fires_of_Rubicon.webp`,
      [
        `/assets/img/preview/AC6/pic_1.jpg`,
        `/assets/img/preview/AC6/pic_2.jpg`,
        `/assets/img/preview/AC6/pic_3.jpg`,
        `/assets/img/preview/AC6/pic_4.jpg`,
        `/assets/img/preview/AC6/pic_5.jpg`,
        `/assets/img/preview/AC6/pic_6.jpg`,
        `/assets/img/preview/AC6/pic_7.jpg`,
        `/assets/img/preview/AC6/pic_8.jpg`,
        `/assets/img/preview/AC6/pic_9.jpg`,
        `/assets/img/preview/AC6/pic_10.jpg`,
      ],
      `/assets/img/game-banner/AC6_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Combining FromSoftware’s longstanding expertise in mech games with their signature action gameplay, ARMORED CORE VI FIRES OF RUBICON brings a brand-new action experience to the series.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/extras/AC6_GIF1_DynamicBattles_616x236.gif?t=1696573287" alt="">
<span class="green-bold-text">Dynamic, Omni-directional Battles</span>
Players will pilot their mech in fast-paced, omni-directional battles, taking advantage of massive stages and their mech’s mobility on land and in the air to ensure victory.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/extras/AC6_GIF2_Customization_616x236.gif?t=1696573287" alt="">
<span class="green-bold-text">Customized Parts for Individual Battle Styles</span>
Customize Armored Core parts to suit a large variety of playstyles. Selecting different parts not only changes the mech’s attacks, but also directly affects its movement and battle style, so each mission can be approached with a unique mech strategy.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/extras/AC6_GIF3_BossBattles_616x236.gif?t=1696573287" alt="">
<span class="green-bold-text">Thrilling Boss Battles</span>
Deploy a wide variety of offensive and defensive tactics at close and long range to take down powerful enemy bosses.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: Intel Core i7-4790K | Intel Core i5-8400 or AMD Ryzen 7 1800X | AMD Ryzen 5 2600
<span class="bold-text">Memory</span>: 12 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1650, 4 GB or AMD Radeon RX 480, 4 GB
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 60 GB available space
<span class="bold-text">Sound Card</span>: Windows Compatible Audio Device

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10/11
<span class="bold-text">Processor</span>: Intel Core i7-7700 | Intel Core i5-10400 or AMD Ryzen 7 2700X | AMD Ryzen 5 3600
<span class="bold-text">Memory</span>: 12 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1060, 6GB or AMD Radeon RX 590, 8GB or Intel Arc A750, 8GB
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 60 GB available space
<span class="bold-text">Sound Card</span>: Windows Compatible Audio Device

<span class="blue-bold-text">Languages Supported:</span> <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Spanish - Latin America, Traditional Chinese</span>
      `,
      998000,
      ["Action", "Third Person", "Multiplayer", "Singleplayer"]
    )
  );

  gameList.push(
    new game(
      `Hogwarts Legacy`,
      `/assets/img/thumb/Hogwarts_Legacy.webp`,
      [
        `/assets/img/preview/HL/pic_1.jpg`,
        `/assets/img/preview/HL/pic_2.jpg`,
        `/assets/img/preview/HL/pic_3.jpg`,
        `/assets/img/preview/HL/pic_4.jpg`,
        `/assets/img/preview/HL/pic_5.jpg`,
      ],
      `/assets/img/game-banner/HL_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/990080/extras/HWL_Featured_Animation.png?t=1694060626" alt="">
Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world. Your legacy is what you make of it. Live the Unwritten.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/990080/extras/HWL_Features_600_Transparency.png?t=1694060626" alt="">

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Windows 10
<span class="bold-text">Processor</span>: Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz)
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 85 GB available space
<span class="bold-text">Additional Notes</span>: SSD (Preferred), HDD (Supported), 720p/30 fps, Low Quality Settings

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Windows 10
<span class="bold-text">Processor</span>: Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz)
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT or INTEL Arc A770
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 85 GB available space
<span class="bold-text">Additional Notes</span>: SSD, 1080p/60 fps, High Quality Settings

<span class="blue-bold-text">Languages Supported:</span> <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Spanish - Latin America, Traditional Chinese</span>
      `,
      1290000,
      ["Singleplayer", "Adventure", "RPG", "Third Person", "Action"]
    )
  );

  gameList.push(
    new game(
      `Resident Evil 4`,
      `/assets/img/thumb/Resident-Evil-4-Remake.webp`,
      [
        `/assets/img/preview/RE4/pic_1.jpg`,
        `/assets/img/preview/RE4/pic_2.jpg`,
        `/assets/img/preview/RE4/pic_3.jpg`,
        `/assets/img/preview/RE4/pic_4.jpg`,
        `/assets/img/preview/RE4/pic_5.jpg`,
        `/assets/img/preview/RE4/pic_6.jpg`,
        `/assets/img/preview/RE4/pic_7.jpg`,
        `/assets/img/preview/RE4/pic_8.jpg`,
        `/assets/img/preview/RE4/pic_9.jpg`,
        `/assets/img/preview/RE4/pic_10.jpg`,
      ],
      `/assets/img/game-banner/RE4_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Survival is just the beginning.

Six years have passed since the biological disaster in Raccoon City.
Agent Leon S. Kennedy, one of the survivors of the incident, has been sent to rescue the president's kidnapped daughter.
He tracks her to a secluded European village, where there is something terribly wrong with the locals.
And the curtain rises on this story of daring rescue and grueling horror where life and death, terror and catharsis intersect.

Featuring modernized gameplay, a reimagined storyline, and vividly detailed graphics,
Resident Evil 4 marks the rebirth of an industry juggernaut.

Relive the nightmare that revolutionized survival horror.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
<span class="bold-text">OS</span>: Windows 10 (64 bit)
<span class="bold-text">Processor</span>: AMD Ryzen 3 1200 / Intel Core i5-7500
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Additional Notes</span>: Estimated performance (when set to Prioritize Performance): 1080p/45fps. ・Framerate might drop in graphics-intensive scenes. ・AMD Radeon RX 6700 XT or NVIDIA GeForce RTX 2060 required to support ray tracing.

<span class="green-bold-text">Recommended:</span>
<span class="bold-text">OS</span>: Windows 10 (64 bit)/Windows 11 (64 bit)
<span class="bold-text">Processor</span>: AMD Ryzen 5 3600 / Intel Core i7 8700
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Additional Notes</span>: Estimated performance: 1080p/60fps ・Framerate might drop in graphics-intensive scenes. ・AMD Radeon RX 6700 XT or NVIDIA GeForce RTX 2070 required to support ray tracing.

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Japanese, Korean, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese, Spanish - Latin America</span>
      `,
      1322000,
      ["Action", "Shooter", "Singleplayer", "Adventure", "Third Person"]
    )
  );

  gameList.push(
    new game(
      `Alan Wake 2`,
      `/assets/img/thumb/alan-wake-2-thumb.jpg`,
      [
        `/assets/img/preview/AlanWake2/pic_1.jpg`,
        `/assets/img/preview/AlanWake2/pic_2.jpg`,
        `/assets/img/preview/AlanWake2/pic_3.jpg`,
        `/assets/img/preview/AlanWake2/pic_4.jpg`,
        `/assets/img/preview/AlanWake2/pic_5.jpg`,
      ],
      `/assets/img/game-banner/AWII_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

A string of ritualistic murders threatens Bright Falls, a small-town community surrounded by Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent with a reputation for solving impossible cases arrives to investigate the murders. Anderson’s case spirals into a nightmare when she discovers pages of a horror story that starts to come true around her.
        
Alan Wake, a lost writer trapped in a nightmare beyond our world, writes a dark story in an attempt to shape the reality around him and escape his prison. With a dark horror hunting him, Wake is trying to retain his sanity and beat the devil at his own game.
        
Anderson and Wake are two heroes on two desperate journeys in two separate realities, connected at heart in ways neither of them can understand: reflecting each other, echoing each other, and affecting the worlds around them.
        
Fueled by the horror story, supernatural darkness invades Bright Falls, corrupting the locals and threatening the loved ones of both Anderson and Wake. Light is their weapon—and their safe haven — against the darkness they face. Trapped in a sinister horror story where there are only victims and monsters, can they break out to be the heroes they need to be?
        
        
<span class="green-bold-text">Solve a Deadly Mystery</span>
        
What begins as a small-town murder investigation rapidly spirals into a nightmare journey. Uncover the source of the supernatural darkness in this psychological horror story filled with intense suspense and unexpected twists.
        
        
<span class="green-bold-text">Play As Two Characters</span>
        
Experience both Alan Wake’s and Saga Anderson’s stories and see events unfold from different perspectives. Switch between Anderson’s life-or-death race to solve the case and Wake’s desperate attempts to rewrite his reality to escape the depths of the Dark Place.
        
        
<span class="green-bold-text">Explore Two Worlds</span>
        
Experience two beautiful yet terrifying worlds, each with its own rich cast of characters and deadly threats. Discover majestic landscapes of Cauldron Lake in the Pacific Northwest and the idyllic towns of Bright Falls and Watery. Contrasting sharply, attempt to escape the nightmarish cityscape of the Dark Place.
        
        
<span class="green-bold-text">Survive With Light</span>
        
With limited resources, take on powerful supernatural enemies in desperate close-combat situations. It takes more than just a gun to survive: light is the ultimate weapon in the fight against the darkness and will be your refuge when enemies threaten to overwhelm you. 
        
<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
<span class="bold-text">OS</span>: Windows XP SP2
<span class="bold-text">Processor</span>: Dual Core 2GHz Intel or 2.8GHz AMD
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: DirectX 10 compatible with 512MB RAM
<span class="bold-text">DirectX®</span>: 9.0c
<span class="bold-text">Hard Drive</span>: 8 GB HD space
<span class="bold-text">Sound</span>: DirectX 9.0c compatible

<span class="green-bold-text">Recommended:</span>
<span class="bold-text">OS</span>: Windows 7
<span class="bold-text">Processor</span>: Quad Core 2.66GHz Intel or 3.2GHz AMD
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: DirectX 10 compatible or later with 1GB RAM
<span class="bold-text">DirectX®</span>: 10
<span class="bold-text">Hard Drive</span>: 8 GB HD space
<span class="bold-text">Sound</span>: DirectX 9.0c compatible

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Spanish - Spain, Spanish - Latin America, Italian, Chinese - Simplified, Chinese - Traditional, Russian, Ukrainian, Polish, Korean, Portuguese - Brazil, German, Japanese</span>
      `,
      1125000,
      [
        "Action",
        "Horror",
        "Adventure",
        "Third Person",
        "Singleplayer",
        "Shooter",
        "Survival",
      ]
    )
  );

  gameList.push(
    new game(
      `STAR WARS: Jedi Survivor™`,
      `/assets/img/thumb/Star_Wars_Jedi_Survivor.webp`,
      [
        `/assets/img/preview/SW_Jedi/pic_1.jpg`,
        `/assets/img/preview/SW_Jedi/pic_2.jpg`,
        `/assets/img/preview/SW_Jedi/pic_3.jpg`,
        `/assets/img/preview/SW_Jedi/pic_4.jpg`,
        `/assets/img/preview/SW_Jedi/pic_5.jpg`,
        `/assets/img/preview/SW_Jedi/pic_6.jpg`,
        `/assets/img/preview/SW_Jedi/pic_7.jpg`,
        `/assets/img/preview/SW_Jedi/pic_8.jpg`,
        `/assets/img/preview/SW_Jedi/pic_9.jpg`,
      ],
      `/assets/img/game-banner/SWJS_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person, galaxy-spanning, action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively driven, single-player title picks up 5 years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness. Pushed to the edges of the galaxy by the Empire, Cal will find himself surrounded by threats new and familiar. As one of the last surviving Jedi Knights, Cal is driven to make a stand during the galaxy’s darkest times — but how far is he willing to go to protect himself, his crew, and the legacy of the Jedi Order?
      
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/extras/SWJS_FeatureBladesUpdated_Launch_Steam.jpg?t=1689016715" alt="">
      
<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: 4 core / 8 threads | Intel Core i7-7700 | Ryzen 5 1400
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: N8GB VRAM | GTX 1070 | Radeon RX 580
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 155 GB available space
<span class="bold-text">Additional Notes</span>: Internet required for non-optional patching, no online play.

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: 4 core / 8 threads | Intel Core i5 11600K | Ryzen 5 5600X
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: 8GB VRAM | RTX2070 | RX 6700 XT
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 155 GB available space
<span class="bold-text">Additional Notes</span>: Internet required for non-optional patching, no online play.

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Brazil, Simplified Chinese, Spanish - Latin America, Traditional Chinese</span>
      `,
      1090000,
      ["Action", "Adventure", "Singleplayer", "Third Person", "RPG"]
    )
  );

  gameList.push(
    new game(
      `Lords of The Fallen`,
      `/assets/img/thumb/LOTF.webp`,
      [
        `/assets/img/preview/LOTF/pic_1.jpg`,
        `/assets/img/preview/LOTF/pic_2.jpg`,
        `/assets/img/preview/LOTF/pic_3.jpg`,
        `/assets/img/preview/LOTF/pic_4.jpg`,
        `/assets/img/preview/LOTF/pic_5.jpg`,
        `/assets/img/preview/LOTF/pic_6.jpg`,
        `/assets/img/preview/LOTF/pic_7.jpg`,
        `/assets/img/preview/LOTF/pic_8.jpg`,
      ],
      `/assets/img/game-banner/LOTF_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

<span class="green-bold-text">Lords of the Fallen</span> introduces an all-new, epic RPG adventure in a vast, interconnected world more than five times larger than the original game.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/extras/1_mainHeader.gif?t=1698778267" alt="">

After an age of the cruellest tyranny, the demon God, Adyr, was finally defeated. But Gods… do not fall forever. Now, aeons later, Adyr’s resurrection draws nigh. As one of the fabled Dark Crusaders, journey through both the realms of the living and the dead in this expansive RPG experience, featuring colossal boss battles, fast challenging combat, thrilling character encounters, and deep, immersive storytelling. Will your legend be one of light… or one of darkness?

Dare to Hope.

<span class="blue-bold-text">Explore A Vast, Interconnected World</span>
Journey across two expansive, parallel worlds in your epic quest to overthrow Adyr. While the living realm presents its own brutal challenges, untold terrors lurk in the nightmarish realm of the dead.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/extras/2_vastWorld.gif?t=1698778267" alt="">

<span class="blue-bold-text">Define Your Own Legend</span>
Fully customise your character’s appearance from a wide array of visual options, before selecting one of nine character classes. Whichever starting path you take, develop your character to your own playstyle by upgrading stats, weapons, armour and spells.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/extras/3_defineLegend.gif?t=1698778267" alt="">

<span class="blue-bold-text">Master Fast, Challenging Fluid Tactical Combat</span>
Only those that master the deep, tactical combat can hope to survive. Choose from 100s of uniquely brutal weapons, or forgo metal for magic with devastating attacks of the arcane.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/extras/4_fluidCombat.gif?t=1698778267" alt="">

<span class="blue-bold-text">Unite or Fight in Online Multiplayer</span>
Experience the expansive, single player campaign alone, or unite with other lampbearers in online co-op. You are free to journey together for as long as you or they desire, collecting vigor (xp) and any weapons or gear enemies drop, ready to bring them back to your own world. Key items and quest progression won't be transferred, to retain the integrity of your own tale. For those playing online, be warned, as heroes from other realms can, and will invade.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/extras/5_onlineMultiplayer.gif?t=1698778267" alt="">

<span class="blue-bold-text">Wield a Device of Ungodly Power</span>
Your lantern possesses the ungodly power to cross between worlds. Use this dark art to reach forgotten places, unearth fabled treasures, and even manipulate the very soul of your foe.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/extras/6_ungodlyPower.gif?t=1698778267" alt="">

<span class="blue-bold-text">Rise from Death</span>
Fall in the world of the living, and rise again… in the world of the dead. You now have one final chance to return to your living state, as all manner of hellish creature descends upon you.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/extras/7_riseFromDeath.gif?t=1698778267" alt="">

<span class="blue-bold-text">Key Features</span>

<span style="color: white">■</span> Embark upon two vast, parallel worlds - that of the living… and the dead

<span style="color: white">■</span> Master a fast, fluid and challenging combat system

<span style="color: white">■</span> Overcome epic and colossal boss battles

<span style="color: white">■</span> Wield devastating magic attacks and character buffs

<span style="color: white">■</span> Invite a second player to join your campaign in uninterrupted, online multiplayer (only host saves world progress)

<span style="color: white">■</span> Encounter a wide array of characters, eager to offer a dubious hand…

<span style="color: white">■</span> Fully customise your own unique character

<span style="color: white">■</span> Choose from 9 starting character classes, including Knight, Rogue and Fire Apprentice

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64bit
<span class="bold-text">Processor</span>: Intel i5 8400 | AMD Ryzen 5 2600
<span class="bold-text">Memory</span>: 12 GB RAM
<span class="bold-text">Graphics</span>: 6GBs VRAM | NVIDIA GTX-1060 | AMD Radeon RX 590
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 45 GB available space
<span class="bold-text">Additional Notes</span>: 720p Low Quality Settings | SSD (Preferred) | HDD (Supported)

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64bit
<span class="bold-text">Processor</span>: Intel i7 8700 | AMD Ryzen 5 3600
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: 8GBs VRAM | NVIDIA RTX-2080 | AMD Radeon RX 6700
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 45 GB available space
<span class="bold-text">Additional Notes</span>: 1080p High Quality Settings | SSD Required

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Polish, Japanese, Korean, Portuguese - Brazil, Ukrainian, Traditional Chinese, Simplified Chinese</span>
      `,
      990000,
      [
        "RPG",
        "Action",
        "Co-op",
        "Singleplayer",
        "Adventure",
        "Third Person",
        "Multiplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Witchfire`,
      `/assets/img/thumb/Witchfire.webp`,
      [
        `/assets/img/preview/Witchfire/pic_1.jpg`,
        `/assets/img/preview/Witchfire/pic_2.jpg`,
        `/assets/img/preview/Witchfire/pic_3.jpg`,
        `/assets/img/preview/Witchfire/pic_4.jpg`,
        `/assets/img/preview/Witchfire/pic_5.jpg`,
      ],
      `/assets/img/game-banner/Witchfire_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

<span class="green-bold-text">Dark Fantasy — With Guns!</span>
Witchfire is a first-person shooter from the creative leads behind Painkiller and Bulletstorm. A unique blend of souslike, extraction and roguelite gameplay, Witchfire offers a challenging but satisfying gameplay experience, and with multiple roads to victory.

<span class="green-bold-text">At War with Witches</span>
Desperate for a chance to triumph in the deadly war against witches, the Church calls on forbidden pagan magic to turn willing sinners into immortal witch hunters called preyers.
Armed with powerful spells and fearsome firearms conjured by the best Vatican sorcerers, your mission is to find the infamous witch of the Black Sea, destroy the phantom army that protects her, and retrieve a mysterious artifact that can finally turn the tide of war.

<span class="green-bold-text">Immersive Graphics in a Grimdark World</span>
Like The Astronauts’ previous title (The Vanishing of Ethan Carter), Witchfire uses photogrammetry technology to achieve stunning visuals and a grim, immersive dark fantasy world.
      
      <img style="width: 100%" src="https://cdn1.epicgames.com/spt-assets/04d5b86a93514949a3ace614d9e1e417/witchfire-97ce3.jpg" alt="">
      <img style="width: 100%" src="https://cdn1.epicgames.com/spt-assets/04d5b86a93514949a3ace614d9e1e417/witchfire-1atf9.jpg" alt="">
      <img style="width: 100%" src="https://cdn1.epicgames.com/spt-assets/04d5b86a93514949a3ace614d9e1e417/witchfire-48sj2.jpg" alt="">
      
<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 64-bit
<span class="bold-text">Processor</span>: Intel(R) Core(TM) i5-6600K CPU @ 3.50GHz (4 cores)
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1050 Ti
<span class="bold-text">Storage</span>: 55 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 or later 64-bit
<span class="bold-text">Processor</span>: Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz (6 cores)
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1060 6GB
<span class="bold-text">Storage</span>: 55 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English</span>
      `,
      420000,
      ["Action", "Third Person", "Adventure", "Singleplayer", "RPG"]
    )
  );

  gameList.push(
    new game(
      `Assassin's Creed Mirage`,
      `/assets/img/thumb/AC_Mirage.webp`,
      [
        `/assets/img/preview/AC_Mirage/pic_1.jpg`,
        `/assets/img/preview/AC_Mirage/pic_2.jpg`,
        `/assets/img/preview/AC_Mirage/pic_3.jpg`,
        `/assets/img/preview/AC_Mirage/pic_4.jpg`,
        `/assets/img/preview/AC_Mirage/pic_5.jpg`,
        `/assets/img/preview/AC_Mirage/pic_6.jpg`,
        `/assets/img/preview/AC_Mirage/pic_7.jpg`,
        `/assets/img/preview/AC_Mirage/pic_8.jpg`,
        `/assets/img/preview/AC_Mirage/pic_9.jpg`,
      ],
      `/assets/img/game-banner/ACMirage_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Experience the story of Basim, a cunning street thief seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad. Through a mysterious, ancient organization known as the Hidden Ones, he will become a deadly Master Assassin and change his fate in ways he never could have imagined.

Experience a modern take on the iconic features and gameplay that have defined a franchise for 15 years.

Parkour seamlessly through the city and stealthily take down targets with more visceral assassinations than ever before.

Explore an incredibly dense and vibrant city whose inhabitants react to your every move, and uncover the secrets of four unique districts as you venture through the Golden Age of Baghdad.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10, Windows 11 (64-bit versions)
<span class="bold-text">Processor</span>: AMD Ryzen 5 1600 @ 3.2 GHz, Intel Core i7-4790K @ 4.4 GHz, or better
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon RX 570 (4 GB), Intel Arc A380 (6 GB), NVIDIA GeForce GTX 1060 (6 GB), or better
<span class="bold-text">Storage</span>: 40 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10, Windows 11 (64-bit versions)
<span class="bold-text">Processor</span>: AMD Ryzen 5 3600 @ 4.2 GHz, Intel Core i7-8700K @ 4.6 GHz, or better
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon RX 5600 XT (6 GB), Intel Arc A750 (8 GB), NVIDIA GeForce GTX 1660 Ti (6 GB), or better
<span class="bold-text">Storage</span>: 40 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish (Spain), Spanish (LATAM), Portuguese (Brazil), Arabic, Polish, Russian, Japanese, Korean, Traditional Chinese, Simplified Chinese, Arabic</span>
      `,
      790000,
      [
        "Action",
        "RPG",
        "Adventure",
        "Singleplayer",
        "Third Person",
        "Multiplayer",
        "Co-op",
      ]
    )
  );

  gameList.push(
    new game(
      `Elden Ring`,
      `/assets/img/thumb/Elden Ring.webp`,
      [
        `/assets/img/preview/ER/pic_1.jpg`,
        `/assets/img/preview/ER/pic_2.jpg`,
        `/assets/img/preview/ER/pic_3.jpg`,
        `/assets/img/preview/ER/pic_4.jpg`,
        `/assets/img/preview/ER/pic_5.jpg`,
        `/assets/img/preview/ER/pic_6.jpg`,
        `/assets/img/preview/ER/pic_7.jpg`,
        `/assets/img/preview/ER/pic_8.jpg`,
        `/assets/img/preview/ER/pic_9.jpg`,
        `/assets/img/preview/ER/pic_10.jpg`,
      ],
      `/assets/img/game-banner/ER_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/extras/ER_Steam_Gif_616x260.gif?t=1683618443" alt="">

<span class="green-bold-text">• THE NEW FANTASY ACTION RPG</span>
Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.

<span class="green-bold-text">• A Vast World Full of Excitement</span>
A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.

<span class="green-bold-text">• Create your Own Character</span>
In addition to customizing the appearance of your character, you can freely combine the weapons, armor, and magic that you equip. You can develop your character according to your play style, such as increasing your muscle strength to become a strong warrior, or mastering magic.

<span class="green-bold-text">• An Epic Drama Born from a Myth</span>
A multilayered story told in fragments. An epic drama in which the various thoughts of the characters intersect in the Lands Between.

<span class="green-bold-text">• Unique Online Play that Loosely Connects You to Others</span>
In addition to multiplayer, where you can directly connect with other players and travel together, the game supports a unique asynchronous online element that allows you to feel the presence of others.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: INTEL CORE I5-8400 or AMD RYZEN 3 3300X
<span class="bold-text">Memory</span>: 12 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 60 GB available space
<span class="bold-text">Sound Card</span>: Windows Compatible Audio Device

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10/11
<span class="bold-text">Processor</span>: INTEL CORE I7-8700K or AMD RYZEN 5 3600X
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 60 GB available space
<span class="bold-text">Sound Card</span>: Windows Compatible Audio Device

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Spanish - Latin America, Thai, Traditional Chinese</span>
      `,
      898000,
      [
        "RPG",
        "Third Person",
        "Multiplayer",
        "Singleplayer",
        "Action",
        "Co-op",
        "PvP",
      ]
    )
  );

  gameList.push(
    new game(
      `Grand Theft Auto V`,
      `/assets/img/thumb/Grand_Theft_Auto_V.webp`,
      [
        `/assets/img/preview/GTA_V/pic_1.jpg`,
        `/assets/img/preview/GTA_V/pic_2.jpg`,
        `/assets/img/preview/GTA_V/pic_3.jpg`,
        `/assets/img/preview/GTA_V/pic_4.jpg`,
        `/assets/img/preview/GTA_V/pic_5.jpg`,
        `/assets/img/preview/GTA_V/pic_6.jpg`,
        `/assets/img/preview/GTA_V/pic_7.jpg`,
        `/assets/img/preview/GTA_V/pic_8.jpg`,
        `/assets/img/preview/GTA_V/pic_9.jpg`,
        `/assets/img/preview/GTA_V/pic_10.jpg`,
      ],
      `/assets/img/game-banner/GTA-V_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.

Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.

The game offers players a huge range of PC-specific customization options, including over 25 separate configurable settings for texture quality, shaders, tessellation, anti-aliasing and more, as well as support and extensive customization for mouse and keyboard controls. Additional options include a population density slider to control car and pedestrian traffic, as well as dual and triple monitor support, 3D compatibility, and plug-and-play controller support.

Grand Theft Auto V for PC also includes Grand Theft Auto Online, with support for 30 players and two spectators. Grand Theft Auto Online for PC will include all existing gameplay upgrades and Rockstar-created content released since the launch of Grand Theft Auto Online, including Heists and Adversary modes.

The PC version of Grand Theft Auto V and Grand Theft Auto Online features First Person Mode, giving players the chance to explore the incredibly detailed world of Los Santos and Blaine County in an entirely new way.

Grand Theft Auto V for PC also brings the debut of the Rockstar Editor, a powerful suite of creative tools to quickly and easily capture, edit and share game footage from within Grand Theft Auto V and Grand Theft Auto Online. The Rockstar Editor’s Director Mode allows players the ability to stage their own scenes using prominent story characters, pedestrians, and even animals to bring their vision to life. Along with advanced camera manipulation and editing effects including fast and slow motion, and an array of camera filters, players can add their own music using songs from GTAV radio stations, or dynamically control the intensity of the game’s score. Completed videos can be uploaded directly from the Rockstar Editor to YouTube and the Rockstar Games Social Club for easy sharing.

Soundtrack artists The Alchemist and Oh No return as hosts of the new radio station, The Lab FM. The station features new and exclusive music from the production duo based on and inspired by the game’s original soundtrack. Collaborating guest artists include Earl Sweatshirt, Freddie Gibbs, Little Dragon, Killer Mike, Sam Herring from Future Islands, and more. Players can also discover Los Santos and Blaine County while enjoying their own music through Self Radio, a new radio station that will host player-created custom soundtracks.

Special access content requires Rockstar Games Social Club account. Visit <a style="text-decoration = none" href="http://rockstargames.com/v/bonuscontent">http://rockstargames.com/v/bonuscontent</a> for details.
      
<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1
<span class="bold-text">Processor</span>: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)
<span class="bold-text">Sound Card</span>: 100% DirectX 10 compatible
<span class="bold-text">Storage</span>: 110 GB available space
<span class="bold-text">Additional Notes</span>: Over time downloadable content and programming changes will change the system requirements for this game. Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher. Other requirements: Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes. SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE. Partner Requirements: Please check the terms of service of this site before purchasing this software.

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1
<span class="bold-text">Processor</span>: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 660 2GB / AMD HD 7870 2GB
<span class="bold-text">Sound Card</span>: 100% DirectX 10 compatible
<span class="bold-text">Storage</span>: 110 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Korean, Polish, Portuguese - Brazil, Russian, Traditional Chinese, Japanese, Simplified Chinese, Spanish - Latin America</span>
      `,
      949000,
      [
        "Action",
        "Multiplayer",
        "Third Person",
        "First-Person",
        "Shooter",
        "Adventure",
        "Singleplayer",
        "Racing",
        "Co-op",
      ]
    )
  );

  gameList.push(
    new game(
      `Red Dead Redemption 2`,
      `/assets/img/thumb/Red_Dead_Redemption_II.webp`,
      [
        `/assets/img/preview/RDR2/pic_1.jpg`,
        `/assets/img/preview/RDR2/pic_2.jpg`,
        `/assets/img/preview/RDR2/pic_3.jpg`,
        `/assets/img/preview/RDR2/pic_4.jpg`,
        `/assets/img/preview/RDR2/pic_5.jpg`,
      ],
      `/assets/img/game-banner/RDR2_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
America, 1899.

Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.

Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 also includes free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more.

With all new graphical and technical enhancements for deeper immersion, Red Dead Redemption 2 for PC takes full advantage of the power of the PC to bring every corner of this massive, rich and detailed world to life including increased draw distances; higher quality global illumination and ambient occlusion for improved day and night lighting; improved reflections and deeper, higher resolution shadows at all distances; tessellated tree textures and improved grass and fur textures for added realism in every plant and animal.

Red Dead Redemption 2 for PC also offers HDR support, the ability to run high-end display setups with 4K resolution and beyond, multi-monitor configurations, widescreen configurations, faster frame rates and more.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 - April 2018 Update (v1803)
<span class="bold-text">Processor</span>: Intel® Core™ i7-4770K / AMD Ryzen 5 1500X
<span class="bold-text">Memory</span>: 12 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 150 GB available space
<span class="bold-text">Sound Card</span>: Direct X Compatible

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 - April 2018 Update (v1803)
<span class="bold-text">Processor</span>: Intel® Core™ i7-4770K / AMD Ryzen 5 1500X
<span class="bold-text">Memory</span>: 12 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 150 GB available space
<span class="bold-text">Sound Card</span>: Direct X Compatible

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Portugal, Russian, Simplified Chinese, Spanish - Latin America, Traditional Chinese</span>
      `,
      1000000,
      [
        "Adventure",
        "Action",
        "Multiplayer",
        "Singleplayer",
        "Shooter",
        "Third Person",
        "First-Person",
        "FPS",
      ]
    )
  );

  gameList.push(
    new game(
      `Metro Exodus`,
      `/assets/img/thumb/Metro_Exodus.webp`,
      [
        `/assets/img/preview/MExodus/pic_1.jpg`,
        `/assets/img/preview/MExodus/pic_2.jpg`,
        `/assets/img/preview/MExodus/pic_3.jpg`,
        `/assets/img/preview/MExodus/pic_4.jpg`,
        `/assets/img/preview/MExodus/pic_5.jpg`,
        `/assets/img/preview/MExodus/pic_6.jpg`,
        `/assets/img/preview/MExodus/pic_7.jpg`,
        `/assets/img/preview/MExodus/pic_8.jpg`,
        `/assets/img/preview/MExodus/pic_9.jpg`,
        `/assets/img/preview/MExodus/pic_10.jpg`,
      ],
      `/assets/img/game-banner/Metro_Exodus_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

The year is 2036.

A quarter-century after nuclear war devastated the earth, a few thousand survivors still cling to existence beneath the ruins of Moscow, in the tunnels of the Metro.

They have struggled against the poisoned elements, fought mutated beasts and paranormal horrors, and suffered the flames of civil war.

But now, as Artyom, you must flee the Metro and lead a band of Spartan Rangers on an incredible, continent-spanning journey across post-apocalyptic Russia in search of a new life in the East.

Metro Exodus is an epic, story-driven first person shooter from 4A Games that blends deadly combat and stealth with exploration and survival horror in one of the most immersive game worlds ever created.

Explore the Russian wilderness across vast, non-linear levels and follow a thrilling story-line that spans an entire year through spring, summer and autumn to the depths of nuclear winter.

Inspired by the novels of Dmitry Glukhovsky, Metro Exodus continues Artyom’s story in the greatest Metro adventure yet.

<span class="blue-bold-text">FEATURES</span>

<span class="white-text">■</span> Embark on an incredible journey - board the Aurora, a heavily modified steam locomotive, and join a handful of survivors as they search for a new life in the East

<span class="white-text">■</span> Experience Sandbox Survival - a gripping story links together classic Metro gameplay with new huge, non-linear levels

<span class="white-text">■</span> A beautiful, hostile world - discover the post-apocalyptic Russian wilderness, brought to life with stunning day / night cycles and dynamic weather

<span class="white-text">■</span> Deadly combat and stealth - scavenge and craft in the field to customize your arsenal of hand-made weaponry, and engage human and mutant foes in thrilling tactical combat

<span class="white-text">■</span> Your choices determine your comrades’ fate - not all your companions will survive the journey; your decisions have consequence in a gripping storyline that offers massive re-playability

<span class="white-text">■</span> The ultimate in atmosphere and immersion - a flickering candle in the darkness; a ragged gasp as your gasmask frosts over; the howl of a mutant on the night wind - Metro will immerse and terrify you like no other game…
      
<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>

<span class="yellow-bold-text">● Windows</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7/8/10
<span class="bold-text">Processor</span>: Intel Core i5-4440 or equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: GeForce GTX 670 / GeForce GTX 1050 / AMD Radeon HD 7870
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 59 GB available space
<span class="bold-text">Sound Card</span>: DirectX Compatible Sound Card
<span class="bold-text">Additional Notes</span>: Enhanced Edition requires Nvidia RTX or AMD RX GPU

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: Intel Core i7-4770k or equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: GeForce GTX 1070 / GeForce RTX 2060 / AMD RX VEGA 56
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 110 GB available space
<span class="bold-text">Sound Card</span>: DirectX Compatible Sound Card
<span class="bold-text">Additional Notes</span>: Enhanced Edition requires Nvidia RTX or AMD RX GPU

<span class="yellow-bold-text">● macOS</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Mac OS Catalina 10.15
<span class="bold-text">Processor</span>: Intel Core i7 - 7820
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: Radeon Pro 560

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Mac OS Big SUR
<span class="bold-text">Processor</span>: Intel Core i7 - 7820
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: Radeon RX 5700 XT or Apple M1 based Mac computers

<span class="yellow-bold-text">● Linux</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Ubuntu 20
<span class="bold-text">Processor</span>: Intel Core i5 - 4440 - 7820
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: GTX 670 | Radeon R9 380 - 4GB VRAM

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Ubuntu 20
<span class="bold-text">Processor</span>: Intel Core i7-4770k
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: GTX 1070 | RTX 2060 | AMD RX 5500 XT - 8 GB VRAM

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Czech, Polish, Portuguese - Brazil, Russian, Korean, Simplified Chinese, Traditional Chinese, Ukrainian, Japanese</span>
      `,
      499500,
      [
        "FPS",
        "Singleplayer",
        "Action",
        "First-Person",
        "Survival",
        "Horror",
        "Shooter",
        "Adventure",
      ]
    )
  );

  gameList.push(
    new game(
      `A Way Out`,
      `/assets/img/thumb/A_Way_Out.webp`,
      [
        `/assets/img/preview/AWayOut/pic_1.jpg`,
        `/assets/img/preview/AWayOut/pic_2.jpg`,
        `/assets/img/preview/AWayOut/pic_3.jpg`,
        `/assets/img/preview/AWayOut/pic_4.jpg`,
        `/assets/img/preview/AWayOut/pic_5.jpg`,
      ],
      `/assets/img/game-banner/AWO_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

From the creators of Brothers – A Tale of Two Sons comes A Way Out, an exclusively co-op adventure where you play the role of one of two prisoners making their daring escape from prison. What begins as a thrilling breakout quickly turns into an unpredictable, emotional adventure unlike anything seen or played before. A Way Out is an experience that must be played with two players. Each player controls one of the main characters, Leo and Vincent, in a reluctant alliance to break out of prison and gain their freedom.

<span class="blue-bold-text">FEATURES</span>

•  <span class="green-bold-text">CHOOSE YOUR CHARACTER</span> - <span class="white-text">LEO</span> - A hardened inmate with escape in his sights, Leo isn't the type to make friends. No matter the obstacle, Leo is willing to get his hands dirty and do whatever it takes to get the job done. <span class="white-text">VINCENT</span> - Even though he’s fresh off the prison bus, Vincent is determined to break out. With quick wits and nothing left to lose, he'll prove that he's not to be underestimated by anyone, inside prison or out.

•  <span class="green-bold-text">TOGETHER THEY'LL FIND A WAY OUT</span> - Escaping prison with a complete stranger isn't ideal circumstances, but Leo and Vincent have too much riding on it to second-guess themselves now. As freedom gets closer and closer, they'll have to learn to trust each other if they want to make it to the other side.

•  <span class="green-bold-text">WORK TOGETHER TO BREAK FREE</span> - Use teamwork to solve puzzles and overcome obstacles.
 
•  <span class="green-bold-text">EXPERIENCE A VARIETY OF GAMEPLAY</span> - Sneak, fight, run, drive, even go for a little fishing along the way.

<span style="color: red; font-size: 24px; font-weight: bold">NOTE: THIS PRODUCT IS CO-OP ONLY</span>

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 64-bit, 8.1 64-bit or Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel core i3-2100T @ 2.5GHz/AMD FX 6100, or better
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 650Ti 2GB, AMD Radeon HD 7750 2GB
<span class="bold-text">Storage</span>: 25 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 64-bit, 8.1 64-bit or Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i5 3570K; AMD Ryzen 3 1300x or equivalent
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: Nvidia GTX 960; AMD R9 290 or equivalent
<span class="bold-text">Storage</span>: 25 GB available space

<span class="blue-bold-text">Languages Supported:</span> <span class="white-text">English, French, Italian, German, Spanish - Spain, Polis, Portuguese - Brazil Russian</span>
        `,
      700000,
      [
        "Co-op",
        "Action",
        "Multiplayer",
        "Adventure",
        "Third Person",
        "Singleplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Monster Hunter World`,
      `/assets/img/thumb/Monster_Hunter_World.webp`,
      [
        `/assets/img/preview/MHW/pic_1.jpg`,
        `/assets/img/preview/MHW/pic_2.jpg`,
        `/assets/img/preview/MHW/pic_3.jpg`,
        `/assets/img/preview/MHW/pic_4.jpg`,
        `/assets/img/preview/MHW/pic_5.jpg`,
        `/assets/img/preview/MHW/pic_6.jpg`,
        `/assets/img/preview/MHW/pic_7.jpg`,
        `/assets/img/preview/MHW/pic_8.jpg`,
      ],
      `/assets/img/game-banner/MHW_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!

<span class="blue-bold-text">INTRODUCTION</span>

<span class="green-bold-text">Battle gigantic monsters in epic locales.</span>

As a hunter, you'll take on quests to hunt monsters in a variety of habitats.
Take down these monsters and receive materials that you can use to create stronger weapons and armor in order to hunt even more dangerous monsters.

In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_introduction.jpg?t=1697508240" alt="">

<span class="green-bold-text">Setting</span>
Once every decade, elder dragons trek across the sea to travel to the land known as the New World in a migration referred to as the Elder Crossing.

To get to the bottom of this mysterious phenomenon, the Guild has formed the Research Commission, dispatching them in large fleets to the New World.

As the Commission sends its Fifth Fleet in pursuit of the colossal elder dragon, Zorah Magdaros, one hunter is about to embark on a journey grander than anything they could have ever imagined.      
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_story.jpg?t=1697508240" alt="">

<span class="blue-bold-text">ECOSYSTEM</span>

<span class="green-bold-text">A World That Breathes Life</span>
There are various locations teeming with wildlife. Expeditions into these locales are bound to turn up interesting discoveries.

<span class="blue-bold-text">HUNTING</span>
<span class="green-bold-text">A Diverse Arsenal, and an Indispensable Partner</span>
Your equipment will give you the power to need to carve out a place for yourself in the New World.

<span class="green-bold-text">The Hunter's Arsenal</span>
There are fourteen different weapons at the hunter's disposal, each with its own unique characteristics and attacks. Many hunters acquire proficiency in multiple types, while others prefer to attain mastery of one.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_hunters.jpg?t=1697508240" alt="">

<span class="green-bold-text">Scoutflies</span>
Monster tracks, such as footprints and gashes, dot each locale. Your Scoutflies will remember the scent of a monster and guide you to other nearby tracks. And as you gather more tracks, the Scoutflies will give you even more information.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_shirubemushi_s.jpg?t=1697508240" alt="">

<span class="green-bold-text">Slinger</span>
The Slinger is an indispensable tool for a hunter, allowing you to arm yourself with stones and nuts that can be gathered from each locale.
From diversion tactics to creating shortcuts, the Slinger has a variety of uses, and allows you to hunt in new and interesting ways.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_slinger_s.jpg?t=1697508240" alt="">

<span class="green-bold-text">Specialized Tools</span>
Specialized tools activate powerful effects for a limited amount of time, and up to two can be equipped at a time. Simple to use, they can be selected and activated just like any other item you take out on a hunt.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_specialTool_s.jpg?t=1697508240" alt="">

<span class="green-bold-text">Palicoes</span>
Palicoes are hunters' reliable comrades out in the field, specialized in a variety of offensive, defensive, and restorative support abilities.
The hunter's Palico joins the Fifth Fleet with pride, as much a bona fide member of the Commission as any other hunter.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/582010/extras/MHW_specialTool_s.jpg?t=1697508240" alt="">

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: WINDOWS® 7, 8, 8.1, 10 (64-bit required)
<span class="bold-text">Processor</span>: Intel® Core™ i5 4460 or Core™ i3 9100F or AMD FX™-6300 or Ryzen™ 3 3200G
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA®GeForce®GTX 760 or GTX1050 or AMD Radeon™ R7 260x or RX 560
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 52 GB available space
<span class="bold-text">Sound Card</span>: DirectSound (DirectX® 9.0c or later)
<span class="bold-text">Additional Notes</span>:
- These specs allow for the game to be played in 1080p/30fps with graphics settings at "Low".
- 64-bit processor and operating system are required.

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: WINDOWS® 7, 8, 8.1, 10 (64-bit required)
<span class="bold-text">Processor</span>: Intel® Core™ i7 3770 or Core™ i3 8350 or Core™ i3 9350F / AMD Ryzen™ 5 1500X or Ryzen™ 5 3400G
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA® GeForce® GTX 1060 (VRAM 3GB) or GTX 1650 / AMD Radeon™ RX 480 or RX 570
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 52 GB available space
<span class="bold-text">Sound Card</span>: DirectSound (DirectX® 9.0c or later)
<span class="bold-text">Additional Notes</span>:
- These specs allow for the game to be played in 1080p/30fps with graphics settings at "High". 
- 64-bit processor and operating system are required. - Windows 10 (Version 1809 or later) and a 4GB VRAM GPU (graphics board or video card) are required for DirectX 12 API.

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Portuguese - Brazil, Polish, Traditional Chinese, Japanese, Korean, Russian, Simplified Chinese, Spanish - Latin America	</span>   
      `,
      550000,
      [
        "Co-op",
        "Multiplayer",
        "Action",
        "RPG",
        "Third Person",
        "Adventure",
        "Singleplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Marvel's Spider-Man - Miles Morales`,
      `/assets/img/thumb/Marvel's_Spider-Man_Miles_Morales.webp`,
      [
        `/assets/img/preview/Spider-man_Miles_Morale/pic_1.jpg`,
        `/assets/img/preview/Spider-man_Miles_Morale/pic_2.jpg`,
        `/assets/img/preview/Spider-man_Miles_Morale/pic_3.jpg`,
        `/assets/img/preview/Spider-man_Miles_Morale/pic_4.jpg`,
        `/assets/img/preview/Spider-man_Miles_Morale/pic_5.jpg`,
        `/assets/img/preview/Spider-man_Miles_Morale/pic_6.jpg`,
        `/assets/img/preview/Spider-man_Miles_Morale/pic_7.jpg`,
        `/assets/img/preview/Spider-man_Miles_Morale/pic_8.jpg`,
      ],
      `/assets/img/game-banner/Spider-man_Mile-Morales_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Following the events of Marvel’s Spider-Man Remastered, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it.

<span class="blue-bold-text">KEY FEATURES</span>

<span class="green-bold-text">The Rise of Miles Morales</span>
Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills.

<span class="green-bold-text">A War for Power</span>
A war for control of Marvel’s New York has broken out between a devious energy corporation and a high-tech criminal army. With his new home at the heart of the battle, Miles must learn the cost of becoming a hero and decide what he must sacrifice for the greater good.

<span class="green-bold-text">A Vibrant New Home</span>
Traverse the snowy streets of his new, vibrant, and bustling neighborhood as Miles searches for a sense of belonging. When the lines blur between his personal and crime-fighting lives, he discovers who he can trust, and what it feels like to truly be home.

<span class="blue-bold-text">PC FEATURES</span>

<span class="green-bold-text">PC Optimized Graphics</span>
Enjoy a variety of graphics quality options to tailor to a wide range of devices, unlocked framerates, and support for other technologies including performance boosting NVIDIA DLSS 3 and NVIDIA DLSS 2, image quality enhancing NVIDIA DLAA, and latency-reducing NVIDIA Reflex. Upscaling technologies AMD FSR 2.1, Intel XeSS and IGTI are also supported.

<span class="green-bold-text">Ray-traced reflections and shadows*</span>
See the city come to life with stunning ray-traced reflection and ray-traced shadow options with a variety of quality modes to choose from.

<span class="green-bold-text">Ultra-wide Monitor support**</span>
Take in the cinematic sights of Marvel’s New York with support for a range of screen setups, including 16:9, 16:10, 21:9, 32:9, and 48:9 resolutions. 48:9 resolutions with triple monitor setups are compatible with NVIDIA Surround or AMD Eyefinity.

<span class="green-bold-text">Controls and Customization</span>
Feel what it’s like to play as Spider-Man through immersive haptic feedback and dynamic trigger effects using a PlayStation DualSense™ controller on a wired USB connection. Enjoy full mouse and keyboard support with various customizable control options.

<span style="font-style: italic">*Compatible PC required
**Compatible PC and display device required.</span>

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit 1909
<span class="bold-text">Processor</span>: Intel Core i3-4160, 3.6 GHz or AMD equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 950 or AMD Radeon RX 470
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 75 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit 1909
<span class="bold-text">Processor</span>: Intel Core i5-4670, 3.4 Ghz or AMD Ryzen 5 1600, 3.2 Ghz
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 75 GB available space
<span class="bold-text">Additional Notes</span>: 75 GB SSD space Recommended

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Czech, Danish, Dutch, Finnish, Greek, Hungarian, Japanese, Korean, Norwegian, Polish, Portuguese - Brazil, Portuguese - Portugal, Russian, Simplified Chinese, Spanish - Latin America, Swedish, Traditional Chinese</span>
      `,
      1159000,
      [
        "Action",
        "Adventure",
        "Singleplayer",
        "Third Person",
        "Multiplayer",
        "RPG",
      ]
    )
  );

  gameList.push(
    new game(
      `God of War`,
      `/assets/img/thumb/GOW.webp`,
      [
        `/assets/img/preview/GOW/pic_1.jpg`,
        `/assets/img/preview/GOW/pic_2.jpg`,
        `/assets/img/preview/GOW/pic_3.jpg`,
        `/assets/img/preview/GOW/pic_4.jpg`,
        `/assets/img/preview/GOW/pic_5.jpg`,
        `/assets/img/preview/GOW/pic_6.jpg`,
        `/assets/img/preview/GOW/pic_7.jpg`,
        `/assets/img/preview/GOW/pic_8.jpg`,
        `/assets/img/preview/GOW/pic_9.jpg`,
        `/assets/img/preview/GOW/pic_10.jpg`,
      ],
      `/assets/img/game-banner/GOW_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

<span class="green-bold-text">Enter the Norse realm</span>
His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.

<span class="green-bold-text">Grasp a second chance</span>
Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.

<span class="green-bold-text">Journey to a dark, elemental world of fearsome creatures</span>
From the marble and columns of ornate Olympus to the gritty forests, mountains and caves of pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters and gods.

<span class="green-bold-text">Engage in visceral, physical combat</span>
With an over the shoulder camera that brings the player closer to the action than ever before, fights in God of War™ mirror the pantheon of Norse creatures Kratos will face: grand, gritty and grueling. A new main weapon and new abilities retain the defining spirit of the God of War series while presenting a vision of conflict that forges new ground in the genre.

<span class="blue-bold-text">PC FEATURES</span>
<span class="green-bold-text">High Fidelity Graphics</span>
Striking visuals enhanced on PC. Enjoy true 4K resolution, on supported devices, [MU1] with unlocked framerates for peak performance. Dial in your settings via a wide range of graphical presets and options including higher resolution shadows, improved screen space reflections, the addition of GTAO and SSDO, and much more.

<span class="green-bold-text">NVIDIA® DLSS and Reflex Support</span>
Quality meets performance. Harness the AI power of NVIDIA Deep Learning Super Sampling (DLSS) to boost frame rates and generate beautiful, sharp images on select Nvidia GPUs. Utilize NVIDIA Reflex low latency technology allowing you to react quicker and hit harder combos with the responsive gameplay you crave on GeForce GPUs.

<span class="green-bold-text">Controls Customization</span>
Play your way. With support for the DUALSHOCK®4 and DUALSENSE® wireless controllers, a wide range of other gamepads, and fully customizable bindings for mouse and keyboard, you have the power to fine-tune every action to match your playstyle.

<span class="green-bold-text">Ultra-wide Support</span>
Immerse yourself like never before. Journey through the Norse realms taking in breathtaking vistas in panoramic widescreen. With 21:9 ultra-widescreen support, God of War™ presents a cinema quality experience that further expands the original seamless theatrical vision.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 70 GB available space
<span class="bold-text">Additional Notes</span>: DirectX feature level 11_1 required

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 70 GB available space
<span class="bold-text">Additional Notes</span>: DirectX feature level 11_1 required

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Dutch, Japanese, Korean, Polish, Portuguese - Portugal, Portuguese - Brazil, Russian, Spanish - Latin America, Turkish, Traditional Chinese, Czech, Hungarian, Greek</span>

      `,
      1159000,
      ["Action", "Singleplayer", "Adventure", "Third Person", "RPG"]
    )
  );

  gameList.push(
    new game(
      `Sonic Superstars`,
      `/assets/img/thumb/sonic-superstars-thumb.webp`,
      [
        `/assets/img/preview/Sonic_Superstars/pic_1.jpg`,
        `/assets/img/preview/Sonic_Superstars/pic_2.jpg`,
        `/assets/img/preview/Sonic_Superstars/pic_3.jpg`,
        `/assets/img/preview/Sonic_Superstars/pic_4.jpg`,
        `/assets/img/preview/Sonic_Superstars/pic_5.jpg`,
      ],
      `/assets/img/game-banner/SS_banner.webp`,
      ` 
<span class="blue-bold-text">ABOUT THIS GAME</span>

The <span class="bold-text">SONIC SUPERSTARS Digital Deluxe Edition featuring LEGO®</span> contains SONIC SUPERSTARS and the Digital Deluxe Upgrade featuring LEGO®, which includes:
- LEGO® Fun Pack
- Sonic Rabbit Skin
- Mecha Sonic Skin for Battle Mode
- Bonus Main Menu Wallpapers​
- Digital Artbook & Mini Original Soundtrack

Adventure through the mystical Northstar Islands in this all-new take on classic 2D Sonic high-speed action platforming. Play as Sonic, Tails, Knuckles, and Amy and harness all-new Emerald powers to move and attack in dynamic new ways. Navigate gorgeous, never-before-seen environments solo or with up to 3 other players and stop Dr. Eggman, Fang, and a mysterious new adversary from converting the islands’ giant animals into Badniks before it’s too late!

- A new Spin on a Classic: The 2D Sonic high-speed sidescrolling action platforming you know and love, reimagined with fully 3D graphics, new powers and abilities, an all-new setting, and new ways to play! You’ve never played classic Sonic like this before!

- Play as your Favorite Characters: Choose from Sonic, Tails, Knuckles, and Amy and take advantage of their unique abilities to blaze a path across the Northstar Islands as they race to defeat Dr. Eggman, who has teamed up with an old nemesis, Fang, and a mysterious new armored adversary.

- Harness the Power of the Chaos Emeralds: Multiply, swim up waterfalls, change form, and more with the powers of the Chaos Emeralds.

- More Friends, More Fun: For the first time ever in a Sonic game, play through the entire campaign with up to 3 other players with drop-in and drop-out 4-Player Local Co-op.

- Challenge Players From Around the World: Compete locally or online with up to 8 players in the all-new Battle Mode!

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 / 11
<span class="bold-text">Processor</span>: Intel Core i5-2300 or AMD FX-4350
<span class="bold-text">Memory</span>: 6 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTS 450, 1 GB or AMD Radeon HD 5770, 1 GB
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 20 GB available space
<span class="bold-text">Additional Notes</span>: 720p Low @ 60 FPS

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 / 11
<span class="bold-text">Processor</span>: Intel Core i5-3470 or AMD FX-6300
<span class="bold-text">Memory</span>: 6 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 560, 1 GB or AMD Radeon HD 5870, 2 GB
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 20 GB available space
<span class="bold-text">Additional Notes</span>: 1080p High @ 60 FPS
      
<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Simplified Chinese, Thai, Traditional Chinese, Polish, Portuguese - Brazil, Russia</span>
      `,
      830000,
      [
        "Action",
        "Adventure",
        "Casual",
        "2D Platformer",
        "Singleplayer",
        "Multiplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `EA SPORTS FC™ 24`,
      `/assets/img/thumb/fc24-thumb.webp`,
      [
        `/assets/img/preview/FC24/pic_1.jpg`,
        `/assets/img/preview/FC24/pic_2.jpg`,
        `/assets/img/preview/FC24/pic_3.jpg`,
        `/assets/img/preview/FC24/pic_4.jpg`,
        `/assets/img/preview/FC24/pic_5.jpg`,
      ],
      `/assets/img/game-banner/FC24_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

EA SPORTS FC™ 24 welcomes you to The World’s Game—the most true-to-football experience ever with HyperMotionV*, PlayStyles optimised by Opta, and a revolutionised Frostbite™ Engine reinventing how 19,000+ authentic players move, play and look in every match.

Moves like football.
Plays like football.
Looks like football.
EA SPORTS FC™ 24 brings you closer to football than ever before, powered by a trinity of technologies driving gameplay realism in every match.

      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/extras/EA_GLO_STEAM_FC24_A+_BLADES_EN.jpg?t=1698928588" alt="">

This game includes optional in-game purchases of virtual currency that can be used to acquire virtual in-game items, including a random selection of virtual in-game items.
FC Points not available in Belgium.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 - 64-Bit
<span class="bold-text">Processor</span>: Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 100 GB available space
<span class="bold-text">Additional Notes</span>: DirectX: 12 Compatible video card or equivalent (feature level 12_0)

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 - 64-Bit
<span class="bold-text">Processor</span>: Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ
<span class="bold-text">Memory</span>: 12 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1660 or AMD RX 5600 XT
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 100 GB available space
<span class="bold-text">Additional Notes</span>: DirectX: 12 Compatible video card or equivalent (feature level 12_0)

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Brazil, Simplified Chinese, Traditional Chinese, Arabic, Czech, Danish, Dutch, Norwegian, Portuguese - Portugal, Russian, Swedish, Turkish</span>
      `,
      1090000,
      ["PvP", "PvE", "Multiplayer", "First-Person", "Co-op", "Singleplayer"]
    )
  );

  gameList.push(
    new game(
      `Attack on Titan 2`,
      `/assets/img/thumb/AOT2.webp`,
      [
        `/assets/img/preview/AOT2/pic_1.jpg`,
        `/assets/img/preview/AOT2/pic_2.jpg`,
        `/assets/img/preview/AOT2/pic_3.jpg`,
        `/assets/img/preview/AOT2/pic_4.jpg`,
        `/assets/img/preview/AOT2/pic_5.jpg`,
      ],
      `/assets/img/game-banner/AOT2_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Abandon all fear. Attack on Titan 2 is the gripping sequel to the action game based on the worldwide hit anime series "Attack on Titan."

Experience the immense story of the anime alongside Eren and his companions, as they fight to save humanity from the threat of the deadly human devouring Titans. Try your hand in operating the omni-directional mobility gear, maneuvering and flying through the sky to counter the Titans, and feel the thrill and satisfaction of battling giant opponents.
            
The latest title in the "Attack on Titan" series is available for Windows!
Players engage in battle in the world of "Attack on Titan" from the perspective of a single soldier. Experience the most extreme and evolved Titan-hunting action yet!
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/601050/extras/shin_01.gif?t=1682557239" alt="">
<span class="green-bold-text">The thrill of hunting Titans with omni-directional mobility gear action</span>
The thrill of freely soaring through the skies has been taken to the next level!
We've included moves that allow you to instantly close in on far-off Titans and slice them with "Sneak Attacks," quickly circle behind Titans and deal large amounts of damage with "Hook Drive" attacks, and more. Achieve evolved omni-directional mobility gear action that is rich with variety.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/601050/extras/aaa.jpg?t=1682557239" alt="">
<span class="green-bold-text">Impending horror, bloodcurdling Titans</span>
Titans are after you!
The Titans' movements and reactions are more menacing than ever as they encroach on the player, but the situation is at its most severe when you enter threatening "danger zones."
Charge forth, fly about, and repeatedly unleash powerful attacks on a battlefield ridden with suspense.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/601050/extras/bbb.jpg?t=1682557239" alt="">
<span class="green-bold-text">A familiar story, overwhelming immersion</span>
Using the story from Season 2 of the anime as a basis, we've prepared an original sub-story for the game under the supervision of author Hajime Isayama.
Enjoy the world of "Attack on Titan" with an even larger volume of content than the previous title.
Also, the story that unfolds before the eyes of you, an original main character, will make you feel as if you are living and breathing in the very world itself.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/601050/extras/ccc.jpg?t=1682557239" alt="">
<span class="green-bold-text">An expanded roster of playable characters</span>
The number of characters has been increased from the previous title from 10 to 37! Enjoy going out to battle with an original character made to your liking.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/601050/extras/ddd.jpg?t=1682557239" alt="">
<span class="green-bold-text">Interact with characters to strengthen their bond with your original character</span>
In Daily Life sections, characters will appear in their plain clothes and show you sides of themselves you normally can't see.
By interacting with such characters and strengthening your bonds with them, they will support your original character through "Buddy Actions," and you'll be able to experience each character's side stories.
Strengthen your bond with your favorite characters and set out to battle!
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/601050/extras/eee.jpg?t=1682557239" alt=""> 
<span class="green-bold-text">Online Competitive & Cooperative Play</span>
Face off against other players with four varied types of online competition!
Send a distress call out to other players and take on missions with players from around the world in online cooperative play.       
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/601050/extras/fff.jpg?t=1682557239" alt="">
<span class="green-bold-text">Create an original character</span>
Create your own original character and experience the anime's storyline from a new perspective as a member of the Survey Corps.
In the Character Editor, choose from a multitude of customization options including facial features to body shape, and create your own soldier to defeat the Titans.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/601050/extras/hhh.jpg?t=1682557239" alt="">

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Win 10 64bit
<span class="bold-text">Processor</span>: Core I5 2400 or over
<span class="bold-text">Memory</span>: 6 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 660 VRAM 1GB or over
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 30 GB available space
<span class="bold-text">Sound Card</span>: 16bit Stereo 48kHzWAVE

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Win 10 64bit
<span class="bold-text">Processor</span>: Core i7 3770 or over
<span class="bold-text">Memory</span>:8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 960 VRAM 2GB or over
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 30 GB available space
<span class="bold-text">Sound Card</span>: 16bit 5.1ch surround 48KHzWAVE

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, Japanese, Korean, Traditional Chinese, French, Italian, German, Spanish - Spain, Spanish - Latin America</span>
            `,
      790000,
      [
        "Action",
        "Multiplayer",
        "RPG",
        "Singleplayer",
        "Co-op",
        "Adventure",
        "Third Person",
        "Horror",
      ]
    )
  );

  gameList.push(
    new game(
      `PAYDAY 3`,
      `/assets/img/thumb/PAYDAY3.webp`,
      [
        `/assets/img/preview/PAYDAY_3/pic_1.jpg`,
        `/assets/img/preview/PAYDAY_3/pic_2.jpg`,
        `/assets/img/preview/PAYDAY_3/pic_3.jpg`,
        `/assets/img/preview/PAYDAY_3/pic_4.jpg`,
        `/assets/img/preview/PAYDAY_3/pic_5.jpg`,
      ],
      `/assets/img/game-banner/PAYDAY_3_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Step out of retirement back into the life of crime in the shoes of the Payday Gang, the envy of their peers and the nightmare of law-enforcement wherever they go. Several years after the crew’s reign of terror over Washington DC has ended, they assemble once again to deal with the threat that roused them out of early retirement.

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1272080/extras/tightest-crew2.gif?t=1696924505" alt="">

The legendary Payday Crew, dreaded by the law and underworld alike, is back. Ripped from their peaceful retirement to rejoin the criminal world by a new threat, one born from the chaos the Crew left in their wake.

In order to identify and crush this new threat, the Crew is leaving their Washington DC roots behind them and moving to New York City. A new location will bring with it new challenges, but also new opportunities for a heister with a plan.

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1272080/extras/give-in-greed2.gif?t=1696924505" alt="">

Give outlet to your greed and let loose in PAYDAY 3. In addition to gold, cash and jewelry and any other valuables they might come across, you’ll be able to build a sizable collection of weapons, cosmetics and accolades.

It won’t be as simple as showing up and gaining goodies. You’ll have to work hard and plan smart to get away with as much loot as possible. Gain experience, unlock new skills and gain proficiency in weapons to steadily grow your power to handle the tougher challenges.

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1272080/extras/art-of-heisting2.gif?t=1696924505" alt="">

A professional heister knows it takes planning, hard work and a good amount of luck in order to execute a successful heist. In PAYDAY 3 the choice is put in the hands of the players, deciding how to tackle the heist, whether you sneak or go in guns blazing, whether you let your hostages go or keep them around as pawns, whether you go at it alone or bring friends. The choices are endless and in your hands, they will vastly change how the game plays.

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1272080/extras/thrive-in-coop2.gif?t=1696924505" alt="">

Not just anyone is worthy of standing at your side for something as important as a heist. Likewise, PAYDAY 3 is best enjoyed with close friends in mind, whether you bring them from your childhood or make them along the road.

The PAYDAY-series has always valued the bonds made through hardship and tries to reflect that in the actions and words of our heisters while in the game, and through our community while on the outside.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: Intel Core i5-9400F
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: Nvidia GTX 1650 (4 GB)
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 65 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: Intel Core i7-9700K
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: Nvidia GTX 1080 (8GB)
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 65 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Spanish - Latin America, Traditional Chinese, Turkish</span>
      `,
      660000,
      [
        "Co-op",
        "Action",
        "FPS",
        "Multiplayer",
        "Shooter",
        "First-Person",
        "RPG",
        "PvE",
      ]
    )
  );

  gameList.push(
    new game(
      `Assassin's Creed® Odyssey`,
      `/assets/img/thumb/Assassin_s_Creed_Odyssey.webp`,
      [
        `/assets/img/preview/AC_Odyssey/pic_1.jpg`,
        `/assets/img/preview/AC_Odyssey/pic_2.jpg`,
        `/assets/img/preview/AC_Odyssey/pic_3.jpg`,
        `/assets/img/preview/AC_Odyssey/pic_4.jpg`,
        `/assets/img/preview/AC_Odyssey/pic_5.jpg`,
        `/assets/img/preview/AC_Odyssey/pic_6.jpg`,
        `/assets/img/preview/AC_Odyssey/pic_7.jpg`,
        `/assets/img/preview/AC_Odyssey/pic_8.jpg`,
      ],
      `/assets/img/game-banner/ACOdyssey_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

<span class="green-bold-text">Choose your fate in Assassin's Creed® Odyssey.</span>
From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.
        
<span class="green-bold-text">TRAVEL TO ANCIENT GREECE</span>
From lush vibrant forests to volcanic islands and bustling cities, start a journey of exploration and encounters in a war torn world shaped by gods and men.
        
<span class="green-bold-text">FORGE YOUR LEGEND</span>
Your decisions will impact how your odyssey unfolds. Play through multiple endings thanks to the new dialogue system and the choices you make. Customize your gear, ship, and special abilities to become a legend.
        
<span class="green-bold-text">FIGHT ON A NEW SCALE</span>
Demonstrate your warrior's abilities in large scale epic battles between Athens and Sparta featuring hundreds of soldiers, or ram and cleave your way through entire fleets in naval battles across the Aegean Sea.
        
<span class="green-bold-text">GAZE IN WONDER</span>
Experience the action in a whole new light with Tobii Eye Tracking. The Extended View feature gives you a broader perspective of the environment, and the Dynamic Light and Sun Effects immerse you in the sandy dunes according to where you set your sights. Tagging, aiming and locking on your targets becomes a lot more natural when you can do it by looking at them. Let your vision lead the way and enhance your gameplay.
Visit the Tobii website to check the list of compatible devices.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64bit versions only)
<span class="bold-text">Processor</span>: AMD FX 6300 @ 3.8 GHz, Ryzen 3 - 1200, Intel Core i5 2400 @ 3.1 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon R9 285, NVIDIA GeForce GTX 660 (2GB VRAM with Shader Model 5.0)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 46+ GB available space
<span class="bold-text">Additional Notes</span>: Video Preset: Lowest (720p)

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64bit versions only)
<span class="bold-text">Processor</span>: AMD FX-8350 @ 4.0 GHz, Ryzen 5 - 1400, Intel Core i7-3770 @ 3.5 GHz or better
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon R9 290, NVIDIA GeForce GTX 970 (4GB VRAM with Shader Model 5.0) or better
<span class="bold-text">Storage</span>: 46+ GB available space
<span class="bold-text">Additional Notes</span>: Video Preset: High (1080p)

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Czech, Dutch, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese</span>  
        `,
      990000,
      [
        "RPG",
        "Singleplayer",
        "Action",
        "Third Person",
        "Adventure",
        "Multiplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Dead Space`,
      `/assets/img/thumb/Dead_Space.webp`,
      [
        `/assets/img/preview/Dead_Space/pic_1.jpg`,
        `/assets/img/preview/Dead_Space/pic_2.jpg`,
        `/assets/img/preview/Dead_Space/pic_3.jpg`,
        `/assets/img/preview/Dead_Space/pic_4.jpg`,
        `/assets/img/preview/Dead_Space/pic_5.jpg`,
        `/assets/img/preview/Dead_Space/pic_6.jpg`,
        `/assets/img/preview/Dead_Space/pic_7.jpg`,
        `/assets/img/preview/Dead_Space/pic_8.jpg`,
        `/assets/img/preview/Dead_Space/pic_9.jpg`,
        `/assets/img/preview/Dead_Space/pic_10.jpg`,
      ],
      `/assets/img/game-banner/DS_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

The sci-fi survival-horror classic Dead Space™ returns, completely rebuilt from the ground up to offer a deeper, more immersive experience. This remake brings jaw-dropping visual fidelity, suspenseful atmospheric audio, and improvements to gameplay while staying faithful to the original game’s thrilling vision.

Isaac Clarke is an everyman engineer on a mission to repair a vast mining ship, the USG Ishimura, only to discover something has gone horribly wrong. The ship's crew has been slaughtered and Isaac’s beloved partner, Nicole, is lost somewhere on board.

Now alone and armed with only his engineering tools and skills, Isaac races to find Nicole as the nightmarish mystery of what happened aboard the Ishimura unravels around him. Trapped with hostile creatures called Necromorphs, Isaac faces a battle for survival, not only against the escalating terrors of the ship but against his own crumbling sanity.

<span class="green-bold-text">IMMERSE YOURSELF IN NEXT-GEN SCI-FI HORROR</span>
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/extras/DS_GP_USP1_610px.gif?t=1684172906" alt="">

A sci-fi horror classic returns fully rebuilt from the ground up with elevated visual fidelity and 3D atmospheric audio. From the frighteningly detailed rooms and workspaces of a slaughtered crew to the eerie atmospheric sounds of a desolate spaceship, you’ll explore a stunning sci-fi setting full of unpredictable and tense moments without interruption.

<span class="green-bold-text">UNRAVEL THE MYSTERY ABOARD THE USG ISHIMURA</span>      
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/extras/DS_GP_USP2_610px.gif?t=1684172906" alt="">

What starts as a routine repair mission for engineer Isaac Clarke and the crew of the USG Kellion quickly turns into a battle for survival as the truth behind the horrors onboard begins to unravel. Following an expanded narrative experience, uncover the dark secrets behind the events aboard the USG Ishimura through the final logs of the ill-fated crew and your encounters with the few survivors that remain.

<span class="green-bold-text">IMPROVISE TO SURVIVE</span>
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/extras/USP3_ageGate_610px.gif?t=1684172906" alt="">

Confront the nightmare aboard the USG Ishimura with genre-defining strategic gameplay. Repurpose and upgrade Isaac’s engineering tools to creatively defeat enemies with precision.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/extras/Dead_Space_PC_Specs_610px_STEAM_updated.png?t=1684172906" alt="">
      
<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Window 10 64-bit +
<span class="bold-text">Processor</span>: Ryzen 5 2600x, Core i5 8600
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: AMD RX 5700, GTX 1070
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 50 GB available space
<span class="bold-text">Additional Notes</span>: 50GB SATA SSD

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Window 10 64-bit +
<span class="bold-text">Processor</span>: Ryzen 5 5600X,Core i5 11600K
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: Radeon RX 6700 XT, Geforce RTX 2070
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 50 GB available space
<span class="bold-text">Additional Notes</span>: 50GB SSD PCIe compatible

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Simplified Chinese, Spanish - Latin America, Traditional Chinese, Portuguese - Brazil</span>
      `,
      900000,
      [
        "Horror",
        "Shooter",
        "Third Person",
        "Action",
        "Singleplayer",
        "Survival",
        "Adventure",
      ]
    )
  );

  gameList.push(
    new game(
      `Forza Horizon 5`,
      `/assets/img/thumb/Forza_Horizon_5.webp`,
      [
        `/assets/img/preview/FH5/pic_1.jpg`,
        `/assets/img/preview/FH5/pic_2.jpg`,
        `/assets/img/preview/FH5/pic_3.jpg`,
        `/assets/img/preview/FH5/pic_4.jpg`,
        `/assets/img/preview/FH5/pic_5.jpg`,
        `/assets/img/preview/FH5/pic_6.jpg`,
        `/assets/img/preview/FH5/pic_7.jpg`,
        `/assets/img/preview/FH5/pic_8.jpg`,
        `/assets/img/preview/FH5/pic_9.jpg`,
        `/assets/img/preview/FH5/pic_10.jpg`,
      ],
      `/assets/img/game-banner/FH5_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/extras/DS_GP_USP1_610px.gif?t=1684172906" alt="">

<span class="green-bold-text">This is Your Horizon Adventure</span>
Lead breathtaking expeditions across the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/extras/ForzaHorizon5_02_VolcanoDescent_600x100.png?t=1698342317" alt="">

<span class="green-bold-text">This is a Diverse Open World</span>
Explore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/extras/ForzaHorizon5_04_RiverTrucks_600x100.png?t=1698342317" alt="">

<span class="green-bold-text">This is an Adventurous Open World</span>
Immerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love. Meet new characters and choose the outcomes of their Horizon Story missions.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/extras/ForzaHorizon5_05_FestivalRace_600x100.png?t=1698342317" alt="">

<span class="green-bold-text">This is an Evolving Open World</span>
Take on awe-inspiring weather events such as towering dust storms and intense tropical storms as Mexico’s unique, dynamic seasons change the world every week. Keep coming back for new events, challenges, collectibles, and rewards, and new areas to explore. No two seasons will ever be the same.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/extras/ForzaHorizon5_06_NightDrift_600x100.png?t=1698342317" alt="">

<span class="green-bold-text">This is a Social Open World</span>
Team up with other players and enter the Horizon Arcade for a continuing series of fun, over-the-top challenges that keep you and your friends in the action and having fun with no menus, loading screens or lobbies. Meet new friends in Horizon Open and Tours and share your creations with new community gift sharing.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/extras/ForzaHorizon5_07_OffroadSand_600x100.png?t=1698342317" alt="">

<span class="green-bold-text">This is Your Open World</span>
Create your own expressions of fun with the powerful new EventLab gameplay toolset including custom races, challenges, stunts, and entirely new game modes. Customize your cars in more ways than ever before with new options such as the ability open and close convertible tops, paint brake calipers, and more. Use the new Gift Drops feature to share your custom creations with the community.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/extras/ForzaHorizon5_09_BuggyMeetup_600x100.png?t=1698342317" alt="">

Begin Your Horizon Adventure today!

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 version 18362.0 or higher
<span class="bold-text">Processor</span>: Intel i5-4460 or AMD Ryzen 3 1200
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 970 OR AMD RX 470
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 110 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 version 18362.0 or higher
<span class="bold-text">Processor</span>: Intel i5-8400 or AMD Ryzen 5 1500X
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 1070 OR AMD RX 590
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 110 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Czech, Hungarian, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Spanish - Latin America, Traditional Chinese, Turkish</span>
      `,
      990000,
      [
        "Racing",
        "Multiplayer",
        "Adventure",
        "First-Person",
        "Co-op",
        "PvP",
        "Singleplayer",
        "Action",
        "Third Person",
      ]
    )
  );

  gameList.push(
    new game(
      `Gotham Knights`,
      `/assets/img/thumb/Gotham_Knights.webp`,
      [
        `/assets/img/preview/gotham_knights/pic_1.jpg`,
        `/assets/img/preview/gotham_knights/pic_2.jpg`,
        `/assets/img/preview/gotham_knights/pic_3.jpg`,
        `/assets/img/preview/gotham_knights/pic_4.jpg`,
        `/assets/img/preview/gotham_knights/pic_5.jpg`,
        `/assets/img/preview/gotham_knights/pic_6.jpg`,
        `/assets/img/preview/gotham_knights/pic_7.jpg`,
        `/assets/img/preview/gotham_knights/pic_8.jpg`,
        `/assets/img/preview/gotham_knights/pic_9.jpg`,
        `/assets/img/preview/gotham_knights/pic_10.jpg`,
      ],
      `/assets/img/game-banner/GK_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
      
Batman is dead. A new expansive, criminal underworld has swept the streets of Gotham City. It is now up to the Batman Family - Batgirl, Nightwing, Red Hood, and Robin - to protect Gotham, bring hope to its citizens, discipline to its cops, and fear to its criminals.
From solving mysteries that connect the darkest chapters in the city’s history to defeating notorious villains in epic confrontations.
      <img style="width: 100%" src="https://media.npr.org/assets/img/2022/10/20/gotham-knights-4_wide-ade015ae585d887e009b0df6f1550ad5b8cf4506-s1400-c100.jpg" alt="">

Gotham Knights is an open-world, action RPG set in the most dynamic and interactive Gotham City yet. Patrol Gotham’s five distinct boroughs in solo or in co-op and drop in on criminal activity wherever you find it.

Your legacy begins now. Step into the Knight.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i5-9600K (3.7 GHz) OR AMD Ryzen 5 3600 (3.60 GHz)
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1660 Ti OR AMD Radeon RX 590
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 45 GB available space
<span class="bold-text">Additional Notes</span>: 1080p / 60fps / Low Quality Settings

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i7-10700K (3.8 GHz) or AMD Ryzen 5 5600X (3.7 GHz)
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce RTX 2070 or AMD Radeon RX 5700 XT
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Additional Notes</span>: 1080p / 60fps / High Quality Settings

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Japanese, Korean, Polish, Simplified Chinese, Spanish - Latin America, Traditional Chinese, Portuguese - Brazil</span>
      `,
      990000,
      [
        "Action",
        "Singleplayer",
        "Adventure",
        "RPG",
        "Third Person",
        "Multiplayer",
        "Co-op",
      ]
    )
  );

  gameList.push(
    new game(
      `Thief Simulator 2`,
      `/assets/img/thumb/TS2.webp`,
      [
        `/assets/img/preview/ts2/pic_1.jpg`,
        `/assets/img/preview/ts2/pic_2.jpg`,
        `/assets/img/preview/ts2/pic_3.jpg`,
        `/assets/img/preview/ts2/pic_4.jpg`,
        `/assets/img/preview/ts2/pic_5.jpg`,
        `/assets/img/preview/ts2/pic_6.jpg`,
        `/assets/img/preview/ts2/pic_7.jpg`,
        `/assets/img/preview/ts2/pic_8.jpg`,
        `/assets/img/preview/ts2/pic_9.jpg`,
        `/assets/img/preview/ts2/pic_10.jpg`,
      ],
      `/assets/img/game-banner/TS2_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
      
Thief Simulator 2 will transport you to a world full of valuables, expensive cars, and rustling banknotes. As long as you find a way to steal them.
Know that a thief’s trade is not a piece of cake. In order to get some practice, you’ll start with petty theft. This is how you’ll gain the experience required to access more and more risky – and most importantly, more profitable – jobs.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1332720/extras/1.gif?t=1697531080" alt="">

Gain levels and unlock new possibilities. Get useful tools. Together with newly acquired skills, they will pave the way to expensive items, which you can then sell on the black market. The tools of your trade include a crowbar and binoculars, as well as advanced equipment that becomes available as you progress, such as a laptop for hacking through security systems.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1332720/extras/2.gif?t=1697531080" alt="">

The creators of Thief Simulator 2 have prepared two unique locations with houses, banks, restaurants, and other special places that you’ll get to strip of money, valuables, and other items. But before you do, examine the surroundings: find out when the building empties out, learn the tenants’ or the employees’ schedule. Then you just need to prepare a strategy and it’s gone time.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1332720/extras/3.gif?t=1697531080" alt="">

Just be quick and efficient. You don’t have much time, so you’ll need to immediately assess which item to take and which one to leave. Can you handle the pressure, or will you panic?

Make sure to work on cars between robbing buildings. Start with small family sedans and make gradual steps towards mastery, which will allow you to steal the coolest sports cars.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1332720/extras/4.gif?t=1697531080" alt="">

Remember to keep your eyes around your head. Even the best plan can fall apart, and the local police are just waiting for a chance to put you in handcuffs. Don’t get caught. Always be one step ahead of law enforcement.

<span class="blue-bold-text">Game Features</span>

■ Two neighborhoods, with over 20 houses to break into. Learn tenant's routines, pick the right time to break in, and then rob them

■ Three heists, each with a unique location. Make your way into a resort with 6 houses full of loot, a warehouse crawling with guards, and a central bank with gold waiting to be snatched from the vault.

■ Get better and better tools, ranging from a crowbar or binoculars to hacking laptops, stethoscopes, etc.

■ Make your way into houses undetected, or run in welding a baton and knock everyone out. Alternatively, put them to sleep using sleeping gas or a tranquilizer gun. The choice is up to you.

■ Payphone missions - rob certain locations in a specified amount of time

■ Over 15 contracts requiring you to steal unique items

■ Level up your thief and acquire new skills, which allow a number of new possibilities. Learn special skills, and activate unique abilities.

■ Escape the police - intense chases with police cars and helicopters. Be careful to not get shot.

■ Upgrade your car, change its color, give it more power - or just buy a sports car and be no match for the police.

■ Steal cars - begin with a small, family sedan, and work your way up to a sport's dream car

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7
<span class="bold-text">Processor</span>: Intel Core i3-6100 or equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 960 or equivalent
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 12 GB available space
<span class="bold-text">Sound Card</span>: DirectX compatible

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: Intel Core i5-8400 or equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1070 or equivalent
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Additional Notes</span>: DirectX compatible

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Simplified Chinese, Polish, Russian, Turkish, Japanese, Korean, Portuguese - Portugal, Ukrainian</span>
      `,
      260000,
      ["Singleplayer", "Action", "Adventure", "First-Person", "Casual"]
    )
  );

  gameList.push(
    new game(
      `Assassin's Creed® Origins`,
      `/assets/img/thumb/AC_Origins.webp`,
      [
        `/assets/img/preview/ac_origins/pic_1.jpg`,
        `/assets/img/preview/ac_origins/pic_2.jpg`,
        `/assets/img/preview/ac_origins/pic_3.jpg`,
        `/assets/img/preview/ac_origins/pic_4.jpg`,
        `/assets/img/preview/ac_origins/pic_5.jpg`,
        `/assets/img/preview/ac_origins/pic_6.jpg`,
      ],
      `/assets/img/game-banner/ACOrigins_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
 
<span class="bold-text">ASSASSIN’S CREED® ORIGINS IS A NEW BEGINNING</span>

*The Discovery Tour by Assassin’s Creed®: Ancient Egypt is available now as a free update!*

Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin’s Brotherhood.

<span class="green-bold-text">A COUNTRY TO DISCOVER</span>
Sail down the Nile, uncover the mysteries of the pyramids or fight your way against dangerous ancient factions and wild beasts as you explore this gigantic and unpredictable land.

<span class="green-bold-text">A NEW STORY EVERY TIME YOU PLAY</span>
Engage into multiple quests and gripping stories as you cross paths with strong and memorable characters, from the wealthiest high-born to the most desperate outcasts.

<span class="green-bold-text">EMBRACE ACTION-RPG</span>
Experience a completely new way to fight. Loot and use dozens of weapons with different characteristics and rarities. Explore deep progression mechanics and challenge your skills against unique and powerful bosses.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i5-2400s @ 2.5 GHz or AMD FX-6350 @ 3.9 GHz or equivalent
<span class="bold-text">Memory</span>: 6 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 660 or AMD R9 270 (2048 MB VRAM with Shader Model 5.0 or better)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 42 GB available space
<span class="bold-text">Additional Notes</span>: Video Preset: Lowest (720p). Game contains Denuvo (<a target=”_blank” class="desc-link" href="https://www.denuvo.com/">https://www.denuvo.com/</a>) and VMProtect (<a target=”_blank” class="desc-link" href="https://vmpsoft.com/support/user-manual/introduction/what-is-vmprotect/">https://vmpsoft.com/support/user-manual/introduction/what-is-vmprotect/</a>) anti-piracy technology.

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i7- 3770 @ 3.5 GHz or AMD FX-8350 @ 4.0 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 760 or AMD R9 280X (3GB VRAM with Shader Model 5.0 or better)
<span class="bold-text">Additional Notes</span>: Video Preset: High (1080p). Game contains Denuvo (<a target=”_blank” class="desc-link" href="https://www.denuvo.com/">https://www.denuvo.com/</a>) and VMProtect (<a class="desc-link" target=”_blank” href="https://vmpsoft.com/support/user-manual/introduction/what-is-vmprotect/">https://vmpsoft.com/support/user-manual/introduction/what-is-vmprotect/</a>) anti-piracy technology.

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Czech, Dutch, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese</span>
      `,
      990000,
      [
        "Action",
        "RPG",
        "Adventure",
        "Singleplayer",
        "Third Person",
        "Multiplayer",
        "Co-op",
      ]
    )
  );

  gameList.push(
    new game(
      `Assassin's Creed® Valhalla`,
      `/assets/img/thumb/Assassin_s_Creed_Valhalla.webp`,
      [
        `/assets/img/preview/AC_Valhalla/pic_1.jpg`,
        `/assets/img/preview/AC_Valhalla/pic_2.jpg`,
        `/assets/img/preview/AC_Valhalla/pic_3.jpg`,
        `/assets/img/preview/AC_Valhalla/pic_4.jpg`,
        `/assets/img/preview/AC_Valhalla/pic_5.jpg`,
      ],
      `/assets/img/game-banner/ACValhalla_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

<span class="green-bold-text">Become Eivor, a legendary Viking raider on a quest for glory.</span>

- Lead epic Viking raids against Saxon troops and fortresses.
- Relive the visceral fighting style of the Vikings as you dual-wield powerful weapons.
- Challenge yourself with the most varied collection of enemies ever in Assassin's Creed.
- Shape the growth of your character and your clan's settlement with every choice you make.
- Explore a Dark Age open world, from the harsh shores of Norway to the beautiful kingdoms of England.
        
Includes the Forgotten Saga, a FREE new rogue-lite game mode for all Assassin's Creed® Valhalla players.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (versions 64 bits uniquement)
<span class="bold-text">Processor</span>: AMD Ryzen 3 1200 3.1 GHz / Intel Core i5-4460 3.2 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: AMD R9 380 /NVIDIA GeForce GTX 960
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 160 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (versions 64 bits uniquement)
<span class="bold-text">Processor</span>: AMD Ryzen 5 1600 3.2 GHz / Intel Core i7-4790 3.6 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: AMD R9 380 /NVIDIA GeForce GTX 960
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 160 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Simplified Chinese, Traditional Chinese, Korean, Spanish - Latin America, Japanese, Polish, Portuguese - Brazil, Russian</span>
        `,
      990000,
      [
        "Action",
        "Adventure",
        "RPG",
        "Singleplayer",
        "Third Person",
        "Multiplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `It Takes Two`,
      `/assets/img/thumb/It_Takes_Two.webp`,
      [
        `/assets/img/preview/it2/pic_1.jpg`,
        `/assets/img/preview/it2/pic_2.jpg`,
        `/assets/img/preview/it2/pic_3.jpg`,
        `/assets/img/preview/it2/pic_4.jpg`,
        `/assets/img/preview/it2/pic_5.jpg`,
        `/assets/img/preview/it2/pic_6.jpg`,
        `/assets/img/preview/it2/pic_7.jpg`,
        `/assets/img/preview/it2/pic_8.jpg`,
      ],
      `/assets/img/game-banner/IT2_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
 
Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend’s Pass and work together across a huge variety of gleefully disruptive gameplay challenges. Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world where the unpredictable hides around every corner, they are reluctantly challenged with saving their fractured relationship.

Master unique and connected character abilities in every new level. Help each other across an abundance of unexpected obstacles and laugh-out-loud moments. Kick gangster squirrels’ furry tails, pilot a pair of underpants, DJ a buzzing night club, and bobsleigh through a magical snow globe. Embrace a heartfelt and hilarious story where narrative and gameplay weave into a uniquely metaphorical experience.

It Takes Two is developed by the award-winning studio Hazelight, the industry leader of cooperative play. They’re about to take you on a wild and wondrous ride where only one thing is for certain: we’re better together.

<span class="blue-bold-text">KEY FEATURES</span>

<span class="bold-text">Pure co-op perfection</span> — Invite a friend to join for free with Remote Play Together**, and experience a thrilling adventure built purely for two. Choose from couch or online co-op with split-screen play, and face ever-changing challenges where working together is the only way forward.

<span class="bold-text">Gleefully disruptive gameplay</span> — From rampaging vacuum cleaners to suave love gurus, you never know what you’ll be up against next. Filled with genre-bending challenges and new character abilities to master in every level, experience a metaphorical merging of gameplay and narrative that pushes the boundaries of interactive storytelling.

<span class="bold-text">A universal tale of relationships</span> — Discover a touching and heartfelt story of the challenges in getting along. Help Cody and May learn how to overcome their differences. Meet a diverse cast of strange and endearing characters. Join forces and go on an adventure you’ll treasure — together!
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1426210/extras/610px-ITT_AnimatedKeyArt_16x9.gif?t=1691006466" alt="">

<span class="blue-bold-text">ABOUT HAZELIGHT</span>
Hazelight is an award-winning independent game development studio based in Stockholm, Sweden. Founded in 2014 by Josef Fares (film director and creator of the award-winning game Brothers: A Tale of Two Sons), Hazelight is committed to pushing the creative boundaries of what is possible in games. In 2018, Hazelight released the BAFTA award-winning A Way Out — the first-ever co-op only, third-person action-adventure — as part of the EA Originals program.

<span class="blue-bold-text">ABOUT EA ORIGINALS</span>
EA Originals helps shine a light on some of the most passionate, independent, and talented game studios across the globe. Discover innovative and unforgettable gaming experiences from highly creative game makers who love to enchant and inspire.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 8.1 64-bit or Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i3-2100T or AMD FX 6100
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 660 or AMD R7 260x
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 50 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 8.1 64-bit or Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i5 3570K or AMD Ryzen 3 1300x
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: Nvidia GeForce GTX 980 or AMD R9 290X
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 50 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese</span>
      `,
      790000,
      ["Co-op", "Multiplayer", "Adventure", "3D Platformer", "Action"]
    )
  );

  gameList.push(
    new game(
      `Marvel’s Spider-Man Remastered`,
      `/assets/img/thumb/spidermanremaster.webp`,
      [
        `/assets/img/preview/Spider-man_Remastered/pic_1.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_2.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_3.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_4.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_5.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_6.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_7.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_8.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_9.jpg`,
        `/assets/img/preview/Spider-man_Remastered/pic_10.jpg`,
      ],
      `/assets/img/game-banner/Spider-man_Remastered_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Developed by Insomniac Games in collaboration with Marvel, and optimized for PC by Nixxes Software, Marvel's Spider-Man Remastered on PC introduces an experienced Peter Parker who’s fighting big crime and iconic villains in Marvel’s New York. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of Marvel’s New York rests upon his shoulders.

<span class="blue-bold-text">KEY FEATURES</span>
<span class="green-bold-text">Be Greater</span>
When iconic Marvel villains threaten Marvel’s New York, Peter Parker and Spider-Man’s worlds collide. To save the city and those he loves, he must rise up and be greater.

<span class="green-bold-text">Feel like Spider-Man</span>
After eight years behind the mask, Peter Parker is a crime-fighting master. Feel the full power of a more experienced Spider-Man with improvisational combat, dynamic acrobatics, fluid urban traversal and environmental interactions.

<span class="green-bold-text">Worlds collide</span>
The worlds of Peter Parker and Spider-Man collide in an original action-packed story. In this new Spider-Man universe, iconic characters from Peter and Spider-Man’s lives have been reimagined, placing familiar characters in unique roles.

<span class="green-bold-text">Marvel’s New York is your playground</span>
The Big Apple comes to life in Marvel’s Spider-Man. Swing through vibrant neighborhoods and catch breathtaking views of iconic Marvel and Manhattan landmarks. Use the environment to defeat villains with epic takedowns in true blockbuster action.

<span class="green-bold-text">Enjoy The City That Never Sleeps complete content</span>
Following the events of the main story of Marvel’s Spider-Man Remastered, experience the continuation of Peter Parker’s journey in Marvel’s Spider-Man: The City That Never Sleeps, three story chapters with additional missions and challenges to discover.

<span class="blue-bold-text">PC FEATURES</span>
<span class="green-bold-text">PC Optimized Graphics</span>
Enjoy a variety of graphics quality options to tailor to a wide range of devices, unlocked framerates, and support for other technologies including performance boosting NVIDIA DLSS and image quality enhancing NVIDIA DLAA. Upscaling technology AMD FSR 2.0 is also supported.

<span class="green-bold-text">Ray-traced reflections and improved shadows*</span>
See the city come to life with improved shadows and stunning ray-traced reflection options with a variety of quality modes to choose from.

<span class="green-bold-text">Ultra-wide Monitor support**</span>
Take in the cinematic sights of Marvel’s New York with support for a range of screen setups, including 16:9, 16:10, 21:9, 32:9, and 48:9 resolutions with triple monitor setups using NVIDIA Surround or AMD Eyefinity.
devil may cry 5
<span class="green-bold-text">Controls and Customization</span>
Feel what it’s like to play as Spider-Man through immersive haptic feedback and dynamic trigger effects using a PlayStation DualSense™ controller on a wired USB connection. Enjoy full mouse and keyboard support with various customizable control options.

<span style="font-style: italic">*Compatible PC required
**Compatible PC and display device required.</span>

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i3-4160, 3.6 GHz or AMD equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 950 or AMD Radeon RX 470
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 75 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i5-4670, 3.4 Ghz or AMD Ryzen5 1600, 3.2 Ghz
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 75 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Czech, Danish, Dutch, Finnish, Greek, Hungarian, Japanese, Korean, Norwegian, Polish, Portuguese - Portugal, Portuguese - Brazil, Russian, Spanish - Latin America, Swedish, Traditional Chinese</span>
      `,
      1399000,
      ["Action", "Singleplayer", "Adventure", "Third Person", "Multiplayer"]
    )
  );

  gameList.push(
    new game(
      `Devil May Cry 5`,
      `/assets/img/thumb/DMC5.webp`,
      [
        `/assets/img/preview/DMC5/pic_1.jpg`,
        `/assets/img/preview/DMC5/pic_2.jpg`,
        `/assets/img/preview/DMC5/pic_3.jpg`,
        `/assets/img/preview/DMC5/pic_4.jpg`,
        `/assets/img/preview/DMC5/pic_5.jpg`,
      ],
      `/assets/img/game-banner/DMC5_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
      
The Devil you know returns in this brand new entry in the over-the-top action series available on the PC. Prepare to get downright demonic with this signature blend of high-octane stylized action and otherworldly & original characters the series is known for. Director Hideaki Itsuno and the core team have returned to create the most insane, technically advanced and utterly unmissable action experience of this generation!

The threat of demonic power has returned to menace the world once again in <span class="bold-text">Devil May Cry 5</span>. The invasion begins when the seeds of a “demon tree” take root in Red Grave City. As this hellish incursion starts to take over the city, a young demon hunter Nero, arrives with his partner Nico in their “Devil May Cry” motorhome. Finding himself without the use of his right arm, Nero enlists Nico, a self-professed weapons artist, to design a variety of unique mechanical Devil Breaker arms to give him extra powers to take on evil demons such as the blood sucking flying Empusa and giant colossus enemy Goliath.

<span class="blue-bold-text">FEATURES</span>

<span class="bold-text">■ High octane stylized action</span> – Featuring three playable characters each with a radically different stylish combat play style as they take on the city overrun with demons

<span class="bold-text">■ Groundbreaking graphics</span> – Developed with Capcom’s in-house proprietary RE engine, the series continues to achieve new heights in fidelity with graphics that utilize photorealistic character designs and stunning lighting and environmental effects.

<span class="bold-text">■ Take down the demonic invasion</span> – Battle against epic bosses in adrenaline fueled fights across the over-run Red Grave City all to the beat of a truly killer soundtrack.

<span class="bold-text">■ Demon hunter</span> – Nero, one of the series main protagonists and a young demon hunter who has the blood of Sparda, heads to Red Grave City to face the hellish onslaught of demons, with weapons craftswoman and new partner-in-crime, Nico. Nero is also joined by stylish, legendary demon hunter, Dante and the mysterious new character, V.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: WINDOWS® 7, 8.1, 10 (64-BIT Required)
<span class="bold-text">Processor</span>: Intel® Core™ i5-4460, AMD FX™-6300, or better
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA® GeForce® GTX 760 or AMD Radeon™ R7 260x with 2GB Video RAM, or better
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 35 GB available space
<span class="bold-text">Addtional Notes</span>: *Xinput support Controllers recommended *Internet connection required for game activation. (Network connectivity uses Steam® developed by Valve® Corporation.)

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: WINDOWS® 7, 8.1, 10 (64-BIT Required)
<span class="bold-text">Processor</span>: Intel® Core™ i7-3770, AMD FX™-9590, or better
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA® GeForce® GTX 1060 with 6GB VRAM, AMD Radeon™ RX 480 with 8GB VRAM, or better
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 35 GB available space
<span class="bold-text">Additional Notes</span>: *Xinput support Controllers recommended *Internet connection required for game activation. (Network connectivity uses Steam® developed by Valve® Corporation.)

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Portuguese - Brazil, Polish, Russian, Simplified Chinese, Traditional Chinese, Japanese, Korean</span>
      `,
      705000,
      ["Action", "Third Person", "Singleplayer", "Multiplayer", "Adventure"]
    )
  );

  gameList.push(
    new game(
      `Cyberpunk 2077`,
      `/assets/img/thumb/Cyberpunk_2077.webp`,
      [
        `/assets/img/preview/2077/pic_1.jpg`,
        `/assets/img/preview/2077/pic_2.jpg`,
        `/assets/img/preview/2077/pic_3.jpg`,
        `/assets/img/preview/2077/pic_4.jpg`,
        `/assets/img/preview/2077/pic_5.jpg`,
        `/assets/img/preview/2077/pic_6.jpg`,
        `/assets/img/preview/2077/pic_7.jpg`,
        `/assets/img/preview/2077/pic_8.jpg`,
        `/assets/img/preview/2077/pic_9.jpg`,
        `/assets/img/preview/2077/pic_10.jpg`,
      ],
      `/assets/img/game-banner/2077_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/extras/UPDATE_2.0_600x225_EN.jpg?t=1698157654" alt="">

Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/extras/UPDATE_2.0_empty_600x225.jpg?t=1698157654" alt="">

<span class="green-bold-text">DISCOVER UPDATE 2.0</span>
Experience new and overhauled gameplay mechanics to fulfill your wildest cyberpunk fantasies. The free Update 2.0 brings brand new ways to play Cyberpunk 2077, including totally redesigned perks and cyberware systems, pulsating vehicle combat and car chases, a revamped police system, enhanced enemy combat AI, and more.

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/extras/NGU_CREATE_YOUR_OWN_CYBERPUNK_EN.png?t=1698157654" alt="">

<span class="green-bold-text">CREATE YOUR OWN CYBERPUNK</span>
Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.
      
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/extras/NGU_EXPLORE_THE_CITY_OF_FUTURE_EN.png?t=1698157654" alt="">

<span class="green-bold-text">EXPLORE THE CITY OF THE FUTURE</span>

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/extras/NGU_BUILD_YOUR_LEGEND_EN.png?t=1698157654" alt="">

<span class="green-bold-text">BUILD YOUR LEGEND</span>
Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/extras/NGU_EQUIPPED_WITH_IMPROVEMENTS_EN.png?t=1698157654" alt="">
      
<span class="green-bold-text">EQUIPPED WITH IMPROVEMENTS</span>
Experience Cyberpunk 2077 with a host of changes and improvements to gameplay and economy, the city, map usage, and more.

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/extras/NGU_INCLUDES_FREE_ADDITIONAL_CONTENT_EN.png?t=1698157654" alt="">

<span class="green-bold-text">CLAIM EXCLUSIVE ITEMS</span>
Claim in-game swag & digital goodies inspired by CD PROJEKT RED games as part of the My Rewards program.

GO TO <a class="desc-link" target="_blank" href="https://www.cyberpunk.net/vn/en/">CYBERPUNK.NET</a>
      
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/extras/06._Social-Media_EN.png?t=1698157654" alt="">

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Windows 10
<span class="bold-text">Processor</span>: Core i7-6700 or Ryzen 5 1600
<span class="bold-text">Memory</span>: 12 GB RAM
<span class="bold-text">Graphics</span>: GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 70 GB available space
<span class="bold-text">Addtional Notes</span>: SSD required. Attention: In this game you will encounter a variety of visual effects that may provide seizures or loss of consciousness in a minority of people. If you or someone you know experiences any of the above symptoms while playing, stop and seek medical attention immediately.

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Windows 10
<span class="bold-text">Processor</span>: Core i7-12700 or Ryzen 7 7800X3D
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Storage</span>: 70 GB available space
<span class="bold-text">Additional Notes</span>: SSD required.

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Czech, Hungarian, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Spanish - Latin America, Thai, Traditionla Chinese, Turkish, Ukrainian</span>
      `,
      990000,
      ["RPG", "Singleplayer", "FPS", "First-Person", "Action", "Adventure"]
    )
  );

  gameList.push(
    new game(
      `Assassin's Creed Unity`,
      `/assets/img/thumb/Assassin's_Creed_Unity.webp`,
      [
        `/assets/img/preview/AC_Unity/pic_1.jpg`,
        `/assets/img/preview/AC_Unity/pic_2.jpg`,
        `/assets/img/preview/AC_Unity/pic_3.jpg`,
        `/assets/img/preview/AC_Unity/pic_4.jpg`,
        `/assets/img/preview/AC_Unity/pic_5.jpg`,
        `/assets/img/preview/AC_Unity/pic_6.jpg`,
      ],
      `/assets/img/game-banner/ACUnity_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

<span class="bold-text">Assassin’s Creed® Unity</span>   is an action/adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customising Arno's equipement to make the experience unique to you, both visually and mechanically. In addition to an epic single-player experience, Assassin’s Creed Unity delivers the excitement of playing with up to three friends through online cooperative gameplay in specific missions. Throughout the game, take part in one of the most pivotal moments of French history in a compelling storyline and a breath-taking playground that brought you the city of lights of today.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i5-2500K @ 3.3 GHz or AMD FX-8350 @ 4.0 GHz
<span class="bold-text">Memory</span>: 6 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 680 or AMD Radeon HD 7970 (2 GB VRAM)
<span class="bold-text">Storage</span>: 50 GB available space
<span class="bold-text">Sound Card</span>: DirectX 9.0c compatible sound card with latest drivers
<span class="bold-text">Addtional Notes</span>: Windows-compatible keyboard and mouse required, optional controller

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i7-3770 @ 3.4 GHz or AMD FX-8350 @ 4.0 GHz or better
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 780 or AMD Radeon R9 290X (3 GB VRAM)
<span class="bold-text">Storage</span>: 50 GB available space
<span class="bold-text">Sound Card</span>: DirectX 9.0c compatible sound card with latest drivers
<span class="bold-text">Additional Notes</span>: Supported video cards at the time of release: NVIDIA GeForce GTX 680 or better, GeForce GTX 700 series; AMD Radeon HD7970 or better, Radeon R9 200 series Note: Laptop versions of these cards may work but are NOT officially supported.

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Czech, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Traditional Chinese, Dutch</span>
      `,
      495000,
      [
        "Co-op",
        "Action",
        "Adventure",
        "Multiplayer",
        "Third Person",
        "Singleplayer",
        "RPG",
      ]
    )
  );

  gameList.push(
    new game(
      `Days Gone`,
      `/assets/img/thumb/DG.webp`,
      [
        `/assets/img/preview/DG/pic_1.jpg`,
        `/assets/img/preview/DG/pic_2.jpg`,
        `/assets/img/preview/DG/pic_3.jpg`,
        `/assets/img/preview/DG/pic_4.jpg`,
        `/assets/img/preview/DG/pic_5.jpg`,
        `/assets/img/preview/DG/pic_6.jpg`,
        `/assets/img/preview/DG/pic_7.jpg`,
        `/assets/img/preview/DG/pic_8.jpg`,
        `/assets/img/preview/DG/pic_9.jpg`,
        `/assets/img/preview/DG/pic_10.jpg`,
      ],
      `/assets/img/game-banner/DG_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
 
Days Gone is an open-world action-adventure game set in a harsh wilderness two years after a devastating global pandemic.

Step into the dirt flecked shoes of former outlaw biker Deacon St. John, a bounty hunter trying to find a reason to live in a land surrounded by death. Scavenge through abandoned settlements for equipment to craft valuable items and weapons, or take your chances with other survivors trying to eke out a living through fair trade… or more violent means.

<span class="blue-bold-text">KEY FEATURES</span>

<span class="bold-text">• A striking setting</span>: From forests and meadows, to snowy plains and desert lava fields, the Pacific Northwest is both beautiful and lethal. Explore a variety of mountains, caves, mines and small rural towns, scarred by millions of years of volcanic activity.

<span class="bold-text">• Brutal encounters</span>: With vicious gangs and hordes of Freakers roaming the land, you’ll need to make full use of a variety of customizable traps, weapons, and upgradable skills to stay alive. Don’t forget your Drifter bike, an invaluable tool in a vast land.

<span class="bold-text">• An ever-changing environment</span>: Jump on the saddle of Deacon’s trusty motorbike and explore a dynamic world dramatically affected by the weather, a dramatic day/night cycle and the evolving Freakers, who adjust to their surroundings – and the people in it.

<span class="bold-text">• A compelling story</span>: Lose yourself in a powerful tale of desperation, betrayal and regret, as Deacon St. John searches for hope after suffering a deep, personal loss. What makes us human when faced with the daily struggle for survival?

<span class="blue-bold-text">INCLUDES</span>

• New Game Plus

• Survival Mode

• Challenge Mode

• Bike Skins

PC features include ultra-wide monitor support, unlocked framerates and improved graphics (increased level of details, field of view, foliage draw distances).

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bits
<span class="bold-text">Processor</span>: Intel Core i5-2500K@3.3GHz or AMD FX 6300@3.5GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 780 (3 GB) or AMD Radeon R9 290 (4 GB)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 70 GB available space
<span class="bold-text">Addtional Notes</span>: Though not required, SSD for storage and 16 GB of memory is recommended

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bits
<span class="bold-text">Processor</span>: Intel Core i7-4770K@3.5GHz or Ryzen 5 1500X@3.5GHz
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1060 (6 GB) or AMD Radeon RX 580 (8 GB)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 70 GB available space
<span class="bold-text">Additional Notes</span>: Though not required, SSD for storage is recommended

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Korean, Portuguese - Portugal, Portuguese - Brazil, Arabic, Czech, Danish, Dutch, Finnish, Greek, Hungarian, Norwegian, Polish, Russian, Spanish - Latin America, Swedish, Traditional Chinese, Turkish, Japanese</span>
      `,
      1159000,
      [
        "Singleplayer",
        "Survival",
        "Multiplayer",
        "Action",
        "Third Person",
        "Adventure",
        "Horror",
      ]
    )
  );

  gameList.push(
    new game(
      `Risk of Rain 2`,
      `/assets/img/thumb/RoR2.webp`,
      [
        `/assets/img/preview/ror2/pic_1.jpg`,
        `/assets/img/preview/ror2/pic_2.jpg`,
        `/assets/img/preview/ror2/pic_3.jpg`,
        `/assets/img/preview/ror2/pic_4.jpg`,
        `/assets/img/preview/ror2/pic_5.jpg`,
        `/assets/img/preview/ror2/pic_6.jpg`,
      ],
      `/assets/img/game-banner/RoR2_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/632360/extras/Impact_gifprevid_643.gif?t=1692118669" alt="">

<span class="green-bold-text">SURVIVE AN ALIEN PLANET</span>
Over a dozen handcrafted locales await, each packed with challenging monsters and enormous bosses that oppose your continued existence. Fight your way to the final boss and escape or continue your run indefinitely to see just how long you can survive. A unique scaling system means both you and your foes limitlessly increase in power over the course of a game.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/632360/extras/magmaworm_643.gif?t=1692118669" alt="">

<span class="green-bold-text">DISCOVER POWERFUL NEW ITEMS</span>
More than 110 items keep each run fresh and full of new challenge. The more items you collect, the more their effects combine, the more surprising some of those combinations might be. The more items you encounter, the more lore (and strategy) you’ll discover through the logs.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/632360/extras/NewCharacterScreen_Optimized.gif?t=1692118669" alt="">

<span class="green-bold-text">UNLOCK NEW WAYS TO PLAY</span>
Unlock a crew of eleven playable survivors, each with their own unique combat style and alternate skills to master. Learn the secrets of the Artifacts to toggle gameplay modifiers like friendly fire, random survivor spawns, item selection and more. With randomized stages, enemies, and items, no run will ever be the same.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/632360/extras/SteamQuoteBanner.png?t=1692118669" alt="">

<span class="green-bold-text">PLAY SOLO OR CO-OP</span>
Tackle the adventure solo or with up to three friends in online co-op, or compete in the rotating challenge of the Prismatic Trials. Brand new survivors like the Captain and MUL-T join classic survivors such as the Engineer, Huntress, and--of course--the Commando.
      <img style="width: 100%" src="https://cdn.akamai.steamstatic.com/steam/apps/632360/extras/SteamDiscordBanner_2.png?t=1692118669" alt="">

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 or newer, 64-bit
<span class="bold-text">Processor</span>: Intel Core i3-6100 / AMD FX-8350
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: GTX 580 / AMD HD 7870
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 4 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 or newer, 64-bit
<span class="bold-text">Processor</span>: Intel Core i5-4670K / AMD Ryzen 5 1500X
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: GTX 680 / AMD HD 7970
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 4 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanes, Korean, Portuguese - Brazil, Russi, Simplified Chinese, Turkish</span>
      `,
      220000,
      [
        "Multiplayer",
        "Co-op",
        "Action",
        "Shooter",
        "Third Person",
        "Survival",
        "Singleplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Terraria`,
      `/assets/img/thumb/Terraria.webp`,
      [
        `/assets/img/preview/terraria/pic_1.jpg`,
        `/assets/img/preview/terraria/pic_2.jpg`,
        `/assets/img/preview/terraria/pic_3.jpg`,
        `/assets/img/preview/terraria/pic_4.jpg`,
        `/assets/img/preview/terraria/pic_5.jpg`,
        `/assets/img/preview/terraria/pic_6.jpg`,
        `/assets/img/preview/terraria/pic_7.jpg`,
        `/assets/img/preview/terraria/pic_8.jpg`,
        `/assets/img/preview/terraria/pic_9.jpg`,
      ],
      `/assets/img/game-banner/Terraria_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory. Will you delve deep into cavernous expanses in search of treasure and raw materials with which to craft ever-evolving gear, machinery, and aesthetics? Perhaps you will choose instead to seek out ever-greater foes to test your mettle in combat? Maybe you will decide to construct your own city to house the host of mysterious allies you may encounter along your travels?

In the World of Terraria, the choice is yours!

Blending elements of classic action games with the freedom of sandbox-style creativity, Terraria is a unique gaming experience where both the journey and the destination are completely in the player’s control. The Terraria adventure is truly as unique as the players themselves!

Are you up for the monumental task of exploring, creating, and defending a world of your own?

<span class="blue-bold-text">KEY FEATURES</span>

■ Sandbox Play

■ Randomly generated worlds

■ Free Content Updates

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>

<span class="yellow-bold-text">● Windows</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows Xp, Vista, 7, 8/8.1, 10
<span class="bold-text">Processor</span>: 2.0 Ghz
<span class="bold-text">Memory</span>: 2.5 GB RAM
<span class="bold-text">Graphics</span>: 128mb Video Memory, capable of Shader Model 2.0+
<span class="bold-text">DirectX</span>: 9.0c or Greater
<span class="bold-text">Storage</span>: 200 MB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7, 8/8.1, 10
<span class="bold-text">Processor</span>: Dual Core 3.0 Ghz
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: 256mb Video Memory, capable of Shader Model 2.0+
<span class="bold-text">DirectX</span>: 9.0c or Greater
<span class="bold-text">Storage</span>: 200 MB available space

<span class="yellow-bold-text">● macOS</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: OSX 10.9.5 - 10.11.6
<span class="bold-text">Processor</span>: 2.0 Ghz
<span class="bold-text">Memory</span>: 2.5 GB RAM
<span class="bold-text">Storage</span>: 200 MB available space
<span class="bold-text">Graphics</span>: 128mb Video Memory, capable of OpenGL 3.0+ support (2.1 with ARB extensions acceptable)

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: OSX 10.9.5 - 10.11.6
<span class="bold-text">Processor</span>: Dual Core 3.0 Ghz
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Storage</span>: 200 MB available space
<span class="bold-text">Graphics</span>: 256mb Video Memory, capable of OpenGL 3.0+ support (2.1 with ARB extensions acceptable_

<span class="yellow-bold-text">● Linux</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Ubuntu 14.04 LTS
<span class="bold-text">Processor</span>: 2.0 Ghz
<span class="bold-text">Memory</span>: 2.5 GB RAM
<span class="bold-text">Storage</span>: 200 MB available space
<span class="bold-text">Graphics</span>: 128mb Video Memory, capable of OpenGL 3.0+ support (2.1 with ARB extensions acceptable)

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Ubuntu 14.04 LTS
<span class="bold-text">Processor</span>: Dual Core 3.0 Ghz
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Storage</span>: 200 MB available space
<span class="bold-text">Graphics</span>: 256mb Video Memory, capable of OpenGL 3.0+ support (2.1 with ARB extensions acceptable)

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain	, Polish, Portuguese - Brazi, Russian, Simplified Chinese</span>
      `,
      142000,
      [
        "Survival",
        "2D",
        "Multiplayer",
        "Adventure",
        "Co-op",
        "Action",
        "RPG",
        "Singleplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `PAYDAY 2`,
      `/assets/img/thumb/PAYDAY_2.webp`,
      [
        `/assets/img/preview/payday_2/pic_1.jpg`,
        `/assets/img/preview/payday_2/pic_2.jpg`,
        `/assets/img/preview/payday_2/pic_3.jpg`,
        `/assets/img/preview/payday_2/pic_4.jpg`,
        `/assets/img/preview/payday_2/pic_5.jpg`,
        `/assets/img/preview/payday_2/pic_6.jpg`,
        `/assets/img/preview/payday_2/pic_7.jpg`,
        `/assets/img/preview/payday_2/pic_8.jpg`,
        `/assets/img/preview/payday_2/pic_9.jpg`,
        `/assets/img/preview/payday_2/pic_10.jpg`,
      ],
      `/assets/img/game-banner/PAYDAY_2_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.

The CRIMENET network offers a huge range of dynamic contracts, and players are free to choose anything from small-time convenience store hits or kidnappings, to big league cyber-crime or emptying out major bank vaults for that epic PAYDAY. While in DC, why not participate in the local community, and run a few political errands?

Up to four friends co-operate on the hits, and as the crew progresses the jobs become bigger, better and more rewarding. Along with earning more money and becoming a legendary criminal comes a character customization and crafting system that lets crews build and customize their own guns and gear.

<span class="blue-bold-text">KEY FEATURES</span>

<span class="bold-text">■ Rob Banks, Get Paid</span> – Players must choose their crew carefully, because when the job goes down they will need the right mix of skills on their side.

<span class="bold-text">■ CRIMENET</span> – The dynamic contract database lets gamers pick and choose from available jobs by connecting with local contacts such as Vlad the Ukrainian, shady politician "The Elephant", and South American drug trafficker Hector, all with their own agenda and best interests in mind.

<span class="bold-text">■ PAYDAY Gunplay and Mechanics on a New Level</span> – Firing weapons and zip tying civilians never felt so good.

<span class="bold-text">■ Dynamic Scenarios</span> – No heist ever plays out the same way twice. Every single scenario has random geometry or even rare events.

<span class="bold-text">■ Choose Your Skills</span> – As players progress they can invest in any of five special Skill Trees: Mastermind, Enforcer, Ghost, Technician and Fugitive. Each features a deep customization tree of associated skills and equipment to master, and they can be mixed and matched to create the ultimate heister.

<span class="bold-text">■ More Masks than Ever</span> – PAYDAY 2 features a completely new mask system, giving players the ability to craft their own unique mask with a pattern and color of their choice, resulting in millions of different combinations.

<span class="bold-text">■ Weapons and Modifications</span> – A brand new arsenal for the serious heister, covering everything from sniper and assault rifles to compact PDWs and SMGs. Once you've settled for a favorite, you can modify it with optics, suppressors, fore grips, reticles, barrels, frames, stocks and more, all of which will affect the performance of your weapon. There are also purely aesthetic enhancements - why not go for the drug lord look with polished walnut grips for your nine?

<span class="bold-text">■ Play It Your Way</span> – Each job allows for multiple approaches, such as slow and stealthy ambushes or running in guns blazing. Hit the target any way you want, each approach will provide a different experience.

<span class="bold-text">■ A Long History of Additional Content</span> – More than 70 updates since release, including new heists, characters, weapons and other gameplay features like driving cars and forklifts.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7
<span class="bold-text">Processor</span>: 2 GHz Intel Dual Core Processor
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA & AMD (512MB VRAM)
<span class="bold-text">DirectX</span>: Version 9.0c
<span class="bold-text">Storage</span>: 83 GB available space
<span class="bold-text">VR Support</span>: SteamVR. Standing or Room Scale

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: 2.3 GHz Intel Quad Core Processor
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA & AMD (1GB VRAM)
<span class="bold-text">DirectX</span>: Version 9.0c
<span class="bold-text">Storage</span>: 83 GB available space
<span class="bold-text">VR Support</span>: SteamVR. Standing or Room Scale

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, German, French, Italian, Spanish - Spain, Dutch, Russian, Japanese, Simplified Chinese, Spanish - Latin America, Korean, Polish</span>
      `,
      142000,
      [
        "Co-op",
        "Action",
        "FPS",
        "Multiplayer",
        "Shooter",
        "First-Person",
        "PvE",
        "Singleplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Devil May Cry 4`,
      `/assets/img/thumb/DMC4.webp`,
      [
        `/assets/img/preview/DMC4/pic_1.jpg`,
        `/assets/img/preview/DMC4/pic_2.jpg`,
        `/assets/img/preview/DMC4/pic_3.jpg`,
        `/assets/img/preview/DMC4/pic_4.jpg`,
        `/assets/img/preview/DMC4/pic_5.jpg`,
        `/assets/img/preview/DMC4/pic_6.jpg`,
        `/assets/img/preview/DMC4/pic_7.jpg`,
        `/assets/img/preview/DMC4/pic_8.jpg`,
        `/assets/img/preview/DMC4/pic_9.jpg`,
        `/assets/img/preview/DMC4/pic_10.jpg`,
      ],
      `/assets/img/game-banner/DMC4_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
      
From the producer of the original Devil May Cry® and Resident Evil® 4 comes the next installment in the hugely successful stylized action series that has so far achieved global sales of nearly seven million units.

Devil May Cry® 4 immerses gamers in a gothic supernatural world, where a new protagonist clashes with a familiar hero. As the new leading man, Nero, players will unleash incredible attacks and non-stop combos using a unique new gameplay mechanic, his powerful "Devil Bringer" arm.

With the advanced graphical capabilities of the PC, high definition visuals and intricate detail come to life as players explore new and exotic locales. Dynamic action and undeniable style combine with explosive fighting options and a gripping story to produce the incomparable experience that only a Devil May Cry game can deliver.

<span class="blue-bold-text">EXCLUSIVE PC FEATURES</span>

■ Turbo mode will turn-up the action to insane speeds

■ "Legendary Dark Knight Mode" will harness advanced PC processing power and fill the screen with an unbelievable number of enemies for extra difficulty

■ Familiar enemies from the console versions will show-up in new locations

■ High resolution screen settings allow the cut scenes of the game to run at up to 120 frames per second (up from 60 frames per second)

■ Benchmark Testing lets users test PC performance to run DMC4 through a series of intense boss fights

■ PC Settings allow you to customize graphic resolutions, texture sizes, and a frame rate in accordance with your PC

■ Compatible with Games for Windows, DirectX 9 and DirectX 10.

<span class="blue-bold-text">KEY GAME FEATURES</span>

■ Blend of familiar and new: newcomer Nero clashes with veteran Dante

■ New characters and environments

■ Signature blend of guns and swordplay

■ Deep combo system rewards stylish dispatching of enemies

■ Unique "Devil Bringer" arm opens up a range of combo options

■ Distinct set of weaponry and moves for Nero and Dante

■ Exceed System allows Nero to charge up his sword with a throttle effect, revving up to three levels with powerful attack options

■ New active style change system for Dante allows him to switch styles and weapons on the fly, producing crazy combo possibilities

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows XP Service Pack 2
<span class="bold-text">Processor</span>: Intel 4 Pentium processor or better
<span class="bold-text">Memory</span>: 512MB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce 6600 series or better
<span class="bold-text">Storage</span>: 8 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows Vista
<span class="bold-text">Processor</span>: Intel Core 2 Duo processor or better
<span class="bold-text">Memory</span>: 1 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce 8600 series or better
<span class="bold-text">Storage</span>: 8 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English</span>
      `,
      276000,
      ["Action", "Adventure", "Singleplayer", "Third Person", "RPG"]
    )
  );

  gameList.push(
    new game(
      `Stardew Valley`,
      `/assets/img/thumb/SV.webp`,
      [
        `/assets/img/preview/Stardew_Valley/pic_1.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_2.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_3.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_4.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_5.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_6.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_7.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_8.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_9.jpg`,
        `/assets/img/preview/Stardew_Valley/pic_10.jpg`,
      ],
      `/assets/img/game-banner/Stardew_Valley_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Stardew Valley is an open-ended country-life RPG!
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/extras/animalStrip2.png?t=1666917466" alt="">

You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!

<span class="blue-bold-text">FEATURES</span>
<span class="bold-text">Turn your overgrown field into a lively farm!</span> Raise animals, grow crops, start an orchard, craft useful machines, and more! You'll have plenty of space to create the farm of your dreams.

<span class="bold-text">4 Player Farming!</span> Invite 1-3 players to join you in the valley online! Players can work together to build a thriving farm, share resources, and improve the local community. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience.

<span class="bold-text">Improve your skills over time</span>. As you make your way from a struggling greenhorn to a master farmer, you'll level up in 5 different areas: farming, mining, combat, fishing, and foraging. As you progress, you'll learn new cooking and crafting recipes, unlock new areas to explore, and customize your skills by choosing from a variety of professions.

<span class="bold-text">Become part of the local community</span>. With over 30 unique characters living in Stardew Valley, you won't have a problem finding new friends! Each person has their own daily schedule, birthday, unique mini-cutscenes, and new things to say throughout the week and year. As you make friends with them, they will open up to you, ask you for help with their personal troubles, or tell you their secrets! Take part in seasonal festivals such as the luau, haunted maze, and feast of the winter star.

<span class="bold-text">Explore a vast, mysterious cave</span>. As you travel deeper underground, you'll encounter new and dangerous monsters, powerful weapons, new environments, valuable gemstones, raw materials for crafting and upgrading tools, and mysteries to be uncovered.

<span class="bold-text">Breathe new life into the valley</span>. Since JojaMart opened, the old way of life in Stardew Valley has changed. Much of the town's infrastructure has fallen into disrepair. Help restore Stardew Valley to it's former glory by repairing the old community center, or take the alternate route and join forces with Joja Corporation.

<span class="bold-text">Court and marry a partner to share your life on the farm with</span>. There are 12 available bachelors and bachelorettes to woo, each with unique character progression cutscenes. Once married, your partner will live on the farm with you. Who knows, maybe you'll have kids and start a family?

<span class="bold-text">Spend a relaxing afternoon at one of the local fishing spots</span>. The waters are teeming with seasonal varieties of delicious fish. Craft bait, bobbers, and crab pots to help you in your journey toward catching every fish and becoming a local legend!

<span class="bold-text">Donate artifacts and minerals to the local museum.</span>

<span class="bold-text">Cook delicious meals and craft useful items to help you out</span>. With over 100 cooking and crafting recipes, you'll have a wide variety of items to create. Some dishes you cook will even give you temporary boosts to skills, running speed, or combat prowess. Craft useful objects like scarecrows, oil makers, furnaces, or even the rare and expensive crystalarium.

<span class="bold-text">Customize the appearance of your character and house</span>. With hundreds of decorative items to choose from, you'll have no trouble creating the home of your dreams!

<span class="bold-text">Xbox controller support (with rumble)! (Keyboard still required for text input)</span>

<span class="bold-text">Over two hours of original music.</span>

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>

<span class="yellow-bold-text">● Windows</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows Vista or greater
<span class="bold-text">Processor</span>: 2.0 Ghz
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: 256 mb video memory, shader model 3.0+
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 500 MB available space

<span class="yellow-bold-text">● macOS</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Mac OSX 10.10+
<span class="bold-text">Processor</span>: 2.0 Ghz
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: 256 mb video memory, OpenGL 2
<span class="bold-text">Storage</span>: 500 MB available space

<span class="yellow-bold-text">● Linux</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Ubuntu 12.04 LTS
<span class="bold-text">Processor</span>: 2.0 Ghz
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: 256 mb video memory, OpenGL 2
<span class="bold-text">Storage</span>: 500 MB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">Englis, Germa, Spanish - Spai, Japanes, Portuguese - Brazil, Russia, Simplified Chines, French, Italian, Hungarian, Korean, Turkish</span>
      `,
      165000,
      ["Multiplayer", "RPG", "Singleplayer", "Casual", "2D", "Fishing"]
    )
  );

  gameList.push(
    new game(
      `The Last of Us™ Part I`,
      `/assets/img/thumb/TLOUI.webp`,
      [
        `/assets/img/preview/TLOU/pic_1.jpg`,
        `/assets/img/preview/TLOU/pic_2.jpg`,
        `/assets/img/preview/TLOU/pic_3.jpg`,
        `/assets/img/preview/TLOU/pic_4.jpg`,
        `/assets/img/preview/TLOU/pic_5.jpg`,
        `/assets/img/preview/TLOU/pic_6.jpg`,
        `/assets/img/preview/TLOU/pic_7.jpg`,
        `/assets/img/preview/TLOU/pic_8.jpg`,
        `/assets/img/preview/TLOU/pic_9.jpg`,
        `/assets/img/preview/TLOU/pic_10.jpg`,
        `/assets/img/preview/TLOU/pic_11.jpg`,
      ],
      `/assets/img/game-banner/TLOU_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/extras/d20220516_TLOUX_Annouce_Stills_9_WM_STEAM.png?t=1697567304" alt="">

Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.

In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey.

      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/extras/d20220516_TLOUPTI_LAUNCH_Stills_10_WM_STEAM.png?t=1697567304" alt="">

Includes the complete The Last of Us single-player story and celebrated prequel chapter, Left Behind, which explores the events that changed the lives of Ellie and her best friend Riley forever.

<span class="blue-bold-text">Built for PC</span>
The Last of Us Part I PC release brings with it plenty of PC features to bring Joel and Ellie’s tense and unforgettable journey to life. This version of The Last of Us Part I is optimized for PC with PC-centric quality-of-life enhancements. Part I will feature AMD FSR 2.2 support*, Nvidia DLSS Super Resolution support*, VSync and frame rate cap options, and a host of features designed specifically for PC, including adjustable Texture Quality, Shadows, Reflections, Ambient Occlusion, and more.

Through the experiences of Joel and Ellie, PC players can fully immerse themselves in beautiful yet haunting environments in stunning detail with true 4K resolutions**. From the harsh, oppressive streets of the Boston QZ to the overgrown and abandoned homes of Bill’s Town to so much more, embark on a beautiful journey across the United States of America with Ultra-Wide Monitor Support for both 21:9 Ultrawide and 32:9 Super Ultrawide aspect ratios.

Experience all these locations, stealthily sneaking through abandoned homes and cities (and picking their drawers and cabinets clean looking for supplies) or engage in tense, captivating action with 3D audio support to better hear the rustle of leaves, the crack of glass, or the footfalls of enemies trying to ambush you***.

<span class="blue-bold-text">AMD Fidelity FX Super Resolution 2</span>
Supercharge your framerates and fight for survival as Joel and Ellie with next-level temporal upscaling technology from AMD. FSR 2 uses cutting-edge algorithms to boost your framerates and deliver high-quality, high-resolution game experiences in The Last of Us Part I across a wide range of compatible graphics cards.

<span class="blue-bold-text">Peripheral Support</span>
The Last of Us Part I on PC features DualSense support through a wired connection so players can feel the impact of battle, the rumble of a tank rolling by, and so much more through haptic feedback and dynamic triggers. With support for the DualShock 4 controller, a wide range of other gamepads, and keyboard and mouse, players can adjust their playstyle to suit their preferences. The PC release includes a number of new control customization options including full control remapping, primary and secondary bindings for keyboard and mouse control, an adaptive mode that allows players to combine keyboard and controller inputs, and more. Part I’s PC launch will also include The Last of Us Part I’s suite of accessibility features so that players can adjust the experience to suit their needs and preferences.

<span style="font-style: italic">* Compatible PC and graphics card required for enhanced graphics.
** Compatible PC, graphics card, and 4K display device required.
*** 3D Audio requires stereo headphones or compatible speakers.</span>

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (Version 1909 or Newer)
<span class="bold-text">Processor</span>: AMD Ryzen 5 1500X, Intel Core i7-4770K
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon RX 470 (4 GB), AMD Radeon RX 6500 XT (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce GTX 1050 Ti (4 GB)
<span class="bold-text">Storage</span>: 100 GB available space
<span class="bold-text">Additional Notes</span>: SSD Recommended

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (Version 1909 or Newer)
<span class="bold-text">Processor</span>: AMD Ryzen 5 3600X, Intel Core i7-8700
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)
<span class="bold-text">Storage</span>: 100 GB available space
<span class="bold-text">Additional Notes</span>: SSD Recommended

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, Italian , Spanish - Spain, Czech, Dutch, Greek, French, German, Danish, Finnish, Hungarian, Japanese, Korean, Norwegian, Polish, Portuguese - Brazil, Portuguese - Portugal, Russian, Simplified Chinese, Spanish - Latin America, Swedish, Thai, Traditional Chinese, Turkish, Croatian</span>
      `,
      1399000,
      [
        "Singleplayer",
        "Action",
        "Adventure",
        "Third Person",
        "Horror",
        "Multiplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Cuphead`,
      `/assets/img/thumb/Cuphead.webp`,
      [
        `/assets/img/preview/cuphead/pic_1.jpg`,
        `/assets/img/preview/cuphead/pic_2.jpg`,
        `/assets/img/preview/cuphead/pic_3.jpg`,
        `/assets/img/preview/cuphead/pic_4.jpg`,
        `/assets/img/preview/cuphead/pic_5.jpg`,
        `/assets/img/preview/cuphead/pic_6.jpg`,
        `/assets/img/preview/cuphead/pic_7.jpg`,
        `/assets/img/preview/cuphead/pic_8.jpg`,
        `/assets/img/preview/cuphead/pic_9.jpg`,
      ],
      `/assets/img/game-banner/cuphead_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/extras/cuphead_game_about_header_optimized.gif?t=1695655205" alt="">
Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.

Play as Cuphead or Mugman (in single player or local co-op) as you traverse strange worlds, acquire new weapons, learn powerful super moves, and discover hidden secrets while you try to pay your debt back to the devil!

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>

<span class="yellow-bold-text">● Windows</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7
<span class="bold-text">Processor</span>: Intel Core2 Duo E8400, 3.0GHz or AMD Athlon 64 X2 6000+, 3.0GHz or higher
<span class="bold-text">Memory</span>: 3 GB RAM
<span class="bold-text">Graphics</span>: Geforce 9600 GT or AMD HD 3870 512MB or higher
<span class="bold-text">DirectX</span>: 11
<span class="bold-text">Storage</span>: 4 GB available space

<span class="yellow-bold-text">● macOS</span>

<span class="green-bold-text">Minimum:</span>
<span class="bold-text">OS</span>: OS X 10.11.x
<span class="bold-text">Processor</span>: Intel Core i5 or higher
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: Intel HD Graphics 4000 or higher (requires Metal)
<span class="bold-text">Storage</span>: 4 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, Germa, Spanish - Spain</span>
      `,
      188000,
      ["Co-op", "2D", "Multiplayer", "Action", "Singleplayer"]
    )
  );

  gameList.push(
    new game(
      `Fears to Fathom - Carson House`,
      `/assets/img/thumb/FTFT_Carson_House.webp`,
      [
        `/assets/img/preview/FTFT_Carson_House/pic_1.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_2.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_3.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_4.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_5.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_6.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_7.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_8.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_9.jpg`,
        `/assets/img/preview/FTFT_Carson_House/pic_10.jpg`,
      ],
      `/assets/img/game-banner/FTFT-Carson_House_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

<span class="bold-text">Fears to Fathom is an episodic psychological horror game where each episode unveils a short story narrated by the ones who survived.</span>

You're browsing the third installment of the Fears to Fathom anthology.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/2120900/extras/FINAL_FINAL_CAUSE_SMALL.gif?t=1697813849" alt="">

<span class="blue-bold-text">Fears to Fathom: Carson House</span>

In the third episode of Fears to Fathom you play as Noah Baker, an 18 year old who got a small job offer to house-sit for the COO of a local media company for the weekend, he takes the offer as he had nothing interesting going on for that weekend. It wasn't long before he began experiencing something very unsettling about the place. Little did he know what was about to come. He survived as he made the right choices.

<span class="blue-bold-text">The Gameplay</span>
This game is primarily a first-person narrative walking simulator with exploration, driving, and conversation mechanics.

<span class="blue-bold-text">KEY FEATURES</span>

■ Atmospheric environment and photo-realistic graphics.

■ VHS film aesthetic.

■ Receive texts from NPCs.

■ Player voice activity.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: Intel Core i5-2300 | AMD FX-6350
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 6 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i5-4670 | AMD Ryzen5 1600
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 100 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, German, Spanish - Spain, Portuguese - Brazil, Portuguese - Portugal</span>

      `,
      59000,
      ["Horror", "Adventure", "Casual", "First-Person", "Singleplayer"]
    )
  );

  gameList.push(
    new game(
      `Dark Souls 3`,
      `/assets/img/thumb/DS3.webp`,
      [
        `/assets/img/preview/Dark_Souls_3/pic_1.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_2.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_3.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_4.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_5.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_6.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_7.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_8.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_9.jpg`,
        `/assets/img/preview/Dark_Souls_3/pic_10.jpg`,
      ],
      `/assets/img/game-banner/DS3_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/374320/extras/DarkSoulsIII_GIF1.gif?t=1682651227" alt="">
Get the DARK SOULS™ III Season Pass now and challenge yourself with all the available content!

Winner of gamescom award 2015 "Best RPG" and over 35 E3 2015 Awards and Nominations.

DARK SOULS™ III continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series.

As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. Fans and newcomers alike will get lost in the game hallmark rewarding gameplay and immersive graphics.
Now only embers remain… Prepare yourself once more and Embrace The Darkness!
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/374320/extras/DarkSoulsIII_GIF2.gif?t=1682651227" alt="">

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 SP1 64bit, Windows 8.1 64bit Windows 10 64bit
<span class="bold-text">Processor</span>: Intel Core i3-2100 / AMD® FX-6300
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA® GeForce GTX 750 Ti / ATI Radeon HD 7950
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 25 GB available space
<span class="bold-text">Sound Card</span>: DirectX 11 sound device
<span class="bold-text">Addtional Notes</span>: Internet connection required for online play and product activation

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 SP1 64bit, Windows 8.1 64bit Windows 10 64bit
<span class="bold-text">Processor</span>: Intel Core i7-3770 / AMD® FX-8350
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA® GeForce GTX 970 / ATI Radeon R9 series
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 25 GB available space
<span class="bold-text">Sound Card</span>: DirectX 11 sound device
<span class="bold-text">Addtional Notes</span>: Internet connection required for online play and product activation

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Polish, Russian, Portuguese - Brazil, Simplified Chinese, Traditional Chinese, Japanese, Korean</span>
      `,
      1410000,
      [
        "RPG",
        "Third Person",
        "Co-op",
        "Adventure",
        "Action",
        "PvP",
        "Multiplayer",
        "Singleplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Metro Last Night Redux`,
      `/assets/img/thumb/MetroLNR.webp`,
      [
        `/assets/img/preview/Metro_Last_Night_Redux/pic_1.jpg`,
        `/assets/img/preview/Metro_Last_Night_Redux/pic_2.jpg`,
        `/assets/img/preview/Metro_Last_Night_Redux/pic_3.jpg`,
        `/assets/img/preview/Metro_Last_Night_Redux/pic_4.jpg`,
        `/assets/img/preview/Metro_Last_Night_Redux/pic_5.jpg`,
      ],
      `/assets/img/game-banner/Metro_Redux_Last_Night_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
 
It is the year 2034. Beneath the ruins of post-apocalyptic Moscow, in the tunnels of the Metro, the remnants of mankind are besieged by deadly threats from outside – and within. Mutants stalk the catacombs beneath the desolate surface, and hunt amidst the poisoned skies above.

But rather than stand united, the station-cities of the Metro are locked in a struggle for the ultimate power, a doomsday device from the military vaults of D6. A civil war is stirring that could wipe humanity from the face of the earth forever. As Artyom, burdened by guilt but driven by hope, you hold the key to our survival – the last light in our darkest hour…

<span class="blue-bold-text">Product Overview:</span>
Metro: Last Light Redux is the definitive version of the critically acclaimed ‘Metro: Last Light’, rebuilt in the latest and greatest iteration of the 4A Engine for Next Gen. Newcomers will get the chance to experience one of the finest story-driven shooters of all time; an epic adventure combining gripping survival horror, exploration and tactical combat and stealth.

This definitive version also includes all previously released DLC, adding 10 hours of bonus single-player content to the huge solo campaign. Fans of the original game will notice new features and gameplay improvements, including new melee animations, the ability to check your watch and ammo supplies on the fly, and new full-body player animations.

And those who favoured the more survival-horror oriented gameplay of the cult prequel ‘Metro 2033’ will find a new way to experience the campaign thanks to the introduction of two unique Play Styles – Survival and Spartan. The former transforms Last light from a more action-oriented stealth combat experience to a fraught, slow burn fight for survival. With the legendary Ranger Mode included to offer an extra layer of challenge and immersion, Metro: Last Light Redux offers hours of AAA gameplay for an incredible price.

<span class="blue-bold-text">Game Features</span>
<span class="bold-text">■ Immerse yourself in the Moscow Metro</span> - witness one of the most atmospheric worlds in gaming brought to life with stunning next-gen visuals at 60FPSBrave the horrors of the Russian apocalypse - equip your gasmask and an arsenal of hand-made weaponry as you face the threat of deadly mutants, human foes, and the terrifying environment itself

<span class="bold-text">■ Rebuilt and Remastered for next-gen</span> - with all previous DLC content included, new modes and features, and many gameplay improvement, this is the definitive version of the critically acclaimed classic that fans and newcomers alike will enjoy

<span class="bold-text">■ Two unique Play Styles : "Spartan" and "Survival"</span> - approach the game as a slow burn Survival Horror, or tackle it with the combat skills of a Spartan Ranger in these two unique modes

<span class="bold-text">■ The legendary Ranger Mode returns</span> - dare you play the fearsome Ranger Mode? No HUD, UI, deadlier combat and limited resources combine to create the ultimate immersive experience

Notice for OS X Yosemite 10.10.5 users with an Nvidia graphics card at or above the minimum specification listed below:
Currently separate drivers are available to fix performance issues specifically affecting Nvidia users who are using OS X Yosemite. These drivers are currently only compatible with OS X Yosemite 10.10.5 and can be found here <a class="desc-link" target="_blank" href="http://www.nvidia.com/download/driverResults.aspx/89538/en-us">http://www.nvidia.com/download/driverResults.aspx/89538/en-us.</a>
 
Based on the internationally bestselling novel series by Dmitry Glukhovsky

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>

<span class="yellow-bold-text">● Windows</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows Vista, 7 or 8 (64-bit only)
<span class="bold-text">Processor</span>: Dual Core CPU (2.2+ GHz Dual Core CPU or better)
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: DirectX 10, Shader Model 4 compliant graphics cards (GeForce 8800 GT 512 MB, GeForce GTS 250, etc)
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Addtional Notes</span>: 64-bit only

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 or 8 (64-bit only)
<span class="bold-text">Processor</span>: Any Quad Core or 3.0+ GHz Dual Core CPU
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: DirectX 11 compliant graphics card (GeForce GTX 480 and above)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Addtional Notes</span>: 64-bit only

<span class="yellow-bold-text">● macOS</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: OS X 10.9.5 Mavericks or newer
<span class="bold-text">Processor</span>: 3.2 GHz Intel Core i5
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Graphics</span>: Radeon HD7950 3GB / NVIDIA GeForce GTX 750m 1GB
<span class="bold-text">Addtional Notes</span>: Notice for OS X Yosemite 10.10.5 users with an Nvidia graphics card at or above the minimum specification listed: Currently separate drivers are available to fix performance issues specifically affecting Nvidia users who are using OS X Yosemite. These drivers are currently only compatible with OS X Yosemite 10.10.5 and can be found here <a class="desc-link" herf="http://www.nvidia.com/download/driverResults.aspx/89538/en-us" target="_blank">http://www.nvidia.com/download/driverResults.aspx/89538/en-us.</a>

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: OS X 10.9.5 Mavericks or newer
<span class="bold-text">Processor</span>: Intel Core i5 3.2 GHz 
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Graphics</span>: Radeon HD7950 3GB / NVIDIA GeForce GTX 775m 2GB
<span class="bold-text">Addtional Notes</span>: Notice for OS X Yosemite 10.10.5 users with an Nvidia graphics card at or above the minimum specification listed: Currently separate drivers are available to fix performance issues specifically affecting Nvidia users who are using OS X Yosemite. These drivers are currently only compatible with OS X Yosemite 10.10.5 and can be found here <a class="desc-link" herf="http://www.nvidia.com/download/driverResults.aspx/89538/en-us" target="_blank">http://www.nvidia.com/download/driverResults.aspx/89538/en-us.</a>

<span class="yellow-bold-text">● Linux</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Ubuntu 12.04 or 14.04
<span class="bold-text">Processor</span>: Intel Core i5 2.7 GHz (or equivalent AMD)
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA Geforce 460 / AMD 5850 with 2GB VRAM
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Addtional Notes</span>: Due to OpenGL 4, Intel video cards no longer supported

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Ubuntu 12.04 or 14.04
<span class="bold-text">Processor</span>: Intel Core i7 2.5 Ghz (or equivalent AMD)
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA Geforce 680 / AMD 7870 with 2GB VRAM+
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Addtional Notes</span>: Due to OpenGL 4, Intel video cards no longer supported

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Czech, Dutch, Polish, Russian, Ukrainian</span>
      `,
      333000,
      [
        "FPS",
        "Action",
        "Horror",
        "Singleplayer",
        "First-Person",
        "Shooter",
        "Survival",
        "Adventure",
        "Multiplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Assassin's Creed® Syndicate`,
      `/assets/img/thumb/AC_Syndicate.webp`,
      [
        `/assets/img/preview/AC_Syndicate/pic_1.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_2.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_3.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_4.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_5.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_6.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_7.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_8.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_9.jpg`,
        `/assets/img/preview/AC_Syndicate/pic_10.jpg`,
      ],
      `/assets/img/game-banner/ACSyndicate_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress:

<span class="green-bold-text">■ Champion justice</span>
As Jacob Frye, a young and reckless Assassin, use your skills to help those trampled by the march of progress. From freeing exploited children used as slave labour in factories, to stealing precious assets from enemy boats, you will stop at nothing to bring justice back to London’s streets.

<span class="green-bold-text">■ Command London’s underworld</span>
To reclaim London for the people, you will need an army. As a gang leader, strengthen your stronghold and rally rival gang members to your cause, in order to take back the capital from the Templars’ hold.

<span class="green-bold-text">■ A new dynamic fighting system</span>
In Assassin’s Creed Syndicate, action is fast-paced and brutal. As a master of combat, combine powerful multi-kills and countermoves to strike your enemies down.

<span class="green-bold-text">■ A whole new arsenal</span>
Choose your own way to fight enemies. Take advantage of the Rope Launcher technology to be as stealthy as ever and strike with your Hidden Blade. Or choose the kukri knife and the brass knuckles to get the drop on your enemies.

<span class="green-bold-text">■ A new age of transportation</span>
In London, the systemic vehicles offer an ever-changing environment. Drive carriages to chase your target, use your parkour skills to engage in epic fights atop high-speed trains, or make your own way amongst the boats of the River Thames.

<span class="green-bold-text">■ A vast open world</span>
Travel the city at the height of the Industrial Revolution and meet iconic historical figures. From Westminster to Whitechapel, you will come across Darwin, Dickens, Queen Victoria… and many more.

<span class="green-bold-text">■ A sharper focus</span>
Take aim, engage in combat or launch a grappling hook by keeping your target in sight with Tobii Eye Tracking. The Clean UI lets you focus on the matter at hand while the Extended View and Dynamic Light features increase your immersion, making you dive even deeper into the thrilling adventure in the streets of London.
Compatible with all Tobii Eye Tracking gaming devices.

Additional notes:
Eye tracking features available with Tobii Eye Tracking.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i5 2400s @ 2.5 GHz / AMD FX 6350 @ 3.9 GHz
<span class="bold-text">Memory</span>: 6 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 660 / AMD Radeon R9 270 (2GB VRAM with Shader Model 5.0)
<span class="bold-text">Storage</span>: 50 GB available space
<span class="bold-text">Sound Card</span>: DirectX Compatible Sound Card with latest drivers

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i7 3770 @ 3.5 GHz / AMD FX 8350 @ 4.0 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 760 (4GB) or the newer GTX 970 (4GB) / AMD Radeon R9 280X (3GB of VRAM) or better
<span class="bold-text">Storage</span>: 50 GB available space
<span class="bold-text">Sound Card</span>: DirectX Compatible Sound Card with latest drivers
<span class="bold-text">Addtional Notes</span>: *Technical Notice from the developer: For a recommended experience, the game requires a video card with at least 3GB of VRAM when playing at a full HD resolution. While we encourage you to fiddle with the advanced options to fully customize your gaming experience, please keep an eye out for the VRAM meter usage when you adjust these settings.

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, Frence, Italian, German, Spanish - Spain, Czech, Dutch, Hungarian, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese, Danish, Finnish, Norwegian, Swedish</span>
      `,
      660000,
      [
        "Action",
        "Adventure",
        "Third Person",
        "Singleplayer",
        "Multiplayer",
        "Co-op",
        "RPG",
      ]
    )
  );

  gameList.push(
    new game(
      `Sekiro™ Shadows Die Twice - GOTY Edition`,
      `/assets/img/thumb/SEKIRO.webp`,
      [
        `/assets/img/preview/Sekiro/pic_1.jpg`,
        `/assets/img/preview/Sekiro/pic_2.jpg`,
        `/assets/img/preview/Sekiro/pic_3.jpg`,
        `/assets/img/preview/Sekiro/pic_4.jpg`,
        `/assets/img/preview/Sekiro/pic_5.jpg`,
      ],
      `/assets/img/game-banner/Sekiro_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
      
This Game of the Year Edition now includes bonus content*:

- Reflection and Gauntlet of Strength - new boss challenge modes
- Remnants - leave messages and recordings of your actions that other players can view and rate
- 3 unlockable cosmetic skins

Game of the Year - The Game Awards 2019
Best Action Game of 2019 - IGN
Over 50 awards and nominations

Carve your own clever path to vengeance in the critically acclaimed adventure from developer FromSoftware, creators of the Dark Souls series.

In Sekiro™: Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself.

Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation.

Take Revenge. Restore Your Honor. Kill Ingeniously.

*Download required.

Internet connection required for asynchronous Multiplayer.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i3-2100 | AMD FX-6300
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 760 | AMD Radeon HD 7950
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 25 GB available space
<span class="bold-text">Sound Card</span>: DirectX 11 Compatible

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit
<span class="bold-text">Processor</span>: Intel Core i5-2500K | AMD Ryzen 5 1400
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 970 | AMD Radeon RX 570
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 25 GB available space
<span class="bold-text">Sound Card</span>: DirectX 11 Compatible

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Russian, Simplified Chinese, Thai, Traditional Chinese, Portuguese - Brazil</span>
      `,
      1290000,
      ["Action", "Singleplayer", "Adventure", "Third Person", "RPG"]
    )
  );

  gameList.push(
    new game(
      `Thief Simulator`,
      `/assets/img/thumb/TS.webp`,
      [
        `/assets/img/preview/TS/pic_1.jpg`,
        `/assets/img/preview/TS/pic_2.jpg`,
        `/assets/img/preview/TS/pic_3.jpg`,
        `/assets/img/preview/TS/pic_4.jpg`,
        `/assets/img/preview/TS/pic_5.jpg`,
        `/assets/img/preview/TS/pic_6.jpg`,
        `/assets/img/preview/TS/pic_7.jpg`,
        `/assets/img/preview/TS/pic_8.jpg`,
        `/assets/img/preview/TS/pic_9.jpg`,
        `/assets/img/preview/TS/pic_10.jpg`,
      ],
      `/assets/img/game-banner/TS_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Become the real thief. Steal in free roam sandbox neighborhoods. Observe your target and gather information that will help you with the burglary. Take the challenge and rob the best secured houses. Buy some hi-tech burglar equipment and learn new thief tricks. Sell stolen goods to the passers. Do anything that a real thief does!
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/704850/extras/Gather-Intel5.gif?t=1698762420" alt="">
A good thief always observes his target. What's inside? Who lives there? What's your target day schedule? Find out when the house is empty and does it have nosy neighbours. Choose from lots of possible approaches to prepare the best plan. Many modern devices available in Thief Simulator might come in handy with gathering intel about your target and it's neighbourhood.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/704850/extras/Be-Quick.gif?t=1698762420" alt="">
The faster, the better. Find and steal as many valuables as possible in the shortest time possible. Remember that infinite backpacks don't exist. When it's about time you have to maintain cold blood. In every house you'll find tons of useless stuff, which can really slow you down. If you're not sure that you can take some serious money for it, maybe a good idea would be to leave it behind and save space for some expensive goods. If you fill your backpack with worthless items, you may have to waste your time to throw stuff out just to make space for other things. Be careful, cause some things can draw police attention to you!
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/704850/extras/Flashlight.gif?t=1698762420" alt="">
A real, experienced thief can spot places where there's most probability of finding some valuables on the fly. Use the flashlight at night to highlight all the valuables in sight and places where you can expect them to be.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/704850/extras/Prepare_Loot.gif?t=1698762420" alt="">
Disassemble a stolen car and sell parts on the internet. Prepare phones and tablets before selling them in a pawn shop by removing their security.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/704850/extras/Useful_Items.gif?t=1698762420" alt="">
Look around for any useful items. They will save you some time on lockpicking or hacking. Key near a window or purchase receipts in trash bins. All those things can make life of an aspiring thief so much easier and reduce your burglary time even by a half. Of course, many of them are just useless trash... Or maybe they aren't?
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/704850/extras/Be_Careful.gif?t=1698762420" alt="">
Be careful! In some houses, you can meet unexpected guests. If they catch you in the act, they will call the police. In this case, hide and wait till they stop looking for you or you can always leave the loot and run away as fast as possible.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>

<span class="yellow-bold-text">● Windows</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7
<span class="bold-text">Processor</span>: Intel Core i5
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVidia GeForce GTX 750
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 5 GB available space
<span class="bold-text">Sound Card</span>: DirecX Compatible

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10
<span class="bold-text">Processor</span>: Intel Core i7
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1050
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 5 GB available space
<span class="bold-text">Sound Card</span>: DirectX Compatible

<span class="yellow-bold-text">● macOS</span>

<span class="green-bold-text">Minimum:</span>
<span class="bold-text">OS</span>: macOS 10.13.6 or later
<span class="bold-text">Processor</span>: Intel Core i5
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 750
<span class="bold-text">Storage</span>: 5 GB available space

<span class="green-bold-text">Recommended:</span>
<span class="bold-text">OS</span>: macOS 10.13.6 or later
<span class="bold-text">Processor</span>: Intel Core i7
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 1050
<span class="bold-text">Storage</span>: 5 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, Italian, German, Spanish - Spain, Polish, Portuguese - Portugal, Russian, Simplified Chinese, French, Turkish, Korean, Japanese, Czech, Hungarian</span>
      `,
      260000,
      [
        "Singleplayer",
        "Adventure",
        "First-Person",
        "Action",
        "RPG",
        "FPS",
        "Casual",
      ]
    )
  );

  gameList.push(
    new game(
      `Ready or Not`,
      `/assets/img/thumb/RoN.webp`,
      [
        `/assets/img/preview/RoN/pic_1.jpg`,
        `/assets/img/preview/RoN/pic_2.jpg`,
        `/assets/img/preview/RoN/pic_3.jpg`,
        `/assets/img/preview/RoN/pic_4.jpg`,
        `/assets/img/preview/RoN/pic_5.jpg`,
        `/assets/img/preview/RoN/pic_6.jpg`,
        `/assets/img/preview/RoN/pic_7.jpg`,
        `/assets/img/preview/RoN/pic_8.jpg`,
        `/assets/img/preview/RoN/pic_9.jpg`,
        `/assets/img/preview/RoN/pic_10.jpg`,
      ],
      `/assets/img/game-banner/RoN_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Ready or Not is an intense, tactical, first-person shooter that depicts a modern-day world in which SWAT police units are called to defuse hostile and confronting situations.

Please remember that the Beta build is still an incomplete version of the game. It will still have bugs and quirks, and will require lots of additional content before it is ready for full release. Because of our Supporters and with your help, we will continue to push Ready or Not, adding more content (new maps, missions, characters, weapons, etc.), and further refining it to get the game up to the standard that you deserve. We ultimately want you to be able to turn the lights out, crank up the volume, and be immersed in the action – bringing order to chaos.

<span class="blue-bold-text">Realistic Gameplay</span>
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/extras/Image_01.png?t=1688390724" alt="">

VOID Interactive has consulted police units worldwide to make your virtual avatar play and feel like a fully equipped SWAT officer, creep or advance swiftly through tense scenarios as required by ever-changing mission conditions. Unpredictable assailants and civilians mimic the chaos of actual SWAT actions.

<span class="blue-bold-text">Authentic Equipment</span>
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/extras/authentic3.png?t=1688390724" alt="">

In order to bring the world of Ready or Not to life we’ve spared no expense to make our equipment reflect the equipment that SWAT Teams utilize in the field, our skilled sound and art teams have created life-like replicas for you to use ingame.

<span class="blue-bold-text">Single-player and co-op experience.</span>
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/extras/sp_coop.png?t=1688390724" alt="">

Equip, customize, and command your AI teammates through levels to tackle all of the challenges that RoN presents you with as efficiently as possible or exchange your robot teammates for 4 friends and aim for even higher scores

<span class="blue-bold-text">Suspect behavior</span>
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/extras/Image_05.png?t=1688390724" alt="">

Do your best to respond appropriately to the realistically erratic behavior of all of the subjects in any given situation, detain erratic civilians and move them to safety while combating aggressive and dangerous suspects.

<span class="blue-bold-text">Tactical flexibility</span>
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/extras/tactical.png?t=1688390724" alt="">

Using Tactical equipment such as a Breaching shotgun, Battering ram, the Mirror gun, as well as several different varieties of less lethal grenades, as well as many other tools to expand your squads ability to respond to certain threats or accentuate the chosen play style of your squad.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Windows 7, Windows 8.1, Windows 10
<span class="bold-text">Processor</span>: Intel Core i5-4430 / AMD FX-6300
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 90 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Windows 10
<span class="bold-text">Processor</span>: AMD Ryzen 5-1600 / Intel Core i5-7600K
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GTX 1060 6GB or better
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 90 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, German, Czech, Korean, Simplified Chinese</span>
      `,
      310000,
      [
        "FPS",
        "Multiplayer",
        "Shooter",
        "Co-op",
        "Singleplayer",
        "First-Person",
        "Action",
        "Horror",
      ]
    )
  );

  gameList.push(
    new game(
      `Project Zomboid`,
      `/assets/img/thumb/PZ.webp`,
      [
        `/assets/img/preview/Project-Zomboid/pic_1.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_2.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_3.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_4.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_5.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_6.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_7.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_8.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_9.jpg`,
        `/assets/img/preview/Project-Zomboid/pic_10.jpg`,
      ],
      `/assets/img/game-banner/PZ_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Project Zomboid is an open-ended zombie-infested sandbox. It asks one simple question – how will you die? 

In the towns of Muldraugh and West Point, survivors must loot houses, build defences and do their utmost to delay their inevitable death day by day. No help is coming – their continued survival relies on their own cunning, luck and ability to evade a relentless horde.

<span class="blue-bold-text">Current Features</span>

■ Hardcore Sandbox Zombie Survival Game with a focus on realistic survival.

■ Online multiplayer survival with persistent player run servers.

■ Local 4 player split-screen co-op

■ Hundreds of zombies with swarm mechanics and in-depth visual and hearing systems.

■ Full line of sight system and real-time lighting, sound and visibility mechanics. Hide in the shadows, keep quiet and keep the lights off at night, or at least hang sheets over the windows.

■ Vast and growing map (loosely based on a real world location) for you to explore, loot and set up your fortress. Check out Blindcoder’s map project: <a href="https://map.projectzomboid.com/" target="_blank" class="desc-link">https://map.projectzomboid.com/</a>

■ Vehicles with full physics and deep and realistic gameplay mechanics.

■ Use tools and items to craft weapons, barricade and cook. You can even build zombie proof forts by chopping trees, sawing wood and scavenging supplies.

■ Deal with depression, boredom, hunger, thirst and illness while trying to survive.

■ Day turns to night. The electricity falters. Hordes migrate. Winter draws in. Nature gradually starts to take over.

■ Farming, fishing, carpentry, cooking, trapping, character customization, skills and perks that develop based on what you do in-game.

■ Proper zombies that don’t run. (Unless you tell them to in the sandbox menu).

■ A ton of amazing atmospheric music tracks by the prodigy that is Zach Beever.

■ Imaginative Challenge scenarios and instant action ‘Last Stand’ mode, on top of regular Sandbox and Survival 

■ Full, open and powerful Lua modding support.

■ Xbox Controller Gamepad support on Windows. (Other gamepads can be set up manually.)

For more details on the game follow us on <a class="desc-link" target="_blank" href="https://twitter.com/theindiestone">@theindiestone</a> or visit <a class="desc-link" target="_blank" href="http://www.projectzomboid.com">http://www.projectzomboid.com</a>
      
<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>

<span class="yellow-bold-text">● Windows</span>

Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10, 64 Bit
<span class="bold-text">Processor</span>: Intel 2.77GHz Quad-core
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: Dedicated graphics card with 2 GB of RAM minimum, OpenGL 2.1 and GLSL 1.2 support (generally 2012 or newer)
<span class="bold-text">Storage</span>: 5 GB available space
<span class="bold-text">Sound Card</span>: FMOD compatible sound card

<span class="yellow-bold-text">● macOS</span>

Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: OS X 10.15, or later.
<span class="bold-text">Processor</span>: Intel x86 (M1/M2 not supported at this time)
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: AMD or Intel Integrated (nVidia on Mac not compatible)
<span class="bold-text">Storage</span>: 5 GB available space
<span class="bold-text">Sound Card</span>: FMOD compatible sound card

<span class="yellow-bold-text">● Linux</span>

Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Ubuntu LTS 16.04/Steam Machine. Requires Libgcc 6 or higher
<span class="bold-text">Processor</span>: Intel 2.77GHz Quad-core
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Storage</span>: 5 GB available space
<span class="bold-text">Graphics</span>: Dedicated graphics card with 2 GB of RAM minimum, OpenGL 2.1 and GLSL 1.2 support (generally 2012 or newer)
<span class="bold-text">Sound Card</span>: FMOD compatible sound card

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English</span>
      `,
      260000,
      [
        "Survival",
        "Multiplayer",
        "Co-op",
        "RPG",
        "Singleplayer",
        "2D",
        "Adventure",
      ]
    )
  );

  gameList.push(
    new game(
      `Monster Hunter Rise`,
      `/assets/img/thumb/MS_Rise.webp`,
      [
        `/assets/img/preview/MHR/pic_1.jpg`,
        `/assets/img/preview/MHR/pic_2.jpg`,
        `/assets/img/preview/MHR/pic_3.jpg`,
        `/assets/img/preview/MHR/pic_4.jpg`,
        `/assets/img/preview/MHR/pic_5.jpg`,
        `/assets/img/preview/MHR/pic_6.jpg`,
      ],
      `/assets/img/game-banner/MHR_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline. The PC release also comes packed with a number of additional visual and performance enhancing optimizations.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/extras/01_%E3%83%9E%E3%83%AB%E3%83%81_full.gif?t=1696387660" alt="">

<span class="green-bold-text">Ferocious monsters with unique ecologies</span>
Hunt down a plethora of monsters with distinct behaviors and deadly ferocity. From classic returning monsters to all-new creatures inspired by Japanese folklore, including the flagship wyvern Magnamalo, you’ll need to think on your feet and master their unique tendencies if you hope to reap any of the rewards!

<span class="green-bold-text">Choose your weapon and show your skills</span>
Wield 14 different weapon types that offer unique gameplay styles, both up-close and from long range. Charge up and hit hard with the devastating Great Sword; dispatch monsters in style using the elegant Long Sword; become a deadly maelstrom of blades with the speedy Dual Blades; charge forth with the punishing Lance; or take aim from a distance with the Bow and Bowguns. These are just a few of the weapon types available in the game, meaning you’re sure to find the play style that suits you best.

<span class="green-bold-text">Hunt, gather and craft your way to the top of the food chain</span>
Each monster you hunt will provide materials that allow you to craft new weapons and armor and upgrade your existing gear. Go back out on the field and hunt even fiercer monsters and earn even better rewards! You can change your weapon at any of the Equipment Boxes any time, so the possibilities are limitless!

<span class="green-bold-text">Hunt solo or team up to take monsters down</span>
The Hunter Hub offers multiplayer quests where up to four players can team up to take on targets together. Difficulty scaling ensures that whether you go solo or hit the hunt as a full four-person squad, it’s always a fair fight.

<span class="green-bold-text">Stunning visuals, unlocked framerate and other PC optimizations</span>
Enjoy beautiful graphics at up 4K resolution, HDR with support for features including ultrawide monitors and an unlocked frame rate make to make this a truly immersive monster-hunting experience. Hunters will also get immediate access to a number of free title updates that include new monsters, quests, gear and more.

<span class="green-bold-text">Enjoy an exciting new storyline set in Kamura Village</span>
This serene locale is inhabited by a colorful cast of villagers who have long lived in fear of the Rampage - a catastrophic event where countless monsters attack the village all at once. 50 years after the last Rampage, you must work together with the villagers to face this trial.

<span class="green-bold-text">Experience new hunting actions with the Wirebug</span>
Wirebugs are an integral part of your hunter’s toolkit. The special silk they shoot out can be used to zip up walls and across maps, and can even be used to pull off special attacks unique to each of the 14 weapon types in the game.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/extras/02_%E7%BF%94%E8%9F%B2.gif?t=1696387660" alt="">

<span class="green-bold-text">Buddies are here to help</span>
The Palico Felyne friends you already know and love from previous Monster Hunter adventures are joined by the brand new Palamute Canyne companions!
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/extras/04_%E3%82%AC%E3%83%AB%E3%82%AF%E8%B5%B0%E3%82%8A.gif?t=1696387660" alt="">

<span class="green-bold-text">Wreak havoc by controlling monsters</span>
Control raging monsters using Wyvern Riding and dish out massive damage to your targets!
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/extras/03_%E6%93%8D%E7%AB%9C.gif?t=1696387660" alt="">

<span class="green-bold-text">Fend off hordes of monsters in The Rampage</span>
Protect Kamura Village from hordes of monsters in an all-new quest type! Prepare for monster hunting on a scale like never before!

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 （64-bit）
<span class="bold-text">Processor</span>: Intel® Core™ i3-4130 or Core™ i5-3470 or AMD FX™-6100
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA® GeForce® GT 1030 (DDR4) or AMD Radeon™ RX 550
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 36 GB available space
<span class="bold-text">Additional Notes</span>: 1080p/30fps when graphics settings are set to "Low".

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 （64-bit）
<span class="bold-text">Processor</span>: Intel® Core™ i5-4460 or AMD FX™-8300
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA® GeForce® GTX 1060 (VRAM 3GB) or AMD Radeon™ RX 570 (VRAM 4GB)
<span class="bold-text">DirectX</span>: Version 12
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 36 GB available space
<span class="bold-text">Additional Notes</span>: 1080p/30fps when graphics settings are set to "Average".

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese</span>
      `,
      880000,
      [
        "Action",
        "RPG",
        "Multiplayer",
        "Co-op",
        "Third Person",
        "Singleplayer",
        "PvE",
        "3D",
      ]
    )
  );

  gameList.push(
    new game(
      `Plants vs. Zombies GOTY Edition`,
      `/assets/img/thumb/PvZ.webp`,
      [
        `/assets/img/preview/PvZ/pic_1.jpg`,
        `/assets/img/preview/PvZ/pic_2.jpg`,
        `/assets/img/preview/PvZ/pic_3.jpg`,
        `/assets/img/preview/PvZ/pic_4.jpg`,
        `/assets/img/preview/PvZ/pic_5.jpg`,
        `/assets/img/preview/PvZ/pic_6.jpg`,
        `/assets/img/preview/PvZ/pic_7.jpg`,
        `/assets/img/preview/PvZ/pic_8.jpg`,
        `/assets/img/preview/PvZ/pic_9.jpg`,
        `/assets/img/preview/PvZ/pic_10.jpg`,
      ],
      `/assets/img/game-banner/PvZ_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/3590/extras/PvZ_background.jpg?t=1615390608" alt="">

Zombies are invading your home, and the only defense is your arsenal of plants! Armed with an alien nursery-worth of zombie-zapping plants like peashooters and cherry bombs, you'll need to think fast and plant faster to stop dozens of types of zombies dead in their tracks. Obstacles like a setting sun, creeping fog and a swimming pool add to the challenge, and with five game modes to dig into, the fun never dies!

<span class="blue-bold-text">FEATURES</span>

■ Play five game modes: Adventure, Mini-Games, Puzzle, Survival, plus the stress-free Zen Garden

■ Conquer all 50 levels of Adventure mode  through day, night, and fog, in a swimming pool and on the rooftop

■ Battle 26 types of zombies including pole-vaulters, snorkelers and Zomboni drivers

■ Earn 49 powerful perennials and collect coins to buy a pet snail, power-ups and more!

■ Open the Almanac to see all the plants and zombies, plus amusing facts and quotes

■ Browse Crazy Daves shop for special plants and tools to stem any zombie assault

■ Amazing graphics and soundtrack, plus a bonus music video

■ Infinite replayability: the game is never the same experience twice!

■ Unlock all the Steam Achievements

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>

<span class="yellow-bold-text">● Windows</span>

Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows XP/Vista/7
<span class="bold-text">Processor</span>: 1.2GHz+ processor
<span class="bold-text">Memory</span>: 1 GB RAM
<span class="bold-text">Graphics</span>: 128MB of video memory, 16-bit or 32-bit color quality
<span class="bold-text">DirectX</span>: Version 8 or above
<span class="bold-text">Storage</span>: 100 MB available space
<span class="bold-text">Sound Card</span>: DirectX-compatible sound

<span class="yellow-bold-text">● macOS</span>

Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Mac OS X 10.5.8-10.6.x
<span class="bold-text">Processor</span>: Intel Core Duo 1.66GHz+
<span class="bold-text">Memory</span>: 1 GB RAM
<span class="bold-text">Graphics</span>: 64MB of video memory, 16-bit or 32-bit color quality
<span class="bold-text">Storage</span>: 100 MB available space
<span class="bold-text">Sound Card</span>: Standard audio

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text"></span>
      `,
      70000,
      ["Singleplayer", "Casual", "2D", "Survival", "Adventure"]
    )
  );

  gameList.push(
    new game(
      `Devil May Cry 4 Special Edition`,
      `/assets/img/thumb/DMC4_SP.webp`,
      [
        `/assets/img/preview/DMC4SE/pic_1.jpg`,
        `/assets/img/preview/DMC4SE/pic_2.jpg`,
        `/assets/img/preview/DMC4SE/pic_3.jpg`,
        `/assets/img/preview/DMC4SE/pic_4.jpg`,
        `/assets/img/preview/DMC4SE/pic_5.jpg`,
      ],
      `/assets/img/game-banner/DMC4SE_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
      
Take control of one of five playable characters in the Special Edition of Devil May Cry 4, the ultimate version of the smash-hit stylish action game!

Devil May Cry 4 immerses gamers in a gothic supernatural world, where a new protagonist clashes with a familiar hero. As the new leading man, Nero, players will unleash incredible attacks and non-stop combos using a unique new gameplay mechanic, his powerful "Devil Bringer" arm.

On the coast of a distant land lies the castle town of Fortuna. It is here that the group known as the Order of the Sword practices a mysterious religion. They revere the demon warrior Sparda, who as their god fought to protect humans, and are committed to the extermination of all demons. Nero, a young knight from the Order, is tasked with finding Dante, the mysterious assassin who murdered the head of the Order of the Sword. At the same time, more demons begin to appear throughout the city. Nero will soon come to discover the motives behind Dante's appearance and the truth behind the intentions of the Order of the Sword.

<span class="blue-bold-text">FEATURES</span>
<span class="green-bold-text">THREE New Playable Characters</span>

■ Vergil is a strong, yet technical character, so newcomers can play with confidence while seasoned veterans can further sharpen their skills as they master his moves. Great for all skill levels!

■ Lady, in her first playable appearance, specializes in long-distance, powerful attacks. Using the Kalina Ann rocket launcher, a grappling wire, and a variety of awesome guns, she can fight with grace and ease.

■ Trish utilizes the demonic sword Sparda to perform a wide variety of combos. The Sparda can even home in on and attack enemies autonomously while Trish fights in tandem!

<span class="green-bold-text">Legendary Dark Knight Mode</span>

■ Fight a massive number of enemies simultaneously for extra difficulty and maximum satisfaction!

<span class="green-bold-text">Refined Gameplay</span>

■ Small adjustments have been made to improve the gameplay tempo, and provide an even better experience for players both new and returning.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7, Windows 8.1
<span class="bold-text">Processor</span>: Intel(R) Core(TM) 2 Duo 2.4GHz, AMD Athlon(TM) X2 2.8 GHz
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA(R) GeForce(R) 8800 GTS, AMD Radeon(TM) HD 3850 with 512MB RAM or better
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 27 GB available space
<span class="bold-text">Sound Card</span>: DirectSound Support (DirectX® 9.0c)
<span class="bold-text">Additional Notes</span>: Some high end integrated graphics and modern gaming laptops with a discrete GPU may work but have not been tested, nor are they officially supported by Capcom.

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7, Windows 8.1
<span class="bold-text">Processor</span>: Intel(R) Core(TM) i3 3.0GHz, AMD FX-4100 3.6 GHz
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA(R) GeForce(R) GTX 570, AMD Radeon(TM) HD 7790
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 27 GB available space
<span class="bold-text">Sound Card</span>: DirectSound Support (DirectX® 9.0c)
<span class="bold-text">Additional Notes</span>: Some high end integrated graphics and modern gaming laptops with a discrete GPU may work but have not been tested, nor are they officially supported by Capcom.

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Japanese, Simplified Chinese, Traditional Chinese</span>
      `,
      337000,
      ["Action", "Singleplayer", "Third Person", "Adventure", "RPG"]
    )
  );

  gameList.push(
    new game(
      `Batman™ Arkham Knight`,
      `/assets/img/thumb/BMAK.webp`,
      [
        `/assets/img/preview/BA_Knight/pic_1.jpg`,
        `/assets/img/preview/BA_Knight/pic_2.jpg`,
        `/assets/img/preview/BA_Knight/pic_3.jpg`,
        `/assets/img/preview/BA_Knight/pic_4.jpg`,
        `/assets/img/preview/BA_Knight/pic_5.jpg`,
        `/assets/img/preview/BA_Knight/pic_6.jpg`,
        `/assets/img/preview/BA_Knight/pic_7.jpg`,
        `/assets/img/preview/BA_Knight/pic_8.jpg`,
        `/assets/img/preview/BA_Knight/pic_9.jpg`,
        `/assets/img/preview/BA_Knight/pic_10.jpg`,
      ],
      `/assets/img/game-banner/BAKnight_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile. The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. In this explosive finale, Batman faces the ultimate threat against the city that he is sworn to protect, as Scarecrow returns to unite the super criminals of Gotham and destroy the Batman forever.

<span class="blue-bold-text">Product Features:</span>
<span class="green-bold-text">■ “Be The Batman”</span> – Live the complete Batman experience as the Dark Knight enters the concluding chapter of Rocksteady’s Arkham trilogy. Players will become The World’s Greatest Detective like never before with the introduction of the Batmobile and enhancements to signature features such as FreeFlow Combat, stealth, forensics and navigation.

<span class="green-bold-text">■ Introducing the Batmobile</span> – The Batmobile is brought to life with a completely new and original design featuring a distinct visual appearance and a full range of on-board high-tech gadgetry. Designed to be fully drivable throughout the game world and capable of transformation from high speed pursuit mode to military grade battle mode, this legendary vehicle sits at the heart of the game’s design and allows players to tear through the streets at incredible speeds in pursuit of Gotham City’s most dangerous villains. This iconic vehicle also augments Batman’s abilities in every respect, from navigation and forensics to combat and puzzle solving creating a genuine and seamless sense of the union of man and machine.

<span class="green-bold-text">■ The Epic Conclusion to Rocksteady’s Arkham Trilogy</span> – Batman: Arkham Knight brings all-out war to Gotham City. The hit-and-run skirmishes of Batman: Arkham Asylum, which escalated into the devastating conspiracy against the inmates in Batman: Arkham City, culminates in the ultimate showdown for the future of Gotham. At the mercy of Scarecrow, the fate of the city hangs in the balance as he is joined by the Arkham Knight, a completely new and original character in the Batman universe, as well as a huge roster of other infamous villains including Harley Quinn, The Penguin, Two-Face and the Riddler.

<span class="green-bold-text">■ Explore the entirety of Gotham City</span> – For the first time, players have the opportunity to explore all of Gotham City in a completely open and free-roaming game world. More than five times that of Batman: Arkham City, Gotham City has been brought to life with the same level of intimate, hand-crafted attention to detail for which the Arkham games are known.

<span class="green-bold-text">■ Most Wanted Side Missions</span> – Players can fully immerse themselves in the chaos that is erupting in the streets of Gotham. Encounters with high-profile criminal masterminds are guaranteed while also offering gamers the opportunity to focus on and takedown individual villains or pursue the core narrative path.

<span class="green-bold-text">■ New Combat and Gadget Features</span> – Gamers have at their disposal more combat moves and high-tech gadgetry than ever before. The new ‘gadgets while gliding’ ability allows Batman to deploy gadgets such as batarangs, the grapnel gun or the line launcher mid-glide while Batman’s utility belt is once again upgraded to include all new gadgets that expand his range of forensic investigation, stealth incursion and combat skills.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Win 7 SP1, Win 8.1 (64-bit Operating System Required)
<span class="bold-text">Processor</span>: Intel Core i5-750, 2.67 GHz | AMD Phenom II X4 965, 3.4 GHz
<span class="bold-text">Memory</span>: 6 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 660 (2 GB Memory Minimum) | AMD Radeon HD 7870 (2 GB Memory Minimum)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 45 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Win 7 SP1, Win 8.1 (64-bit Operating System Required)
<span class="bold-text">Processor</span>: Intel Core i7-3770, 3.4 GHz | AMD FX-8350, 4.0 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 760 - 3 GB Memory Recommended | AMD Radeon HD 7950 - 3 GB Memory Recommended
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Storage</span>: 55 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Korean, Portuguese - Brazil, Polish, Russian, Japanese</span>
      `,
      188000,
      [
        "Action",
        "Adventure",
        "Third Person",
        "Singleplayer",
        "Fighting",
        "Horror",
      ]
    )
  );

  gameList.push(
    new game(
      `Sniper Ghost Warrior Contracts`,
      `/assets/img/thumb/SGWC.webp`,
      [
        `/assets/img/preview/SGWC/pic_1.jpg`,
        `/assets/img/preview/SGWC/pic_2.jpg`,
        `/assets/img/preview/SGWC/pic_3.jpg`,
        `/assets/img/preview/SGWC/pic_4.jpg`,
        `/assets/img/preview/SGWC/pic_5.jpg`,
        `/assets/img/preview/SGWC/pic_6.jpg`,
        `/assets/img/preview/SGWC/pic_7.jpg`,
        `/assets/img/preview/SGWC/pic_8.jpg`,
        `/assets/img/preview/SGWC/pic_9.jpg`,
        `/assets/img/preview/SGWC/pic_10.jpg`,
      ],
      `/assets/img/game-banner/SGWC_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Fulfill contracts that offer clear objectives with a fixed monetary reward and options to complete bonus challenges for payouts. With hundreds of ways to take down a wide range of targets, Contracts offers precise, strategic sniping gameplay at its absolute best.

Play as a paid assassin; a hit man for hire, and beware of rival snipers who won’t hesitate to disrupt your best-laid plans.

<span class="blue-bold-text">Open-ended contracts</span>
Bounties and challenges deliver strong replayability options to eliminate targets and collect cash to redeem for upgrades.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/973580/extras/siberia_1.jpg?t=1692600844" alt="">

<span class="blue-bold-text">An all-new Dynamic Reticle System</span>
Offers the most realistic and intense sniping experience.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/973580/extras/Reticle_1.jpg?t=1692600844" alt="">

<span class="blue-bold-text">Upgradeable AR Mask</span>
With the ability to scan the environment and highlight weakness or objects of interest.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/973580/extras/scan_1.jpg?t=1692600844" alt="">

<span class="blue-bold-text">An arsenal of new gadgets</span>
Including drones, remote sniper turrets and gas grenades. Show off your stealth skills, execute silent takedowns and be rewarded for a strategic play style.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/973580/extras/wheel_1.jpg?t=1692600844" alt="">

<span class="blue-bold-text">Battle the brutal wilderness of Siberia</span>
Fight to survive the intensity of snow-covered mountains, lush forests and secret bases hidden deep in the mountainside.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/973580/extras/altai_1.jpg?t=1692600844" alt="">

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Window 7
<span class="bold-text">Processor</span>: Intel Core i5 4460 / AMD FX 6350
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 760 or AMD Radeon HD 7870 (2GB VRAM)
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 20 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 8.1 / 10
<span class="bold-text">Processor</span>: Intel Core i5 4690k / AMD Ryzen 5 1600X
<span class="bold-text">Memory</span>: 16 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 970 or AMD Radeon RX 580x (4GB VRAM)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 20 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Traditional Chinese, Simplified Chinese, Polish, Portuguese - Brazil, Russian, Czech, Korean, Japanese</span>
      `,
      399000,
      [
        "Action",
        "Singleplayer",
        "Shooter",
        "Multiplayer",
        "FPS",
        "First-Person",
        "PvP",
      ]
    )
  );

  gameList.push(
    new game(
      `Fears to Fathom - Norwood Hitchhike`,
      `/assets/img/thumb/FTFT_Norwood_Hitchhike.webp`,
      [
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_1.jpg`,
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_2.jpg`,
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_3.jpg`,
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_4.jpg`,
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_5.jpg`,
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_6.jpg`,
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_7.jpg`,
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_8.jpg`,
        `/assets/img/preview/FTFT_Norwood_Hitchhike/pic_9.jpg`,
      ],
      `/assets/img/game-banner/FTFT-Norwood_Hitchhike_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
 
Fears to Fathom is an episodic psychological horror game where each episode unveils a short story narrated by the ones who survived.
You're browsing the second installment of the Fears to Fathom anthology.

      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1763050/extras/for-steam-gif3.gif?t=1697813814" alt="">

In the second episode of Fears to Fathom you play as Holly Gardner, a 19 year old who was driving back home from a gaming convention, as the traffic got horrible she decided to take the long way to avoid the traffic which leads to an unplanned trip to a motel. Little did she know what was going down in the Norwood Valley. She survived as she <span class="bold-text">made the right choices.</span>

<span class="blue-bold-text">KEY FEATURES</span>

■ Atmospheric environment and photo-realistic graphics.

■ VHS film aesthetic.

■ Receive texts from NPCs.

■ Player voice activity.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: AMD Phenom II X4 965, 3.40 GHz / Intel Core i5-2300, 2.80 GHz
<span class="bold-text">Memory</span>: 6 GB RAM
<span class="bold-text">Graphics</span>: AMD Radeon™ HD 7730, NVIDIA GeForce® GT 640
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 7 GB available space

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 64-bit
<span class="bold-text">Processor</span>: AMD FX-8350, 4.00 GHz / Intel Core i5-3470, 3.20 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: Radeon RX 590, 8 GB / GeForce GTX 1060, 6 GB
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 7 GB available space

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, German, Spanish - Spain, Portuguese - Portugal, Portuguese - Brazil</span>
      `,
      59000,
      ["Horror", "Adventure", "Casual", "Singleplayer"]
    )
  );

  gameList.push(
    new game(
      `Assassin’s Creed® Rogue`,
      `/assets/img/thumb/AC_Rogue.webp`,
      [
        `/assets/img/preview/AC_Rogue/pic_1.jpg`,
        `/assets/img/preview/AC_Rogue/pic_2.jpg`,
        `/assets/img/preview/AC_Rogue/pic_3.jpg`,
        `/assets/img/preview/AC_Rogue/pic_4.jpg`,
        `/assets/img/preview/AC_Rogue/pic_5.jpg`,
      ],
      `/assets/img/game-banner/ACRogue_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

18th century, North America. Amidst the chaos and violence of the French and Indian War, Shay Patrick Cormac, a fearless young member of the Brotherhood of Assassin’s, undergoes a dark transformation that will forever shape the future of the American colonies. After a dangerous mission gone tragically wrong, Shay turns his back on the Assassins who, in response, attempt to end his life. Cast aside by those he once called brothers, Shay sets out on a mission to wipe out all who turned against him and ultimately become the most feared Assassin hunter in history.

Introducing Assassin’s Creed® Rogue, the darkest chapter in the Assassin’s Creed franchise yet. As Shay, you will experience the slow transformation from Assassin to Assassin Hunter. Follow your own creed and set off on an extraordinary journey through New York City, the wild river valley, and far away to the icy cold waters of the North Atlantic in pursuit of your ultimate goal - bringing down the Assassins for good.

<span class="blue-bold-text">KEY FEATURES</span>

<span class="green-bold-text">■ Become the Ultimate Assassin Hunter</span> - For the first time ever, experience the Assassin’s Creed universe from the perspective of a Templar. Play as Shay, who, in addition to the deadly skills of a Master Assassin, also possesses never before seen skills and weapons:
<span class="bold-text">▸</span> Equip Shay’s deadly air rifle for both short and long range combat. Distract, eliminate, or confuse your enemies by using a variety of ammunition, including specialized bullets and grenades
<span class="bold-text">▸</span> Protect yourself from hidden Assassins with your enhanced eagle vision. Constantly assess your surroundings and detect Assassins hiding in the shadows, on rooftops, and in the crowds

<span class="green-bold-text">■ Slowly Descend into Darkness</span> - Witness Shay’s transformation from an adventurous Assassin to a grim and committed Templar willing to hunt down his former brothers. Experience first-hand the events that will lead Shay down a dark path and set him on a course that will forever change the fate of the Assassin Brotherhood.

New and Improved Naval Gameplay - Cast off in your ship, The Morrigan, and fight your way through the icy seas of the North Atlantic and the narrow waters of America’s river valleys. Assassin’s Creed® Rogue builds on the award winning naval experience from Assassin’s Creed® IV Black Flag™ with all new gameplay including:
<span class="bold-text">▸</span> New enemy tactics: Defend yourself from Assassins as they attempt to board your ship and overthrow your crew. Fight them off quickly to avoid losing too many crew members.
<span class="bold-text">▸</span> New weapons: Including burning oil, which leaves a trail of fire behind to burn enemy ships, and the puckle gun, capable of delivering continuous machine-gun-like fire.
<span class="bold-text">▸</span> An arctic world full of possibilities: Ram through ice sheets to discover hidden locations and use icebergs as cover during naval battles.

<span class="green-bold-text">■ Vast Diverse Open World to Explore</span> - Shay’s story will allow you to explore three unique environments:
<span class="bold-text">▸</span> The North Atlantic Ocean Experience the cold winds and towering icebergs of the arctic in this expansive naval playground
<span class="bold-text">▸</span> The River Valley A large hybrid setting of the American Frontier mixing seamless river navigation and ground exploration
<span class="bold-text">▸</span> New York City One of the most well-known cities in the world, fully recreated as it existed in the 18th century.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core2Quad Q6600 @ 2.4 GHz or AMD Athlon II X4 620 @ 2.6 GHzH
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTS450 or AMD Radeon HD5670 (1024MB VRAM) or Intel HD4600
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 12 GB available space
<span class="bold-text">Sound Card</span>: DirectX Compatible Sound Card with latest driver
<span class="bold-text">Additional Notes</span>: Supported Video Cards at time of release: NVIDIA GeForce GTS 450 or better, GeForce 500, 600, 700, 900 series / AMD Radeon HD 5670 or better, Radeon HD 6000, 7000, R7, R9 series / Intel HD4600, HD5200 / Note: Laptop versions of these cards may work but are NOT officially supported.

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i5 2400s @ 2.5 GHz or better / AMD FX-6100 @ 3.3 GHz or better
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 560Ti (1024 VRAM) or better / AMD Radeon HD 6870 (1024 VRAM) or better
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 12 GB available space
<span class="bold-text">Sound Card</span>: DirectX Compatible Sound Card with latest driver

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Arabic, Dutch, Japanese, Polish, Portuguese - Brazil, Russian, Korean</span>
      `,
      330000,
      ["Action", "Third Person", "Adventure", "Singleplayer", "Co-op"]
    )
  );

  gameList.push(
    new game(
      `Metro 2033 Redux`,
      `/assets/img/thumb/Metro_2033_Redux.webp`,
      [
        `/assets/img/preview/Metro_2033_Redux/pic_1.jpg`,
        `/assets/img/preview/Metro_2033_Redux/pic_2.jpg`,
        `/assets/img/preview/Metro_2033_Redux/pic_3.jpg`,
        `/assets/img/preview/Metro_2033_Redux/pic_4.jpg`,
        `/assets/img/preview/Metro_2033_Redux/pic_5.jpg`,
      ],
      `/assets/img/game-banner/Metro_2033_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
 
In 2013 the world was devastated by an apocalyptic event, annihilating almost all mankind and turning the Earth's surface into a poisonous wasteland. A handful of survivors took refuge in the depths of the Moscow underground, and human civilization entered a new Dark Age.

The year is 2033. An entire generation has been born and raised underground, and their besieged Metro Station-Cities struggle for survival, with each other, and the mutant horrors that await outside. You are Artyom, born in the last days before the fire, but raised underground. Having never ventured beyond the city limits, one fateful event sparks a desperate mission to the heart of the Metro system, to warn the remnants of mankind of a terrible impending threat.

Your journey takes you from the forgotten catacombs beneath the subway to the desolate wastelands above, where your actions will determine the fate of mankind. But what if the real threat comes from within?

<span class="blue-bold-text">Product Overview</span>
Metro 2033 Redux is the definitive version of the cult classic ‘Metro 2033’, rebuilt in the latest and greatest iteration of the 4A Engine for Next Gen. Fans of the original game will find the unique world of Metro transformed with incredible lighting, physics and dynamic weather effects. Newcomers will get the chance to experience one of the finest story-driven shooters of all time; an epic adventure combining gripping survival horror, exploration and tactical combat and stealth.

All the gameplay improvements and features from the acclaimed sequel ‘Metro: Last Light’ have been transferred to Metro 2033 Redux – superior AI, controls, animation, weapon handling and many more – to create a thrilling experience for newcomers and veterans alike. With two unique play-styles, and the legendary Ranger Mode included, Metro 2033 Redux offers hours of AAA gameplay for an incredible price.

<span class="blue-bold-text">Game Features</span>

<span class="bold-text">■ Immerse yourself in the Moscow Metro</span> - witness one of the most atmospheric worlds in gaming brought to life with stunning next-gen visuals at 60FPSBrave the horrors of the Russian apocalypse - equip your gasmask and an arsenal of hand-made weaponry as you face the threat of deadly mutants, human foes, and the terrifying environment itself

<span class="bold-text">■ Rebuilt and Remastered for next-gen</span> - this is no mere "HD port." Metro 2033 has been rebuilt in the vastly improved Last Light engine and gameplay framework, to create the definitive version of the cult classic that fans and newcomers alike can enjoy

<span class="bold-text">■ Two unique Play Styles : "Spartan" and "Survival"</span> - approach the game as a slow-burn Survival Horror, or tackle it with the combat skills of a Spartan Ranger in these two unique modes

<span class="bold-text">■ The legendary Ranger Mode returns</span> - dare you play the fearsome Ranger Mode? No HUD, UI, deadlier combat and limited resources combine to create the ultimate immersive experience

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="yellow-bold-text">● Windows</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows Vista, 7 or 8 (64-bit only)
<span class="bold-text">Processor</span>: Dual Core CPU (2.2+ GHz Dual Core CPU or better)
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: DirectX 10, Shader Model 4 compliant graphics cards (GeForce 8800 GT 512 MB, GeForce GTS 250, etc)
<span class="bold-text">DirectX</span>: Version 10
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Addtional Notes</span>: 64-bit only

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: Windows 7 or 8 (64-bit only)
<span class="bold-text">Processor</span>: Any Quad Core or 3.0+ GHz Dual Core CPU
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: DirectX 11 compliant graphics card (GeForce GTX 480 and above)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Addtional Notes</span>: 64-bit only

<span class="yellow-bold-text">● macOS</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: OS X 10.9.5 Mavericks or newer
<span class="bold-text">Processor</span>: 3.2 GHz Intel Core i5
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: Radeon HD7950 3GB / NVIDIA GeForce GTX 750m 1GB
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Addtional Notes</span>: Notice for OS X Yosemite 10.10.5 users with an Nvidia graphics card at or above the minimum specification listed: Currently separate drivers are available to fix performance issues specifically affecting Nvidia users who are using OS X Yosemite. These drivers are currently only compatible with OS X Yosemite 10.10.5 and can be found here <a herf="http://www.nvidia.com/download/driverResults.aspx/89538/en-us" target="_blank" class="desc-link">http://www.nvidia.com/download/driverResults.aspx/89538/en-us.</a>

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: OS X 10.9.5 Mavericks or newer
<span class="bold-text">Processor</span>: 3.2 GHz Intel Core i5
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: Radeon HD7950 3GB / NVIDIA GeForce GTX 775m 2GB
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Addtional Notes</span>: Notice for OS X Yosemite 10.10.5 users with an Nvidia graphics card at or above the minimum specification listed: Currently separate drivers are available to fix performance issues specifically affecting Nvidia users who are using OS X Yosemite. These drivers are currently only compatible with OS X Yosemite 10.10.5 and can be found here <a herf="http://www.nvidia.com/download/driverResults.aspx/89538/en-us" target="_blank" class="desc-link">http://www.nvidia.com/download/driverResults.aspx/89538/en-us.</a>

<span class="yellow-bold-text">● Linux</span>

<span class="green-bold-text">Minimum:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Ubuntu 12.04 or 14.04 or Steam OS
<span class="bold-text">Processor</span>: Intel Core i5 2.7 GHz (or equivalent AMD)
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA Geforce 460 / AMD 5850 with 2GB VRAM
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Additional Notes</span>: Due to OpenGL 4, Intel video cards no longer supported

<span class="green-bold-text">Recommended:</span>
Requires a 64-bit processor and operating system
<span class="bold-text">OS</span>: 64-bit Ubuntu 12.04 or 14.04 or Steam OS
<span class="bold-text">Processor</span>: Intel Core i7 2.5 Ghz (or equivalent AMD)
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA Geforce 680 / AMD 7870 with 2GB VRAM+
<span class="bold-text">Storage</span>: 10 GB available space
<span class="bold-text">Additional Notes</span>: Due to OpenGL 4, Intel video cards no longer supported

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Czech, Dutch, Polish, Russian, Ukrainian</span>
      `,
      333000,
      [
        "FPS",
        "Action",
        "Horror",
        "Singleplayer",
        "First-Person",
        "Shooter",
        "Adventure",
        "Survival",
        "Multiplayer",
      ]
    )
  );

  gameList.push(
    new game(
      `Batman™ Arkham Origins`,
      `/assets/img/thumb/BMAO.webp`,
      [
        `/assets/img/preview/BA_Origins/pic_1.jpg`,
        `/assets/img/preview/BA_Origins/pic_2.jpg`,
        `/assets/img/preview/BA_Origins/pic_3.jpg`,
        `/assets/img/preview/BA_Origins/pic_4.jpg`,
        `/assets/img/preview/BA_Origins/pic_5.jpg`,
      ],
      `/assets/img/game-banner/BAOrigins_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
 
As of December 4, 2016, the online services portion of Batman: Arkham Origins will be retired. We thank those that have joined us to battle over the last 3 years. The Single player campaign may still be played and enjoyed offline. For any questions relating to Batman: Arkham Origins, please contact WB Games customer service <a href="http://support.wbgames.com/" target="_blank" class="desc-link">http://support.wbgames.com/.</a>

Batman™: Arkham Origins is the next installment in the blockbuster Batman: Arkham videogame franchise. Developed by WB Games Montréal, the game features an expanded Gotham City and introduces an original prequel storyline set several years before the events of Batman: Arkham Asylum and Batman: Arkham City, the first two critically acclaimed games of the franchise. Taking place before the rise of Gotham City’s most dangerous criminals, the game showcases a young and unrefined Batman as he faces a defining moment in his early career as a crime fighter that sets his path to becoming the Dark Knight.

<span class="blue-bold-text">KEY FEATURES</span>

<span class="bold-text">■ The Arkham Story Begins</span>: Batman: Arkham Origins features a pivotal tale set on Christmas Eve where Batman is hunted by eight of the deadliest assassins from the DC Comics Universe. Players become an early-career Batman as he encounters for the first time many of the characters that shape his future.

<span class="bold-text">■ Enhanced Detective Mode</span>: Think like Batman with an all-new Case File system that allows players to analyze seemingly impossible-to-solve crime reconstructions in real time. Combining Batman’s cowl sensors with the Batcomputer, players can digitally recreate crimes and study detailed simulation of the act as it happened.

<span class="bold-text">■ Gotham City will learn to fear Batman</span>: Take back the sprawling streets of Gotham years before its transformation into Arkham City. Glide above or battle your way through new and ever more dangerous districts in the quest for justice. Prevent crimes in progress, take down gangs of violent new criminals and explore deadly new locations, from the impoverished streets to the penthouses of Gotham’s wealthy.

<span class="bold-text">■ Gotham’s Most Wanted</span>: The city streets are filled with more than just Black Mask’s assassins. Locate and take down Gotham’s most violent and dangerous criminals to earn unique upgrades.

<span class="bold-text">■ Lethal New Enemies</span>: Fight new foes such as the Armored Enforcer, the Martial Artist and more – each of which challenge players to approach Batman’s FreeFlow Combat scenarios in different ways. Classic FreeFlow combat is expanded with every new opponent – and with Batman’s abilities to engage them.

<span class="bold-text">■ New Gadgets</span>: Utilize Batman’s signature gadgets or take advantage of powerful new additions such as the Remote Claw, the Concussion Detonator and more. Use the Remote Claw to create new routes by deploying strategic tightropes or directly attack enemies by stringing them up from vantage points. Ready the Concussion Detonator to stun and disorient groups of opponents in close combat.

<span class="bold-text">■ New and Familiar Characters</span>: Experience a fresh take on iconic Batman characters including Black Mask, Penguin, Deathstroke, Bane, Deadshot, Anarky, Captain Gordon, The Joker, Copperhead, Firefly and others yet to be revealed.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
<span class="bold-text">OS</span>: 32-bit: Vista, Win 7, Win 8
<span class="bold-text">Processor</span>: Intel Core 2 Duo, 2.4 GHz / AMD Athlon X2, 2.8 GHz
<span class="bold-text">Memory</span>: 2 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce 8800 GTS / AMD Radeon HD 3850 or better with 512 MB of VRAM
<span class="bold-text">DirectX</span>: Version 9.0c
<span class="bold-text">Storage</span>: 20 GB available space
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Additional Notes</span>: Windows XP and DirectX® 9.0b and below not supported

<span class="green-bold-text">Recommended:</span>
<span class="bold-text">OS</span>: 64-bit: Vista, Win 7, Win 8
<span class="bold-text">Processor</span>: Intel Core i5-750, 2.67 GHz / AMD Phenom II X4 965, 3.4 GHz
<span class="bold-text">Memory</span>: 4 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 560 / AMD Radeon HD 6950 or better with 768 MB+ of VRAM (DirectX 11 Compatible)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 20 GB available space
<span class="bold-text">Network</span>: Broadband Internet connection
<span class="bold-text">Sound Card</span>: Windows XP and DirectX® 9.0b and below not supported

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, German, French, Italian, Korean, Spanish - Spain, Russian, Polish, Portuguese - Brazil</span>
      `,
      188000,
      [
        "Action",
        "Adventure",
        "Third Person",
        "Singleplayer",
        "Multiplayer",
        "Fighting",
        "RPG",
      ]
    )
  );

  gameList.push(
    new game(
      `Ghostrunner`,
      `/assets/img/thumb/Ghostrunner.webp`,
      [
        `/assets/img/preview/Ghostrunner/pic_1.jpg`,
        `/assets/img/preview/Ghostrunner/pic_2.jpg`,
        `/assets/img/preview/Ghostrunner/pic_3.jpg`,
        `/assets/img/preview/Ghostrunner/pic_4.jpg`,
        `/assets/img/preview/Ghostrunner/pic_5.jpg`,
        `/assets/img/preview/Ghostrunner/pic_6.jpg`,
        `/assets/img/preview/Ghostrunner/pic_7.jpg`,
        `/assets/img/preview/Ghostrunner/pic_8.jpg`,
        `/assets/img/preview/Ghostrunner/pic_9.jpg`,
        `/assets/img/preview/Ghostrunner/pic_10.jpg`,
      ],
      `/assets/img/game-banner/Ghostrunner_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>
      
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1139900/extras/Ghostrunner_01.gif?t=1698685791" alt="">

<span class="bold-text">Ghostrunner</span> is a hardcore FPP slasher packed with lightning-fast action, set in a grim, cyberpunk megastructure. Climb Dharma Tower, humanity’s last shelter, after a world-ending cataclysm. Make your way up from the bottom to the top, confront the tyrannical Keymaster, and take your revenge.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1139900/extras/Ghostrunner_02.gif?t=1698685791" alt="">

The streets of this tower city are full of violence. Mara the Keymaster rules with an iron fist and little regard for human life.

As resources diminish, the strong prey on the weak and chaos threatens to consume what little order remains. The decisive last stand is coming. A final attempt to set things right before mankind goes over the edge of extinction.

As the most advanced blade fighter ever created, you’re always outnumbered but never outclassed. Slice your enemies with a monomolecular katana, dodge bullets with your superhuman reflexes, and employ a variety of specialized techniques to
prevail.
      <img style="width: 100%" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1139900/extras/Ghostrunner_03.gif?t=1698685791" alt="">

One-hit one-kill mechanics make combat fast and intense. Use your superior mobility (and frequent checkpoints!) to engage in a never-ending dance with death fearlessly.

Ghostrunner offers a unique single-player experience: fast-paced, violent combat, and an original setting that blends science fiction with post-apocalyptic themes. It tells the story of a world that has already ended and its inhabitants who fight to survive.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
<span class="bold-text">OS</span>: Windows 7, 8.1, 10 x64
<span class="bold-text">Processor</span>: Intel Core i5-2500K (4 * 3300) AMD Phenom II X4 965 (4 * 3400) or equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: GeForce GTX 1050 (2048 MB) / Radeon RX 550 (4096 MB)
<span class="bold-text">Storage</span>: 22 GB available space
<span class="bold-text">Additional Notes</span>: 60FPS, Low settings, 720p

<span class="green-bold-text">Recommended:</span>
<span class="bold-text">OS</span>: 64-bit: Windows 7, 8.1, 10 x64
<span class="bold-text">Processor</span>: Intel Core i7-6700K (4 * 4000) or AMD Ryzen 5 1500X (4 * 3500) or equivalent
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: GeForce GTX 970 (4096 MB) or Radeon RX 5700 (8192 MB)
<span class="bold-text">Storage</span>: 22 GB available space
<span class="bold-text">Sound Card</span>: 60FPS, High settings, 1080p

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Japanese, Polish, Prtuguese - Brazil, Russian, Simplified Chinese, Spanish - Latin America, Korean, Traditional Chinese, Spanish - Spain, Ukrainian</span>
      `,
      733000,
      [
        "Action",
        "First-Person",
        "Singleplayer",
        "Adventure",
        "Fighting",
        "Shooter",
      ]
    )
  );

  gameList.push(
    new game(
      `Assassin's Creed® III Remastered`,
      `/assets/img/thumb/Assassin's_Creed_III_Remastered.webp`,
      [
        `/assets/img/preview/AC_III_Remastered/pic_1.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_2.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_3.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_4.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_5.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_6.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_7.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_8.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_9.jpg`,
        `/assets/img/preview/AC_III_Remastered/pic_10.jpg`,
      ],
      `/assets/img/game-banner/ACIII_banner.webp`,
      `
<span class="blue-bold-text">ABOUT THIS GAME</span>

Relive the American Revolution or experience it for the first time in Assassin's Creed® III Remastered, with enhanced graphics and improved gameplay mechanics. Also includes Assassin's Creed Liberation remastered and all solo DLC content.

<span class="green-bold-text">FIGHT FOR FREEDOM</span>
1775. The American Colonies are about to revolt. As Connor, a Native American Assassin, secure liberty for your people and your nation. From bustling city streets to the chaotic battlefields, assassinate your foes in a variety of deadly ways with a vast array of weaponry.

<span class="green-bold-text">A NEW VISUAL AND GAMEPLAY EXPERIENCE</span>
Play the iconic Assassin's Creed III, with enhanced graphics, now featuring: 4K resolution, new character models, polished environment rendering and more. The gameplay mechanics have been revamped as well, improving your experience and your immersion.

<span class="green-bold-text">ADDITIONAL CONTENT</span>
Also includes all the original solo DLC, including The Tyranny of King Washington, and the full game: Assassin's Creed Liberation Remastered.

<span class="blue-bold-text">SYSTEM REQUIREMENTS</span>
<span class="green-bold-text">Minimum:</span>
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i5 2400 @ 3.1 GHz, AMD FX 6350 @ 3.9 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 660, AMD Radeon R9 270X (2GB VRAM with Shader Model 5.0)
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 45 GB available space
<span class="bold-text">Sound Card</span>: DirectX 9.0c compatible sound card with latest drivers

<span class="green-bold-text">Recommended:</span>
<span class="bold-text">OS</span>: Windows 10 (64-bit versions only)
<span class="bold-text">Processor</span>: Intel Core i5 3470 @ 3.2 GHz, AMD FX 8350 @ 4.0 GHz
<span class="bold-text">Memory</span>: 8 GB RAM
<span class="bold-text">Graphics</span>: NVIDIA GeForce GTX 770 (4GB) or AMD Radeon R9 280X (3GB) or better
<span class="bold-text">DirectX</span>: Version 11
<span class="bold-text">Storage</span>: 45 GB available space
<span class="bold-text">Sound Card</span>: DirectX 9.0c compatible sound card with latest drivers

<span class="blue-bold-text">Languages Supported</span>: <span class="white-text">English, French, Italian, German, Spanish - Spain, Dutch, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese</span>
      `,
      600000,
      [
        "Action",
        "Adventure",
        "Singleplayer",
        "Third Person",
        "Multiplayer",
        "RPG",
        "Co-op",
      ]
    )
  );

  localStorage.setItem("gameList", JSON.stringify(gameList));
}

if (localGameList !== null) {
  const templist = JSON.parse(localGameList);
  templist.forEach((item) => {
    gameList.push(
      new game(
        item.name,
        item.img,
        item.preview,
        item.gamebanner,
        item.description,
        item.price,
        item.category,
        item.id
      )
    );
  });
  let lastCountId = parseInt(gameList[gameList.length - 1].id.replace("g", ""));
  let firstCountId = parseInt(gameList[0].id.replace("g", ""));
  if (firstCountId >= lastCountId) game.countId = firstCountId + 1;
  else game.countId = lastCountId + 1;
}

export function deleteGame(id) {
  gameList = gameList.filter((item) => item.id !== id);
  localStorage.setItem("gameList", JSON.stringify(gameList));
}

export function addGame(name, description, img, price, gamebanner, catgory) {
  gameList = [
    new game(name, img, [], gamebanner, description, price, catgory),
    ...gameList,
  ];
  localStorage.setItem("gameList", JSON.stringify(gameList));
}

export default gameList;
