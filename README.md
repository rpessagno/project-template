#Project Template

A starter template for my workflow, consisting of Gulp, Browsersync, Sass, PHP, jQuery, and more.

Things I use as part of this workflow:

- [Node.js](https://nodejs.org/) (5.6.0)
- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- [Homebrew](http://brew.sh/)
- [npm](https://docs.npmjs.com/getting-started/installing-node) (3.8.3)
- [Sass](http://sass-lang.com/install) (3.4.13)
- [MAMP](https://www.mamp.info/en/downloads/)
- [GitHub Desktop](https://desktop.github.com/)
- [SublimeText](http://www.sublimetext.com/3) / [Package Control](https://packagecontrol.io/installation)
- [jQuery](http://jquery.com/) + Plugins
  - [FastClick](https://github.com/ftlabs/fastclick)
  - [FitVids.js](https://github.com/davatron5000/FitVids.js)
  - [Waypoints](http://imakewebthings.com/waypoints/)
  - [Browser-Update](http://www.browser-update.org/)

##Setup

###SublimeText

Packages:

- Emmet
- jQuery
- jQuery Snippets pack
- JSLint
- SublimeLinter
- SCSS
- SublimeLinter-contrib-scss-lint
- SublimeLinter-contrib-eslint

User Settings (Optional):

```
{
  "color_scheme": "Packages/User/SublimeLinter/OneDark (SL).tmTheme",
  "font_size": 12,
  "ignored_packages":
  [
    "Vintage"
  ],
  "selectionBackground": "ff0000",
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "word_wrap": true,
  "wrap_width": 120
}
```

###MAMP

I use MAMP to create virtual hosts and have nice local URLs, such "local.domain.com," and so I can view any project in a browser without having to run a build first. Browsersync will still open the current project at **localhost:3000**.

Add entry to hosts file:

> /private/etc/hosts

```
127.0.0.1     local.[domain].com
```

Add virtual host info to:

> /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

```
<VirtualHost *:80>
  DocumentRoot "/Users/[user]/[path]/[folder]"
  ServerName local.[domain].com
</VirtualHost>
```

Settings:

- Apache Port: 80
- Nginx Port: 8080
- MySQL Port: 3306

###New Project

- Download, unzip, and rename the project-template folder
- In **package.json**, edit the `name`, `version`, `repository url`, and `license`
- In **gulpfile.js**, change the `domainName` variable to your domain name
- Run `npm install`

##Build

- Launch MAMP
- Run `gulp dev` to build the project
- `gulp clean` can be used to delete target folder

