export class SuperAppView {

  routeConfig;
  appContext;

  activate(params, routeConfig, navigationInstruction) {
    this.routeConfig = routeConfig;
    let fragment = navigationInstruction.fragment.split('/');
    this.id = (fragment.length > 1) ? fragment[1] : false;

    if (this.appContext && this.appContext.__docFlow) this.appContext.__docFlow.get(this.bizDocType, this.id);
  }

  bind(context, overrideContext) {
    this.appContext = overrideContext.parentOverrideContext ? overrideContext.parentOverrideContext.bindingContext : context;
    this.bizDoc = this.appContext.bizDoc || {};
    this.bizDoc.type = this.routeConfig.title;
    this.bizDoc.text = '';
    this.bizDoc.href = '';
    this.bizDoc.hrefText = '';
  }

  attached() {
    if (this.appContext && this.appContext.__docFlow) this.appContext.__docFlow.get(this.bizDocType, this.id);
  }
}
