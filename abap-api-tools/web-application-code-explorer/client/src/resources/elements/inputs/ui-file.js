import {
  customElement,
  bindable,
  bindingMode
} from 'aurelia-framework';
import {
  UIUtils
} from '../../utils/ui-utils';
import {
  filetypes
} from '../../data/filetypes';

@customElement('ui-file')
export class UIFileInput {
  static FILE_IMAGES = 'png,jpg,jpeg,tiff';
  static FILE_DOCS = 'doc,docx,xls,xlsx,ppt,pptx,csv,rtf,txt,pdf';

  __input;
  __files = [];
  __dragging = false;

  @bindable fileTypes = '';
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) files = [];
  @bindable upload;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) preview = true;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) autoload = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) title = 'Drop files here or click to browse';

  static inject = [Element];

  constructor(element) {
    this.element = element;
    if (this.element.hasAttribute('auto-width')) this.element.classList.add('ui-auto');
    if (this.element.hasAttribute('label-top')) this.element.classList.add('ui-label-top');
    if (this.element.hasAttribute('label-hide')) this.element.classList.add('ui-label-hide');
  }

  attached() {
    // remove label if empty
    if (this.__label && /^\s*$/.test(this.__label.textContent)) {
      this.__label.parentElement.removeChild(this.__label);
    }
    this.__input.draggedFiles = this.__files;
  }

  __dragEnter($event) {
    this.__dragging = true;
    $event.preventDefault();
    return false;
  }

  __dragExit($event) {
    this.__dragging = false;
  }

  __drop($event) {
    this.__dragging = false;
    $event.preventDefault();

    this.__files = this.__fileListToArray($event.dataTransfer.files);
  }

  __fileChoose() {
    this.__files = this.__fileListToArray(this.__input.files);
  }

  __remove(index) {
    this.__files.splice(index, 1);
  }

  __fileListToArray(fileList) {
    let files = [];
    for (let file of fileList) {
      let f = {
        file: file,
        name: file.name,
        ext: filetypes[file.type] || 'txt',
        size: file.size || 0,
        url: URL.createObjectURL(file),
        description: '',
        icon: UIUtils.mimeTypeIcon(file.type)
      };
      files.push(f);
    }
    this.files = files;
    return files;
  }

  filesChanged() {
    if (this.files && this.files.length === 0) this.__files = [];
    if (this.autoload && this.__files && (this.__files.length > 0)) setTimeout(() => this.__upload(), 200);
  }

  __upload() {
    if (typeof this.upload === 'function') this.upload();
  }
}
