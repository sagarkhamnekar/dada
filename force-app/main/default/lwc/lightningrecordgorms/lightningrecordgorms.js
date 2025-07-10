import { LightningElement, api } from 'lwc';

export default class EditContactForm extends LightningElement {
    @api recordId; // This will be passed from parent or App Builder
}
