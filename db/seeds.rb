puts '🌱 Seeding data...'

puts '🗑 Destroying old data...'
Concert.destroy_all
Image.destroy_all
Video.destroy_all
ConcertComment.destroy_all

# create concerts
puts 'Creating concerts...'
c1 =
  Concert.create!(
    user_id: "1",
    band_logo: 'https://www.seekpng.com/png/full/330-3303146_symbol-red-hot-chili-peppers-logo-png-red.png',
    band: 'Red Hot Chili Peppers',
    venue: 'Globe Life Field',
    location: 'Arlington, TX',
    date: '09/18/2022',
  )
c2 =
  Concert.create!(
    user_id: "1",
    band_logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062013/foo_fighters.png?itok=gPXJLdzM',
    band: 'Foo Fighters',
    venue: 'Las Vegas Festival Grounds',
    location: 'Las Vegas, NV',
    date: '07/12/2019',
  )
c3 =
  Concert.create!(
    user_id: "1",
    band_logo: 'https://zumic.com/wp-content/uploads/2014/11/Alt-J-World-Tour-2015-Tickets-On-Sale.jpg',
    band: 'ALT-J',
    venue: 'Royal Albert Hall',
    location: 'London, England, UK',
    date: '10/30/2018',
  )
  c4 =
  Concert.create!(
    user_id: "1",
    band_logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Tool_logo_2006.svg',
    band: 'TOOL',
    venue: 'American Airlines Center',
    location: 'Dallas, Texas',
    date: '01/22/2020',
  )

# create videos
puts 'Creating videos'
Video.create!(
  video_url: 'https://www.youtube.com/embed/Gcbk4PK9GHI',
  title: 'Red Hot Chili Peppers Live 1',
  concert_id: c1.id,
)
Video.create!(
  video_url: 'https://www.youtube.com/embed/wer7Fv8EhRg',
  title: 'Red Hot Chili Peppers Live 2',
  concert_id: c1.id,
)
Video.create!(
  video_url: 'https://www.youtube.com/embed/EeoYtmBTbLM',
  title: 'Red Hot Chili Peppers Live 2004',
  concert_id: c1.id,
)
Video.create!(
  video_url: 'https://www.youtube.com/embed/ycFAtRVPEeo', 
  title: 'Foo Fighters Live Las Vegas',
  concert_id: c2.id,
)

Video.create!(
  video_url: 'https://www.youtube.com/embed/O2zG8mgY_H4', 
  title: 'alt-J live at Royal',
  concert_id: c2.id,
)

Video.create!(
  video_url: 'https://www.youtube.com/embed/svrDD4zsZuI', 
  title: 'alt-J live at Royal 2',
  concert_id: c2.id,
)

# create images
puts 'Creating Images'
Image.create!(
  image_url:
    'https://cbsnews1.cbsistatic.com/hub/i/2014/02/03/0d66193c-d106-4307-a78d-6bd5e570e39e/ap619869246035.jpg',
  title: 'Red Hot Chili Peppers',
  concert_id: c1.id,
)
Image.create!(
  image_url:
    'https://upload.wikimedia.org/wikipedia/commons/1/16/Rhcp-live-pinkpop05.jpg',
  title: 'Red Hot Chili Peppers',
  concert_id: c1.id,
)
Image.create!(
  image_url:
    'https://www.rollingstone.com/wp-content/uploads/2019/03/10056498g.jpg',
  title: 'Red Hot Chili Peppers',
  concert_id: c1.id,
)
Image.create!(
  image_url:
    'https://www.nme.com/wp-content/uploads/2020/11/Foo-Fighters-Dave-Grohl.jpg',
  title: 'Foo Fighters Live Image 1',
  concert_id: c2.id,
)
Image.create!(
  image_url:
    'https://www.nme.com/wp-content/uploads/2019/08/FOOFIGHTERS_9884_JF-1024x663.jpg',
  title: 'Foo Fighters Live Image 2',
  concert_id: c2.id,
)
Image.create!(
  image_url:
    'https://www.nme.com/wp-content/uploads/2019/08/FOOFIGHTERS_0148_JF.jpg',
  title: 'Foo Fighters Live Image 3',
  concert_id: c2.id,
)
Image.create!(
  image_url:
    'https://www.3aw.com.au/wp-content/uploads/sites/12/2022/02/3aw-foo-fighters-getty-1200x800.jpg',
  title: 'Foo Fighters Live Image 4',
  concert_id: c2.id,
)


# create concert_comments
puts 'Creating Concert Comments'
ConcertComment.create!(
  text_comment:
    'Fun concert, got to go back stage and met a new bass player who is willing to jam.',
  concert_id: c1.id,
)

ConcertComment.create!(
  text_comment:
    'RIP Taylor Hawkins',
  concert_id: c2.id,
)

puts 'Finalizing seed data...'
puts '✅ Seeding done!'
