puts '🌱 Seeding data...'

puts '🗑 Destroying old data...'
User.destroy_all
Concert.destroy_all
Image.destroy_all
Video.destroy_all
ConcertSummary.destroy_all

# create users
puts 'Creating users...'
u1 = User.create!(username: 'test', password_digest: 'test')

# create concerts
puts 'Creating concerts...'
c1 =
  Concert.create!(
    # user_id: u1,
    band: 'Red Hot Chili Peppers',
    venue: 'Globe Life Field',
    location: 'Arlington, TX',
    date: '09/18/2022',
  )
c2 =
  Concert.create!(
    # user_id: u1,
    band: 'Red Hot Chili Peppers',
    venue: 'SoFi Stadium',
    location: 'Inglewood, CA',
    date: '09/08/2022',
  )
c3 =
  Concert.create!(
    # user_id: u1,
    band: 'Red Hot Chili Peppers',
    venue: 'Nationals Park',
    location: 'Washington, D.C.',
    date: '07/31/2022',
  )

# create videos
puts 'Creating videos'
Video.create!(
  video_url: 'https://www.youtube.com/watch?v=Gcbk4PK9GHI',
  title: 'Red Hot Chili Peppers Live 1',
  concert_id: c1.id,
)
Video.create!(
  video_url: 'https://www.youtube.com/watch?v=wer7Fv8EhRg',
  title: 'Red Hot Chili Peppers Live 2',
  concert_id: c1.id,
)
Video.create!(
  video_url: 'https://www.youtube.com/watch?v=EeoYtmBTbLM',
  title: 'Red Hot Chili Peppers Live 2004',
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
  concert_id: c2.id,
)

# create concert_summaries
puts 'Creating Concert Summaries'
ConcertSummary.create!(
  text_summary:
    'Fun concert, got to go back stage and met a new bass player who is willing to jam.',
  concert_id: c1.id,
)

puts 'Finalizing seed data...'
puts '✅ Seeding done!'
