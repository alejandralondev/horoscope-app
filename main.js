document.querySelector('#check').addEventListener('click', check)

function check() {

  const bdayMonth = document.querySelector('#bdayMonth').value.toLowerCase()

  const bdayDay = document.querySelector('#bdayDay').value.toLowerCase()

//   let zodiac = document.querySelector('#placeToSee').innerText

  console.log(bdayMonth)
  console.log(bdayDay)
  //Conditionals go here
//pisces
  if(bdayMonth === 'march' && bdayDay <= 20 || bdayMonth === 'february' && bdayDay >= 19 ){
   document.querySelector('#placeToSee').innerText = 'You are a Pisces! Pisces is a Water element sign and is ruled by the planets Neptune and Jupiter. Pisceans are friendly and likable, and yet can be very moody and introspective as well. Pisces is a watery sign, concerned with subtle emotions and secret mystical depths. Pisceans are not entirely at home in this world. They may at times prefer their inner life to this one. Pisceans are dreamy and full of imagination, and are easily influenced by everything around them, being quite sensitive to the emotions of others. They also have an artistic temperament that allows them to express these feelings in creative and innovative ways. Pisceans can be strong when necessary, but may have a hard time making a decision. They also may experience upsets periodically, stemming from their extreme sensitivity as they react to situations and events that seem harsh. At their best Pisceans are truly compassionate, offering service, love and understanding to all of life.'
   document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Scorpio, Cancer, Capricorn, Taurus'
   document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Sagittarius, Gemini, Libra, Leo'
   document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Virgo'

//Aries
  } else if(bdayMonth === 'march' && bdayDay >= 21 || bdayMonth === 'april' && bdayDay <= 19 ){
    document.querySelector('#placeToSee').innerText = 'You are an Aries! Aries is a Fire element sign and is ruled by the planet Mars. Aries people tend to be energetic, forceful and outgoing. They are good at getting things done, although they prefer starting to finishing. Like the energy of the first rush of spring, they move into the world in a headstrong, pioneering way. Aries people are likely to rush into things before reflecting, and may also be impatient or unwilling to sit back and allow events to mature. They have great vitality and a tremendous need to be physically active. Aries people have a strong will, and are self-centered about pursuing it, so that they may try to dominate other people until they learn to be more subtle about getting their way. They also have an acute need for love and affection. Aries people benefit from self-discipline, so that they can channel their abundant energy more constructively.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Leo, Sagittarius, Gemini, Aquarius'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Capricorn, Cancer, Virgo, Scorpio'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Libra' 

//Taurus
} else if(bdayMonth === 'april' && bdayDay >= 20 || bdayMonth === 'may' && bdayDay <= 20 ){
    document.querySelector('#placeToSee').innerText = 'You are a Taurus! Taurus is an Earth element sign and is ruled by the planet Venus. Taureans revel in the pleasures of life. They crave the security and comfort of relaxing in the warmth of their home environment. They value the senses and the enjoyment of material things. Taureans are likely to work hard to make their home an attractive one. They also have the makings of a healer and have a large capacity for kindness. Although they are quiet on the surface, almost passive, Taureans possess a powerful will and can be quite stubborn at times, and perhaps somewhat rigid in their thinking. Taureans also tend to be loving, obedient and loyal. Material rewards seem to come easily to them, and they are able to lead the good life without being excessively concerned about it. Taureans are practical, and provide a purposeful, productive and stabilizing influence for themselves and all those around them.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Virgo, Capricorn, Cancer, Pisces'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Aquarius, Leo, Libra, Sagittarius'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Scorpio' 

//Gemini
} else if(bdayMonth === 'may' && bdayDay >= 21 || bdayMonth === 'june' && bdayDay <= 20 ){
    document.querySelector('#placeToSee').innerText = 'You are a Gemini! Gemini is an Air element sign and is ruled by the planet Mercury. Gemini is the sign associated with communication, logical thought processes (based on duality) and the conscious mind. Gemini people tend to be airy and intellectual, glib of tongue and curious about life and other people. They can experience two sides of things at the same time, and may tend to be flighty.Geminis move through life like butterflies, engaging in many varied experiences to gain knowledge. They are witty and have a good sense of humor, and are likely to be excellent conversationalists. Geminis make good teachers. They can be nervous and high-strung, and may be mischievous. Unlike possessive Taurus, they tend toward liberty in relationship. And although Geminis can be easily bored, under the control of self-discipline they have tremendous intellectual and artistic possibilities.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Libra, Aquarius, Aries, Leoo'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Pisces, Virgo, Capricorn, Scorpio'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Sagittarius' 

//Cancer
} else if(bdayMonth === 'june' && bdayDay >= 21 || bdayMonth === 'july' && bdayDay <= 22 ){
    document.querySelector('#placeToSee').innerText = 'You are a Cancer! Cancer is a Water element sign and is ruled by The Moon. Cancerians are nurturing and protective of others. Their ruling planet is the Moon, and they tend to be moody, with constantly changing emotions. Cancerians are also likely to be security-conscious and highly value their home life. They may appear passive, and tend to rely on their feelings to make decisions. They are subtle, rather than direct, and are likely to reflect the moods of those around them. Cancerians may be involved with the past in some way, because the sign of Cancer, the sign of nurturing, protecting and sustaining, is strongly tied to the past, and the principle of Karma. They tend to collect the residue of past experience and hold onto it, allowing it to color present activities and lead them to instinctual action. Rather than allowing themselves to be driven by their changing moods, they benefit from shedding the light of conscious reason on their habitual patterns and focusing on their true goals.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Scorpio, Pisces, Taurus, Virgo'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Aries, Libra, Aquarius, Sagittarius'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Capricorn' 

//Leo
} else if(bdayMonth === 'july' && bdayDay >= 23 || bdayMonth === 'august' && bdayDay <= 22 ){
    document.querySelector('#placeToSee').innerText = 'You are a Leo! Leo is a Fire element sign and is ruled by The Sun. Leos are likely to express themselves in dramatic, creative and assertive ways. They are also likely to enjoy the warmth of the physical Sun. Leos have great energy, courage and honesty. They are likely to be self-confident and maybe even a bit self-indulgent as they expect to be the center of attention, and often are. Leos can be quite determined and usually get their way when they really want to. They also possess great integrity, and are a natural leader. Leo people are very proud. Their challenge is to temper any tendency for arrogant or egotistical behavior and to instead develop humility and compassion; to learn detachment in the gift of their affections, so that they radiate their abundant energy freely and enhance the life experience of others around them.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Aries, Sagittarius, Gemini, Libra'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Taurus, Scorpio, Pisces, Capricorn'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Aquarius' 

//Virgo
} else if(bdayMonth === 'august' && bdayDay >= 23 || bdayMonth === 'september' && bdayDay <= 22 ){
    document.querySelector('#placeToSee').innerText = 'You are a Virgo! Virgo is an Earth element sign and is ruled by the planet Mercury. Virgo people tend to be very conscious of details. They may appear nervous or obsess over health issues. They are likely to be neat and orderly, at least in some area of their life, although they may exhibit the opposite tendency in cases where they have not yet found their guiding principle of organization.Virgos love work, service to others and the gathering of the fruits of the material world, as symbolized by the harvest. They are also likely to be a good conversationalist, with wide-ranging knowledge and interesting ideas. They can be analytical and perhaps overly fond of detail, with perfectionist tendencies, and they may miss out on the big picture by concentrating on the micro. It also benefits them to learn the fine line between discrimination and criticism. Virgos mission in life is the purification of their activity in pursuit of their goals, manifesting their inherent love of excellence in all strivings.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Taurus, Capricorn, Cancer, Scorpio'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Gemini, Sagittarius, Aquarius, Aries'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Pisces' 

//Libra
} else if(bdayMonth === 'september' && bdayDay >= 23 || bdayMonth === 'october' && bdayDay <= 22 ){
    document.querySelector('#placeToSee').innerText = 'You are a Libra! Libra is an Air element sign and is ruled by the planet Venus. Libra is the sign of harmony and relationship. The Sun in Libra is at the time of the Equinox, when day equals night, and similarly Libra strives for balance between polarities. Librans are known for their good taste, elegance and charm. They are seekers of harmony and beauty. Their natural mode of living is in partnership with others. Intimate relationships are quite important to them, as are issues of social justice. Libras forever hope that all parties in a conflict will be satisfied, and they have a tendency to understand and support both sides of a dispute, which can drive their friends crazy unless they are smart enough to value the mediation that Libras naturally provide. Libras will go out of thier way to avoid a quarrel, and they may have a hard time making a decision. Artistic pursuits of all kinds provide an outlet for Libras love of beauty. They benefit from strengthening their will to act in favor of their higher purpose, which ultimately lies in dedicating themselves to humanity at large.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Gemini, Aquarius, Leo, Sagittarius'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Capricorn, Cancer, Pisces, Taurus'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Aries' 
    
//Scorpio
} else if(bdayMonth === 'october' && bdayDay >= 23 || bdayMonth === 'november' && bdayDay <= 21 ){
    document.querySelector('#placeToSee').innerText = 'You are a Scorpio! Scorpio is a Water element sign and is ruled by the planet Mars and Pluto. Scorpio is the most intense sign of the Zodiac, and is associated with sexual activity and with the symbolism of death and rebirth. Their emotions run deep. Scorpios have great personal magnetism and great powers of persuasion or even the ability to coerce others. Their will is strong, and they let nothing stand in their way of achieving their goals. They may suffer in life, but their pain leads to important personal transformation. They are very good at group dynamics, and working with the public. Scorpios are a shrewd judge of other peoples motives, and may be willing to use their special knowledge to their own advantage. Although they can be manipulative at times, when they work out their issues to be more in line with their own higher nature, they can take on the charismatic power of a natural healer, transforming themselves and society around them.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Cancer, Pisces, Virgo, Capricorn'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Aquarius, Leo, Aries, Gemini'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Taurus' 

//Sagittarius
} else if(bdayMonth === 'november' && bdayDay >= 22 || bdayMonth === 'december' && bdayDay <= 21 ){
    document.querySelector('#placeToSee').innerText = 'You are a Sagittarius! Sagittarius is a Fire element sign and is ruled by the planet Jupiter. Sagittarius is an optimistic, positive-thinking sign associated with the quest for freedom from all restriction as well as idealism, religion and philosophy. Sagittarians are direct and forthright, good-natured and affirmative in their outlook. They tend to speak with a blunt tongue, which can get them into trouble at times, although they are usually able to laugh themselves out of it. Sagittarians display honesty and a strong moral nature. They also like to have fun and enjoy a good chuckle, even at their own expense. They gravitate toward adventure, sports and travel, as well as gambling and other forms of risk-taking. They are likely to be very curious about the world around them, with a love for nature and a contagious enthusiasm for exploration of all kinds. At the highest level, Sagittarians are concerned with understanding, perception, and mental activity in the service of their high ideals for the benefit of mankind.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Leo, Aries, Libra, Aquarius'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Pisces, Virgo, Taurus, Cancer'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Gemini' 

//capricorn
} else if(bdayMonth === 'december' && bdayDay >= 22 || bdayMonth === 'january' && bdayDay <= 19 ){
    document.querySelector('#placeToSee').innerText = 'You are a Capricorn! Capricorn is an Earth element sign and is ruled by the planet Saturn. Capricorn people are ambitious and practical, and are likely to have an excellent sense of social responsibility. They also tend to be conscious of social mores, perhaps to the point of over-concern. Their natural caution allows them to advance slowly and steadily to the top. Capricorn represents the accomplishments of the material and the quest for prestige, honor and success in public achievement. It is also possible that the driving force behind their ambition partially lies in deep-rooted feelings of insecurity. Capricorns put themselves under enormous pressure to perform, and can feel personally responsible for those around them. They may have suffered from a restrictive early environment, and their aloofness may serve to protect them from dealing with a fear of intimacy, or low self-esteem. Capricorns exemplify the values of hard work and accomplishment, and service to the goals of humanity. Their redemption comes when they allow the spiritual joy that they feel inside to fully express itself in graceful acts of loving-kindness.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Virgo, Taurus, Scorpio, Pisces'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Aries, Libra, Gemini, Leo'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Cancer' 

//aquarius
} else if(bdayMonth === 'january' && bdayDay >= 20 || bdayMonth === 'february' && bdayDay <= 18 ){
    document.querySelector('#placeToSee').innerText = 'You are an Aquarius! Aquarius is an Air element sign and is ruled by the planet Uranus and Saturn. Aquarians have a rebellious nature, and are eccentric, spontaneous and original. They are forward thinking and detached, and can seem conservative though they really are not very much so. They are scientifically minded and logical, and confident in manner. Aquarians are likely to be years ahead of their time in the way they think. They can also appear to be more involved with work than with other people, although they truly value social contact. Aquarians are intuitive, imaginative and inventive, and inclined to take chances, especially in the service of their goals. They can be quite noble in their deepest nature, but also may come across as critical and demanding. Their highest purpose is found in aligning themselves with the advancement of social and humanitarian ideals.'
    document.querySelector('#otherPlaceToSee1').innerText = 'Most Compatible Zodiac Signs: Libra, Gemini, Sagittarius, Aries'
    document.querySelector('#otherPlaceToSee2').innerText = 'Least Compatible Zodiac Signs: Taurus, Scorpio, Cancer, Virgo'
    document.querySelector('#otherPlaceToSee3').innerText = 'Opposite Zodiac Sign: Leo' 

} else {
    document.querySelector('#placeToSee').innerText = 'Enter your birthday month and day silly'
  }
}

