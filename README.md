# Project Template

A starter template for my workflow, consisting primarily of WordPress, Gulp, Browsersync, Sass, and jQuery.

- [WordPress](https://wordpress.org/)
- [Node.js](https://nodejs.org/) (5.6.0)
- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- [Homebrew](http://brew.sh/)
- [npm](https://docs.npmjs.com/getting-started/installing-node)
- [Sass](http://sass-lang.com/install)
- [MAMP](https://www.mamp.info/en/downloads/)
- [GitHub Desktop](https://desktop.github.com/)
- [SublimeText](http://www.sublimetext.com/3) / [Package Control](https://packagecontrol.io/installation)
- [jQuery](http://jquery.com/)
- [FastClick](https://github.com/ftlabs/fastclick)
- [Waypoints](http://imakewebthings.com/waypoints/) (2.0.5)
- [Slick](http://kenwheeler.github.io/slick/)

## Setup

### SublimeText

Packages:

- Emmet
- JSLint
- SublimeLinter
- SCSS
- SublimeLinter-contrib-scss-lint
- SublimeLinter-contrib-eslint
- One Dark Material - Theme

User Settings:

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
  "wrap_width": 180
}
```

### MAMP

Allow MAMP to use virtual hosts by opening the following file:

> /Applications/MAMP/conf/apache/httpd.conf

And remove the comment on the line under `# Virtual hosts` to look like this:

```
# Virtual hosts
Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
```

To create a virtual host, add an entry to your hosts file:

> /private/etc/hosts

```
127.0.0.1     local.[domain].com
```

Then point to where your files are located in:

> /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

```
<VirtualHost *:80>
  DocumentRoot "/Users/[user]/[path]/[folder]"
  ServerName local.[domain].com
</VirtualHost>
```

Make sure MAMP settings look like this:

- Apache Port: 80
- Nginx Port: 8080
- MySQL Port: 3306


### New Project

- Download, unzip, and rename the project-template folder
- In **package.json**, edit the `name` and `version`
- In **gulpfile.js**, edit the `domainName` and `theme` variables
- Run `npm install`

## Build

- Launch MAMP
- Run `gulp dev` to build the project

