// W117

// doc controller comments
// Methods used by menuLink and menuToggle directives
this.isOpen = isOpen;
this.isSelected = isSelected;
this.toggleOpen = toggleOpen;
this.autoFocusContent = false;


    // actual Methods
    function isOpen(section) {
        return menu.isSectionSelected(section);
    }
    // and manufactory
    isSectionSelected: function(section) {
         return self.openedSection === section;
       }

    function toggleOpen(section) {
        menu.toggleSelectSection(section);
    }
    // and manufactory
    toggleSelectSection: function(section) {
      self.openedSection = (self.openedSection === section ? null : section);
    }
    // and manufactory
    function isSelected(page) {
        return menu.isPageSelected(page);
    }
    isPageSelected: function(page) {
       return self.currentPage === page;
     }
