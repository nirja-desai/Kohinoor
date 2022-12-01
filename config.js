var config = {
   "style": "mapbox://styles/kalakar/cka3agsn708391jmupd97hum8",
   "accessToken": "pk.eyJ1Ijoia2FsYWthciIsImEiOiJjaW4yNHBvMDMwYjZrdXBra29qYmxnOGM5In0.4Lh20IMXH60mscRm5EKuNw",
   "showMarkers": false,
   "theme": "light",
   "alignment": "right",
   "title": "TAMING THE MOUNTAIN OF LIGHT",
   "subtitle": "The Incredible Journey of the Kohinoor Diamond",
   "image": "",
   "byline": "By Sumil and Nirja Desai",
   "footer": "Research and text: <a class=\"hover-1\" href=\"https://www.instagram.com/sumildesai/\" target=\"_blank\"><b>Sumil Desai<\/a><\/b>. Illustrator and designer: <a class=\"hover-1\" href=\"https://twitter.com/nirja_desai?lang=en\" target=\"_blank\"><b>Nirja Desai<\/b><a>. <br> Special thanks to <a class=\"hover-1\" href=\"https://github.com/devanshdesai\" target=\"_blank\"><b>Devansh Desai<\/b><\/a> <br> Reference: Dalrymple, William, and Anita Anand. <a class=\"hover-1\" href=\"http://www.williamdalrymple.uk.com/books/kohinoor-the-story-of-the-worlds-most-infamous-diamond\" target=\"_blank\"><b>Koh-i-Noor: The History of the World's Most Infamous Diamond<\/b><\/a>. London, Bloomsbury, 2017. <br> &copy; 2023",
   "chapters": [
      {
         "id": "chapter_0",
         "title": "THE BEGINNINGS",
         "alignment": "center",
         "description": "With its storied beginnings as the <b>Syamantak Mani</b> of the Bhagwad Puran, the Kohinoor has a violent and murky history. Possibly mined from Kollur in modern day Andhra Pradesh, this fabled diamond was taken into the Delhi sultanate when Alauddin Khilji defeated the Kakatiyas of southern India in the early 1300s. From there it is said to have been presented to <b>Babur<\/b> after his conquest of the Delhi Sultanate in <b>1526<\/b> and thus it came into the possession of the Mughals. We pick up the trail with the first official record of its sighting.",
         "location": {
            "center": {
               "lon": 75.81537,
               "lat": 31.16460
            },
            "zoom": 2.66,
            "speed": 0.4,
            "pitch": 0,
            "bearing": 0
         }
      },
      {
         "id": "chapter_1",
         "title": "DELHI",
         "image": "images/PeacockThrone1.png",
         "description": "Now Ruz <b>1635</b> - Seven years after it was commissioned by Mughal emperor Shah Jahan, the magnificent <b>Peacock Throne<\/b> is inaugurated. The throne was studded with rubies, emeralds, pearls, diamonds and precious stones of every kind, reportedly worth <b>Rs.10,000,000<\/b> of that time. The Kohinoor was set in one of the peacock&#39;s eyes.",
         "location": {
            "center": {
               "lon": 77.21342,
               "lat": 29.71761
            },
            "zoom": 5.51,
            "speed": 0.4,
            "pitch": 60.00,
            "bearing": 0
         },
         "onChapterEnter": [
            {
               "layer": "delhi",
               "opacity": 1
            }
         ],
         "onChapterExit": []
      },
      {
         "id": "chapter_2",
         "title": " ",
         "image": "images/NaderShah1.png",
         "alignment": "center",
         "description": "On <b>May 16, 1739</b> - after 57 days of murder, loot, and pillage - <b>Nader Shah <\/b> (the Persian invader) leaves Delhi for Herat with untold wealth (as much as the modern day equivalent of £9 billion by some accounts), also taking with him the Kohinoor. ",
         "location": {
            "center": {
               "lon": 77.21342,
               "lat": 29.71761
            },
           "zoom": 5.51,
            "speed": 0.4,
            "pitch": 60.00,
            "bearing": 0
         },
         "onChapterEnter": [
            {
               "layer": "delhi",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "delhi",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_3",
         "title": "HERAT",
         "image": "images/Jezail1.png",
         "description": "Nader Shah&#39;s descent into madness fuelled by paranoia for the Kohinoor begins with having his own son blinded. Nader Shah suspects his son of wanting to have him assassinated. In <b>March 1747<\/b> Nader Shah&#39;s tyranny ends when he is murdered by his own guards. The kohinoor is captured by <b>Ahmad Khan Abdali<\/b> who takes the Kohinoor to Kandahar and establishes the kingdom of Afghanistan.",
         "location": {
            "center": {
               "lon": 62.28745, 
               "lat": 34.30810
            },
            "zoom": 5.64,
            "speed": 0.4,
            "pitch": 38.00,
            "bearing": 23.20
         },
         "onChapterEnter": [
            {
               "layer": "herat",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "herat",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_4",
         "title": "KANDAHAR",
         "image": "images/KohinoorPaper1.png",
         "description": "Winter of <b>1800<\/b> - <b>Shah Zaman<\/b> (descendant of Abdali) is imprisoned and deposed amidst political upheaval. He hides the Kohinoor in a crack in the wall of his prison cell. In <b>1803<\/b> Shah Zaman&#39;s brother <b>Shah Shuja<\/b> comes to power and sends his men looking for the Kohinoor who find it with a mullah using it as a paperweight!",
         "location": {
            "center": {
               "lon": 65.86989,
               "lat": 31.55375
            },
            "zoom": 6.51,
            "speed": 0.4,
            "pitch": 57.50,
            "bearing":  23.20
         },
         "onChapterEnter": [
            {
               "layer": "kandahar",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "kandahar",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_5",
         "title": "LAHORE",
         "image": "images/Shah_Suja1.png",
         "description": "However Shah Shuja is unable to hold on to the throne of Afghanistan and in <b>1810<\/b> is forced to escape to Lahore, Punjab - the dominion of <b>Maharaja Ranjit Singh<\/b>. The Shah leaves the kohinoor with his wife Wa’fa Begum in Lahore. In <b>June 1813<\/b>, Ranjit Singh finally obtains the Kohinoor.",
         "location": {
            "center": {
               "lon": 74.41059,
               "lat": 31.53549 
            },
            "zoom": 8.29,
            "speed": 0.4,
            "pitch": 60.00,
            "bearing":  23.20
         },
         "onChapterEnter": [
            {
               "layer": "lahore",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "lahore",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_6",
         "title": "",
         "image": "images/BritishSepoy1.png",
         "description": "After bloody coups and counter-coups the diamond is ultimately being worn by the child emperor <b>Duleep Singh<\/b> when war breaks out with the British. Following their victory in <b>March 1849<\/b>, under the Treaty of Lahore, the British annex Punjab and the Kohinoor along with it.",
         "location": {
            "center": {
                "lon": 74.41059,
               "lat": 31.53549 
            },
            "zoom": 8.29,
            "speed": 0.4,
            "pitch": 60.00,
            "bearing":  23.20
         },
         "onChapterEnter": [
            {
               "layer": "lahore",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "lahore",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_7",
         "title": "ENROUTE TO LONDON",
         "image": "images/Ship1.png",
         "description": "In <b>1850<\/b>, the Kohinoor sets sail via ship from Bombay to England. But soon after cholera is discovered onboard the ship. Mauritius refuses to let the crew disembark and threatens to sink the ship along with crew and cargo. The ship manages to continue on its journey, only to run into a storm and is tossed for 12 hours.",
         "location": {
            "center": {
               "lon": 40.99859,
               "lat": 22.31808
            },
            "zoom": 1.33,
            "speed": 0.7,
            "pitch": 0,
            "bearing": 0
         },
         "onChapterEnter": [
            {
               "layer": "ship",
               "opacity": 1
            },
            {
               "layer": "path-of-the-diamond",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "ship",
               "opacity": 0
            },
            {
               "layer": "path-of-the-diamond",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_9",
         "title": "PORTSMOUTH, ENGLAND",
         "image": "images/QueenVictoria1.png",
         "description": "In June, a skeleton crew limps into Portsmouth harbor. Meanwhile, an unnamed assailant strikes <b>Queen Victoria<\/b> with an iron rod and former PM Robert Peel is thrown from his horse and dies. The queen receives the diamond in mourning (and with a black eye).",
         "location": {
            "center": {
               "lon": -1.07174,
               "lat": 50.84650 
            },
            "zoom": 9.45,
            "speed": 0.5,
            "pitch": 60.00,
            "bearing": 23.20
         },
         "onChapterEnter": [
            {
               "layer": "portsmouth",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "portsmouth",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_10",
         "title": "HYDE PARK, LONDON",
         "image": "images/KohinoorExhibit1.png",
         "description": "In the summer of <b>1851</b> the diamond is displayed in the specially constructed Crystal Palace in Hyde Park for <b>The Great Exhibition</b>. However the diamond appears dull and disappoints eager viewers. The diamond is recut to release the ‘fire’ at its heart. The Duke of Wellington is called upon to make the inaugural cut on the diamond. He dies in eight weeks due to a stroke, before the recutting is complete.",
         "location": {
            "center": [
               -0.16380,
               51.50993
            ],
            "zoom": 13.31,
            "speed": 0.5,
            "pitch": 54.00,
            "bearing": -13.64
         },
         "onChapterEnter": [
            {
               "layer": "hyde-park",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "hyde-park",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_11",
         "title": "TOWER OF LONDON",
         "image": "images/KohinoorCrown1.png",
         "description": "In <b>1852</b> the diamond is recut from its original <b>186 carats</b> to just <b>105 carats</b> and worn by Queen Victoria in her crown. The Kohinoor becomes the literal \"jewel in the crown\" for the British and resides in the tower of London, <i>for now</i>.",
         "location": {
            "center": {
               "lon":  -0.07593,
               "lat": 51.50803
            },
            "zoom": 16.33,
            "speed": 0.4,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      }
   ]
};
