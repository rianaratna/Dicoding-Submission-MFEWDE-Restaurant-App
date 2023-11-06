const DrawerInitiator = {
    init({
        menuButton, closeButton, drawer, menuList,
    }) {
        $(menuButton).on('click', (event) => {
            this._toggleDrawer(event, drawer);
            this._addtabIndexAtContentInsideDrawer(event, menuList, closeButton);
        });

        $(closeButton).on('click', (event) => {
            this._closeDrawer(event, drawer);
            this._removetabIndexAtContentInsideDrawer(event, menuList, closeButton);
        });

        $(menuList).on('click', (event) => {
            this._closeDrawer(event, drawer);
            this._removetabIndexAtContentInsideDrawer(event, menuList, closeButton);
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        $(drawer).addClass('open');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        $(drawer).removeClass('open');
    },

    _addtabIndexAtContentInsideDrawer(event, menuList, closeButton) {
        event.stopPropagation();
        $(menuList).removeAttr('tabindex');
        $(closeButton).removeAttr('tabindex');
    },

    _removetabIndexAtContentInsideDrawer(event, menuList, closeButton) {
        event.stopPropagation();
        $(menuList).attr('tabindex', '-1');
        $(closeButton).attr('tabindex', '-1');
    },
};

export default DrawerInitiator;
