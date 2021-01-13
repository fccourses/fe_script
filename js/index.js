class Button {
  constructor() {}
  createButton() {}
}

class IOSButton extends Button {
  constructor() {}
  createButton() {
    /* realization */
  }
}

class WinButton extends Button {
  constructor() {}
  createButton() {
    /*  */
  }
}

class UnixButton extends Button {
  constructor() {}
  createButton() {
    /*  */
  }
}

class UIFactory {
  createButton() {}
}

class IOSUIFactory extends UIFactory {
  createButton() {
    return new IOSButton();
  }
}

class UnixUIFactory extends UIFactory {
  createButton() {
    return new UnixButton();
  }
}

class Programm {
  render(OS) {
    this._uiFactory = new UIFactory();
    switch (OS) {
      case 'win': {
        this._uiFactory = new WinUIFactory();
      }
      case 'unix': {
        this._uiFactory = new UnixUIFactory();
      }
      case 'ios': {
        this._uiFactory = new IOSUIFactory();
      }
    }
    const button = this._uiFactory.createButton();
  }
}
