
100.times do
  Menu.create(
    dish: Faker::Food.dish,
    description: Faker::Hipster.sentence,
    price: Faker::Commerce.price.to_f,
    )
  end
