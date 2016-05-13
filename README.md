#Project Template

- [Node.js](https://nodejs.org/)
- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- [Homebrew](http://brew.sh/)
- [npm](https://docs.npmjs.com/getting-started/installing-node)
- [Sass](http://sass-lang.com/install)
- [MAMP](https://www.mamp.info/en/downloads/)
- [GitHub Desktop](https://desktop.github.com/)
- [SublimeText](http://www.sublimetext.com/3)
- [Package Control](https://packagecontrol.io/installation)

##SublimeText

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
	"color_scheme": "Packages/User/SublimeLinter/Mac Classic (SL).tmTheme",
	"font_size": 12,
	"tab_size": 2,
  "translate_tabs_to_spaces": true,
	"word_wrap": true,
	"wrap_width": 120
}

```

##MAMP

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

##Setup

- Edit info in package.json
- In gulpfile.js, change domain name in proxy settings under the **watch** task to "local.[domain].com"
- Run `npm install`

##Build

- Launch MAMP
- Run `gulp dev` to build project
- Run `gulp clean` to delete target folder

