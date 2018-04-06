import { AUTOCOMPLETE_OFF, DynamicFormControlLayout, serializable } from '@ng-dynamic-forms/core';
import { DsDynamicInputModel, DsDynamicInputModelConfig } from '../ds-dynamic-input.model';

export const DYNAMIC_FORM_CONTROL_TYPE_TAG = 'TYPETAG';

export interface DynamicTagModelConfig extends DsDynamicInputModelConfig {
  authorityClosed: boolean;
  authorityMetadata: string;
  authorityName: string;
  authorityScope: string;
  minChars: number;
  value?: any;
}

export class DynamicTagModel extends DsDynamicInputModel {
  @serializable() authorityClosed: boolean;
  @serializable() authorityMetadata: string;
  @serializable() authorityName: string;
  @serializable() authorityScope: string;
  @serializable() minChars: number;
  @serializable() value: any[];
  @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_TAG;

  constructor(config: DynamicTagModelConfig, layout?: DynamicFormControlLayout) {

    super(config, layout);

    this.autoComplete = AUTOCOMPLETE_OFF;
    this.authorityClosed = config.authorityClosed;
    this.authorityMetadata = config.authorityMetadata;
    this.authorityName = config.authorityName;
    this.authorityScope = config.authorityScope;
    this.minChars = config.minChars;
    const value = config.value || [];
    this.valueUpdates.next(value)
  }

}
