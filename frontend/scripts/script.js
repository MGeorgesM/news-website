const cardsContainer = document.getElementById('cards-container');

const populateRestaurantCard = (restaurant) => {
    let favoriteIconClass = 'fa-regular';
    if (currentUser) {
      isFavorite = currentUser.favoriteRestaurants.includes(restaurant.name);
      favoriteIconClass = isFavorite ? 'fa-solid' : 'fa-regular';
    }
  
    cardsContainer.innerHTML += `<div class="card flex center box-shadow off-white-bg">
                                  <img src="/assets/card-img.jpg" alt="restaurant-img">
                                  <div class="card-footer flex center space-between">
                                      <p class="card-text">${restaurant.name} - ${restaurant.location}</p>
                                      <i class="remove-restaurant fa-regular hidden fa-square-minus"></i>
                                      <i class="add-to-favorites ${favoriteIconClass} fa-star"></i>
                                  </div>
                                  </div>`;
  };
  
  const populateRestaurantsCards = (restaurants) => {
    cardsContainer.innerHTML = '';
    for (let i = 0; i < restaurants.length; i++) {
      populateRestaurantCard(restaurants[i]);
    }
    restaurantsCardsText = document.querySelectorAll('.card-text');
    addToFavoritesBtns = document.querySelectorAll('.add-to-favorites');
    adminDeleteBtns = document.querySelectorAll('.remove-restaurant');
  };