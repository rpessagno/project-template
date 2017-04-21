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

<!-- Open Graph | 1200 x 628 -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:title" content="Page Title" />
<meta property="og:url" content="http://example.com/" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="<?php bloginfo('template_directory'); ?>/assets/images/social/open-graph.jpg" />

<!-- Twitter | 1024 x 512 -->
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@twitterhandle">
<meta name="twitter:title" content="Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:creator" content="@twitterhandle">
<meta name="twitter:image:src" content="<?php bloginfo('template_directory'); ?>/assets/images/social/twitter.jpg">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
