'use babel';

import { CompositeDisposable } from 'atom';

export default {

    subscriptions: null,
    active: false,
    panes: [],

    activate(state) {
        this.subscriptions = new CompositeDisposable();

        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'atom-presentation-mode:toggle': () => this.toggle()
        }));

        this.subscriptions.add(atom.workspace.observePanes(
            (pane) => this.handleNewPane(pane))
        );
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    serialize() {
        return {};
    },

    handleNewPane(pane) {
        this.panes.push(pane);

        if (this.active) {
            atom.views.getView(pane).querySelector('.tab-bar').classList.add('hidden-tab');
        }
    },

    toggle() {
        this.active = !this.active;

        var treeViewPkg = atom.packages.getActivePackage("tree-view");

        if (this.active) {
            if (!atom.packages.isPackageDisabled("tree-view")) {
                atom.packages.disablePackage("tree-view");
            }

            if (!atom.isFullScreen()) {
                atom.toggleFullScreen();
            }
        } else {
            if (atom.packages.isPackageDisabled("tree-view")) {
                atom.packages.enablePackage("tree-view");
            }

            if (atom.isFullScreen()) {
                atom.toggleFullScreen();
            }
        }

        var currentPanes = [];

        for (var i = 0; i < this.panes.length; i++) {
            if (this.panes[i].alive != false) {
                currentPanes.push(this.panes[i]);
                atom.views.getView(this.panes[i]).querySelector('.tab-bar').classList.toggle('hidden-tab');
            }
        }

        this.panes = currentPanes;

        console.log('AtomPresentationMode was toggled! ' + this.active);
        return this.active;
    }

};
