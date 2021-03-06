# ![atom-presentation-mode-header](logo/atom-presentation-mode-header.png)

A package that adds a toggle to enter a presentation mode.

### What is a "presentation mode"?
Atom is a fantastic markdown renderer (you can render a markdown file that is open in Atom with `ctrl-shit-m`) and using that functionality you can use it to generate some great looking presentation slides that looks something like a Powerpoint presentation. What this package does is clean everything up around Atom, hiding the tree view, hiding the tabs, and entering full screen mode to make it look as clean as possible when using Atom in this manner.

### Why?
I am not great Powerpoint and it is much easier and quicker to write markdown or even HTML files that can be rendered as markdown that still look very good.

## How to use Presentation Mode
Open all the tabs you would like to have in your presentation and order them how you would like to go through them. Select your first slide and then enter presentation mode with the keyboard shortcut or via the "Packages" menu at the top. You can cycle through the open panes with the keyboard shortcuts listed below.

### Keyboard shortcuts
- Toggle: `ctrl-alt-\`
- Next pane: `ctrl-alt-space`
- Previous pane: `crtl-alt-shift`

## FAQ
##### My tree view did not come back up when I left Presentation Mode. Why?
A: I know. It is unfortunate but I have not figured out how to solve that yet. The only way I could find to hide it properly was to disable it and then re-enable it when you leave presentation mode. When enabled it does not show by default. You can toggle it back into view with `ctrl-\`.

## Credits
- [gianmarcotoso](https://atom.io/users/gianmarcotoso) for making [atom-hide-tabs](https://atom.io/packages/atom-hide-tabs) which I somewhat based parts of this code off of and was using in my cobbled together version of being able to do this before making this.
