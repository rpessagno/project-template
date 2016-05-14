<?php include_once('inc/header.php'); ?>

<div class="wrapper">

  <section class="section body-copy">

    <h1>Heading 1</h1>

    <h2>Heading 2</h2>

    <h3>Heading 3</h3>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis temporibus quos alias est facere placeat, saepe nobis qui repellendus, animi nesciunt quod consequatur quisquam omnis laudantium distinctio ullam neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis temporibus quos alias est facere placeat, saepe nobis qui repellendus, animi nesciunt quod consequatur quisquam omnis laudantium distinctio ullam neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis temporibus quos alias est facere placeat, saepe nobis qui repellendus, animi nesciunt quod consequatur quisquam omnis laudantium distinctio ullam neque.</p>

    <p>Consectetur adipisicing elit. Esse perferendis temporibus quos alias est facere placeat, saepe nobis qui repellendus, animi nesciunt quod consequatur quisquam omnis laudantium distinctio ullam neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis temporibus quos alias est facere placeat, saepe nobis qui repellendus, animi nesciunt quod consequatur quisquam omnis laudantium distinctio ullam neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis temporibus quos alias est facere placeat, saepe nobis qui repellendus, animi nesciunt quod consequatur quisquam.</p>

    <h4>Unordered List</h4>
    
    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipisicing elit</li>
      <li>Minus assumenda placeat atque</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus assumenda placeat atque, fugit numquam nisi magnam perferendis nemo labore ipsam, quidem, libero vitae. Iure saepe esse libero nam tempora accusamus.</li>
      <li>Nesciunt qui, sapiente fugit magni accusantium, eveniet consequatur, dolore harum odio maiores expedita neque rem reiciendis. Sed dicta quidem esse iste fugit minus omnis libero eum dolorem, deleniti impedit quia!</li>
      <li>Fuga, vitae nihil accusamus molestias delectus ut iusto incidunt iste, tempora esse, facere facilis dolorum ab natus aut suscipit fugiat cupiditate ipsum nemo enim veritatis saepe quis excepturi eligendi. Eos.</li>
    </ul>

    <h4>Ordered List</h4>

     <ol>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipisicing elit</li>
      <li>Minus assumenda placeat atque</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus assumenda placeat atque, fugit numquam nisi magnam perferendis nemo labore ipsam, quidem, libero vitae. Iure saepe esse libero nam tempora accusamus.</li>
      <li>Nesciunt qui, sapiente fugit magni accusantium, eveniet consequatur, dolore harum odio maiores expedita neque rem reiciendis. Sed dicta quidem esse iste fugit minus omnis libero eum dolorem, deleniti impedit quia!</li>
      <li>Fuga, vitae nihil accusamus molestias delectus ut iusto incidunt iste, tempora esse, facere facilis dolorum ab natus aut suscipit fugiat cupiditate ipsum nemo enim veritatis saepe quis excepturi eligendi. Eos.</li>
    </ol>

    <h3>Scroll Animation</h3>

    <p class="animate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis temporibus quos alias est facere placeat, saepe nobis qui repellendus, animi nesciunt quod consequatur quisquam omnis laudantium distinctio ullam neque.</p>

    <h3>Videos</h3>

    <h4>Vimeo</h4>

    <iframe src="//player.vimeo.com/video/89527215?title=0&amp;byline=0&amp;portrait=0" class="video-player" width="900" height="506" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

    <h4>YouTube</h4>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/2YBtspm8j8M" frameborder="0" allowfullscreen></iframe>

    <h3>Form</h3>
    <p><a href="http://www.the-art-of-web.com/html/html5-form-validation/" target="_blank">Form Validation Examples</a></p>
    <form class="form">
      <div class="form-field">
        <label>Input (text)</label>
        <input type="text" value="" class="form-input">
      </div>
      <div class="form-field">
        <label>Input (text)</label>
        <input type="text" value="" class="form-input" required pattern=".{4,}" title="Requires at least 4 characters" placeholder="Requires at least 4 characters">
      </div>
      <div class="form-field">
        <label>Input (password)</label>
        <input type="password" value="" class="form-input" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be at least 8 characters and contain at least one number and one uppercase and lowercase letter">
      </div>
      <div class="form-field">
        <label>Input (email)</label>
        <input type="email" value="" class="form-input" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Please provide a valid email" placeholder="Requires a valid email">
      </div>
      <div class="form-field">
        <label>Input (tel)</label>
        <input type="tel" value="" class="form-input">
      </div>
      <div class="form-field">
         <label>Text Area</label>
        <textarea rows="5" value="" class="form-input"></textarea>
      </div>
      <div class="form-field">
        <label>Select</label>
        <select required value="" class="form-input">
          <option disabled selected>Please select one</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div class="form-field">
        <label for="checkbox1"><input type="checkbox" name="checkbox" value="value1" id="checkbox1">Checkbox 1</label>
        <label for="checkbox2"><input type="checkbox" name="checkbox" value="value2" id="checkbox2">Checkbox 2</label>
        <label for="checkbox3"><input type="checkbox" name="checkbox" value="value3" id="checkbox3">Checkbox 3</label>
      </div>
      <div class="form-field">
        <label for="radio1"><input type="radio" name="radio" value="value1" id="radio1">Radio 1</label>
        <label for="radio2"><input type="radio" name="radio" value="value2" id="radio2">Radio 2</label>
        <label for="radio3"><input type="radio" name="radio" value="value3" id="radio3">Radio 3</label>
      </div>
      <div class="form-field">
        <input type="submit" value="Submit">
      </div>
    </form>

  </section>
  
</div>

<?php include_once('inc/footer.php'); ?>