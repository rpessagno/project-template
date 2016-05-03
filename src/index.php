<?php include_once('inc/header.php'); ?>

<div class="wrapper">

  <h1>Heading 1</h1>

  <h2>Heading 2</h2>

  <h3>Heading 3</h3>

  <h4>Heading 4</h4>

  <h5>Heading 5</h5>

  <h6>Heading 6</h6>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis temporibus quos alias est facere placeat, saepe nobis qui repellendus, animi nesciunt quod consequatur quisquam omnis laudantium distinctio ullam neque!</p>
  
  <ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus assumenda placeat atque, fugit numquam nisi magnam perferendis nemo labore ipsam, quidem, libero vitae. Iure saepe esse libero nam tempora accusamus.</li>
    <li>Nesciunt qui, sapiente fugit magni accusantium, eveniet consequatur, dolore harum odio maiores expedita neque rem reiciendis. Sed dicta quidem esse iste fugit minus omnis libero eum dolorem, deleniti impedit quia!</li>
    <li>Fuga, vitae nihil accusamus molestias delectus ut iusto incidunt iste, tempora esse, facere facilis dolorum ab natus aut suscipit fugiat cupiditate ipsum nemo enim veritatis saepe quis excepturi eligendi. Eos.</li>
  </ul>

  <ol>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi accusamus delectus illum possimus, iusto voluptas. Ducimus illum non dolore reprehenderit? Adipisci consequatur unde fuga sequi quaerat, nemo autem porro.</li>
    <li>Sunt laudantium, inventore. Labore sunt facere ab tenetur adipisci, unde. Consequatur dolorum est expedita adipisci atque sint labore dolor, cumque ratione unde doloribus aliquid pariatur fugit, ex eos harum incidunt.</li>
    <li>Quia quis magnam iste, quisquam itaque, possimus voluptate distinctio, ab cumque, sunt at! Reprehenderit facere harum inventore, illum earum minima doloremque voluptates ipsam ipsa nam? Excepturi odio cupiditate quia aut!</li>
  </ol>

  <form class="form">
    <div class="form-field">
      <label>Input (text)</label>
      <input type="text">
    </div>
    <div class="form-field">
      <label>Input (password)</label>
      <input type="password">
    </div>
    <div class="form-field">
      <label>Input (email)</label>
      <input type="email">
    </div>
    <div class="form-field">
      <label>Input (tel)</label>
      <input type="tel">
    </div>
    <div class="form-field">
       <label>Text Area</label>
      <textarea rows="5"></textarea>
    </div>
    <div class="form-field">
      <label>Select</label>
      <select required>
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
  
</div>

<?php include_once('inc/footer.php'); ?>