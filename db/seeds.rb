puts '🌱 Seeding data...'

puts '🗑 Destroying old data...'
User.destroy_all
Band.destroy_all
Venue.destroy_all
Concert.destroy_all
Image.destroy_all
Video.destroy_all
ConcertSummary.destroy_all

# create users
puts 'Creating users...'
puts
u1 = User.create!(username: 'test1', password_digest: 'test1')

# create bands
puts 'Creating bands...'
puts
b1 = Band.create!(name: 'Red Hot Chili Peppers')
b2 = Band.create!(name: 'Twenty One Pilots')
b3 = Band.create!(name: 'Sleep Token')
b4 = Band.create!(name: 'Run The Jewels')
b5 = Band.create!(name: 'Veil Of Maya')

# create venues
puts 'Creating venues...'
puts
v1 = Venue.create!(name: 'Globe Life Field', location: 'Arlington, TX')
v2 = Venue.create!(name: 'SoFi Stadium', location: 'Inglewood, CA')
v3 = Venue.create!(name: 'Nationals Park', location: 'Washington, D.C.')

# create concerts
puts 'Creating concerts...'
puts
c1 = Concert.create!(user_id: u1,band_id: b1, venue_id: v1, date: '09/18/2022')
c2 = Concert.create!(user_id: u1,band_id: b1, venue_id: v1, date: '09/08/2022')
c3 = Concert.create!(user_id: u1,band_id: b1, venue_id: v1, date: '07/31/2022')

# create videos
puts 'Creating videos'
puts
Video.create!(
  video_url: 'https://www.youtube.com/watch?v=Gcbk4PK9GHI',
  description: 'Red Hot Chili Peppers Live 1',
  concert_id: c1
)
Video.create!(
    video_url: 'https://www.youtube.com/watch?v=wer7Fv8EhRg',
    description: 'Red Hot Chili Peppers Live 2',
    concert_id: c1
  )
Video.create!(
    video_url: 'https://www.youtube.com/watch?v=EeoYtmBTbLM',
    description: 'Red Hot Chili Peppers Live 2004',
    concert_id: c2
  )

# create images
puts 'Creating Images'
puts
Image.create!(
    image_url: 'https://cbsnews1.cbsistatic.com/hub/i/2014/02/03/0d66193c-d106-4307-a78d-6bd5e570e39e/ap619869246035.jpg',
    band_name: 'Red Hot Chili Peppers',
    concert_id: c1
)
Image.create!(
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Rhcp-live-pinkpop05.jpg',
    band_name: 'Red Hot Chili Peppers',
    concert_id: c1
)
Image.create!(
    image_url: 'https://www.rollingstone.com/wp-content/uploads/2019/03/10056498g.jpg',
    band_name: 'Red Hot Chili Peppers',
    concert_id: c2
)

# create concert_summaries
puts 'Creating Concert Summaries'
puts 
ConcertSummary.create!(
    text_summary: 'Fun concert, got to go back stage and met a new bass player who is willing to jam.',
    concert_id: c1
)

puts 'Finalizing seed data...'
sleep 2
puts '✅ Seeding done!'
