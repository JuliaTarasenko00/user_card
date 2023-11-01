import img from './img/user_img.jpg';

const section = document.getElementById('card_user');

const div = document.createElement('div');

const wrapper_img = document.createElement('div');
wrapper_img.className = 'wrapper_img';

const img_user = document.createElement('img');
img_user.src = `${img}`;
img_user.alt = 'User photo';
img_user.width = '300';

const wrapper_response = document.createElement('div');
wrapper_response.className = 'wrapper_response';

const rating = document.createElement('div');
rating.className = 'rating';

const rating_items = document.createElement('div');
rating_items.className = 'rating_items';

for (let i = 5; i >= 1; i -= 1) {
  const input = document.createElement('input');
  input.className = 'rating_item';
  input.value = i;
  input.id = `rating_${i}`;
  input.type = 'radio';

  if (input.value === '4') {
    input.checked = 'true';
  }

  const label = document.createElement('label');
  label.className = 'rating_label';
  label.for = `rating_${i}`;

  rating_items.appendChild(input);
  rating_items.appendChild(label);
}

const name_user = document.createElement('h3');
name_user.textContent = 'Sasha Pallag';
name_user.className = 'name_user';

const data_add_response = document.createElement('p');
data_add_response.textContent = 'Apr 2, 2023';
data_add_response.className = 'data_add_response';

const user_response = document.createElement('p');
user_response.className = 'user_response';
user_response.textContent =
  'This was such a good purchase! I initially thought it would be refurbished, but it actually came brand new and in the original packaging. If you’re purchasing it for your child ( as I did ), know that the IOS is up to date. I had to return the last tablet purchased due to the IOS not being updated. All in all I highly recommend this iPad';

const button = document.createElement('button');
button.type = 'button';
button.textContent = 'more';
button.className = 'button_details';

button.addEventListener('click', () => {
  if (user_response.classList.contains('details_response')) {
    user_response.classList.remove('details_response');
    button.textContent = 'more';
  } else {
    user_response.classList.add('details_response');
    button.textContent = 'hide';
  }
});

wrapper_img.appendChild(img_user);
wrapper_response.appendChild(rating);
rating.appendChild(rating_items);
wrapper_response.appendChild(name_user);
wrapper_response.appendChild(data_add_response);
wrapper_response.appendChild(user_response);
wrapper_response.appendChild(button);

div.appendChild(wrapper_img);
div.appendChild(wrapper_response);

section.appendChild(div);
