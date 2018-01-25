<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <link rel="stylesheet" href="assets/css/main.css" /> -->
  <!-- <link rel="stylesheet" href="assets/lib/bootstrap-4/dist/css/bootstrap-reboot.min.css"> -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/animate.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i">
  <link rel="stylesheet" href="assets/css/md-css.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <title>Portfolio Perso</title>
  <script src="https://unpkg.com/vue"></script>
  <!-- <script src="assets/js/accueil.vue" type="accueil"></script> -->
</head>
<body>
  <div id="portfolio" class="render">
    <section v-bind:class="'container-fluid '+layout_general">
      <div class="row">
        <aside v-bind:class="'layout-general ' +  layout_aside">
          <div class="">
            <h1 class="">Go to second layout</h1>
            <h3>Quick</h3>
            <button type="button" class="btn btn-primary btn-lg">Large button</button>
          </div>
        </aside>
        <section class="col layout-general">
          <!-- <li v-for="(item, index) in markdown">
          <button v-if="index !== 'index'" v-on:click="display_doc(index.index)">{{ index.content }}</button>
        </li> -->
      </section>

      </div>
    </section>
  </div>
  <footer>
    <script type="text/javascript" src="assets/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/marked@0.3.6"></script>
    <script src="https://unpkg.com/lodash@4.16.0"></script>
    <script type="text/javascript" src="assets/js/script.js"></script>
  </footer>
</body>
</html>