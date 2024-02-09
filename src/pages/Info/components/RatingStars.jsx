import "../../../assets/css/info/RatingStars.css";

export default function RatingStars() {
  return (
    <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" />
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" />
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" />
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" />
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" />
      <label title="text" for="star1"></label>
    </div>
  );
}
