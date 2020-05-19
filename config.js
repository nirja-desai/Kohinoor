var config = {
    style: 'mapbox://styles/kalakar/cka3agsn708391jmupd97hum8',
    accessToken: 'pk.eyJ1Ijoia2FsYWthciIsImEiOiJjaW4yNHBvMDMwYjZrdXBra29qYmxnOGM5In0.4Lh20IMXH60mscRm5EKuNw',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: 'The Incredible Journey of the Kohinoor',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    image: '',
    byline: 'By Nirja and Sumil Desai',

  
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'chapter_0',
            title: 'THE BEGINNINGS',
            //image: 'Screen Shot 2020-05-06 at 11.33.16 AM.jpg',
            alignment: 'center',
            description: 'With its storied beginnings as the Syamantak Mani of the Bhagwad Puran, the Kohinoor has a violent and murky history. Possibly mined from Kollur in modern day Andhra Pradesh, this fabled diamond was taken into the Delhi sultanate when Alauddin Khilji defeated the Kakatiyas of southern India in the early 1300s. From there it is said to have been presented to Babur after his conquest of the Delhi Sultanate in 1526 and thus it came into the possession of the Mughals. We pick up the trail with the first official record of its sighting.',
            location: {
              center: { lon: 91.53712, lat: 26.30800 },
                zoom: 2.9,
                speed: .4,
                pitch: 0.00,
                bearing: 0.00

            },
            onChapterEnter: [
                 {
                    layer: 'diamond-locations',
                     opacity: 0
                 }
            ],
            onChapterExit: [
                {
                    layer: 'diamond-locations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter_1',
            image: './path/to/image/source.png',
            title: 'DELHI, INDIA',
            //image: './path/to/image/source.png',
            description: 'Now Ruz 1635 - Seven years after it was commissioned by Mughal emperor Shah Jahan, the magnificent Peacock Throne is inaugurated. The throne was studded with rubies, emeralds, pearls, diamonds and precious stones of every kind, reportedly worth Rs.10,000,000  of that time. The Kohinoor was set in one of the peacock&#39;s eyes.',
            location: {
              center: { lon: 79.42901, lat: 29.53068 },
                zoom: 5.51,
                speed: .4,
                pitch: 31.50,
                bearing: 0.00
            },
            onChapterEnter: [
                 {
                    layer: 'delhi',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'delhi',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter_2',
            title: ' ',
            image: './path/to/image/source.png',
            description: 'On May 16, 1739 - after 57 days of murder, loot, and pillage - Nader shah (the Persian invader) leaves Delhi for Herat with untold wealth (as much as the modern day equivalent of £9 billion by some accounts), also taking with him the Kohinoor. ',
            location: {
                center: { lon: 79.42901, lat: 29.53068 },
                zoom: 5.51,
                speed: .4,
                pitch: 31.50,
                bearing: 0.00
            },
            onChapterEnter: [
            {
                    layer: 'delhi',
                     opacity: 1
                 }
            ],
            onChapterExit: [
        {
                    layer: 'delhi',
                    opacity: 0
                }
            ]
        },
                {
            id: 'chapter_3',
            title: 'Herat, Afghanistan',
            image: './path/to/image/source.png',
            description: 'Nader Shah&#39;s descent into madness fuelled by paranoia for the Kohinoor begins with having his own son blinded. Nader Shah suspects his son of wanting to have him assassinated. In March 1747 Nader Shah&#39;s tyranny ends when he is murdered by his own guards. The kohinoor is captured by Ahmad Khan Abdali who takes the Kohinoor to Kandahar and establishes the kingdom of Afghanistan.',
            location: {
                center: { lon: 63.14466, lat: 34.04834 },
                zoom: 7.21,
                speed: .4,
                pitch: 49.50,
                bearing: 0.00
            },
            onChapterEnter: [
        {
                    layer: 'herat',
                     opacity: 1
                 }
            ],
            onChapterExit: [
            {
                    layer: 'herat',
                     opacity: 0
                 }
                 ]
        },
                        {
            id: 'chapter_4',
            title: 'Kandahar, Afghanistan',
            image: './path/to/image/source.png',
            description: 'Winter of 1800 - Shah Zaman (descendant of Abdali) is imprisoned and deposed, hides the Kohinoor in a crack in the wall of his prison cell',
            location: {
               center: { lon: 66.87500, lat: 31.70759 },
                zoom: 7.21,
                speed: .4,
                pitch: 49.50,
                bearing: 0.00
            },
            onChapterEnter: [
            {
                    layer: 'kandahar',
                     opacity:1
                 }
                 ],
            onChapterExit: [
            {
                    layer: 'kandahar',
                     opacity:0
                 }
                 ]
        },
                        {
            id: 'chapter_5',
            title: 'Lahore, Pakistan',
            image: './path/to/image/source.png',
            description: 'However Shah Shuja is unable to hold on to the throne of Afghanistan and in 1810 is forced to escape to Lahore, Punjab - the dominion of Maharaja Ranjit Singh. The Shah leaves the kohinoor with his wife Wa’fa Begum in Lahore. In June 1813, Ranjit Singh finally obtains the Kohinoor.',
            location: {
                center: { lon: 75.13673, lat: 31.64506 },
                zoom: 7.21,
                speed: .4,
                pitch: 49.50,
                bearing: 0.00
            },
            onChapterEnter: [
            {
                    layer: 'lahore',
                     opacity: 1
                 }
                 ],
            onChapterExit: [
            {
                    layer: 'lahore',
                     opacity: 0
                 }
                 ]
        },
                        {
            id: 'chapter_6',
            title: '',
            image: './path/to/image/source.png',
            description: 'After bloody coups and counter-coups the diamond is ultimately being worn by the child emperor Duleep singh when war breaks out with the British. Following their victory in March 1849, under the Treaty of Lahore, the British annex Punjab and the Kohinoor along with it.',
            location: {
               center: { lon: 75.13673, lat: 31.64506 },
                zoom: 7.21,
                speed: .4,
                pitch: 49.50,
                bearing: 0.00
            },
            onChapterEnter: [
            {
                    layer: 'lahore',
                     opacity: 1
                 }
                 ],
            onChapterExit: [
            {
                    layer: 'lahore',
                     opacity: 0
                 }
                 ]
        },
                        {
            id: 'chapter_7',
            title: 'Enroute to London',
            image: './path/to/image/source.png',
            description: 'The Kohinoor travels via ship from Bombay to England',
            location: {
              center: { lon: 77.63070, lat: 21.57702 },
                zoom: 2.04,
                speed: .2,
                pitch: 0.50,
                bearing: 0.00
            },
            onChapterEnter: [
            {
                    layer: 'path-of-the-diamond',
                     opacity: 1
                    


                 }
            ],
            onChapterExit: [
            {
                    layer: 'path-of-the-diamond',
                     opacity: 0
                     

                 }
            ]
        },

                     
                      {
            id: 'chapter_9',
            title: 'Portsmouth, England',
            image: './path/to/image/source.png',
            description: 'In June 1850, between cholera onboard the ship and a hurricane that tossed it for 12 hours, a skeleton crew sails into Portsmouth harbor carrying the diamond. Meanwhile, an unnamed assailant strikes Queen Victoria with an iron rod and former PM Robert Peel is thrown from his horse and dies. The queen receives the diamond in mourning (and with a black eye)',
            location: {
              center: { lon: -1.15272, lat: 50.85108 },
                center: { lon: -0.26482, lat: 50.93296 },
                zoom: 7.82,
                speed: .2,
                pitch: 57.00,
                bearing: -0.29
            },
            onChapterEnter: [
            {
                    layer: 'portsmouth',
                     opacity: 1
                 }
                 ],
            onChapterExit: [{
                    layer: 'portsmouth',
                     opacity: 0
                 }]
        },
                    {
            id: 'chapter_10',
            title: 'Hyde Park, London',
            image: './path/to/image/source.png',
            description: 'In the summer of 1851 the diamond is displayed in the specially constructed Crystal Palace in Hyde Park for the &#39;The Great Exhibition&#39;. However the diamond appears dull and disappoints eager viewers.',
            location: {
               center: { lon: -0.16412, lat: 51.50859 },
                zoom: 12.93,
                speed: .4,
                pitch: 35.50,
                bearing: -16.17
            },
            onChapterEnter: [
            {
                    layer: 'hyde-park',
                     opacity: 1
                 }
                 ],
            onChapterExit: [
            {
                    layer: 'hyde-park',
                     opacity: 0
                 }
                 ]
        },
                    {
            id: 'chapter_11',
            title: 'Tower of London, London',
            image: './path/to/image/source.png',
            description: 'In 1852 the diamond is recut from its original 186 carats to just 105 carats and worn by Queen Victoria in her crown. The Kohinoor becomes the literal "jewel in the crown" for the British and resides in the tower of London, for now.',
            location: {
               center: { lon: -0.07433, lat: 51.50869 },
                zoom: 16.10,
                speed: .4,
                pitch: 60.00,
                bearing: -25.60
            },
            onChapterEnter: [
            {
                    layer: 'tower-of-london',
                     opacity: 1
                 }
                 ],
            onChapterExit: [
            {
                    layer: 'tower-of-london',
                     opacity: 0
                 }
                 ]
        },
    ]
};
