<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />

<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />

<!-- Icons -->
<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/assets/images/global/favicon.ico" type="image/x-icon">
<link rel="icon" href="<?php bloginfo('template_directory'); ?>/assets/images/global/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/assets/images/global/touch-icon.png">

<!-- App -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="application-name" content="App Short Name" />
<meta name="apple-mobile-web-app-title" content="App Full Name">
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
